// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)
gsap.registerPlugin(ScrollTrigger);

function hoverEffect() {
  const main = document.querySelector("#main");
  const cursor = document.querySelector("#cursor");
  const main2 = document.querySelector("#main5");
  const cursor2 = document.querySelector("#cursor2");


// intro cursor effect

  main.addEventListener("mousemove", function (event) {
    gsap.to(cursor, {
      x: event.x,
      y: event.y,
    });
  });
  main.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      opacity: 1,
    });
  });
  main.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      opacity: 0,
    });
  });


  // second cursor effect



  main2.addEventListener("mousemove", function (event) {
    gsap.to(cursor2, {
      x: event.x,
      y: event.y,
    });
  });
  main2.addEventListener("mouseenter", function () {
    gsap.to(cursor2, {
      opacity: 1,
      rotation:0,
    });
  });
  main2.addEventListener("mouseleave", function () {
    gsap.to(cursor2, {
      opacity: 0,
      rotation:15,
    });
  });

}
hoverEffect();

function rejoiceIntro() {
  gsap.from(".content h1 span",{
    y:300,
    stagger:0.1,
    duration:1,
    opacity:0,
    delay:3,
    ease:"power"
  })
}

gsap.from("#contentup", {
  y: 120,
  duration: 1,
  opacity:0,
  scrollTrigger: {
    trigger: "#main2",
    start: "top center",
    end: "top center",
    scrub:1,
  },
});

gsap.from("#desc",{
    y:120,
    duration:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#main2",
        start:"20% center",
        end: "bottom bottom",
        scrub:1,
    },
});
gsap.from("#contentup2", {
  y: 120,
  duration: 1,
  opacity:0,
  scrollTrigger: {
    trigger: "#main4",
    start: "top 80%",
    end: "10% center",
    scrub:1,
  },
  
});
gsap.from("#contentup3", {
  y: 120,
  duration: 1,
  opacity:0,
  scrollTrigger: {
    trigger: "#main6",
    start: "top 80%",
    end: "top 50%",
    scrub:1,
  },
  
});

gsap.from("#desc3", {
  y: 120,
  duration: 1,
  opacity:0,
  scrollTrigger: {
    trigger: "#main6",
    start: "top 60%",
    end: "top 30%",
    scrub:1,
  },
  
});

gsap.from("#desc2",{
    y:120,
    duration:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#main4",
        start:"top center",
        end: "40% center",
        scrub:1,
    },
});
gsap.from("#secondtag",{
    y:20,
    duration:0.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#main3",
        start:"top center",
        end: "top top",
        scrub:1,
    },
});


// swiper js --------------------------------------------

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  freeMode: true,
  autoplay: {
    delay: 1300,
    disableOnInteraction: true,
  },
});



const time = gsap.timeline();

time.from(".loader h3",{
  x:50,
  opacity:0,
  stagger:0.2,
  duration:1,
})
time.to(".loader h3",{
  x:-50,
  opacity:0,
  stagger:0.2,
  duration:1,
})
rejoiceIntro();
time.to(".loader",{
  opacity:0,
  display:"none",
})

gsap.to(".roundvid svg",{
  rotation:50,
  scrub:true,
})
gsap.from("#Team",{
  y:20,
  duration:0.5,
  opacity:0,
  scrollTrigger:{
      trigger:"#main7",
      start:"70% center",
      end: "70% 40%",
      scrub:1,
  },
});

// gsap.fromTo("#main8 .bg", {
//   backgroundPosition: () => i ? `50% ${-window.innerHeight * getRatio("#main8")}px` : "50% 0px"
// }, {
//   backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio("#main8"))}px`,
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#main8",
//     start: () => i ? "top bottom" : "top top", 
//     end: "bottom top",
//     scrub: true,
//     invalidateOnRefresh: true // to make it responsive
//   }
// });

const menuBar = document.querySelector(".menu");
const menuBtn = document.getElementById("menubtn");
const close = document.getElementById("close");
const mencontent = document.querySelector(".mencontent");
menuBtn.addEventListener("click",()=>{
  
gsap.to(menuBar,{
  height:"72%",
  display:"block",
  duration:0.8,
})
gsap.to(mencontent,{
  display:"block",
  opacity:1,
  scale:1,
  delay:0.5,
})
})

close.addEventListener("click",()=>{
  gsap.to(mencontent,{
    opacity:0,
    display:"none",
    
  })
  gsap.to(menuBar,{
    height:"0",
    display:"none",
    duration:0.3,
    delay:0.5,
  })
})