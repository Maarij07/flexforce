import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // EmailJS implementation
    emailjs.send(
      'service_id', // Replace with your EmailJS service ID
      'template_id', // Replace with your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      },
      'user_id' // Replace with your EmailJS user ID
    )
      .then(() => {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setFormSubmitted(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Email error:', error);
        toast.error('Failed to send message. Please try again.');
        setLoading(false);
      });
  };

  return (
    <div className="bg-black text-gray-200 pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-green-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Get In <span className="text-primary">Touch</span></h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              Have questions about our gym or membership options? We're here to help you on your fitness journey.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 p-8 rounded-lg border border-gray-800"
            >
              <h2 className="text-3xl font-bold mb-8 text-white">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Our Location</h3>
                    <p className="text-gray-400">123 Fitness Street, Workout City, WC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-3 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Email Us</h3>
                    <a href="mailto:info@flexforce.com" className="text-gray-400 hover:text-primary transition-colors">info@flexforce.com</a>
                    <p className="text-gray-400 mt-1">
                      <a href="mailto:support@flexforce.com" className="hover:text-primary transition-colors">support@flexforce.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-3 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Call Us</h3>
                    <a href="tel:+11234567890" className="text-gray-400 hover:text-primary transition-colors">(123) 456-7890</a>
                    <p className="text-gray-400 mt-1">
                      <a href="tel:+11234567891" className="hover:text-primary transition-colors">(123) 456-7891</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-3 rounded-full">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Hours of Operation</h3>
                    <div className="space-y-2 text-gray-400">
                      <p><span className="font-medium text-primary">Monday - Friday:</span> 5:00 AM - 11:00 PM</p>
                      <p><span className="font-medium text-primary">Saturday:</span> 7:00 AM - 9:00 PM</p>
                      <p><span className="font-medium text-primary">Sunday:</span> 8:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
                <div className="flex space-x-4">
                  {['facebook', 'instagram', 'twitter', 'youtube'].map((social) => (
                    <motion.a
                      key={social}
                      href={`https://${social}.com/flexforce`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 p-3 rounded-full hover:bg-primary transition-colors duration-300"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img 
                        src={`/icons/${social}.svg`} 
                        alt={`${social} icon`} 
                        className="h-5 w-5"
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 p-8 rounded-lg border border-gray-800"
            >
              {formSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="inline-block p-6 bg-primary/20 rounded-full mb-6">
                    <CheckCircle className="h-16 w-16 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-white">Thank You!</h2>
                  <p className="text-gray-400 mb-8">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                  <motion.button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-3 bg-primary hover:bg-green-600 text-white rounded-md transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold mb-8 text-white">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-gray-300">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-2 text-gray-300">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block mb-2 text-gray-300">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white"
                        placeholder="Membership Inquiry"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block mb-2 text-gray-300">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white"
                        placeholder="I'd like to know more about..."
                      ></textarea>
                    </div>
                    
                    <motion.button
                      type="submit"
                      disabled={loading}
                      className="px-6 py-3 bg-primary hover:bg-green-600 text-white rounded-md flex items-center justify-center transition-colors duration-300 w-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {loading ? (
                        <div className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </motion.button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Find <span className="text-primary">Us</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Located in the heart of the city, FlexForce Gym is easily accessible with ample parking space.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gray-900 p-4 rounded-lg overflow-hidden h-96 border border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Google Maps iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596552044!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1619756483692!5m2!1sen!2sca" 
              className="w-full h-full border-0" 
              allowFullScreen="" 
              loading="lazy"
              title="FlexForce Gym Location"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Frequently Asked <span className="text-primary">Questions</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about our gym, memberships, and services.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What are your membership options?",
                answer: "We offer flexible membership options including monthly, quarterly, and annual plans. We also have special rates for students, seniors, and corporate partnerships."
              },
              {
                question: "Do you offer personal training?",
                answer: "Yes, we have certified personal trainers available for one-on-one sessions. You can book a consultation to discuss your fitness goals and create a personalized training plan."
              },
              {
                question: "Is there a free trial available?",
                answer: "Absolutely! We offer a 7-day free trial for new members to experience our facilities and classes before committing to a membership."
              },
              {
                question: "What amenities do you provide?",
                answer: "Our gym features state-of-the-art equipment, group fitness studios, locker rooms with showers, sauna, a nutrition bar, and free WiFi throughout the facility."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;