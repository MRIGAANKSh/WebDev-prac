document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("wheel", function (dets) {
        if (!gsap.isTweening(".marque")) {  // Prevent animation stacking
            if (dets.deltaY > 0) {
                gsap.to(".marque", {
                    xPercent: -100, // Moves the element left
                    repeat: -1,
                    duration: 4,
                    ease: "none"
                });
            } else {
                gsap.to(".marque", {
                    xPercent: 100, // Moves the element right
                    repeat: -1,
                    duration: 2,
                    ease: "none"
                });
            }
        }
    });
});
