let loader = gsap.timeline();
loader.to(
    '.loader-inner',
    {y: "48vh", maskPosition: '0px -48vh', duration: .8, ease: "power4.inOut"},
);
