import Particles from "react-tsparticles";

const App = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 144,
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
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
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        particles: {
          color: {
            value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"],
          },
          links: {
            enable: true,
            distance: 150,
            color: "#808080",
            opacity: 0.4,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            enable: true,
            speed: 5,
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
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          opacity: {
            value: 1,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          shape: {
            type: ["circle"],
            stroke: {
              width: 0,
              color: "#fff",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png",
              width: 100,
              height: 100,
            },
          },
          size: {
            value: 8,
            random: true,
            anim: {
              enable: false,
              speed: 10,
              size_min: 10,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default App;
