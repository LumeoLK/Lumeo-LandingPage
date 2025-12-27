import React, { useRef, useEffect } from "react";
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

// Components
import Navbar from "../components/NavBar.jsx";
import Hero from "../components/Hero.jsx";
import Problem from "../components/Problem.jsx";
import FeaturesScroll from "../components/FeaturesScroll.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Team from "../components/Team.jsx";
import GetInTouch from "../components/GetInTouch.jsx";
import Footer from "../components/Footer.jsx";



const Home = () => {
  const scrollContainerRef = useRef(null);
  const sectionsRef = useRef([]);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let touchStartY = 0;
    let lastScrollTime = 0;
    const scrollDelay = 800;

    const getCurrentSection = () => {
      const scrollTop = container.scrollTop;
      const windowHeight = container.clientHeight;
      
      // Find which section we're currently in
      for (let i = 0; i < sectionsRef.current.length; i++) {
        const section = sectionsRef.current[i];
        const rect = section.getBoundingClientRect();
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollTop >= sectionTop - windowHeight / 3 && scrollTop < sectionBottom - windowHeight / 3) {
          return { index: i, section, sectionTop, sectionBottom };
        }
      }
      return null;
    };

    const canScrollWithinSection = (direction) => {
      const current = getCurrentSection();
      if (!current) return false;
      
      const scrollTop = container.scrollTop;
      const windowHeight = container.clientHeight;
      
      if (direction === 'down') {
        // Check if there's more content below in current section
        return scrollTop + windowHeight < current.sectionBottom - 10;
      } else {
        // Check if there's more content above in current section
        return scrollTop > current.sectionTop + 10;
      }
    };

    const snapToSection = (direction) => {
      if (isScrollingRef.current) return;
      
      // Allow natural scrolling if we're within a tall section
      if (canScrollWithinSection(direction)) {
        return; // Let browser handle normal scrolling
      }
      
      const currentTime = Date.now();
      if (currentTime - lastScrollTime < scrollDelay) return;
      
      const current = getCurrentSection();
      if (!current) return;
      
      let targetIndex;
      if (direction === 'down') {
        targetIndex = Math.min(current.index + 1, sectionsRef.current.length - 1);
      } else {
        targetIndex = Math.max(current.index - 1, 0);
      }
      
      if (targetIndex === current.index) return;
      
      const targetSection = sectionsRef.current[targetIndex];
      if (targetSection) {
        isScrollingRef.current = true;
        lastScrollTime = currentTime;
        
        targetSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 800);
      }
    };

    const handleWheel = (e) => {
      const direction = e.deltaY > 0 ? 'down' : 'up';
      
      // Only prevent default if we're snapping between sections
      if (!canScrollWithinSection(direction)) {
        e.preventDefault();
        snapToSection(direction);
      }
      // Otherwise let the browser handle natural scrolling
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;
      
      if (Math.abs(diff) > 50) {
        const direction = diff > 0 ? 'down' : 'up';
        if (!canScrollWithinSection(direction)) {
          snapToSection(direction);
        }
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section && !isScrollingRef.current) {
      isScrollingRef.current = true;
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  };

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <>
      <Navbar handleScroll={handleScroll} />
      
      <div
        ref={scrollContainerRef}
        className="h-screen w-full overflow-y-scroll overflow-x-hidden"
        style={{ scrollBehavior: 'smooth' }}
      >
        <div id="Hero" ref={addToRefs}>
          <Hero />
        </div>

        <div id="Problem" ref={addToRefs}>
          <Problem />
        </div>

        <div id="Features" ref={addToRefs}>
          <FeaturesScroll />
        </div>

        <div id="HowItWorks" ref={addToRefs}>
          <HowItWorks />
        </div>

        <div id="Team" ref={addToRefs}>
          <Team />
        </div>

        <div id="GetInTouch" ref={addToRefs}>
          <GetInTouch />
        </div>

        <div ref={addToRefs}>
          <Footer handleScroll={handleScroll} />
        </div>
      </div>
    </>
  );
};

export default Home;