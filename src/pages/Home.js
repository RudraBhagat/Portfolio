import React, { useEffect, useState, useMemo } from 'react';
import './Home.css';

function Home() {

  /* =============================
     TYPEWRITER ROLES (MEMOIZED)
     ============================= */

  const roles = useMemo(() => [
    "Data Scientist",
    "ML Engineer",
    "AI Enthusiast",
    "Tech & Gadget Enthusiast"
  ], []);

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  /* =============================
     TYPEWRITER EFFECT
     ============================= */

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } 
      else if (isDeleting && charIndex > 0) {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } 
      else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1200);
      } 
      else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <section className="home">

      {/* =============================
          HERO SECTION
          ============================= */}
      <div className="hero">
        <div className="hero-inner">

          {/* Left Content */}
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="accent-text">Rudra Bhagat</span>
            </h1>

            {/* TYPEWRITER SUBTITLE */}
            <p className="hero-subtitle">
              {text}
              <span className="cursor">|</span>
            </p>

            <p className="hero-description">
              I build data-driven solutions using Machine Learning and Deep Learning.
            </p>

            <div className="cta-buttons">
              <a href="/projects" className="btn btn-primary">
                View Projects
              </a>

              <a
                href="/resume/Rudra_Bhagat_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="hero-image">
            <img
              src={require('../assets/comment-devenir-intelligent-e1639848607825.jpg')}
              alt="AI Brain"
            />
          </div>

        </div>
      </div>

      {/* =============================
          ABOUT ME
          ============================= */}
      <div className="about">
        <div className="section-header">
          <div className="header-line"></div>
          <h3>About Me</h3>
          <div className="header-line"></div>
        </div>

        <p className="about-text">
          I am a final year engineering student specializing in Data Science and Machine Learning.
          I have hands-on experience building end-to-end ML solutions including data preprocessing,
          feature engineering, model training, evaluation, and deployment.

          I actively explore emerging AI technologies and enjoy experimenting with new tech gadgets
          that enhance productivity and innovation. My goal is to grow as a data science professional
          by contributing to impactful, real-world projects.
        </p>
      </div>

      {/* =============================
          SKILLS
          ============================= */}
      <div className="skills">
        <div className="section-header">
          <div className="header-line"></div>
          <h3>Key Skills & Expertise</h3>
          <div className="header-line"></div>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <h4>Programming</h4>
            <p>Python, SQL, HTML, CSS, JavaScript</p>
          </div>

          <div className="skill-card">
            <h4>ML / DL</h4>
            <p>Scikit-learn, TensorFlow, PyTorch, OpenCV</p>
          </div>

          <div className="skill-card">
            <h4>Data Analysis</h4>
            <p>Pandas, NumPy, EDA, Visualization</p>
          </div>

          <div className="skill-card">
            <h4>Tools</h4>
            <p>Flask, Git, MySQL, Power BI, Excel</p>
          </div>
        </div>
      </div>

      {/* =============================
          HIGHLIGHTS
          ============================= */}
      <div className="highlights">
        <div className="section-header">
          <div className="header-line"></div>
          <h3>Key Achievements</h3>
          <div className="header-line"></div>
        </div>

        <div className="highlights-grid">
          <div className="highlight-card">
            <div className="highlight-number">5+</div>
            <p>ML Projects Completed</p>
          </div>

          <div className="highlight-card">
            <div className="highlight-number">4+</div>
            <p>Models Deployed</p>
          </div>

          <div className="highlight-card">
            <div className="highlight-number">∞</div>
            <p>Passion for Learning</p>
          </div>
        </div>
      </div>

      {/* =============================
          QUICK NAV
          ============================= */}
      <div className="quick-nav">
        <div className="section-header">
          <div className="header-line"></div>
          <h3>Let's Connect</h3>
          <div className="header-line"></div>
        </div>

        <div className="nav-links">
          <a href="/projects" className="nav-link">
            <span className="link-icon">→</span>
            <span>Explore My Projects</span>
          </a>

          <a href="/experience" className="nav-link">
            <span className="link-icon">→</span>
            <span>My Experience</span>
          </a>
        </div>
      </div>

    </section>
  );
}

export default Home;