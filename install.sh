#!/bin/bash
set -e

CLONE_DIR=bensonirah_portfolio
git clone https://github.com/bensonirah/b.randrianarison.git $CLONE_DIR

cd $CLONE_DIR

docker build -t bensonirah/bensonirah-io .

docker run -it --rm -p 3000:3000 -d bensonirah/bensonirah-io

echo "Open your web browser and go to: http://localhost:3000"