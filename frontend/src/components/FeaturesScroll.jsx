import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeaturesScroll = () => {
  const containerRef = useRef(null);
  const stickyRef = useRef(null); // The part that stays visible
  const textRef = useRef(null);
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. MARQUEE (Runs infinitely)
      gsap.to(textRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 10,
        repeat: -1,
      });

      // 2. SCROLL & EXPAND ANIMATION
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current, // The tall 300vh container
          start: "top top", // Start when top hits top of viewport
          end: "bottom bottom", // End when we hit the bottom of 300vh
          scrub: 1, // Smooth scrubbing
          pin: stickyRef.current, // Pin the VISIBLE wrapper, not the whole container
          pinSpacing: false, // Important when managing your own height
        },
      });

      // The Animation: Card grows to full screen
      tl.to(cardRef.current, {
        width: "100vw",
        height: "100vh",
        borderRadius: "0px",
        ease: "power1.inOut", // Linear feel works best for scroll sync
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    // THE TRACK: This div is 300vh tall.
    // This allows the user to "scroll" for a while without leaving the section.
    <div ref={containerRef} className="relative w-full h-[300vh] bg-[#fbb040]">
      {/* THE STICKY VIEWPORT: This stays locked at 100vh while we scroll the track */}
      <div
        ref={stickyRef}
        className="h-screen w-full overflow-hidden flex items-center justify-center relative"
      >
        {/* Background Marquee */}
        <div className="absolute inset-0 flex items-center justify-start opacity-20 pointer-events-none select-none">
          <div ref={textRef} className="whitespace-nowrap flex gap-10">
            <h1 className="text-[25vw] font-[Anton] leading-none text-black uppercase">
              LUMEO — AR — LUMEO — AR —
            </h1>
            <h1 className="text-[25vw] font-[Anton] leading-none text-black uppercase">
              LUMEO — AR — LUMEO — AR —
            </h1>
          </div>
        </div>

        {/* The Expanding Card */}
        <div
          ref={cardRef}
          className="relative z-10 overflow-hidden bg-black shadow-2xl"
          style={{
            width: "300px",
            height: "400px",
            borderRadius: "24px",
            maxWidth: "90%",
            maxHeight: "80%",
          }}
        >
          <img
            src="public/assets/vinuka.jpg" // Use your AR image here
            alt="Feature Preview"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white font-[Anton] text-4xl mix-blend-difference">
              THE FUTURE
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesScroll;
