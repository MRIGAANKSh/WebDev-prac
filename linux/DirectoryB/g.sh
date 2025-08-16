#!/bin/bash
n=$1

if [[ $n -gt 0 ]]; then
    echo "positive number"
else
    echo "negative"
    n=$((-1 * n))
fi

echo "$n"
echo "script ending soon"


