let loader = gsap.timeline();
loader.to(
    '.ll-center__mask',
    {y: "100%", duration: 1.5, ease: "power4.inOut"},
);
loader.to(
    '.loader-logo__embed.fill',
    {y: "-100%", duration: 1.5, ease: "power4.inOut"},
    -1.5
);
