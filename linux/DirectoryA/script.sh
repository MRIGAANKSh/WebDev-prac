#!/bin/bash

if [ $# -ne 2 ]; then
echo "Usage files are missig"
fi

i=$1
o=$2

sed 's/ /,/g' "$i" > "$o"

echo "done changes"



