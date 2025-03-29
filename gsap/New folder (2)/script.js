var intialpath=`M 10 80 Q 250 10 490 80`
var intp=`M 10 100 Q 500 100 990 100`

var finalp=`M 10 100 Q 500 100 990 100`


var string=document.querySelector("#string");
string.addEventListener("mousemove",function(dets){
    path=`M 10 100 Q ${dets.x} ${dets.y} 990 100`

    gsap.to("svg path",{
        attr:{d:path},
        duration:0.3,
        ease:'power3.out',
        
    })
})

string.addEventListener("mouseleave",function(){
    
    gsap.to("svg path",{
        attr:{d:finalp},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })
})