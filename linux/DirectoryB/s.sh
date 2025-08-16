#!/bin/bash

n=$1

if [[ $n -gt 0 ]]; then
echo "positive"
else
n=$((n**2))
echo "$n"
fi
echo "done"

