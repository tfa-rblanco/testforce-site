import React, { Component } from 'react';
import { FaPhone } from "react-icons/fa";

class SoftwareDevelopment extends Component {

    handleRedirect = () => {
        window.location.href = "https://autox.solutions";
    };

    render() {
        return (
            <div className="container">
                <p>Build Future-Ready Software with Confidence</p>
                <p>
                    At <strong>Test Force</strong>, we turn your ideas into scalable, secure, and high-performing software. Whether you’re building a product from scratch or modernizing legacy systems, our developers become an extension of your team—delivering value at speed.
                </p>
                <div style={{ width: 'auto', marginLeft: "10%", marginRight: "10%", alignContent: "center" }}>
                    <ul>
                        <ol style={{ verticalAlign: "center", textIndent: "-22px" }}>✅ <strong>Custom Web & Mobile Development:</strong> From user-facing apps to internal systems, we design and build with user experience and performance in mind.</ol>
                        <ol style={{ verticalAlign: "center", textIndent: "-22px" }}>✅ <strong>Cloud-Native Architecture:</strong> Leverage modern stacks, microservices, and serverless solutions that scale with your business.</ol>
                        <ol style={{ verticalAlign: "center", textIndent: "-22px" }}>✅ <strong>Rapid Prototyping to Full-Scale Delivery:</strong> Go from concept to market faster using Agile sprints, DevOps, and CI/CD pipelines.</ol>
                        <ol style={{ verticalAlign: "center", textIndent: "-22px" }}>✅ <strong>Embedded Collaboration:</strong> Our developers work closely with your stakeholders, PMs, and designers to stay aligned and transparent.</ol>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SoftwareDevelopment;