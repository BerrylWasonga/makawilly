import React from 'react';
import './joshu.css'; // Ensure this path is correct

const Services = () => {
  return (
    <>
     

      {/* Main */}
      <main>
        <section className="services-section">
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">Here’s what I can do for you and your business.</p>
          <div className="container">
            <div className="services-grid">
              <div className="service-card">
                <h3>Fullstack Web Development</h3>
                <p>Build scalable and high-performing web applications using the MERN Stack (MongoDB, Express, React, Node.js).</p>
              </div>
              <div className="service-card">
                <h3>Frontend UI/UX</h3>
                <p>Design responsive, pixel-perfect user interfaces with smooth user experience using HTML, CSS, Tailwind, Bootstrap, and React.</p>
              </div>
              <div className="service-card">
                <h3>Backend Development</h3>
                <p>Create secure and efficient REST APIs, server logic, and authentication systems using Node.js and Express.</p>
              </div>
              <div className="service-card">
                <h3>Database Design</h3>
                <p>Design and optimize NoSQL/MongoDB databases for both structured and flexible data handling.</p>
              </div>
              <div className="service-card">
                <h3>Next.js Projects</h3>
                <p>Develop fast, SEO-friendly apps using Next.js with server-side rendering and modern architecture.</p>
              </div>
              <div className="service-card">
                <h3>Deployment & Optimization</h3>
                <p>Deploy and maintain websites on platforms like Vercel, Netlify, and render.com. Optimize for performance and SEO.</p>
              </div>
              <div className="service-card">
                <h3>Mobile App Development</h3>
                <p>Create cross-platform mobile applications using React Native and Expo for smooth performance on both iOS and Android.</p>
              </div>
              <div className="service-card">
                <h3>API Integration</h3>
                <p>Integrate third-party APIs to enhance the functionality of your application, including payment gateways, social media, and more.</p>
              </div>
              <div className="service-card">
                <h3>SEO Services</h3>
                <p>Optimize your website for search engines, improving visibility and ranking on search results to drive more traffic.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

    </>
  );
};

export default Services;
