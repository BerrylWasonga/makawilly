import React from 'react';
import './joshu.css';

const Contact = () => {
  return (
    <>
      

      {/* Main */}
      <main>
        <section className="contact-section">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Feel free to reach out for collaborations, freelance work, or just to say hello!
          </p>

          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <h3>Contact Details</h3>
                <p><strong>Email:</strong> <a href="mailto:joshuajuma039@.com">joshuajuma039@.com</a></p>
                <p><strong>Phone:</strong> +254 7572 84998</p>
                <p><strong>Location:</strong> Nairobi, Kenya</p>
              </div>

              <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Form submitted!'); }}>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

     
    </>
  );
};

export default Contact;
