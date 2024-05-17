import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Analytics } from "@vercel/analytics/react";
// import { GlobeDemo } from "./components/GlobeDemo";
import { Suspense, lazy , useRef} from "react";
import useIntersectionObserver from "./hooks/useIntersectionObserver";

const GlobeDemo = lazy(() => import("./components/GlobeDemo"));

const App = () => {
  const globeRef = useRef();
  const isGlobeVisible = useIntersectionObserver(globeRef, { threshold: 0.01 });

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
    </div>
  );
};

export default App;
