const lenis = new Lenis({
    smooth: true,
    lerp: 0.04,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);

gsap.to("#moon", {
    scale: 2.5,
    duration: 6,
    ease: "power2.inOut"
});

gsap.to("#deadpool_name_D", {
    rotation: "-10deg", 
    duration: 3.5,
    yoyo: true,
    repeat: -1,
});

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page2",
        start: "top top",
        end: "70% top",
        scrub: 2
    }
});

tl.from("#deadpool_stanging", {
    scale: 3.5,
    x: "2.5%"
}, "V");

tl.from("#moving", {
    y: "-100%"
}, "V");

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page2",
        start: "80% 50%",
        end: "300% bottom",
        scrub: 8,
        pin: "#page2"
    }
});

tl2.from("#cover_car", {
    x: "150%",
    ease: "power2.inOut"
});

tl2.to("#moving", {
    x: "-150%",
    ease: "power2.inOut"
});

tl2.to("#cover_car", {
    x: "-150%",
    ease: "power2.inOut"
});

tl2.from("#shooter", {
    transform: "rotate(60deg)",
    delay: 0.5,
    opacity: 0,
    ease: "power2.inOut"
});

tl2.from("#spark", {
    opacity: 0,
    ease: "power2.inOut"
});

tl2.from("#bullet", {
    opacity: 0,
    ease: "power2.inOut"
});

tl2.to("#bullet", {
    x: 1300,
    scale: 1.5,
    ease: "power2.inOut"
});

tl2.from("#crack", {
    opacity: 0,
    delay: -0.5,
    scale: 1.5,
    ease: "power2.inOut"
});

tl2.addPause("+=0.5");

gsap.from("#dolonda", {
    scrollTrigger: {
        trigger: "#page3",
        start: "top top",
        end: "60% bottom",
        scrub: 4
    },
    scale: 5.5
});

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page3",
        start: "90% 60%",
        end: "150% bottom",
        scrub: 4,
        pin: "#page3",
        markers: false,
    }
});

tl3.from("#bottom_text", {
    y: "100%",
    delay: 0.75,
    ease: "circ.Out"
});

tl3.from("#dog", {
    x: 1000,
    delay: 0.75,
    ease: "circ.Out"
}, "sa");

tl3.from("#bomb", {
    x: 1000,
    delay: 0.75,
    ease: "circ.Out"
}, "sa");

tl3.addPause("+=1.5");

tl3.to("#splash img", {
    opacity: 1,
});

tl3.to("#splash img", {
    scale: 2.5,
    delay: 1,
    duration: 10,    
    ease: "circ.Out",
});

tl3.to("#splash img", {
    scale:1,
    onComplete: () => {
        tl4.play();
    }
});

tl3.addPause("+=1");

var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page4",
        start: "100% top",
        end: "110% bottom",
        scrub: 4,
        pin: "#page3",
        markers: false,
    },
    paused: true
});

tl4.to("#page4", {
    scale:1,
    opacity: 1,
});

tl4.from("#dolondaleta", {
    scale: 0.5,
    ease: "power4.inOut"
});

tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page5",
        start: "90% bottom",
        end: "100% top",
        pin: true,
        scrub: true,
        markers: false,
    }
});

tl5.from(".gif", {
    x: 1000,
    opacity: 0,
    stagger: 1.5,
    duration: 2,
    ease: "power2.inOut"
});

tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page6",
        start: "90% bottom", 
        end: "100% top",
        pin: true,
        scrub: true,
        markers: false
    }
});

tl6.from(".comic", {
    x: 1000,
    opacity: 0,
    stagger: 1.5,
    duration: 2,
    ease: "power2.inOut"
});

tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page7",
        start: "top top",
        end: "70% top",
        scrub: true,
        markers: false,
    }
});

tl7.from("#lastdeadpool", {
    scale: 2.5,
    y:-100,
    ease: "power2.inOut"
});
