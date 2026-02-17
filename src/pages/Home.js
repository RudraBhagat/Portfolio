import React from 'react';
import './Home.css';

function Home() {
  return (
    <section className="home">
    {/* Hero Section */}
    <div className="hero">
      <div className="hero-inner">
    
      {/* Left Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="accent-text">Rudra Bhagat</span>
        </h1>
        <p className="hero-subtitle">Data Scientist | ML Engineer | AI Enthusiast</p>
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
            className="btn btn-secondary"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Image */}
        <div className="hero-image">
          <img src={require('D:\\Portfolio\\src\\assets\\comment-devenir-intelligent-e1639848607825.jpg')} alt="AI Brain" />
        </div>
      </div>
    </div>


      {/* About Me */}
      <div className="about">
        <div className="section-header">
          <div className="header-line"></div>
          <h3>About Me</h3>
          <div className="header-line"></div>
        </div>
        <p className="about-text">
           I am a final year engineering student specializing in Data Science and Machine Learning. With a strong foundation in programming, statistics, data analysis and machine learning,  I have completed several projects that demonstrate my ability to build and deploy machine learning models.

            I have hands-on experience in building end-to-end machine learning projects, including data preprocessing, feature engineering, model selection, evaluation, and deployment. I have worked with tools and frameworks such as Python, Pandas, NumPy, Scikit-learn, TensorFlow, and PyTorch, and I am comfortable deploying models using Flask and related technologies. I continuously explore new techniques in machine learning and deep learning to strengthen my problem-solving capabilities.

            My goal is to grow as a data science professional by contributing to impactful projects while constantly upgrading my technical and analytical skills. I am particularly interested in areas such as predictive modeling, deep learning, and data-driven decision-making. I believe in writing clean, efficient code and following best practices to build scalable and reliable data solutions.
        </p>
      </div>

      {/* Skills */}
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
            <h4>ML/DL Frameworks</h4>
            <p>Scikit-learn, TensorFlow, PyTorch, OpenCV</p>
          </div>
          <div className="skill-card">
            <h4>Data Processing</h4>
            <p>Pandas, NumPy, Matplotlib, Seaborn, Exploratory Data Analysis</p>
          </div>
          <div className="skill-card">
            <h4>Tools & Platforms</h4>
            <p>Flask, Git, MySQL, Power BI, Excel, Jupyter Notebook</p>
          </div>
          <div className="skill-card">
            <h4>Machine Learning</h4>
            <p>Regression, Classification, Clustering, Neural Networks</p>
          </div>
        </div>
      </div>

      {/* Highlights */}
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
            <div className="highlight-number">3+</div>
            <p>Models Deployed & Tested</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-number">∞</div>
            <p>Passion for Learning</p>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
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
          <a href="/contact" className="nav-link">
            <span className="link-icon">→</span>
            <span>Get In Touch</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;

