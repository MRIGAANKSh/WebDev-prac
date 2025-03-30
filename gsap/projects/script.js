var main=document.querySelector("#main");
var image=document.querySelector("#image");
var cursor=document.querySelector("#cursor");

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease:"back.out(1.7)"
    })
})

image.addEventListener("mouseenter",function(){
    cursor.innerHTML="view more"
    gsap.to(cursor,{
        scale:5,
        backgroundColor:"#ffffff4b"
        
    })
})

image.addEventListener("mouseleave",function(){
    cursor.innerHTML=""
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"#fff"
        
    })
})