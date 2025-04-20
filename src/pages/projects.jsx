import React from 'react';
import './joshu.css'; // Make sure the CSS is correctly linked

const Projects = () => {
  return (
    <>
     

      {/* Main */}
      <main>
        <section className="projects-section">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Explore some of the cool things I’ve built.</p>
          <div className="container">
            <div className="projects-grid">
              <div className="project-card">
                <h3>Task Manager App</h3>
                <p>A powerful task planner with drag-and-drop, analytics, Pomodoro, and calendar features built using React + Redux.</p>
                <a href="#" className="project-link">View Project</a>
              </div>
              <div className="project-card">
                <h3>School Management System</h3>
                <p>Desktop app built with PyQt and SQLite to manage student data, fees, and academic records with beautiful UI.</p>
                <a href="#" className="project-link">View Project</a>
              </div>
              <div className="project-card">
                <h3>Chat Application</h3>
                <p>Real-time chat with notifications, groups, likes, and status features using Node.js, Socket.io, and MongoDB.</p>
                <a href="#" className="project-link">View Project</a>
              </div>
              <div className="project-card">
                <h3>E-Commerce Website</h3>
                <p>Responsive frontend with secure cart, product listing, and checkout using React, Firebase, and TailwindCSS.</p>
                <a href="#" className="project-link">View Project</a>
              </div>
              <div className="project-card">
                <h3>Portfolio Website</h3>
                <p>Personal portfolio built with HTML, CSS, and JS showcasing my skills and contact information.</p>
                <a href="#" className="project-link">View Project</a>
              </div>
              <div className="project-card">
                <h3>Blog CMS</h3>
                <p>A content management system with admin panel, Markdown support, and user authentication using Next.js + MongoDB.</p>
                <a href="#" className="project-link">View Project</a>
              </div>
              <div className="project-card">
                <h3>Weather Forecast App</h3>
                <p>Weather app fetching real-time data using OpenWeatherMap API and displaying beautiful UI using TailwindCSS.</p>
                <a href="#" className="project-link">View Project</a>
              </div>
              <div className="project-card">
                <h3>File Encryption Tool</h3>
                <p>A security tool to encrypt files with custom access conditions, built using Python and PyCryptodome.</p>
                <a href="#" className="project-link">View Project</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      
    </>
  );
};

export default Projects;
