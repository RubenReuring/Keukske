let loader = gsap.timeline();
loader.fromTo(
    '.loader-inner',
    {opacity: '0',},
    {opacity: "100", duration: .3, ease: "power2.inOut"},
);
loader.fromTo(
    '.ll-center__mask',
    {y: '100%',},
    {y: "0%", duration: 2, ease: "power4.inOut"},
);
loader.fromTo(
    '.loader-logo__embed.fill',
    {y: "-100%",},
    {y: "0%", duration: 2, ease: "power4.inOut"},
    0
);
loader.fromTo(
    '.lcw-title__inner',
    {y: '100%',},
    {y: "0%", duration: .7, ease: "power4.inOut"},
    .9
);
loader.fromTo(
    '.lcw-tag__inner',
    {y: '100%',},
    {y: "0%", duration: .7, ease: "power4.inOut"},
    1
);
loader.fromTo(
    '.loader',
    {y: '0%',},
    {y: "-100%", duration: 1, ease: "power4.inOut"},
    1.75
);
