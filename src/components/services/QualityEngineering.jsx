import React, { Component } from 'react';


class QualityEngineering extends Component {

  handleRedirect = () => {
    window.location.href = "https://autox.solutions";
  };
    
    render() {
        return (
            <div className="container">
                <p>Empower Your Team with Better Quality Engineering - On Us.</p>
                <p>
                    At <strong>Test Force</strong>, we don't just offer test automation tools—we partner with you to transform how your teams build and ship software. When you outsource your testing needs to us, you’re not just offloading work—you’re investing in engineering excellence.
                </p>
                <div style={{ width: 'auto', marginLeft: "10%", marginRight: "10%", alignContent: "center" }}>
                    <ul>
                        <ol style={{ verticalAlign: "center", textIndent: "-22px" }}><strong>✅ Modernize Your Testing Practice:</strong> We embed our experts within your team to evangelize scalable software engineering practices, test automation strategy, and DevOps alignment.</ol>
                        <ol style={{ verticalAlign: "center", textIndent: "-22px" }}><strong>✅ Access <img style={{ height: "20px", alignContent: "center", offset: "100px", verticalAlign: "text-bottom" }} src="/auto-mate.png"></img> Solutions—For Free:</strong> Clients who outsource testing to us get <strong>full access to Auto Mate Solutions</strong>, our in-house test automation platform, at <strong>no additional cost</strong>.</ol>
                        <ol style={{ verticalAlign: "center", textIndent: "-22px" }}><strong>✅ Faster Releases, Higher Confidence:</strong> With robust test coverage and automation pipelines in place, your teams move faster, reduce bugs, and boost user trust.</ol>
                        <ol style={{ verticalAlign: "center", textIndent: "-22px" }}><strong>✅ Build a Culture of Quality:</strong> We don’t just run tests. We help your developers, testers, and stakeholders adopt a quality-first mindset that lasts beyond our engagement.</ol>
                    </ul>
                </div>
            </div>
        );
    }
}

export default QualityEngineering;