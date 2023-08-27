particlesJS("particles-js", {
    particles: {
      number: {
        value: 100, // Number of particles
        density: {
          enable: true,
          value_area: 800, // Adjust this to control particle density
        },
      },
      color: {
        value: "#ff0000", // Particle color
      },
      shape: {
        type: "edge", // Particle shape
        stroke: {
          width: 0,
          color: "#000000",
        },
      },
      opacity: {
        value: 0.75, // Particle opacity
        random: true,
      },
      size: {
        value: 3, // Particle size
        random: true,
      },
      move: {
        enable: true,
        speed: 2, // Particle speed
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 100, // Controls how far particles move away on hover
        },
        push: {
          particles_nb: 4, // Number of particles to push on click
        },
        remove: {
          particles_nb: 2, // Number of particles to remove on click
        },
      },
    },
    retina_detect: true,
  });
  