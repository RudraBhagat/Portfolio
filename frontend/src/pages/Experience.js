import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <section className="experience">
      {/* Header */}
      <div className="section-header">
        <div className="header-line"></div>
        <h3>Experience</h3>
        <div className="header-line"></div>
      </div>

      {/* Timeline */}
      <div className="timeline">

        {/* Timeline Item 1 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-card">
            <span className="timeline-date">Oct 2025 – Present</span>
            <h4 className="timeline-role">AI/ML Engineer</h4>
            <p className="timeline-company">Farmseasy Tech Solutions Private Limited · Hybrid</p>

            <ul>
              <li>Contributing to an AI-powered crop life cycle management system designed to support over 1,000 farmers with crop stage insights and advisory automation.
              </li>
              <li>Engineering machine learning models for crop growth forecasting, nutrient estimation, and anomaly detection using satellite and environmental datasets, improving advisory accuracy by 20 to 30 percent.</li>
              <li> Collaborating with agronomists and product teams to convert domain expertise into structured datasets and machine learning-ready workflows.</li>
            </ul>

            <div className="tech-stack">
              <span>Python</span>
              <span>Pandas</span>
              <span>NumPy</span>
              <span>Scikit-learn</span>
              <span>Flask</span>
            </div>
          </div>
        </div>

        {/* Timeline Item 2 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-card">
            <span className="timeline-date">Jul 2025 – Aug 2025</span>
            <h4 className="timeline-role">AI & Cloud Intern</h4>
            <p className="timeline-company">IBM SkillsBuild - AICTE and Edunet Foundation · Remote</p>

            <ul>
              <li> Created a cloud-hosted AI chatbot handling over 500 test queries with average response latency under 1.5 seconds using IBM Cloud Functions</li>
              <li>Utilized IBM AutoAI to shorten experimentation cycles by 40 percent and enhance model selection efficiency</li>
              <li>Designed an LLM-powered intelligent workflow using Granite models to enable automated multi-step decision-making</li>
            </ul>

            <div className="tech-stack">
              <span>IBM Cloud Lite Services</span>
              <span>IBM Watsonx AI Studio</span>
              <span>IBM Watsonx AI Runtime</span>
              <span>IBM Cloud Agent Lab</span>
              <span>IBM Granite Foundation Model</span>
              <span>IBM AutoML</span>
            </div>
          </div>
        </div>

        {/* Timeline Item 3 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-card">
            <span className="timeline-date">Mar 2025 – Jun 2025</span>
            <h4 className="timeline-role">Intern</h4>
            <p className="timeline-company">SERVICENOW CERTIFIED SYSTEM ADMINISTRATOR VIRTUAL INTERNSHIP PROGRAM · Remote</p>

            <ul>
              <li>Completed a virtual internship program focused on workflow automation, testing frameworks, and system administration fundamentals.</li>
              <li>Created responsive front-end interfaces using HTML and CSS aligned with project requirements.</li>
              <li>Supported an Industry 4.0-based project by delivering application screens and assisting with implementation tasks.</li>
            </ul>

            <div className="tech-stack">
              <span>ServiceNow Platform</span>
              <span>Automated Test Framework (ATF)</span>
              <span>Workflow Automation</span>
              <span>System Administration</span>
              <span>Reporting & Dashboards</span>
              <span>Micro-Certification Tools</span>
            </div>
          </div>
        </div>

        {/* Timeline Item 4 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-card">
            <span className="timeline-date">Jul 2022 – Aug 2022</span>
            <h4 className="timeline-role">Trainee - Software Design and Development</h4>
            <p className="timeline-company">Modi Innovations Private Limited · Hybrid</p>

            <ul>
              <li>Gained hands-on experience in .NET application development and end-to-end software workflows.</li>
              <li>Gained hands-on exposure to ServiceNow platform concepts, including agentic AI basics, reporting, and system administration essentials.</li>
              <li>Developed foundational knowledge for micro-certifications and CSA exam preparation through structured learning modules and practical tasks.</li>
            </ul>

            <div className="tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>.NET</span>
              <span>SQL Server</span>
              <span>Visual Studio</span>
            </div>
          </div>
        </div>

        

      </div>
    </section>
  );
}

export default Experience;
