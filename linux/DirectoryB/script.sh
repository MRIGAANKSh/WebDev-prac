#!/bin/bash

if [[ $# -ne 1 ]]; then
echo "give me word bro"
fi

name=$1

echo ${name}
echo ${#name}

echo ${name:0:3}


echo ${name^^}

echo "done"
