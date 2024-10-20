import React, { useEffect, useRef, useState } from "react";
import MainSection from "./MainPage";
import CardsSection from "./CardsSection";
import PlantSection from "./PlantSection";
import WaterSection from "./WaterSection";
import FireSection from "./FireSection";

function App() {
  const containerRef = useRef(null);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const scrollSections = Array.from(container.children);
    let lastScrollY = window.scrollY;
    let scrollTimeout = null;

    const handleScroll = () => {
      if (!scrolling) {
        if (scrollTimeout) clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(() => {
          const scrollPosition = window.scrollY;
          const windowHeight = window.innerHeight;
          let closestSection = scrollSections[0];
          let minDistance = Math.abs(scrollSections[0].offsetTop - scrollPosition);

          scrollSections.forEach((section) => {
            const distance = Math.abs(section.offsetTop - scrollPosition);
            if (distance < minDistance) {
              minDistance = distance;
              closestSection = section;
            }
          });

          // Decrease the threshold for snapping to make it quicker
          if (minDistance < windowHeight / 4) {
            setScrolling(true);
            window.scrollTo({
              top: closestSection.offsetTop,
              behavior: "smooth",
            });
            setTimeout(() => setScrolling(false), 100); // Make the timeout shorter for faster interaction
          }
        }, 50); // Shorten the debounce delay for faster snapping
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [scrolling]);

  return (
    <div ref={containerRef}>
      <MainSection />
      <CardsSection />
      <PlantSection />
      <WaterSection />
      <FireSection />
    </div>
  );
}

export default App;
