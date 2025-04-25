import React, { useState, useEffect } from "react";
import { FaPhone } from "react-icons/fa";
import "./index.css";
import { MdHeight } from "react-icons/md";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <div className="logo">TestForce</div>

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
          <h1>Software Testing. Elevated.</h1>
          <p>
            Powerful automation, unmatched quality, zero bugs. Your trusted QA
            partner.
          </p>
          <button className="button" onClick={handleRedirect}>
            Get Started with Auto Mate Solutions
          </button>
        </div>
      </section>
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
      <main className="container">
        <section id="services" className="marketing">
          <h2>Our Services</h2>
            <div className="container">
              <p>Empower Your Team with Better Software Engineering - On Us.</p>
              <p>
                At <strong>Test Force</strong>, we don't just offer test automation tools—we partner with you to transform how your teams build and ship software. When you outsource your testing needs to us, you’re not just offloading work—you’re investing in engineering excellence.
              </p>
              <div style={{ width: 'auto', marginLeft: "10%", marginRight: "10%", alignContent: "center"}}>
                <ul>
                  <ol style={{ verticalAlign: "center", textIndent: "-30px"}}><strong>✅ Modernize Your Testing Practice:</strong> We embed our experts within your team to evangelize scalable software engineering practices, test automation strategy, and DevOps alignment.</ol>
                  <ol style={{ verticalAlign: "center", textIndent: "-30px"}}><strong>✅ Access <img style={{ height: "20px", alignContent: "center", offset: "100px",  verticalAlign: "text-bottom"}} src="/auto-mate.png"></img> Solutions—For Free:</strong> Clients who outsource testing to us get <strong>full access to Auto Mate Solutions</strong>, our in-house test automation platform, at <strong>no additional cost</strong>.</ol>
                  <ol style={{ verticalAlign: "center", textIndent: "-30px"}}><strong>✅ Faster Releases, Higher Confidence:</strong> With robust test coverage and automation pipelines in place, your teams move faster, reduce bugs, and boost user trust.</ol>
                  <ol style={{ verticalAlign: "center", textIndent: "-30px"}}><strong>✅ Build a Culture of Quality:</strong> We don’t just run tests. We help your developers, testers, and stakeholders adopt a quality-first mindset that lasts beyond our engagement.</ol>
                </ul>
              </div>
              <p>
                <strong>Ready to Transform Your QA Process?</strong><br/>
                Let’s explore how we can help you scale quality engineering—and give you powerful platform like Auto Mate Solutions, for free.
              </p>
              <div className="cta-buttons">
                <button className="button">
                  <a href="tel:+61450025027" className="button phone-button">
                    <FaPhone style={{ marginRight: "8px" }} />
                    +61 450 025 027
                  </a>
                </button>
                <button className="button" onClick={handleRedirect}>Get a Demo of Auto Mate Solutions</button>
              </div>
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