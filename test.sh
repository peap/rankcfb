#!/bin/sh

NODE_BIN=./node_modules/.bin
# Mocha (express app tests)
NODE_ENV=test $NODE_BIN/mocha --reporter spec app/tests

# Karma (angular app tests)
NODE_ENV=test $NODE_BIN/karma start

# Protractor (end-to-end tests)
NODE_ENV=test npm start &> /dev/null &
SERVER_PID=$!
sleep 5
$NODE_BIN/protractor
kill $SERVER_PID && echo "Killed npm server" || echo "Failed to kill server ($SERVER_PID)"
