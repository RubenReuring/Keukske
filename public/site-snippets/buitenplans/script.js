let loader = gsap.timeline();
loader.fromTo(
    '.loader__inner',
    {opacity: '0',},
    {opacity: "1", duration: .4, ease: "power2.inOut"},
);
loader.fromTo(
    '.ll-center__mask',
    {y: '100%',},
    {y: "0%", duration: 2, ease: "power4.inOut"},
    .7
);
loader.fromTo(
    '.loader-logo__embed.fill',
    {y: "-100%",},
    {y: "0%", duration: 2, ease: "power4.inOut"},
    .7
);
loader.fromTo(
    '.loader__inner',
    {opacity: '1',},
    {opacity: "0", duration: .35, ease: "ease.inOut"},
);
loader.fromTo(
    '.loader',
    {y: '0%',},
    {y: "-100%", duration: 1.2, ease: "power4.inOut"},

);

