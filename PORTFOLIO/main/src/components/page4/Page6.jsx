import React, { useEffect, useRef } from "react";
import "./Page6.css";

const steps = [
  {
    title: "My Goal",
    desc: "I thrive at the intersection of design and logic. My mission is to craft digital products that transform complex user problems into intuitive web solutions.",
  },
  {
    title: "My Family",
    desc: "I grew up in a simple, loving family, surrounded by my parents, grandmother, and siblings. After high school, I took an early step into independence by starting a life with my partner.",
  },
  {
    title: "My friends",
    desc: "My school years gifted me with my closest friends—girls who have been by my side through every high and low. Today, my family and friends remain my greatest pride and the heartbeat of my happiness.",
  },
  {
    title: "My Fav Things",
    desc: "Music and TV series are my ultimate escapes. When I'm feeling down, I immerse myself in soft, soulful melodies to find peace and process my emotions. On the other hand, when I'm full of energy, Hip-Hop is my go-to vibe. Watching series has been my favorite hobby since childhood, and it remains a constant source of joy in my life today.",
    highlight: true,
  },
];

const Page6 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.5, // Маш бага хэсэг нь харагдахад л ажиллана
        rootMargin: "0px 0px -50px 0px", // Дэлгэцийн ёроолд тулахаас өмнө ажиллуулна
      },
    );

    const cards = sectionRef.current.querySelectorAll(".step-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      if (cards) cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section className="work-section" ref={sectionRef}>
      <div className="work-container">
        <h2 className="work-title">My About</h2>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`step-card ${step.highlight ? "highlight" : ""}`}
              style={{
                transitionDelay: `${index * 0.2}s`,
              }}
            >
              <span className="corner top-left"></span>
              <span className="corner top-right"></span>
              <span className="corner bottom-left"></span>
              <span className="corner bottom-right"></span>

              <h3 className="step-title">{step.title}</h3>
              <p className="step-text">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page6;
