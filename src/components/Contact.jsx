import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Open default mail client with pre-filled values
    const mailtoLink = `mailto:balaji.ponnusamy23@gmail.com?subject=Message from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;

    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: <MdEmail className="text-cyan-400 text-2xl" />, label: 'Email', value: 'balaji.ponnusamy23@gmail.com', link: 'mailto:balaji.ponnusamy23@gmail.com' },
    { icon: <MdLocationOn className="text-pink-400 text-2xl" />, label: 'Location', value: 'Samalapuram, Tiruppur-641668', link: null },
  ];

  const socialLinks = [
    { icon: <FaGithub />, link: 'https://github.com/balaji2k423' },
    { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/balaji2307' },
    { icon: <FaInstagram />, link: 'https://instagram.com/' }, // replace with your insta link
    { icon: <MdEmail />, link: 'mailto:balaji.ponnusamy23@gmail.com' },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Get In </span>
            <span className="neon-text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let’s collaborate on your next innovative project 🚀
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-bold text-white mb-8">Let’s Connect</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I’m always excited to work on innovative projects and collaborate with 
              talented individuals. Whether you have a project idea, want to discuss 
              opportunities, or just want to say hello, feel free to reach out!
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 neon-card hover:scale-105 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div>{info.icon}</div>
                  <div>
                    <div className="text-sm text-gray-400">{info.label}</div>
                    {info.link ? (
                      <a href={info.link} className="text-white font-medium hover:text-cyan-400 transition">
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-white font-medium">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full neon-card flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 text-xl text-white hover:text-cyan-400"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left">
            <div className="neon-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="neon-input"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="neon-input"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="neon-input resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button type="submit" className="w-full neon-btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
