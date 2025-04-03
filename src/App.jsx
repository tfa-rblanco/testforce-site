import React, { useState } from "react";
import "./index.css";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleRedirect = () => {
    window.location.href = "https://www.autox.testforce.com.au/";
  };

  return (
    <div>
      <header className="navbar">
        <div className="logo">TestForce</div>

        <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
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
            Get Started with autoX
          </button>
        </div>
      </section>

      <main className="container">
        <section id="services">
          <h2>Our Services</h2>
          <p>
            We specialize in end-to-end test automation, performance testing,
            and QA consulting tailored for modern software teams.
          </p>
        </section>

        <section id="about">
          <h2>About Us</h2>
          <p>
            TestForce is a cutting-edge software testing company delivering
            precision and reliability through automation-first strategies.
          </p>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p className="tight">
            Ready to elevate your software quality? 
          </p>
          <p className="tight">
          Reach out to us today for a
          consultation or book a demo for <a href="https://www.autox.testforce.com.au/" target="_blank" rel="noopener noreferrer" className="contact-link">autoX</a> automation builder by contacting info@testforce.com.au.
          </p>
        </section>
      </main>
    </div>
  );
}