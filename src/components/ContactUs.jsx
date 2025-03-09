import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Send } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission and send email using EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      whatsapp_number: formData.whatsapp,
      message: formData.message,
    };

    emailjs
      .send(
        'service_cwd3dtj', // replace with your EmailJS service ID
        'template_t8hftyl', // replace with your EmailJS template ID
        templateParams,
        'tt00A9gBw8J61Jpd' // replace with your EmailJS public key
      )
      .then(
        (response) => {
          toast.success('Message sent successfully!', {
            position: "top-right",
            autoClose: 5000,
          });
          setIsSubmitting(false);
          // Reset form
          setFormData({
            name: '',
            email: '',
            whatsapp: '',
            message: ''
          });
        },
        (error) => {
          toast.error('Failed to send message. Please try again.', {
            position: "top-right",
            autoClose: 5000,
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 pt-16">
      <ToastContainer />
      
      <div className={`max-w-md w-full transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-2xl font-light text-gray-800 mb-6 text-center">Contact Us</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {/* Name Input */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 focus:outline-none transition-colors bg-transparent"
              />
            </div>
            
            {/* Email Input */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 focus:outline-none transition-colors bg-transparent"
              />
            </div>
            
            {/* WhatsApp Input */}
            <div>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="WhatsApp Number"
                required
                className="w-full px-4 py-3 border-b border-gray-300 focus:border-blue-500 focus:outline-none transition-colors bg-transparent"
              />
            </div>
            
            {/* Message Input */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:border-blue-500 focus:outline-none transition-colors bg-transparent resize-none rounded-md"
              />
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 bg-gray-900 hover:bg-gray-800 text-white transition-colors duration-300 ease-in-out rounded-md flex items-center justify-center disabled:opacity-70"
            >
              <Send size={16} className="mr-2" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
        
        <p className="text-center text-gray-500 text-sm mt-6">
          We typically respond within 24 hours
        </p>
      </div>
    </div>
  );
};

export default ContactUs;