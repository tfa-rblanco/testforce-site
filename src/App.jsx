import React, { useState, useEffect } from "react";
import "./index.css";
import { FaPhone } from "react-icons/fa";
import { Button } from "antd";
import QualityEngineering from "./components/services/QualityEngineering";
import ManagedServices from "./components/services/ManagedService";
import SoftwareDevelopment from "./components/services/SoftwareDevelopment";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState('managed');

  const handleRedirect = () => {
    window.location.href = "https://autox.solutions";
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/67f09b52d1d92f190a047b2b/1io1ttek7";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    // Optional: no need to hideWidget since you want it always visible
    window.Tawk_API = window.Tawk_API || {};
  }, []);

  return (
    <div>
      <header className="navbar">
        <div className="logo">Test Force Australia</div>

        <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </div>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="https://autox.solutions">Auto Mate Solutions</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1 style={{marginTop: "5rem"}}>Engineering Excellence. Delivered.</h1>
          <p >
            Your Strategic Partner for Development, Testing, and Support Services
          </p>
          <p style={{ fontSize: "0.9rem", whiteSpace: "nowrap", textOverflow: "ellipsis", marginBottom: "4rem", width: "100%" }}>
            Full-cycle development, world-class QA, and reliable support from a hybrid team based in onshore and offshore.
          </p>
        </div>
        <div className="clients-wrapper">
          <h2>Our clients</h2>
          <div className="client-carousel">
            <div className="carousel-track">
              <a href="https://evoltech.com.au/" target="_blank" rel="noopener noreferrer">
                <img src="/clients/evoltech-pty-ltd.png" alt="Evoltech Pty Ltd" />
              </a>
              <a href="https://dnrtradie.com/" target="_blank" rel="noopener noreferrer">
                <img src="/clients/dnr-tradie-icon.png" alt="DNR Tradie" />
              </a>
              {/* Duplicating */}
              <a href="https://evoltech.com.au/" target="_blank" rel="noopener noreferrer">
                <img src="/clients/evoltech-pty-ltd.png" alt="Evoltech Pty Ltd" />
              </a>
              <a href="https://dnrtradie.com/" target="_blank" rel="noopener noreferrer">
                <img src="/clients/dnr-tradie-icon.png" alt="DNR Tradie" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <main className="container">
        <section id="services" className="marketing">
          <h2>Our Services</h2>
          <div className="service-buttons" style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
            <Button
              type={activeService === 'managed' ? 'primary' : 'default'}
              onClick={() => setActiveService('managed')}
            >
              <span style={{ fontSize: "1.2rem" }}>Managed Services</span>
            </Button>
            <Button
              type={activeService === 'software' ? 'primary' : 'default'}
              onClick={() => setActiveService('software')}
            >
              <span style={{ fontSize: "1.2rem" }}>Software Development</span>
            </Button>
            <Button
              type={activeService === 'quality' ? 'primary' : 'default'}
              onClick={() => setActiveService('quality')}
            >
              <span style={{ fontSize: "1.2rem" }}>Quality Engineering</span>
            </Button>
          </div>
          {activeService === 'managed' && <ManagedServices />}
          {activeService === 'software' && <SoftwareDevelopment />}
          {activeService === 'quality' && <QualityEngineering />}
          <p>
            <strong>Ready to Transform Your QA Process?</strong><br />
            Let’s explore how we can help you scale quality engineering—and give you powerful platform like Auto Mate Solutions, for free.
          </p>
          <div className="cta-buttons" style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <Button type="primary">
              <a href="tel:+61450025027">
                <FaPhone style={{ marginRight: "8px" }} />
                +61 450 025 027
              </a>
            </Button>
            <Button type="primary" onClick={handleRedirect}>Get a Demo of Auto Mate Solutions</Button>
          </div>
        </section>

        <section id="about">
          <h2>About Us</h2>
          <p>
            TestForce is a cutting-edge software testing company delivering
            precision and reliability through automation-first strategies.
          </p>
        </section>
      </main>
    </div>
  );
}