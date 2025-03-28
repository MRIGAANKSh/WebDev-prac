gsap.to(" #page1 #box",{
    scale:0,
    duration:3,
    delay:1,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2 ",
        scroller:"body",
        markers:true,
        scrub:2,
        pin:true,
       
        

    }
})


gsap.from(" #page2 #box",{
    scale:0,
    duration:3,
    delay:1,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2 ",
        scroller:"body",
        markers:true,
        start:"top 60%",
        
        scrub:2,
        pim:true,

    }
})

