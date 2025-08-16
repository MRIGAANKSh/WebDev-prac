#!/bin/bash

#deleting certai char from file using sed is the best way ok mrigaank sharma 

#f=$1

#sed '/mrigaank/d' "$f"
#echo "done deleting"



#f=$1
#sed '1i\Hello mrigaank sharma gud bye' "$f"
#sed '$a\this is the appended line' "$f"
#echo "done the work"


f=$1
#sed 's/thama/*****/g' "$f"
sed 's/bye/sss/g' "$f"
echo "done replacing"

