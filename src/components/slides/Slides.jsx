import { useEffect, useRef } from "react";
import "../slides/Slides.css";

const IMAGES = [
  "chivas", "hennessy", "jackdaniels", "bombay", "bacardi", 
  "glenlivet", "chivasregal", "jameson", "jagermeister", "jimbeam", 
  "johnwalker", "martel", "remy"
];

function Slides() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let animationId;
    let scrollPos = 0;
    const speed = 1; // Adjust this number for speed (0.5 slow, 2 fast)

    const scroll = () => {
      scrollPos += speed;
      
      // If we've scrolled past half (the first set of images), reset to 0
      if (scrollPos >= container.scrollWidth / 2) {
        scrollPos = 0;
      }
      
      container.style.transform = `translateX(-${scrollPos}px)`;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="slides-viewport">
      <div className="slide-container" ref={containerRef}>
        {/* Render two sets of images to create the infinite loop effect */}
        {[...IMAGES, ...IMAGES].map((img, index) => (
          <div className="slide-item" key={index}>
            <img src={`images/${img}.png`} alt={img} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Slides;