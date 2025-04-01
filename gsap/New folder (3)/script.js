function breaktext() {
    var h1 = document.querySelector("h1");
    var text = h1.textContent;
    var splitText = text.split("");
    var half=Math.floor(splitText.length/2)
    var clutter = "";
    splitText.forEach(function (char,idx) {
        if(idx<half){
            clutter += `<span class="a">${char}</span>`;
        }
        else{
            clutter += `<span class="b">${char}</span>`;
        }
        
    });

    h1.innerHTML = clutter;
}

breaktext();

gsap.from("h1 .a", {
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3
});


gsap.from("h1 .b", {
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: -0.3
});

