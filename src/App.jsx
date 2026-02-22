import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Publications from "./components/Publications";
import MemoryGame from "./components/MemoryGame";
import { Analytics } from "@vercel/analytics/react";
import { Suspense, lazy, useRef, useEffect, useState } from "react";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import { FaArrowUp } from "react-icons/fa";

const GlobeDemo = lazy(() => import("./components/GlobeDemo"));

const App = () => {
  const globeRef = useRef();
  const isGlobeVisible = useIntersectionObserver(globeRef, { threshold: 0.01 });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Analytics />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Publications />
        <MemoryGame />
        <div className="flex flex-col md:flex-row w-full">
          <div className="flex justify-center items-center md:flex-1">
            <Contact />
          </div>
          <div className="md:flex-1 object-contain" ref={globeRef}>
            <Suspense fallback={<div>Loading...</div>}>
              {isGlobeVisible && <GlobeDemo />}
            </Suspense>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-8 right-8 z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/40 bg-neutral-900/80 text-cyan-300 backdrop-blur-md transition-all duration-500 hover:scale-110 hover:border-cyan-400 hover:text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] ${
          showScrollTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <FaArrowUp className="text-lg" />
      </button>
    </div>
  );
};

export default App;