let btn=document.getElementById("btn");

let h=document.getElementById("h");

let c=0;
btn.addEventListener("click",()=>{
c++;
h.innerHTML=c;
})

const counter=a();
counter();
counter();
counter();
x=0
function a(x){
    return (x)=>{
        x++;
        console.log(x);

    }
}