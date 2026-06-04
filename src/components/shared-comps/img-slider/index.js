import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";

function ImgSlider({ children, classes = "", speed = 0.5 }) {
  const sliderRef = useRef(null);
  const requestRef = useRef();
  const [isPaused, setIsPaused] = useState(false);

  const animate = () => {
    if (sliderRef.current && !isPaused) {
      sliderRef.current.scrollLeft += speed;

      // Infinite loop reset: if we've scrolled past the first set of images
      if (sliderRef.current.scrollLeft >= sliderRef.current.scrollWidth / 2) {
        sliderRef.current.scrollLeft = 0;
      }
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isPaused, speed]); // Re-sync if pause state or speed changes

  const handleManualScroll = (direction) => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      const scrollAmount = container.offsetWidth; // Move by one full container width

      container.scrollTo({
        left:
          container.scrollLeft +
          (direction === "next" ? scrollAmount : -scrollAmount),
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="relative group w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Navigation Buttons */}
      <button
        onClick={() => handleManualScroll("prev")}
        className="absolute left-[45%] bottom-0 z-20 -translate-y-1/2  text-black p-3 rounded-full transition-all"
      >
        &#10094;
      </button>

      <button
        onClick={() => handleManualScroll("next")}
        className="absolute right-[45%] bottom-0 z-20 -translate-y-1/2  text-black p-3 rounded-full transition-all"
      >
        &#10095;
      </button>

      {/* Slider Container */}
      <div
        ref={sliderRef}
        className={cx(
          "flex w-full overflow-x-hidden whitespace-nowrap",
          classes,
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default ImgSlider;
