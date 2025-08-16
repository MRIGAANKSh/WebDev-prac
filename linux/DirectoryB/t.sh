#!/bin/bash

if [[ $# -ne 1 ]]; then
echo "input dir nme"
fi

dir=$1

if [[ ! -d $dir ]]; then
echo "the dir given is not a directory"
fi

tar -czf backup.tar.gz -C "$dir" $(find "$dir" -maxdepth 1 -type f -name "*.txt" -printf "%f\n")

echo "done backup"

