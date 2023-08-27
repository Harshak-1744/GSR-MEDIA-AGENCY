// Animation using GSAP
gsap.from(".login-form", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power2.out"
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Simulate a login request
    // Replace this with your actual login logic

    // Successful login animation
    gsap.to(".login-form", {
        duration: 0.5,
        opacity: 0,
        y: -50,
        ease: "power2.in",
        onComplete: function () {
            // Redirect to the dashboard or another page upon successful login
            window.location.href = "dashboard.html";
        }
    });
});
