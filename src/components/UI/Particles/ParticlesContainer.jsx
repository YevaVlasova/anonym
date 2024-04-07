import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import "./ParticlesContainer.scss";

function ParticlesContainer() {
    async function loadParticles(main) {
        await loadFull(main)
    }

    return (
        <Particles
            className='particles'
            id='tsparticles' 
            init={loadParticles} 
            options={{
                "particles": {
                  "number": {
                    "value": 100,
                    "density": {
                      "enable": true,
                      "value_area": 600
                    }
                  },
                  "color": {
                    "value": "#ffffff"
                  },
                  "shape": {
                    "type": "circle",
                    "stroke": {
                      "width": 0,
                      "color": "#ffffff"
                    },
                    "polygon": {
                      "nb_sides": 3
                    },
                  },
                  "opacity": {
                    "value": 1,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 1,
                      "opacity_min": 0.5,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 1,
                    "random": true,
                    "anim": {
                      "enable": true,
                      "speed": 0.5,
                      "size_min": 2,
                      "sync": true
                    }
                  },
                  "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                  }
                },
                "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                    "onhover": {
                      "enable": true,
                      "mode": "repulse"
                    },
                    "onclick": {
                      "enable": true,
                      "mode": "push"
                    },
                    "resize": true
                  },
                  "modes": {
                    "repulse": {
                      "distance": 60,
                      "duration": 0.4
                    },
                    "push": {
                      "particles_nb": 1
                    },
                  }
                },
                "retina_detect": true
              }} 
        />
    );
};

export default ParticlesContainer;