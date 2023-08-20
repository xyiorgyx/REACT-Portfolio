import React, { useState } from 'react';
import {Styles} from '../styles/styleContact'; // Import your CSS file

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can perform your submission logic here
  };

  return (
    <div>
    <div className='headerContainer' style={Styles.pageHeaderDiv}>
    <h1 className='MainHeader' style={Styles.pageHeader}> Contact Me</h1>
    </div>
    <div className="contact-container" style={Styles.contactContainer}>
      <form className="contact-form" style={Styles.contactForm} onSubmit={handleSubmit}>
        <label style={Styles.contactFormLabel} htmlFor="name">Name</label>
        <input
        style={Styles.contactFormInput}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label style={Styles.contactFormLabel} htmlFor="email">Email</label>
        <input
        style={Styles.contactFormInput}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label style={Styles.contactFormLabel} htmlFor="message">Message</label>
        <textarea
        style={Styles.contactFormTextarea}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button style={Styles.contactFormButton} type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default ContactPage;