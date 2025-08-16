BEGIN{
FS=","
}
NR==1{
next
}
{
if($1 =="Toyota"){
print $1,"->",$4
}
}
END{
print "done dna done"
}
