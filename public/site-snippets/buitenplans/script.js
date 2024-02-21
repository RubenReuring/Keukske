let loader = gsap.timeline();
loader.fromTo(
    '.ll-center__mask',
    {y: '100%',},
    {y: "0%", duration: 1.5, ease: "power4.inOut"},
);
loader.fromTo(
    '.loader-logo__embed.fill',
    {y: "-100%",},
    {y: "0%", duration: 1.5, ease: "power4.inOut"},
    0
);
