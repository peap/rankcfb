#!/bin/sh

NODE_ENV=test mocha --reporter spec app/tests
NODE_ENV=test karma start
