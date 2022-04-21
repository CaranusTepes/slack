import Particles from "react-tsparticles";
import "./particles.css"

const App = () => {
  const particlesInit = (main) => {
    console.log(main);
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
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            bounce: false,
            outModes: "out",
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
          },
          size: {
            value: 8,
            random: true,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default App;
