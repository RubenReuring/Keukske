let loader = gsap.timeline();
loader.fromTo(
    '.loader-logo__inner',
    {y: "48vh", WebkitMaskPosition: '0px -48vh',},
    {y: "0vh", WebkitMaskPosition: '0px -0vh', duration: 1.5, ease: "power4.inOut"},
);
