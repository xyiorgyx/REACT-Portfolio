import React, { useState } from 'react';
import '../styles/contactStyles.css'; // Import your CSS file

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
    <div className='header-container'>
    <h1 className='main-header' > Contact Me</h1>
    </div>
    <div className="contact-container" >
      <form className="contact-form"  onSubmit={handleSubmit}>
        <label  htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label  htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label  htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button className='button' type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default ContactPage;