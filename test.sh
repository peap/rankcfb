#!/bin/sh

# Mocha (express app tests)
NODE_ENV=test mocha --reporter spec app/tests

# Karma (angular app tests)
NODE_ENV=test karma start

# Protractor (end-to-end tests)
NODE_ENV=test npm start &> /dev/null &
NPM_PID=$!
sleep 5
protractor
kill $NPM_PID && echo "Killed npm server" || echo "Failed to kill server ($NPM_PID)"
