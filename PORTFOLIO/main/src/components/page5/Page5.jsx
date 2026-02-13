import React from "react";
import "./Page5.css";
import Particles from "../header/Particles";
const Page5 = () => {
  return (
    <section className="contact-section">
      <Particles
        particleColors={["#ffffff", "#8A2BE2"]}
        particleCount={3000}
        particleSpread={12}
        speed={0.2}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        particleHoverFactor={1}
        alphaParticles={true}
        className="particles-container"
      />
      <div className="contact-container">
        <h2 className="contact-title">
          GET IN <span>TOUCH</span>
        </h2>

        <div className="contact-content">
          {/* Зүүн тал: Холбоо барих мэдээлэл */}
          <div className="contact-info">
            <div className="info-item">
              <h3>EMAIL</h3>
              <p>nomunabaterdene7@gmail.com</p>
            </div>
            <div className="info-item">
              <h3>SOCIALS</h3>
              <div className="social-links">
                {/* href хэсэгт өөрийн Facebook профайл линкийг тавиарай */}
                <a
                  href="https://www.facebook.com/share/1AuX1QkuCw/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FACEBOOK
                </a>

                <a
                  href="https://www.instagram.com/krwonnno?igsh=MWV5czZoZzQ2ZHlrOQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  INSTAGRAM
                </a>

                <a
                  href="https://github.com/Nomuunaa0223"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GITHUB
                </a>
              </div>
            </div>
          </div>

          {/* Баруун тал: Form */}
          <form className="contact-form">
            <div className="input-group">
              <input type="text" placeholder="NAME" required />
              <input type="email" placeholder="EMAIL" required />
            </div>
            <textarea placeholder="YOUR MESSAGE" rows="5" required></textarea>
            <button type="submit" className="submit-btn">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
      <div className="by">
        <div className="zuraas"></div>
        <p>By Nomuna</p>
      </div>
    </section>
  );
};

export default Page5;
