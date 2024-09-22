import React from "react";
import './About.css'; // Import CSS file for styling

function About() {
    return (
        <div className="about">
            <header className="about-header">
                <h1>Welcome to the About Page!</h1>
                <p>Learn more about us and our mission.</p>
            </header>
            <section className="about-content">
                <div className="mission-section">
                    <h2>Our Mission</h2>
                    <p>
                        We strive to deliver the best solutions for our users, with a focus on innovation, quality, and integrity. Our mission is to empower our customers by providing top-notch services that cater to their needs.
                    </p>
                </div>
                <div className="team-section">
                    <h2>Meet Our Team</h2>
                    <div className="team-cards">
                        <div className="team-card">
                            <img src="https://via.placeholder.com/150" alt="Team Member 1" />
                            <h3>John Doe</h3>
                            <p>CEO & Founder</p>
                        </div>
                        <div className="team-card">
                            <img src="https://via.placeholder.com/150" alt="Team Member 2" />
                            <h3>Jane Smith</h3>
                            <p>Lead Developer</p>
                        </div>
                        <div className="team-card">
                            <img src="https://via.placeholder.com/150" alt="Team Member 3" />
                            <h3>Mike Johnson</h3>
                            <p>Product Manager</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
