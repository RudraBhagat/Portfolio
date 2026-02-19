import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects">

      {/* Header */}
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>
          A showcase of my Data Analysis, Machine Learning, and Deep Learning
          projects demonstrating end-to-end development and deployment.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">

        {/* Project 1 */}
        <div className="project-card">
          <div>
            <h3>Car Price Prediction System</h3>
            <p className="project-desc">
              A machine learning model that predicts car prices based on features
              such as brand, mileage, fuel type, and manufacturing year.
            </p>

            <div className="project-tech">
              <span>Python</span>
              <span>Pandas</span>
              <span>Scikit-learn</span>
              <span>numpy</span>
              <span>Random Forest</span>
              <span>Streamlit</span>
              <span>Jupyter Notebook</span>
            </div>

            <ul className="project-points">
              <li>Performed data cleaning and feature engineering</li>
              <li>Trained Random Forest regression model</li>
              <li>Deployed the model using Streamlit web app</li>
            </ul>
          </div>

          <div className="project-links">
            <a href="https://github.com/RudraBhagat/Car_Price_Prediction" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <div>
            <h3>Brain Tumor Classification</h3>
            <p className="project-desc">
              Deep learning-based system to classify brain MRI images and detect
              tumor presence using CNN architecture.
            </p>

            <div className="project-tech">
              <span>Python</span>
              <span>TensorFlow</span>
              <span>CNN</span>
              <span>OpenCV</span>
              <span>VGG16</span>
              <span>Transfer Learning</span>
              <span>Jupyter Notebook</span>
            </div>

            <ul className="project-points">
              <li>Built and trained CNN model for image classification</li>
              <li>Applied data augmentation for better accuracy</li>
              <li>Evaluated model using accuracy and loss metrics</li>
            </ul>
          </div>

          <div className="project-links">
            <a href="https://github.com/RudraBhagat/Brain_Tumor_Detection" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <div>
            <h3>EV Cars Sales Forecasting</h3>
            <p className="project-desc">
              Forecasted future sales using historical data with statistical
              time series modeling techniques.
            </p>

            <div className="project-tech">
              <span>Python</span>
              <span>SARIMA</span>
              <span>Pandas</span>
              <span>Matplotlib</span>
              <span>Streamlit</span>
              <span>Data Analysis</span>
              <span>Time Forecasting</span>
            </div>

            <ul className="project-points">
              <li>Performed trend and seasonality analysis</li>
              <li>Built SARIMA forecasting model</li>
              <li>Visualized forecasts and insights</li>
            </ul>
          </div>

          <div className="project-links">
            <a href="https://github.com/RudraBhagat/Electric_Car_Sales" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://electric-car-sales.streamlit.app/" target="_blank" rel="noreferrer">Live Demo</a> 
          </div>
        </div>

        {/* Project 4 */}
        <div className="project-card">
          <div>
            <h3>Fitness Buddy - AI Fitness Assistant</h3>
            <p className="project-desc">
              Fitness Buddy is an intelligent virtual assistant built to promote a healthier lifestyle by offering personalized workouts, nutritional suggestions, and daily motivation — all through a simple conversational interface.
            </p>

            <div className="project-tech">
              <span>IBM Cloud Lite Services</span>
              <span>IBM Watsonx AI Studio & AI Runtime</span>
              <span>IBM Granite Foundation Model</span>
              <span>IBM Cloud Agent Lab</span>
              <span>Natural Language Processing (NLP)</span>
            </div>

            <ul className="project-points">
              <li>Personalized workout plans for home or gym</li>
              <li>Meal suggestions tailored to user goals and preferences</li>
              <li>Built using IBM Watson & Granite for scalability and NLP accuracy</li>
            </ul>
          </div>

          <div className="project-links">
            <a href="https://github.com/RudraBhagat/Fitness_Buddy" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://drive.google.com/file/d/1GXrY9hX4D2s37bSstYwa_mWRgz7MrB9W/view" target="_blank" rel="noreferrer">Demo</a>
          </div>
        </div>

        {/* Project 5 */}
        <div className="project-card">
          <div>
            <h3>BlinkIt Sales Analysis</h3>
            <p className="project-desc">
              Analyzed sales data for BlinkIt, a grocery delivery service, to identify trends and optimize inventory management.
            </p>

            <div className="project-tech">
              <span>Power BI</span>
              <span>Excel</span>
              <span>Data modeling</span>
              <span>Interactive filters</span>
              <span>visualizations</span>
            </div>

            <ul className="project-points">
              <li>Personalized workout plans for home or gym</li>
              <li>Meal suggestions tailored to user goals and preferences</li>
              <li>Built using IBM Watson & Granite for scalability and NLP accuracy</li>
            </ul>
          </div>

          <div className="project-links">
            <a href="https://github.com/RudraBhagat/blinkit-power-bi-dashboard" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        {/* Project 6 */}
        <div className="project-card">
          <div>
            <h3>LokSabha Data Analysis</h3>
            <p className="project-desc">
              Analyzed LokSabha election data to uncover voting patterns, demographic insights, and regional trends across India.
            </p>

            <div className="project-tech">
              <span>Python</span>
              <span>Pandas</span>
              <span>NumPy</span>
              <span>Matplotlib</span>
              <span>Seaborn</span>
              <span>Jupyter Notebook</span>
            </div>

            <ul className="project-points">
              <li>Personalized workout plans for home or gym</li>
              <li>Meal suggestions tailored to user goals and preferences</li>
              <li>Built using IBM Watson & Granite for scalability and NLP accuracy</li>
            </ul>
          </div>

          <div className="project-links">
            <a href="https://github.com/RudraBhagat/LokSabha-Data-Analysis" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
