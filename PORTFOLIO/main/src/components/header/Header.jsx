import React, { Suspense, lazy, useEffect, useRef } from "react";
import Particles from "./Particles.jsx";
import SplitText from "./SplitText";
import Ulddeg from "../header01/Ulddeg";
import "./Header.css";

const Spline = lazy(() => import("@splinetool/react-spline"));

function Header() {
  const splineWrapperRef = useRef(null);
  useEffect(() => {
    const preventScroll = (e) => {
      // Хэрэв хулгана Spline дээр байгаа бол үндсэн хуудасны scroll-ыг зогсооно
      e.preventDefault();
    };

    const wrapper = splineWrapperRef.current;
    if (wrapper) {
      // passive: false байж preventDefault ажилладаг
      wrapper.addEventListener("wheel", preventScroll, { passive: false });
    }

    return () => {
      if (wrapper) {
        wrapper.removeEventListener("wheel", preventScroll);
      }
    };
  }, []);

  return (
    <header className="header">
      <Ulddeg />

      <Particles
        particleColors={["#ffffff", "#8A2BE2"]}
        particleCount={3000}
        particleSpread={12}
        speed={0.6}
        particleBaseSize={120}
        moveParticlesOnHover={true}
        particleHoverFactor={2}
        alphaParticles={true}
        className="particles-container"
      />

      <div className="content">
        <div className="text-section">
          <SplitText
            text="I'm Nomuunaa"
            className="SplitText"
            delay={100}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />
          <p className="hi">Hi, there!</p>
          <p className="fu">
            Fullstack developer & <span>UI/UX designer</span>
          </p>
        </div>

        {/* Скролл зогсоох логик энд ажиллана */}
        <div className="spline-wrapper" ref={splineWrapperRef}>
          <Suspense
            fallback={<div className="loading-text">INITIALIZING 3D...</div>}
          >
            <Spline scene="https://prod.spline.design/f7ohBKuvlqBbuL5a/scene.splinecode" />
          </Suspense>
        </div>
      </div>
    </header>
  );
}

export default Header;
