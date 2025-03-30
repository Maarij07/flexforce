import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { MapPin, Phone, Mail, Clock, Send, Smartphone } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    deviceType: '',
    issue: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Note: You would need to set up EmailJS with your service ID, template ID, and user ID
      // This is just a placeholder - replace with your actual EmailJS configuration
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          device_type: formData.deviceType,
          issue: formData.issue,
          message: formData.message,
        },
        'YOUR_USER_ID'
      );

      toast.success('Your message has been sent! We will contact you shortly.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        deviceType: '',
        issue: '',
        message: '',
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again later.');
      console.error('Error sending email:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="bg-gray-50 py-12 mb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="mb-4">Contact Us</h1>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              Have a question or need a repair? Get in touch with our team and we'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container-custom mb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Phone size={24} className="text-primary" />, 
              title: 'Call Us', 
              content: '(123) 456-7890', 
              link: 'tel:+1234567890',
              description: "We're available Monday-Saturday from 9AM to 7PM"
            },
            { 
              icon: <Mail size={24} className="text-primary" />, 
              title: 'Email Us', 
              content: 'info@fixmyphone.com', 
              link: 'mailto:info@fixmyphone.com',
              description: 'We usually respond within 24 hours'
            },
            { 
              icon: <MapPin size={24} className="text-primary" />, 
              title: 'Visit Us', 
              content: '123 Repair Street, Tech City, TC 12345', 
              link: 'https://maps.google.com',
              description: 'Find us on Google Maps'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-primary mb-4 mx-auto">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <a href={item.link} className="text-primary hover:underline block mb-2">
                {item.content}
              </a>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="container-custom mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="card"
          >
            <div className="flex items-center mb-6">
              <Smartphone size={24} className="text-primary mr-3" />
              <h2 className="text-2xl font-semibold">Send Us a Message</h2>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="deviceType" className="block text-sm font-medium text-gray-700 mb-1">
                    Device Type
                  </label>
                  <select
                    id="deviceType"
                    name="deviceType"
                    value={formData.deviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  >
                    <option value="">Select Device Type</option>
                    <option value="iPhone">iPhone</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Google Pixel">Google Pixel</option>
                    <option value="Other Android">Other Android</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="issue" className="block text-sm font-medium text-gray-700 mb-1">
                  What issue are you experiencing?
                </label>
                <select
                  id="issue"
                  name="issue"
                  value={formData.issue}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                >
                  <option value="">Select Issue</option>
                  <option value="Cracked Screen">Cracked Screen</option>
                  <option value="Battery Issues">Battery Issues</option>
                  <option value="Water Damage">Water Damage</option>
                  <option value="Software Problem">Software Problem</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Please provide any additional details about your issue..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full flex items-center justify-center"
              >
                {loading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Map and Hours */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="card mb-8">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                {/* Replace with your actual Google Maps embed code */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sus!4v1580234295933!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                  className="rounded-md"
                ></iframe>
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Location</h3>
              <p className="text-gray-600 mb-4">
                123 Repair Street, Tech City, TC 12345
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center"
              >
                Get Directions <MapPin size={16} className="ml-1" />
              </a>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                <Clock size={24} className="text-primary mr-3" />
                <h3 className="text-xl font-semibold">Business Hours</h3>
              </div>
              <div className="space-y-2">
                {[
                  { day: 'Monday', hours: '9:00 AM - 7:00 PM' },
                  { day: 'Tuesday', hours: '9:00 AM - 7:00 PM' },
                  { day: 'Wednesday', hours: '9:00 AM - 7:00 PM' },
                  { day: 'Thursday', hours: '9:00 AM - 7:00 PM' },
                  { day: 'Friday', hours: '9:00 AM - 7:00 PM' },
                  { day: 'Saturday', hours: '10:00 AM - 5:00 PM' },
                  { day: 'Sunday', hours: 'Closed' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="font-medium">{item.day}</span>
                    <span className={item.hours === 'Closed' ? 'text-red-500' : 'text-gray-600'}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container-custom mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Frequently Asked Questions</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Find answers to common questions about our repair services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              question: 'How long does a typical repair take?',
              answer: 'Most repairs are completed within 30-60 minutes. More complex issues like water damage may take longer, typically 1-2 hours or may require leaving your device with us.'
            },
            {
              question: 'Do you offer a warranty on repairs?',
              answer: "Yes, all our repairs come with a 90-day warranty covering both parts and labor. If you experience any issues with our repair within this period, we'll fix it at no additional cost."
            },
            {
              question: 'Do I need to make an appointment?',
              answer: 'Walk-ins are welcome, but appointments are recommended for faster service. You can schedule an appointment through our website or by calling us.'
            },
            {
              question: 'What payment methods do you accept?',
              answer: 'We accept all major credit cards, debit cards, cash, and mobile payment options like Apple Pay and Google Pay.'
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
            >
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4">Ready to Get Your Phone Fixed?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Contact us today for a free diagnosis and quote. Most repairs can be completed while you wait!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+1234567890" className="btn bg-white text-primary hover:bg-gray-100">
                Call Now
              </a>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="btn border border-white hover:bg-white hover:text-primary"
              >
                Contact Form
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;