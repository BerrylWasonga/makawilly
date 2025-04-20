import React from 'react';
import './joshu.css'; // Make sure this path is correct

const TonnyHub = () => {
  return (
    <>


      <main>
        {/* Home Section */}
        <section id="home" className="text">
          <div className="pp">
            <p>Welcome to <strong>JoshuHub</strong>!</p>
            <p>I am Joshua Juma, a Fullstack Web Developer (MERN Stack). I have worked on many exciting and professional projects that solve real-world problems.</p>
          </div>
          <div className="profile-pic">
            <img src="profile.jpg" alt="Joshua Juma" />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">Technologies I work with</p>

          <div className="skills-grid">
            {[
              { name: 'JavaScript', desc: 'Proficient with 3+ years of experience.' },
              { name: 'TypeScript', desc: 'Ensures type safety in complex applications.' },
              { name: 'HTML', desc: 'Semantic and accessible markup structure.' },
              { name: 'CSS', desc: 'Responsive styling and layout design.' },
              { name: 'Bootstrap', desc: 'Mobile-first responsive framework.' },
              { name: 'Tailwind CSS', desc: 'Utility-first CSS for rapid development.' },
              { name: 'React', desc: 'Component-based UI development.' },
              { name: 'Next.js', desc: 'High-performance web apps with SSR.' },
              { name: 'MongoDB', desc: 'Scalable NoSQL database management.' },
              { name: 'Node.js', desc: 'Backend development with Express.js.' },
              { name: 'Git & GitHub', desc: 'Version control and collaboration.' },
              { name: 'API Integration', desc: 'Consuming and building REST APIs.' },
            ].map((skill, index) => (
              <div className="skill" key={index}>
                <h1>{skill.name}</h1>
                <p>{skill.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

    </>
  );
};

export default TonnyHub;
