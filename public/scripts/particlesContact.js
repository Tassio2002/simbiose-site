tsParticles.load("tsparticles", {
  fpsLimit: 60,
  background: {
    color: "transparent",
  },
  fullScreen: {
    enable: false,
  },
  interactivity: {
    events: {
      onClick: { enable: true, mode: "push" },
      onHover: {
        enable: true,
        mode: "repulse",
        parallax: { enable: false, force: 60, smooth: 10 },
      },
      resize: true,
    },
    modes: {
      push: { quantity: 4 },
      repulse: { distance: 200, duration: 0.4 },
    },
  },
  particles: {
    color: { value: "#09AFF4" },
    move: {
      direction: "none",
      enable: true,
      outModes: "out",
      random: true,
      speed: 13,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 300,
    },
    opacity: {
      animation: {
        enable: false,
        speed: 0.05,
        sync: true,
        startValue: "max",
        count: 1,
        destroy: "min",
      },
      value: {
        min: 0,
        max: 0.5,
      },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 0.5, max: 3 },
    },
  },
});
