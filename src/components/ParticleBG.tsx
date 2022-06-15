import React, { FC } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useAppSelector } from "../app/hooks";
import { selectTheme } from "../features/theme/themeSlice";
import EthLogo from "../assets/img/eth3.svg";

const ParticleBG: FC = () => {
  const theme = useAppSelector(selectTheme);
  const darkColor = theme == "dark" ? "#000000" : "#ffffff";
  const lightColor = theme == "dark" ? "#ffffff" : "#000000";
  const particlesInit = async (main: any) => {
    //console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = async (container: any) => {
    //console.log(container);
  };

  /**
   * id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: darkColor,
            },
          },
          fullScreen: {
            zIndex: -3,
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: lightColor,
            },
            links: {
              color: lightColor,
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
   */

  /**
     * id='tsparticles'
        detectRetina: false,
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "bubble"
            },
            resize: true
          },
          modes: {
            bubble: {
              distance: 40,
              duration: 2,
              opacity: 8,
              size: 6,
              speed: 3
            }
          }
        },
        particles: {
          color: {
            value: "#ff0000",
            animation: {
              enable: true,
              speed: 20,
              sync: true
            }
          },
          lineLinked: {
            blink: false,
            color: "random",
            consent: false,
            distance: 30,
            enable: true,
            opacity: 0.3,
            width: 0.5
          },
          move: {
            attract: {
              enable: false,
              rotate: {
                x: 600,
                y: 1200
              }
            },
            bounce: false,
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 0.5,
            straight: false
          },
          number: {
            density: {
              enable: false,
              area: 2000
            },
            limit: 0,
            value: 200
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.05,
              speed: 2,
              sync: false
            },
            random: false,
            value: 1
          },
          shape: {
            type: "circle"
          },
          size: {
            animation: {
              enable: false,
              minimumValue: 0.1,
              speed: 40,
              sync: false
            },
            random: true,
            value: 1
          }
        },
        polygon: {
          draw: {
            enable: true,
            lineColor: "rgba(255,255,255,0.2)",
            lineWidth: 0.3
          },
          move: {
            radius: 10
          },
          inlineArrangement: "equidistant",
          scale: 0.5,
          type: "inline",
          url: "https://particles.js.org/images/smalldeer.svg"
     */
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            background: {
                color: {
                  value: darkColor,
                },
              },
              fullScreen: {
                zIndex: -3,
              },
          detectRetina: false,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "bubble"
              },
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 40,
                duration: 2,
                opacity: 8,
                size: 6,
              }
            }
          },
          particles: {
            color: {
              value: lightColor,
              animation: {
                enable: true,
                speed: 20,
                sync: true
              }
            },
            lineLinked: {
              blink: false,
              color: lightColor,
              consent: false,
              distance: 30,
              enable: true,
              opacity: 0.3,
              width: 0.5
            },
            move: {
              attract: {
                enable: false,
                rotate: {
                  x: 600,
                  y: 1200
                }
              },
              bounce: false,
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: true,
              speed: 0.5,
              straight: false
            },
            number: {
              density: {
                enable: false,
                area: 2000
              },
              limit: 0,
              value: 200
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.05,
                speed: 2,
                sync: false
              },
              random: false,
              value: 1
            },
            shape: {
              type: "circle"
            },
            size: {
              animation: {
                enable: false,
                minimumValue: 0.1,
                speed: 40,
                sync: false
              },
              random: true,
              value: 1
            }
          },
          polygon: {
            draw: {
              enable: true,
              lineColor: "rgba(255,255,255,0.2)",
              lineWidth: 0.3
            },
            move: {
              radius: 10
            },
            inlineArrangement: "equidistant",
            scale: 0.5,
            type: "inline",
            url: EthLogo
          }
        }}
      />
    </>
  );
};

export default ParticleBG;
