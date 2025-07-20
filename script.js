// Select the custom cursor and blur cursor elements
let cursor = document.querySelector("#cursor");
let cursorBlur = document.querySelector("#cursor-blur");

// Move the cursor and blur based on the mouse position
document.addEventListener("mousemove", function (dets) {
  // Move the main cursor slightly offset from the actual mouse position
  cursor.style.left = dets.x - 12 + "px";
  cursor.style.top = dets.y - 12 + "px";

  // Move the blur cursor, offset further to create a trailing blur effect
  cursorBlur.style.left = dets.x - 250 + "px";
  cursorBlur.style.top = dets.y - 250 + "px";
});

// Select all h4 and h3 tags inside the navbar
let navH4 = document.querySelectorAll("#navbar h4, #navbar h3");

// Add hover animation effects on navbar items
navH4.forEach(function (elem) {
  // On hover: enlarge cursor, make background transparent, show white border
  elem.addEventListener("mouseenter", function () {
    cursor.style.scale = 2;
    cursor.style.backgroundColor = "transparent";
    cursor.style.border = "1px solid #fff";
  });

  // On mouse leave: reset cursor to original style
  elem.addEventListener("mouseleave", function () {
    cursor.style.scale = 1;
    cursor.style.border = "0px solid #95C11E";
    cursor.style.backgroundColor = "#95C11E";
  });
});

// Animate navbar on scroll: changes background and height
gsap.to("#navbar", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#navbar",
    scroller: "body",
    // markers:true, // Uncomment for debugging scroll position
    start: "top -10%",
    end: "top -11%",
    scrub: 1, // Smooth transition based on scroll
  },
});

// Animate background of the main section on scroll
gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 1,
  },
});

// Animate about section elements (images and text) from below with fade-in
gsap.from("#about-us img,#about-us-info", {
  y: 90,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

// Optional animation for cards section (currently commented out)
/*
gsap.from(".card", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#cards-container",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
*/

// Animate food and drink section from below with fade-in effect
gsap.from("#food-drink img,#food-drink-text", {
  y: 110,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#food-drink",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 3,
  },
});

// Animate first quote box moving up and left into view
gsap.from("#qoute1", {
  y: -80,
  x: -80,
  scrollTrigger: {
    trigger: "#qoute1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 50%",
    scrub: 4,
  },
});

// Animate second quote box moving down and right into view
gsap.from("#qoute2", {
  y: 80,
  x: 80,
  scrollTrigger: {
    trigger: "#qoute1", // shares trigger with quote1
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 50%",
    scrub: 4,
  },
});

// Animate page 4 heading from below into view
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});
