let loader = gsap.timeline();
loader.fromTo(
    '.loader-logo__inner',
    {y: "0", WebkitMaskPosition: '0px 0vh',},
    {y: "-48vh", WebkitMaskPosition: '0px 48vh', duration: 1.5, ease: "power4.inOut"},
);
