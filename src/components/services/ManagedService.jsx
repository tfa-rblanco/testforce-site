import React, { Component } from 'react';
import { FaPhone } from "react-icons/fa";

class ManagedServices extends Component {

    handleRedirect = () => {
        window.location.href = "https://autox.solutions";
    };

    render() {
        return (
            <div className="container">
                <p>Scale Smarter with Managed IT Services</p>
                <p>
                    At <strong>Test Force</strong>, our Managed Services are designed to help your business stay focused on what matters most—while we take care of your IT infrastructure, operations, and support. We’re more than just a provider—we’re your long-term partner in operational excellence.
                </p>
                <div style={{ width: 'auto', marginLeft: "10%", marginRight: "10%", alignContent: "center" }}>
                    <ul>
                        <ol style={{ verticalAlign: "center", textIndent: "-22px" }}>✅ <strong>End-to-End IT Management:</strong> We handle your systems, networks, software, and infrastructure so you can focus on growth.</ol>
                        <ol style={{ verticalAlign: "center", textIndent: "-22px" }}>✅ <strong>24/7 Monitoring & Support:</strong> Stay online and operational with our proactive support, issue resolution, and SLA-based services.</ol>
                        <ol style={{ verticalAlign: "center", textIndent: "-22px" }}>✅ <strong>Predictable Costs:</strong> Our fixed-cost models give you peace of mind and better control over your IT spending.</ol>
                        <ol style={{ verticalAlign: "center", textIndent: "-22px" }}>✅ <strong>Scalable Teams & Resources:</strong> Whether you need full management or just added capacity, we scale with you.</ol>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ManagedServices;