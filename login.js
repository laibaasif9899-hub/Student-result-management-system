let tl = gsap.timeline();

tl.from(".login-card",{

    y:150,

    opacity:0,

    duration:1.2

})

.from("#title",{

    x:-150,

    opacity:0,

    duration:1

})

.from(".form-control",{

    x:100,

    opacity:0,

    stagger:.25

})

.from("#loginBtn",{

    scale:0,

    duration:.5

});

gsap.to(".c1",{

    y:30,

    repeat:-1,

    yoyo:true,

    duration:4

});

gsap.to(".c2",{

    y:-30,

    repeat:-1,

    yoyo:true,

    duration:5

});

gsap.to(".c3",{

    x:20,

    repeat:-1,

    yoyo:true,

    duration:3

});