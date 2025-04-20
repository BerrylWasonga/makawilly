import React from 'react';
import './joshu.css'; // Make sure the path is correct

const About = () => {
  return (
    <>
     
      <main>
        <section className="about-section">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know the person behind JoshuHub.</p>
          <div className="container">
            <div className="about-content">
              <div className="about-text">
                <p>
                  Hey! I'm <strong>Joshua Juma</strong>, a passionate Fullstack Developer specializing in the MERN stack (MongoDB, Express.js, React, and Node.js).
                </p>
                <p>
                  With over 3 years of experience, I've built a wide range of responsive, modern, and user-friendly web applications. I love solving real-world problems with technology, creating solutions that are both elegant and efficient.
                </p>
                <p>
                  I also work with Python and PyQt for desktop applications, and I’m constantly exploring new tools like Next.js, Tailwind CSS, and TypeScript to stay ahead in the tech world.
                </p>
                <p>
                  When I'm not coding, I enjoy exploring UI/UX trends, mentoring junior developers, and learning about AI integrations in web development.
                </p>
              </div>
              <div className="about-img">
                <img src="profile.jpg" alt="Joshua Juma" />
              </div>
            </div>
          </div>
        </section>
      </main>

     
    </>
  );
};

export default About;
