#!/bin/bash
set -e
echo "I'm trying to uninstall the docker image of this project"
echo "Please wait!"
docker image rm bensonirah/bensonirah-io:latest
echo "Image successful removed"
echo "Finally remove the project root manually"