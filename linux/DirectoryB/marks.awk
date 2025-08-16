BEGIN{
}
{
total=$2+$3+$4
print $1"->"total
}
END{
}
