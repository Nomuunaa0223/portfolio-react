import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Page3.css";
// import TargetCursor from "../page4/TargetCursor";
import p1 from "../../assets/p1.avif";
import p2 from "../../assets/p2.avif";
import p3 from "../../assets/p3.avif";

gsap.registerPlugin(ScrollTrigger);

function Page3() {
  const component = useRef();

  const projects = [
    {
      img: p1,
      label: "Skills",
      title: "Backend Developer",
      desc: "Equipped with a degree in Backend Development, I have cultivated a robust set of technical competencies essential for excelling in the current industry landscape.",
      features: [
        "Programming Languages & Frameworks",
        "Database Management",
        "API Design & Architecture",
        "DevOps & Deployment",
        "Software Engineering Fundamentals",
      ],
    },
    {
      img: p2,
      label: "Skills",
      title: "Frontend Developer",
      desc: "As a Frontend Development graduate, I specialize in crafting immersive, user-centered, and high-performance digital interfaces. I have mastered a diverse set of modern web technologies to remain competitive in today's market, focusing on the perfect balance between aesthetic design and technical efficiency.",
      features: [
        "Core Web Technologies",
        "JavaScript Frameworks",
        "UI & Styling Frameworks",
        "Animation & Visuals",
        "Tools & Professional Workflow",
      ],
    },
    {
      img: p3,
      label: "Skills",
      title: "UI/UX Designer",
      desc: "I bridge the gap between user needs and business goals through research-backed design. My approach prioritizes usability while maintaining a modern, high-end visual aesthetic.",
      features: [
        "Visual Design",
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design Systems",
        "Interaction Design",
        "Usability Testing",
      ],
    },
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".project-section");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".horiz-gallery-wrapper",
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          start: "top top",
          end: () => "+=" + window.innerWidth * sections.length,
          invalidateOnRefresh: true,
        },
      });
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={component} className="page3-container">
      <section id="portfolio">
        {/* <TargetCursor
          spinDuration={1.5}
          hideDefaultCursor={true}
          parallaxOn={true}
          hoverDuration={0.4}
          targetSelector=".cursor-target"
        /> */}

        <div className="horiz-gallery-wrapper">
          <div className="horiz-gallery-strip">
            {projects.map((item, index) => (
              <div className="project-section cursor-target" key={index}>
                <div className="project-content">
                  <div className="project-info">
                    <span className="label-text cursor-target">
                      {item.label}
                    </span>
                    <h1 className="title-text cursor-target">{item.title}</h1>
                    <p className="description cursor-target">{item.desc}</p>

                    <ul className="feature-list cursor-target">
                      {item.features.map((f, i) => (
                        <li key={i}>
                          <span className="check-icon cursor-target">✓</span>{" "}
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-img-wrap cursor-target">
                    <img src={item.img} alt={item.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page3;
