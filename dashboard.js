let t1= gsap.timeline();
t1.from(".sidebar",{
    x:250,
    duration:1
})
.from(".topbar",{
    y:-80,
    opacity:0,
    duration:1
})
.from(".dashboard-card",{
    y:80,
    opacity:0,
    stagger:.2

})
.from("table",{
    opacity:0,
    y:60
});
