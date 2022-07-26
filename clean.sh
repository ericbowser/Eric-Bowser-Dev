#!/usr/bin/env bash

echo "Running script to remove node_modules and delete package-lock.json"

if [ -f 'package-lock.json' ]
then
  rm package-lock.json
else
  echo "package-lock.json does not exist"
fi
if [ -d 'node_modules' ]
then
  rm node_modules/ -R
else 
  echo "node_modules dir does not exist"
fi
echo "done"
