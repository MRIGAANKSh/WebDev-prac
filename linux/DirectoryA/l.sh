#!/bin/bash

if [[ $# -ne 3 ]]; then
echo "enter more input input is missing"
fi

i=$1
o=$2
k=$3

paste -d- "$i" "$o" >"$k"

echo "done "
