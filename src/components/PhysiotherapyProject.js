import React from 'react';
import './PhysiotherapyProject.css';

const physiotherapyProject = {
  title: "VR & AI-powered Physiotherapy Assistant",
  icon: "🦾",
  preview: "Immersive VR & AI assistant for physiotherapy",
  description: "A VR application enhanced with AI to help physiotherapists deliver personalized rehabilitation. Patients perform exercises in an immersive VR environment, guided by an AI avatar that provides real-time feedback. Therapists can monitor progress and adjust plans via a secure dashboard.",
  technologies: [
    "Unity 3D",
    "Meta Quest 2",
    "Node.js",
    "MongoDB",
    "Python (Scikit-learn, Flask)",
    "REST APIs"
  ],
  achievements: [
    "VR avatar for guided physiotherapy exercises",
    "Real-time motion tracking and feedback",
    "AI-generated exercise recommendations",
    "Therapist dashboard for patient monitoring and analytics",
    "Secure patient data management"
  ],
  repo: "https://github.com/yourusername/physiotherapy-vr-ai" // Replace with your actual repo link
};

const PhysiotherapyProject = () => (
  <div className="physio-big-box">
    <main className="physio-fullpage">
      <header className="physio-header">
        <h1 className="physio-title">{physiotherapyProject.icon} {physiotherapyProject.title}</h1>
        <p className="physio-preview">{physiotherapyProject.preview}</p>
      </header>
      <div className="physio-main-content">
        <div className="physio-main-left">
          <section className="physio-description-section">
            <h2>Description</h2>
            <p>{physiotherapyProject.description}</p>
          </section>
          <section className="physio-features-section">
            <h2>Key Features</h2>
            <ul>
              {physiotherapyProject.achievements.map((achievement, achievementIndex) => (
                <li key={achievementIndex}>{achievement}</li>
              ))}
            </ul>
          </section>
          <a
            href={physiotherapyProject.repo}
            className="physio-repo-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Repository
          </a>
        </div>
        <div className="physio-main-right">
          <section className="physio-images-section">
            <h2>Gallery</h2>
            <div className="physio-images-placeholder">
              {/* Add your images here */}
              <div className="physio-image-box">Image 1</div>
              <div className="physio-image-box">Image 2</div>
              <div className="physio-image-box">Image 3</div>
            </div>
          </section>
        </div>
      </div>
      <section className="physio-tech-section">
        <h2>Tech Stack</h2>
        <ul className="physio-tech-list">
          {physiotherapyProject.technologies.map((tech, techIndex) => (
            <li key={techIndex}>{tech}</li>
          ))}
        </ul>
      </section>
    </main>
  </div>
);

export default PhysiotherapyProject; 