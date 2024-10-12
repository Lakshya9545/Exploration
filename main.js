gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        start: "top top",
        end: "+=300%",
        scrub: 1,
        snap: {
          snapTo: 1 / 2,
          duration: { min: 0.2, max: 0.3 },
          delay: 0
        }
      }
    });

    tl.from(".start1 h1", {
      scale: 0,
      opacity: 0,
      duration: 0.5
    })
    .to(".container", {
      x: "-200vw",
      ease: "none",
      duration: 2
    });

    //Section 2
    function adjustFontSize() {
      const vw = window.innerWidth;
      document.documentElement.style.setProperty('--responsive-font-size', `clamp(2rem, ${vw * 0.1}px, 15rem)`);
    }

    window.addEventListener('resize', adjustFontSize);
    adjustFontSize();

    if (!window.gsap || !window.ScrollTrigger) {
        console.error("GSAP or ScrollTrigger not loaded correctly.");
      } else {
        console.log("GSAP and ScrollTrigger loaded successfully.");
        
        gsap.registerPlugin(ScrollTrigger);
  
        function splitTextIntoWords(element) {
          const words = element.textContent.split(' ');
          element.innerHTML = '';
          words.forEach(word => {
            const span = document.createElement('span');
            span.classList.add('word');
            span.textContent = word;
            element.appendChild(span);
            element.appendChild(document.createTextNode(' '));
          });
        }

        document.querySelectorAll('.animate-text').forEach(textElement => {
          splitTextIntoWords(textElement);
          
          gsap.fromTo(textElement.querySelectorAll('.word'), 
            { opacity: 0, y: 50 },
            { 
              opacity: 1, 
              y: 0, 
              stagger: 0.2,
              duration: 0.6,
              scrollTrigger: {
                trigger: textElement, 
                start: "top 80%", 
                end: "top 50%", 
                toggleActions: "play none none reverse",
                
              }
            });
        });
      }

      gsap.utils.toArray('.container2').forEach((container) => {
        gsap.from(container, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: container,
            start: 'top 80%', 
            toggleActions: 'play none none none'
          }
        });
      });

      gsap.to(".start2 h1", {
        transform: "translateX(-110%)", 
        scrollTrigger: {
          trigger: ".start2",
          scroller: "body", 
          start: "top top", 
          end: "bottom top", 
          scrub: 2, 
          pin: ".start2" 
        }
      });
      gsap.to(".start3 h1", {
        transform: "translateX(-110%)", 
        scrollTrigger: {
          trigger: ".start3",
          scroller: "body", 
          start: "top top", 
          end: "bottom top", 
          scrub: 1, 
          pin: ".start3" 
        }
      });


      