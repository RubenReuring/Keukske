/// GSAP Link Hover
//let text = new SplitText(".link-paragraph", {type: "chars"});

// $(".link12-12-sb-test").each(function () {
//     let innerText = $(this).find(".link-paragraph").children();
//     $(this).find(".link-paragraph").children().each(function () {
//             let innerLetter = $(this).text();
//             $(this).wrapInner("<span class='link-paragraph__inner--visible' style='display: inline-block; position: relative;'></span>");
//             $('<span class="link-paragraph__inner--hidden" style="display: inline-block; position: absolute; left: -100%;">' + innerLetter + "</span>").appendTo($(this));
//         });
//
//     let hoverText = $(this).find('.link-paragraph').children();
//     $(hoverText).each(function () {
//         let linkAnimation = gsap.to(this.children, {
//             x: "+=100%",
//             paused: true,
//             ease: "power1.inOut",
//             //duration: 0.2,
//             stagger: {
//                 amount: .065,
//             },
//         });
//
//         $(this)
//             .parents(".link12-12-sb-test")
//             .on("mouseenter", function () {
//                 linkAnimation.play();
//             });
//         $(this)
//             .parents(".link12-12-sb-test")
//             .on("mouseleave", function () {
//                 linkAnimation.reverse();
//             });
//     });
// });

// $(".link12-12-sb").each(function () {
//     let hoverText = $(this).children();
//     $(hoverText).each(function () {
//         let linkAnimation = gsap.to(this.children, {
//             y: "-=100%",
//             paused: true,
//             ease: "power1.inOut",
//             duration: 0.35,
//             stagger: {
//                 amount: 0.175,
//             },
//         });
//         $(this)
//             .parents(".link12-12-sb")
//             .on("mouseenter", function () {
//                 linkAnimation.play();
//             });
//         $(this)
//             .parents(".link12-12-sb")
//             .on("mouseleave", function () {
//                 linkAnimation.reverse();
//             });
//     });
// });
