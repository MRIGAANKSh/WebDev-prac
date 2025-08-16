
#!/bin/bash

#mkdir -p Directory{A..E}/{test,train,split}
#touch Directory{A..E}/{test,train,split}/{Readme.md,data.yml}

for directory in Directory{A..E}; do
for i in {test,train,split}; do
mkdir -p "$directory/$i"
touch "$directory/$i/Readme.md"
touch "$directory/$i/metdata.yml"
done
done

