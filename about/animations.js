// Animate the team members using GSAP
gsap.from(".team-member", {
    opacity: 0,
    y: 50,
    stagger: 0.2, // Add a stagger effect
    duration: 1.5,
    ease: "power3.out" // You can change the easing function
});
