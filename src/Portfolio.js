import React, { useState } from 'react';
import './Portfolio.css';
import { Github, Linkedin, Mail, Phone, MapPin, Award, Users, ExternalLink, Code, Database, Settings } from 'lucide-react';

const Portfolio = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
      setSubmitStatus('Thank you! Your message has been sent successfully.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const experience = [
    {
      title: "Software Developer",
      company: "Saydalid",
      companyUrl: "https://saydalid.com",
      period: "March 2024 - Present",
      description: "Full-stack development with modern technologies, implementing monitoring solutions and working with agile methodologies.",
      technologies: ["Backend", "Frontend", "CI/CD", "Grafana", "Python", "Scrum"],
      achievements: [
        "Developed and maintained web applications using React and Node.js",
        "Implemented monitoring solutions with Grafana and Prometheus",
        "Collaborated with cross-functional teams using agile methodologies",
        "Optimized database queries and improved application performance"
      ]
    },
    {
      title: "End of Study Intern",
      company: "Ijeni",
      companyUrl: "https://ijeni.com",
      period: "January 2023 - May 2023",
      description: "Designed and implemented SEO system with significant performance improvements and user-friendly dashboard.",
      technologies: ["Angular", "Node.js", "MongoDB", "Google Search Console"],
      achievements: [
        "Designed and developed a comprehensive SEO management system",
        "Integrated Google Search Console API for real-time analytics",
        "Created user-friendly dashboard with data visualization",
        "Achieved 15% improvement in keyword rankings and 25% reduction in analysis time"
      ]
    },
    {
      title: "Intern",
      company: "Cloud Control",
      companyUrl: "https://cloudcontrol.com",
      period: "August 2021",
      description: "Created website and donation management application for an association using ODOO and web technologies.",
      technologies: ["ODOO", "HTML", "CSS", "JavaScript"],
      achievements: [
        "Developed a complete web solution for an association",
        "Implemented donation tracking and reporting features",
        "Created responsive and user-friendly interfaces",
        "Used ODOO framework for backend development"
      ]
    }
  ];

  const projects = [
    {
      title: "Folla and Follo",
      description: "Multiplayer collaborative game where players work together to collect items and reach the finish line. Achieved 90% completion rate of planned functionalities.",
      technologies: ["Unity", "C#"],
      achievements: ["90% completion rate", "Multiplayer functionality", "Creative problem-solving"],
      type: "game",
      icon: "🎮",
      preview: "A Unity-based multiplayer game with collaborative mechanics"
    },
    {
      title: "SEO System",
      description: "A comprehensive SEO management system with real-time analytics that improved keyword rankings by 15% and reduced data analysis time by 25%.",
      technologies: ["Angular", "Node.js", "MongoDB", "Google Search Console"],
      achievements: ["15% improvement in keyword rankings", "25% reduction in analysis time", "User-friendly dashboard"],
      type: "web",
      icon: "📊",
      preview: "Real-time SEO analytics and management dashboard"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with modern web technologies and responsive design.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      achievements: ["Payment gateway integration", "Real-time inventory tracking", "Mobile-responsive design"],
      type: "web",
      icon: "🛒",
      preview: "Complete online shopping platform with payment processing"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and progress tracking. Includes drag-and-drop functionality.",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      achievements: ["Real-time collaboration", "Drag-and-drop interface", "Team management features"],
      type: "web",
      icon: "📋",
      preview: "Team collaboration tool with real-time task management"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application with location-based forecasts, historical data visualization, and customizable alerts. Features beautiful data visualization.",
      technologies: ["JavaScript", "Chart.js", "OpenWeather API", "CSS3"],
      achievements: ["Real-time weather data", "Interactive charts", "Location-based forecasts"],
      type: "web",
      icon: "🌤️",
      preview: "Interactive weather dashboard with data visualization"
    }
  ];

  const skills = {
    "Languages": [
      { name: "JavaScript", icon: "⚡", source: "Self-taught & University Projects", usage: "React development, Node.js backend, browser automation" },
      { name: "Python", icon: "🐍", source: "Work at Saydalid & Personal Projects", usage: "Data analysis, automation scripts, API development" },
      { name: "Java", icon: "☕", source: "University Courses", usage: "Spring Boot applications, Android development" },
      { name: "C#", icon: "🎯", source: "Unity Game Development", usage: "Game development, desktop applications" },
      { name: "C++", icon: "⚙️", source: "University Computer Science Program", usage: "System programming, algorithms implementation" },
      { name: "SQL", icon: "🗄️", source: "Database courses & Work projects", usage: "Database design, complex queries, optimization" }
    ],
    "Frameworks": [
      { name: "React", icon: "⚛️", source: "Current work at Saydalid", usage: "Component development, state management, hooks" },
      { name: "Angular", icon: "🅰️", source: "Ijeni internship & SEO System project", usage: "SPA development, TypeScript integration" },
      { name: "Node.js", icon: "🟢", source: "Work projects & Internships", usage: "REST APIs, real-time applications, microservices" },
      { name: "Unity", icon: "🎮", source: "Game development project", usage: "3D game development, C# scripting" },
      { name: "Spring Boot", icon: "🍃", source: "Java backend development", usage: "RESTful services, dependency injection" }
    ],
    "Tools": [
      { name: "Git/GitHub", icon: "📚", source: "Version control in all projects", usage: "Collaborative development, CI/CD pipelines" },
      { name: "Grafana", icon: "📈", source: "Monitoring at Saydalid", usage: "Data visualization, system monitoring" },
      { name: "Prometheus", icon: "⚡", source: "System monitoring at work", usage: "Metrics collection, alerting systems" },
      { name: "MongoDB", icon: "🍃", source: "Multiple projects & Work", usage: "NoSQL database design, aggregation pipelines" },
      { name: "MySQL", icon: "🐬", source: "University & Personal projects", usage: "Relational database design, stored procedures" },
      { name: "CI/CD", icon: "🔄", source: "Work experience at Saydalid", usage: "Automated deployment, pipeline management" }
    ]
  };

  const achievements = [
    {
      title: "President - ISAMM Microsoft Club",
      period: "2021 - 2022",
      description: "Led a team of 15 members in organizing tech events, workshops, and hackathons. Managed club operations and fostered a collaborative learning environment.",
      icon: <Users size={24} />,
      highlights: [
        "Organized 10+ technical workshops and hackathons",
        "Increased club membership by 40%",
        "Established partnerships with tech companies"
      ]
    },
    {
      title: "Athlete - Tunisian Para-rowing Team",
      period: "2018 - 2021",
      description: "Competed at national and international level, demonstrating discipline, teamwork, and perseverance.",
      icon: <Award size={24} />,
      highlights: [
        "World Championship Bulgaria 2018",
        "African Championship 2021",
        "Developed strong leadership and teamwork skills"
      ]
    }
  ];

  const scrollProjects = (direction) => {
    const container = document.getElementById('projects-container');
    if (container) {
      const scrollAmount = 400;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="nav-logo">Chedly Klaa</h2>
          <div className="nav-menu">
            {[
              { id: 'about', label: 'About' },
              { id: 'experience', label: 'Experience' },
              { id: 'projects', label: 'Projects' },
              { id: 'skills', label: 'Skills' },
              { id: 'achievements', label: 'Achievements' },
              { id: 'contact', label: 'Contact' }
            ].map(section => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="nav-button"
              >
                {section.label}
              </button>
            ))}
          </div>
          <div className="mobile-menu">
            <button className="mobile-menu-button">☰</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">Klaa Mohamed Chedly</h1>
            <h2 className="hero-title">Software Engineer Student</h2>
            <p className="hero-tagline">Building impactful and elegant full-stack experiences.</p>
            <div className="hero-buttons">
              <button onClick={() => scrollToSection('projects')} className="hero-btn primary">
                View Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="hero-btn secondary">
                Contact Me
              </button>
            </div>
            <div className="hero-social">
              <a href="https://github.com/chedlyklaa" className="social-link" target="_blank" rel="noopener noreferrer">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/chedly-klaa/" className="social-link" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-avatar">CK</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="about-description">
                I'm a passionate Software Engineering student at ISAMM (Higher Institute of Art and Multimedia Manouba), 
                with a deep interest in creating elegant and impactful technology solutions. My journey in software development 
                has been driven by a desire to build applications that not only function flawlessly but also provide 
                exceptional user experiences.
              </p>
              <p className="about-description">
                Currently working as a Software Developer at Saydalid, I specialize in full-stack development, 
                implementing monitoring solutions, and working with modern technologies. I believe in writing clean, 
                maintainable code and staying up-to-date with the latest industry trends and best practices.
              </p>
            </div>
            <div className="about-contact">
              <div className="contact-item">
                <Mail size={20} className="contact-icon" />
                <span>chedlyklaa11@gmail.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={20} className="contact-icon" />
                <span>Tunis, Tunisia</span>
              </div>
              <div className="contact-item">
                <Phone size={20} className="contact-icon" />
                <span>+216 29723027</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="experience-grid">
            {experience.map((job, index) => (
              <div key={index} className="experience-card">
                <div className="experience-header">
                  <div className="experience-info">
                    <h3 className="job-title">{job.title}</h3>
                    <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="company-link">
                      {job.company}
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  <span className="job-period">{job.period}</span>
                </div>
                <p className="job-description">{job.description}</p>
                <div className="job-technologies">
                  <h4>Technologies:</h4>
                  <div className="tech-tags">
                    {job.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="job-achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {job.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-wrapper">
            <button 
              onClick={() => scrollProjects('left')}
              className="scroll-button left"
              aria-label="Scroll left"
            >
              ‹
            </button>
            <button 
              onClick={() => scrollProjects('right')}
              className="scroll-button right"
              aria-label="Scroll right"
            >
              ›
            </button>
            <div id="projects-container" className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <div className="project-header">
                    <div className="project-icon">{project.icon}</div>
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                  <p className="project-preview">{project.preview}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  <div className="project-achievements">
                    <h4>Key Achievements:</h4>
                    <ul>
                      {project.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  <button className="see-more-btn">
                    See More <ExternalLink size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <div key={category} className={`skill-category category-${categoryIndex + 1}`}>
                <div className="skill-category-header">
                  {categoryIndex === 0 && <Code size={24} className="category-icon" />}
                  {categoryIndex === 1 && <Database size={24} className="category-icon" />}
                  {categoryIndex === 2 && <Settings size={24} className="category-icon" />}
                  <h3 className="skill-category-title">{category}</h3>
                </div>
                <div className="skills-list">
                  {skillList.map((skill, index) => (
                    <div key={index} className="skill-item" title={`${skill.source} - ${skill.usage}`}>
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <div className="skill-tooltip">
                        <div className="tooltip-content">
                          <h4>{skill.name}</h4>
                          <p><strong>Learned from:</strong> {skill.source}</p>
                          <p><strong>Usage:</strong> {skill.usage}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section">
        <div className="container">
          <h2 className="section-title">Achievements & Extra</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-header">
                  <div className="achievement-icon">
                    {achievement.icon}
                  </div>
                  <div className="achievement-info">
                    <h3 className="achievement-title">{achievement.title}</h3>
                    <span className="achievement-period">{achievement.period}</span>
                  </div>
                </div>
                <p className="achievement-description">{achievement.description}</p>
                <ul className="achievement-highlights">
                  {achievement.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-form-section">
              <h3>Send me a message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label>Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="form-textarea"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="submit-button"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitStatus && (
                  <div className="success-message">
                    {submitStatus}
                  </div>
                )}
              </form>
            </div>
            
            <div className="contact-info-section">
              <h3>Connect with me</h3>
              <div className="contact-links">
                <a href="mailto:chedlyklaa11@gmail.com" className="contact-link">
                  <Mail size={24} />
                  <span>chedlyklaa11@gmail.com</span>
                </a>
                <a href="https://github.com/chedlyklaa" className="contact-link" target="_blank" rel="noopener noreferrer">
                  <Github size={24} />
                  <span>GitHub</span>
                </a>
                <a href="https://linkedin.com/in/chedly-klaa/" className="contact-link" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-social">
              <a href="https://github.com/chedlyklaa" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/chedly-klaa/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="mailto:chedlyklaa11@gmail.com">
                <Mail size={20} />
              </a>
            </div>
            <p className="footer-copyright">
              © 2024 Klaa Mohamed Chedly. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;