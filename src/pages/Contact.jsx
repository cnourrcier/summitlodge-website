import { useState } from 'react';
import axios from 'axios';
import ScrollToTop from '../components/common/ScrollToTop';
import './Contact.css';

const website = window.location.hostname;

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website,
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: 'Please fill out all fields'
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: false,
        error: 'Please enter a valid email address'
      });
      return;
    }
    
    try {
      // Send email via backend
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/send-email`, formData);
      console.log('Form submitted:', response.data);

      // Reset form and show success message
      setFormData({
        name: '',
        email: '',
        message: '',
        website,
      });
      
      setFormStatus({
        submitted: true,
        error: null
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          error: null
        });
      }, 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setFormStatus({
        submitted: false,
        error: 'Failed to send your message. Please try again.'
      });
    }
  };

  return (
    <>
      <ScrollToTop />
      <div className="contact-page">
        {/* Featured Banner - same as on other pages */}
        <div className="featured-banner">
          Featured on Staycation TV
        </div>
        
        <div className="contact-container">
          <div className="contact-content">
            <div className="contact-header">
              <h1>Contact Us</h1>
              <p>Have questions about Summit Lodge? We'd love to hear from you!</p>
            </div>
            
            <div className="contact-flex">
              <div className="contact-form-container">
                {formStatus.submitted ? (
                  <div className="form-success">
                    <i className="fas fa-check-circle"></i>
                    <p>Thank you for your message! We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    {formStatus.error && (
                      <div className="form-error">
                        <i className="fas fa-exclamation-circle"></i>
                        <p>{formStatus.error}</p>
                      </div>
                    )}
                    
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="What would you like to know about Summit Lodge?"
                        rows="6"
                        required
                      />
                    </div>
                    
                    <button type="submit" className="submit-btn">
                      Send Message
                    </button>
                  </form>
                )}
              </div>
              
              <div className="contact-info">
                <div className="info-card">
                  <div className="info-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="info-content">
                    <h3>Our Location</h3>
                    <p>Summit Lodge – Big Bear<br />42243 Evergreen Dr, Big Bear Lake, CA 92315</p>
                  </div>
                </div>
                
                <div className="social-contact">
                  <h3>Follow Us</h3>
                  <div className="social-icons">
                    <a 
                      href="https://facebook.com/SummitLodgeBigBear"
                      className="social-icon"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a 
                      href="https://www.instagram.com/summitlodgebigbear?igsh=ZjIwdmFjNmZ0YTVk" 
                      className="social-icon"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    {/* <a 
                      href="https://youtube.com" 
                      className="social-icon"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-youtube"></i>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;