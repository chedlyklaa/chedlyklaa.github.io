import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import { Github, Linkedin, Mail, Phone, MapPin, Award, Users, ExternalLink, Code, Database, Settings, Trophy } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("zRgomf2OMXQcxAlKd"); // You'll need to replace this with your actual EmailJS public key
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    
    try {
      const result = await emailjs.send(
        'service_z4nt6m5', // Replace with your EmailJS service ID
        'template_yush18h', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'chedlyklaa11@gmail.com', // Your email address
        }
      );
      console.log(result);
      if (result.status === 200) {
        setSubmitStatus('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
      period: "March 2024 - March 2025",
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
      title: "Folla and Follo – 2D Cooperative Multiplayer Platformer",
      description: "Folla and Follo is a Unity-based 2D multiplayer platformer where two players must collaborate to overcome obstacles and complete levels. The core mechanic revolves around teamwork: players must help each other navigate traps, solve physics-based puzzles, and collect all bananas and cherries scattered across the map before they can unlock the flag and advance to the next level. This design encourages communication and strategy, as neither player can succeed alone.",
      technologies: ["Unity", "C#", "Unity Multiplayer API", "Unity Animator", "Tilemap System"],
      achievements: [
        "2D cooperative platformer for two players",
        "Collectible system: bananas and cherries must be gathered to unlock the flag",
        "Physics-based puzzles requiring both players' collaboration",
        "Multiplayer support (local and networked play)",
        "Hand-crafted levels with increasing difficulty and creative challenges"
      ],
      type: "game",
      icon: "🎮",
      preview: "A Unity-based 2D cooperative multiplayer platformer"
    },
    {
      title: "SEO Management System – Real-time Analytics Dashboard",
      description: "I developed a comprehensive SEO management platform to simplify the optimization of websites and monitor their search engine performance in real-time. The system integrates data from Google Search Console and provides a dashboard for visualizing critical SEO metrics such as keyword rankings, backlinks, and crawl errors. It also includes tools to manage keywords, generate sitemaps, and create robots.txt files to guide search engine crawlers effectively. The architecture leverages Angular for a dynamic and responsive frontend, Node.js for backend API services, and MongoDB for structured data storage.",
      technologies: [
        "Angular", "Angular Universal (SSR)", "Node.js", "Express.js", "MongoDB", 
        "Google Search Console API", "JWT Authentication", "Syncfusion Charts", 
        "Angular Material", "Git", "Postman"
      ],
      achievements: [
        "SEO analytics dashboard with real-time insights",
        "Keyword and content management tools",
        "Sitemap and robots.txt generator",
        "User authentication and role-based access control",
        "Server-side rendering for improved SEO crawlability"
      ],
      type: "web",
      icon: "📊",
      preview: "Comprehensive SEO management platform with real-time analytics"
    },
    {
      title: "VR & AI-powered Physiotherapy Assistant",
      description: "A VR application enhanced with AI to help physiotherapists deliver personalized rehabilitation. Patients perform exercises in an immersive VR environment, guided by an AI avatar that provides real-time feedback. Therapists can monitor progress and adjust plans via a secure dashboard.",
      technologies: ["Unity 3D", "Meta Quest 2", "Node.js", "MongoDB", "Python (Scikit-learn, Flask)", "REST APIs"],
      achievements: [
        "VR avatar for guided physiotherapy exercises",
        "Real-time motion tracking and feedback",
        "AI-generated exercise recommendations",
        "Therapist dashboard for patient monitoring and analytics",
        "Secure patient data management"
      ],
      type: "vr",
      icon: "🦾",
      preview: "Immersive VR & AI assistant for physiotherapy"
    },
    {
      title: "Information Retrieval on Social Media Data: Gaza Case Study",
      description: "As part of a group project, I designed and implemented a system to index and search tweets related to the Gaza genocide using modern information retrieval techniques. The project included linguistic preprocessing (tokenization, stemming, cleaning), building an index with PyTerrier, and experimenting with retrieval models like TF-IDF, BM25, and DFR_BM25. The system was evaluated with standard IR metrics such as MAP, P@5, and R-Precision. Our analysis showed that BM25 outperformed other models on short-text social media data.",
      technologies: ["Python (NLTK, PyTerrier)", "JSON", "TSV", "Evaluation scripts"],
      achievements: [
        "Data collection from Twitter (500 tweets)",
        "Linguistic preprocessing pipeline (tokenization, stemming)",
        "Implementation of TF-IDF, BM25, PL2 models",
        "Evaluation with qrels using MAP, P@K",
        "Analysis of retrieval performance"
      ],
      type: "data",
      icon: "🔍",
      preview: "Information retrieval system for social media data analysis"
    },
    {
      title: "3D Online Cinema with Visioconferencing",
      description: "I developed an interactive 3D online cinema platform that combines real-time video conferencing with a shared movie-watching experience. Users can enter a virtual cinema environment built with Three.js, choose seats, and watch movies together while interacting via live audio and video chat. The platform provides a realistic spatial experience, allowing users to look around the cinema, see avatars of other participants, and enjoy synchronized playback.",
      technologies: [
        "React.js", "Three.js", "WebGL", "Node.js", "Express.js", "WebSocket", 
        "WebRTC", "Socket.io", "JWT", "MongoDB", "Tailwind CSS", "Shadcn UI",
        "react-three-fiber", "zustand", "simple-peer", "react-router", "axios"
      ],
      achievements: [
        "Immersive 3D cinema built with Three.js and React Three Fiber",
        "Video conferencing with WebRTC for real-time communication",
        "Synchronized movie playback for all connected users",
        "Avatar system with user position and orientation",
        "Secure authentication and session management"
      ],
      type: "3d",
      icon: "🎬",
      preview: "Interactive 3D cinema with real-time video conferencing"
    },
    {
      title: "Carpooling Mobile App with Flutter",
      description: "I developed a mobile carpooling (covoiturage) application that connects drivers and passengers for shared trips. Built with Flutter, the app offers a clean and responsive interface for creating, browsing, and booking rides. It integrates real-time location tracking and secure user authentication to ensure a safe and reliable experience. The backend, powered by Node.js and a SQL database, manages user data, trip information, and messaging between participants.",
      technologies: [
        "Flutter (Dart)", "Node.js", "Express.js", "MySQL/PostgreSQL", 
        "Google Maps API", "Firebase", "RESTful APIs", "Dio", 
        "Provider/Riverpod", "JWT"
      ],
      achievements: [
        "User registration & authentication",
        "Ride creation and search (by location, date, and seats available)",
        "Interactive map for route visualization",
        "Secure booking and in-app messaging between drivers & passengers",
        "Backend API with SQL database for trip and user management"
      ],
      type: "mobile",
      icon: "🚗",
      preview: "Mobile carpooling app connecting drivers and passengers"
    },
    {
      title: "3D Golf Scene with Animation and Physics",
      description: "I designed and implemented an interactive 3D golf scene as part of a modeling and animation project. Using Blender, I created custom 3D models such as the golf ball, terrain, trees, and flag. The scene was then imported into Unity, where I added animations and realistic physics to simulate golf ball movement, collisions, and environmental interactions. The project combines creative modeling with technical implementation to produce an engaging and dynamic virtual environment.",
      technologies: [
        "Blender", "Unity 3D (C#)", "Unity Physics", "Unity Particle System", 
        "Unity Animator"
      ],
      achievements: [
        "Custom 3D assets: terrain, trees, golf clubs, ball, and hole flag",
        "Realistic golf ball physics with trajectory and collision detection",
        "Animations for environmental elements (trees swaying, flag waving)",
        "Interactive scene playable in Unity"
      ],
      type: "3d",
      icon: "⛳",
      preview: "Interactive 3D golf scene with realistic physics and animations"
    }
  ];

  const waitingList = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, admin dashboard, and advanced AI-powered features for personalized shopping and smart inventory. Built with modern web technologies and responsive design.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "AI"],
      achievements: ["Payment gateway integration", "Real-time inventory tracking", "Mobile-responsive design", "AI-driven product recommendations"],
      type: "web",
      icon: "🛒",
      preview: "Complete online shopping platform with payment processing and AI integration"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and progress tracking. AI integration planned for smart task suggestions and automation.",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io", "AI (planned)"],
      achievements: ["Real-time collaboration", "Drag-and-drop interface", "Team management features", "AI-powered features coming soon"],
      type: "web",
      icon: "📋",
      preview: "Team collaboration tool with real-time task management (in waiting list)"
    }
  ];

  const skills = {
    "Languages": [
      { name: "JavaScript", icon: "⚡", source: "Self-taught & University Projects", usage: "React development, Node.js backend, browser automation" },
      { name: "Python", icon: "🐍", source: "Work at Saydalid & Personal Projects", usage: "Data analysis, automation scripts, API development, AI/ML" },
      { name: "Java", icon: "☕", source: "University Courses", usage: "Spring Boot applications, Android development" },
      { name: "C#", icon: "🎯", source: "Unity Game Development", usage: "Game development, desktop applications, Unity scripting" },
      { name: "C++", icon: "⚙️", source: "University Computer Science Program", usage: "System programming, algorithms implementation" },
      { name: "SQL", icon: "🗄️", source: "Database courses & Work projects", usage: "Database design, complex queries, optimization" },
      { name: "Dart", icon: "🎯", source: "Carpooling Mobile App", usage: "Flutter mobile development, cross-platform apps" }
    ],
    "Frameworks & Libraries": [
      { name: "React", icon: "⚛️", source: "Current work at Saydalid", usage: "Component development, state management, hooks" },
      { name: "Angular", icon: "🅰️", source: "Ijeni internship & SEO System project", usage: "SPA development, TypeScript integration" },
      { name: "Node.js", icon: "🟢", source: "Work projects & Internships", usage: "REST APIs, real-time applications, microservices" },
      { name: "Unity 3D", icon: "🎮", source: "Game development projects", usage: "3D game development, C# scripting, VR/AR" },
      { name: "Flutter", icon: "📱", source: "Carpooling Mobile App", usage: "Cross-platform mobile development, UI/UX" },
      { name: "Three.js", icon: "🌐", source: "3D Online Cinema project", usage: "3D web graphics, WebGL, interactive experiences" },
      { name: "Spring Boot", icon: "🍃", source: "Java backend development", usage: "RESTful services, dependency injection" }
    ],
    "AI & Machine Learning": [
      { name: "TensorFlow.js", icon: "🧠", source: "AI Games projects", usage: "Browser-based ML, speech recognition, computer vision" },
      { name: "PyTerrier", icon: "🔍", source: "Information Retrieval project", usage: "Search engine development, IR evaluation" },
      { name: "Scikit-learn", icon: "📊", source: "Physiotherapy AI project", usage: "Machine learning, data analysis" },
      { name: "OpenCV", icon: "👁️", source: "Hand Gesture Game", usage: "Computer vision, image processing" },
      { name: "MediaPipe", icon: "🖐", source: "Hand Gesture Game", usage: "Hand tracking, gesture recognition" }
    ],
    "Tools & Technologies": [
      { name: "Git/GitHub", icon: "📚", source: "Version control in all projects", usage: "Collaborative development, CI/CD pipelines" },
      { name: "MongoDB", icon: "🍃", source: "Multiple projects & Work", usage: "NoSQL database design, aggregation pipelines" },
      { name: "MySQL/PostgreSQL", icon: "🐬", source: "Database projects", usage: "Relational database design, stored procedures" },
      { name: "Docker", icon: "🐳", source: "Development workflow", usage: "Containerization, deployment" },
      { name: "CI/CD", icon: "🔄", source: "Work experience at Saydalid", usage: "Automated deployment, pipeline management" },
      { name: "WebRTC", icon: "📹", source: "3D Cinema project", usage: "Real-time communication, video streaming" },
      { name: "Socket.io", icon: "🔌", source: "Real-time projects", usage: "WebSocket communication, live updates" }
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
      title: "2nd Place – Hackathon by Association Talim",
      period: "2023",
      description: "Designed and developed an educational game for children to raise awareness about bullying. The game presents interactive scenarios where players choose from three possible actions to deal with bullying situations.",
      icon: <Trophy size={24} />,
      highlights: [
        "Encourages positive decision-making by rewarding correct choices",
        "Guides players toward empathy and resilience",
        "Focused on making learning engaging and impactful for young audiences"
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
            <a href="/games" className="nav-button games-link">
              Games
            </a>
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
              <div className="hero-games-invite">
              <a href="/games" className="games-cta-button">🎮 Play Games</a>

            </div>
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
          <div className="hero-avatar">
            <img src="https://media.licdn.com/dms/image/v2/C5603AQGTkbBMUh4DmQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1640377800135?e=1756339200&v=beta&t=iAN_oMPw3TNE4WT4la3Lx-_wb1ymTpfOMVBbr3kFPO4" alt="My Avatar" className="avatar-image" />
          </div>
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
                  {project.title === "VR & AI-powered Physiotherapy Assistant" ? (
                    <Link to="/physiotherapy" className="see-more-btn">
                      See More <ExternalLink size={16} />
                    </Link>
                  ) : (
                    <button className="see-more-btn" disabled>
                      See More <ExternalLink size={16} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
          {waitingList.length > 0 && (
            <div className="waiting-list-section">
              <h3 className="section-title" style={{marginTop: '2rem'}}>Waiting List</h3>
              <div className="projects-grid">
                {waitingList.map((project, index) => (
                  <div key={index} className="project-card waiting-list-card">
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
                    <span className="waiting-list-label">In Waiting List</span>
                  </div>
                ))}
              </div>
            </div>
          )}
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
                    <div key={index} className="skill-item">
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
                <a href="mailto:chedlyklaa11@gmail.com" className="contact-link" target="_blank" rel="noopener noreferrer">
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