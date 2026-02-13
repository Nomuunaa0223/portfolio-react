import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Page2.css";
import z1 from "../../assets/z1.webp";
import z2 from "../../assets/z2.webp";
import z3 from "../../assets/z3.webp";

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    // Зургуудыг scroll хийх үед бага зэрэг fade-in эффект өгье гэвэл:
    let ctx = gsap.context(() => {
      gsap.utils.toArray(".img-panel").forEach((panel) => {
        gsap.fromTo(
          panel,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: panel,
              start: "top 80%", // Дэлгэцийн 80%-д орж ирэхэд анимейшн эхэлнэ
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    gsap.to(currentTarget, {
      rotationY: x * 20,
      rotationX: -y * 0,
      scale: 1.05,
      perspective: 1000,
      ease: "power2.out",
      duration: 0.5,
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      rotationY: 0,
      rotationX: 0,
      scale: 1,
      ease: "power2.out",
      duration: 0.5,
    });
  };

  const images = [z1, z2, z3];

  return (
    <div ref={mainRef} className="page2-container">


      {/* Текст зүүн талд sticky хэвээр үлдэнэ */}
      <div className="fixed-text-container cursor-target">
        <p>
          I am a recent Full-Stack Developer graduate who deeply <br />
          understands the client's perspective and feelings. I strive <br />
          to create websites and applications that offer the most <br />
          user-friendly experience possible. I specialize in prioritizing <br />
          UI/UX in my projects, ensuring a strong focus on user <br />
          -centered design as a key strength.
        </p>
      </div>

      <div className="images-column">
        {images.map((img, index) => (
          <section key={index} className="img-panel">
            <div className="img-holder">
              <img
                src={img}
                alt={`z${index + 1}`}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Page2;
