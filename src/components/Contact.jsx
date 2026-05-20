import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ag1swib', 'template_cvdng5m', form.current, '1nvogWmAt1cfDUeWf')
      .then(() => {
        alert('✅ Message sent successfully! I\'ll get back to you soon.');
        form.current.reset();
      })
      .catch((error) => {
        alert('❌ Failed to send message. Please try again later.');
        console.error('EmailJS error:', error);
      });
  };

  return (
    <section id="contact">
      <h2><i className="fas fa-paper-plane"></i> contact & send message</h2>
      <div className="contact-studio">
        <div className="contact-info">
          <h3>Let’s Work Together</h3>
          <div className="contact-detail"><i className="fas fa-envelope"></i> rxmeirfan7@gmail.com</div>
          <div className="contact-detail"><i className="fas fa-phone-alt"></i> +91 9562390365</div>
          <div className="contact-detail"><a href="https://github.com/irffann-git"><i className="fab fa-github"></i>irffann-git</a></div>
          <div className="contact-detail"><a href="https://www.linkedin.com/in/irffann/"><i className="fab fa-linkedin"></i>irffann.in</a></div>
          <div style={{ marginTop: '40px' }}>
            <a href="/resume.pdf" className="btn-primary" download><i className="fas fa-download"></i> Download CV</a>
          </div>
        </div>
        <div className="contact-form">
          <h3>send a message</h3>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your name" required />
            <input type="email" name="email" placeholder="Your email" required />
            <textarea name="message" rows="5" placeholder="Your message" required></textarea>
            <button type="submit" className="btn-primary"><i className="fas fa-paper-plane"></i> Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;