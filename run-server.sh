#!/bin/bash

echo "Starting the server to background"

nohup su nodeuser -c "node server.js" &

