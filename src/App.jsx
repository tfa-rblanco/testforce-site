import React from "react";
import "./index.css";

export default function HomePage() {
  return (
    <div>
      <header className="navbar">
        <div className="logo">TestForce</div>
        <nav>
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
          <a href="#contact" className="button">
            Get Started with autoX
          </a>
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
          <p>
            Ready to elevate your software quality? Reach out to us today for a
            consultation.
          </p>
        </section>
      </main>
    </div>
  );
}
