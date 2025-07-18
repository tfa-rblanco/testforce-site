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
        <div className="logo">Test Force</div>

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
        <div className="hero-content responsive-hero-content">
          <h1 className="responsive-hero-title" style={{ marginTop: "5rem" }}>
            Engineering Excellence. Delivered.
          </h1>
          <p className="responsive-hero-subheading">
            Your Strategic Partner for Development, Testing, and Support Services
          </p>
        </div>
        <div className="clients-wrapper">
          <h2>Our Clients</h2>
          <div className="client-carousel">
            <div className="carousel-track">
              <a href="https://evoltech.com.au/" target="_blank" rel="noopener noreferrer">
                <img src="/clients/evoltech-pty-ltd.png" alt="Evoltech Pty Ltd" />
              </a>
              <a href="https://dnrtradie.com/" target="_blank" rel="noopener noreferrer">
                <img src="/clients/dnr-tradie-icon.png" alt="DNR Tradie" />
              </a>
              <a href="https://www.dbghealth.com.au/businesses/arrotex-pharmaceuticals" target="_blank" rel="noopener noreferrer">
                <img src="/clients/arrotex-logo-white.svg" alt="Arrotex Pharmaceuticals" />
              </a>              
              <a href="" target="_blank" rel="noopener noreferrer">
                <img src="/clients/bonita-it-services.png" alt="Bonita IT Services" />
              </a>                  
              {/* Duplicating */}
              <a href="https://evoltech.com.au/" target="_blank" rel="noopener noreferrer">
                <img src="/clients/evoltech-pty-ltd.png" alt="Evoltech Pty Ltd" />
              </a>
              <a href="https://dnrtradie.com/" target="_blank" rel="noopener noreferrer">
                <img src="/clients/dnr-tradie-icon.png" alt="DNR Tradie" />
              </a>
              <a href="https://www.dbghealth.com.au/businesses/arrotex-pharmaceuticals" target="_blank" rel="noopener noreferrer">
                <img src="/clients/arrotex-logo-white.svg" alt="Arrotex Pharmaceuticals" />
              </a>  
              <a href="" target="_blank" rel="noopener noreferrer">
                <img src="/clients/bonita-it-services.png" alt="Bonita IT Services" />
              </a>                              
            </div>
          </div>
        </div>
      </section>
      <main className="container">
        <section id="services" className="marketing">
          <h2>Our Services</h2>
          <div className="service-buttons responsive-service-buttons" style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
            <Button
              type={activeService === 'managed' ? 'primary' : 'default'}
              ghost={activeService !== 'managed'}
              style={activeService !== 'managed' ? { backgroundColor: "transparent", border: "1px solid #d9d9d9" } : {}}
              onClick={() => setActiveService('managed')}
            >
              <span style={{ fontSize: "1.2rem" }}>Managed Services</span>
            </Button>
            <Button
              type={activeService === 'software' ? 'primary' : 'default'}
              ghost={activeService !== 'software'}
              style={activeService !== 'software' ? { backgroundColor: "transparent", border: "1px solid #d9d9d9" } : {}}
              onClick={() => setActiveService('software')}
            >
              <span style={{ fontSize: "1.2rem" }}>Software Development</span>
            </Button>
            <Button
              type={activeService === 'quality' ? 'primary' : 'default'}
              ghost={activeService !== 'quality'}
              style={activeService !== 'quality' ? { backgroundColor: "transparent", border: "1px solid #d9d9d9" } : {}}
              onClick={() => setActiveService('quality')}
            >
              <span style={{ fontSize: "1.2rem" }}>Quality Engineering</span>
            </Button>
          </div>
          {activeService === 'managed' && <ManagedServices />}
          {activeService === 'software' && <SoftwareDevelopment />}
          {activeService === 'quality' && <QualityEngineering />}
          <p>
            <strong>Ready to Transform Team?</strong><br />
            Let’s explore how we can help your through engineering excellence and give you powerful platform like Auto Mate Solutions, for free.
          </p>
          <div className="cta-buttons responsive-cta-buttons" style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
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
            TestForce is a cutting-edge software development and testing company delivering precision and reliability through automation-first strategies.
          </p>
        </section>

        <section id="about">
          <h2>Our Offices</h2>
          <p>
            <b>Melbourne:</b> <br />Suite 200, Level 3/21 Cityside Drive, Mickleham 3064 Victoria, Australia <br /><br />
            <b>Philippines:</b> <br />16F High Street South Corporate Plaza Tower 2 26th Street corner 9th Avenue, Bonifacio Global City, Taguig City, 1635 Philippines
          </p>
        </section>

      </main>
    </div>
  );
}