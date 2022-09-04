#!/bin/bash
set -e
echo "I'm trying to uninstall the docker image of this project"
echo "Please wait!"
docker container ls |grep bensonirah |awk -F' ' '{print $1}' |xargs docker container stop
docker image rm bensonirah/bensonirah-io:latest
echo "Image successful removed"
echo "Remove the project root folder manually"
