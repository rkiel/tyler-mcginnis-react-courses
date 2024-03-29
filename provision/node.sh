#!/usr/bin/env bash

echo "Installing node"

echo "  updating"
apt-get update >/dev/null 2>&1

echo "setup for Node 4"
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -

echo "  installing node.js"
apt-get install -y nodejs >/dev/null 2>&1

echo "  installing npm"
apt-get install -y npm >/dev/null 2>&1

echo "  installing gcc make build-essential"
apt-get install -y gcc make build-essential

echo "  installing yarn"
npm install -g yarn >/dev/null 2>&1

echo "  purging npm modules"
rm -rf ~/.npm /vagrant/node_modules

echo "node installed"
