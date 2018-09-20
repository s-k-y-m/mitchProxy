let express = require('express');

let app = express();
let parser = require('body-parser');
let db = require('../info/db/index.js');

app.use(parser.json());

let port = process.env.port || 3000;

app.use(express.static('./public'));

app.get('/restaurants/info/*', (req, res) => {
  console.log("GET Request on " + req.url);
  var dbId = req.url.slice(18);
  db.findOne(dbId, (err, data) => {
    if (err) {
      res.status(405).send("error");
      res.end();
    } else {
      res.status(200).send(data);
      res.end();
    }
  });
});

app.get('/restaurants/all', (req, res) => {
  console.log("GET Request on " + req.url);
  db.getAll((err, data) => {
    if (err) {
      res.status(404).send("error");
      res.end();
    } else {
      res.status(200).send(data);
      res.end();
    }
  });
});


app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
