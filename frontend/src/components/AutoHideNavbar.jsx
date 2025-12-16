import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const AutoHideNavbar = ({ children }) => {
  const lastScrollY = useRef(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const container = document.querySelector(".snap-container");
    if (!container) return;

    const onScroll = () => {
      const currentScroll = container.scrollTop;

      if (currentScroll > lastScrollY.current && currentScroll > 50) {
        setVisible(false); // scrolling down
      } else if (lastScrollY.current - currentScroll > 20) {
        setVisible(true); // scrolling up
      }

      lastScrollY.current = currentScroll;
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: visible ? 0 : -120,
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-[100] pointer-events-auto"
    >
      {children}
    </motion.div>

  );
};

export default AutoHideNavbar;
