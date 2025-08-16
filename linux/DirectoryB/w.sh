#!/bin/bash

if [[ $# -lt 1 ]]; then
echo "line:$0"
fi

line="$*"
echo "$line" | sed 's/ /,/g'

