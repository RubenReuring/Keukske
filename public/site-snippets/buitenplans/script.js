let loader = gsap.timeline();
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
    {y: '105%',},
    {y: "0%", duration: .5, ease: "power4.inOut"},
    .9
);
loader.fromTo(
    '.lcw-tag__inner',
    {y: '105%',},
    {y: "0%", duration: .5, ease: "power4.inOut"},
    1
);
