#!/bin/bash

if [[ $# -eq 1 ]]; then
n=$1
#for i in "$n"; do 
#echo "$i"
#done 

for((j=0;j<${#n};j++))do
echo "${n:$j:1}"
done

fi
echo "done dna done"
