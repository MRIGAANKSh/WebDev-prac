var root=document.getElementById("root")
var a=document.createElement("h1")
a.innerHTML="mrigaank sharma"
var btn=document.getElementById("btn")

btn.addEventListener("click",function(){
    root.appendChild(a)
})