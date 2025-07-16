let cursor = document.querySelector("#cursor");
let cursorBlur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x - 12 + "px";
  cursor.style.top = dets.y - 12 + "px";
  cursorBlur.style.left = dets.x - 250 + "px";
  cursorBlur.style.top = dets.y - 250 + "px";
});

let navH4 = document.querySelectorAll("#navbar h4, #navbar h3");

navH4.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    cursor.style.scale = 2;
    cursor.style.backgroundColor = "transparent";
    cursor.style.border = "1px solid #fff";
  });
  elem.addEventListener("mouseleave", function () {
    cursor.style.scale = 1;
    cursor.style.border = "0px solid #95C11E";
    cursor.style.backgroundColor = "#95C11E";
  });
});

gsap.to("#navbar", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#navbar",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

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

// gsap.from(".card", {
//   y: 90,
//   opacity: 0,
//   duration: 1,
//   scrollTrigger: {
//     trigger: "#cards-container",
//     scroller: "body",
//     // markers:true,
//     start: "top 70%",
//     end: "top 65%",
//     scrub: 1,
//   },
// });

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

gsap.from("#qoute2", {
  y: 80,
  x: 80,
  scrollTrigger: {
    trigger: "#qoute1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 50%",
    scrub: 4,
  },
});

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
