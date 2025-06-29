 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.to(".hero-image img",{
    clipPath: "polygon(100% 0, 100% 57%, 100% 100%, 0 100%, 0 59%, 0 0, 47% 0)",
  })

  gsap.from(".navbar",{
    y: -200,
    opacity: 0,
    duration: 2
  })

  gsap.from(".hero-content h1",{
    y: 200,
    opacity: 0,
    duration: 3,
    delay: 2,
  })
  gsap.from(".hero-content p",{
    y: 200,
    opacity: 0,
    duration: 3,
    delay: 5,
  })
 });