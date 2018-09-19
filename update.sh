#!/bin/bash

find . -type d -maxdepth 1 -exec git --git-dir={}/.git --work-tree=$PWD/{} pull origin master \;

cd contact/;
nodemon server/server.js &
sleep 5
webpack -d --watch &
sleep 2
cd ..;

cd info/;
nodemon server/index.js &
sleep 5
webpack -d --watch &
sleep 2
cd ..;

cd navsearch/;
nodemon server/server.js &
sleep 5
webpack -d --watch &
sleep 2
cd ..;

cd nearbyPlaces/;
nodemon server/index.js &
sleep 5
webpack -d --watch &
sleep 2
cd ..;

cd reviews/;
nodemon server/server.js &
sleep 5
webpack -d --watch &
sleep 2
cd ..;

cd search/;
nodemon server/index.js &
sleep 5
webpack -d --watch &
sleep 2
cd ..;