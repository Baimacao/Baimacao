// It's only been a month but I am absolutely loving every bit of GSAP. Have only discovered a bit but look to continue learning and creating cool stuff with GSAP

gsap.registerPlugin(Flip);

const state = Flip.getState(document.querySelectorAll(".shape"));

function animate() { Array.from(document.querySelectorAll(".shape")).map((el) =>
    el.classList.remove("inactive")
  );

  Flip.from(state, {
    stagger: 0.05,
    duration: 1,
    ease: "power2.in",
    spin: true,
    repeat: -1,
  });
}
animate();