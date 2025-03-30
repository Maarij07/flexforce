import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Users, Clock, Wrench, Star, Shield } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      position: 'Founder & Lead Technician',
      image: 'https://placehold.co/300x300/3B82F6/FFFFFF/png?text=JS',
      bio: 'John has over 10 years of experience in phone repair and electronics. He founded FixMyPhone with a mission to provide affordable, high-quality repairs.'
    },
    {
      name: 'Sarah Johnson',
      position: 'Senior Repair Technician',
      image: 'https://placehold.co/300x300/3B82F6/FFFFFF/png?text=SJ',
      bio: 'Sarah specializes in microsoldering and complex board-level repairs. She has repaired thousands of devices throughout her 7-year career.'
    },
    {
      name: 'Michael Chen',
      position: 'Customer Service Manager',
      image: 'https://placehold.co/300x300/3B82F6/FFFFFF/png?text=MC',
      bio: 'Michael ensures every customer receives exceptional service. He handles scheduling, customer inquiries, and makes sure repairs are completed on time.'
    },
    {
      name: 'Emily Rodriguez',
      position: 'iPhone Specialist',
      image: 'https://placehold.co/300x300/3B82F6/FFFFFF/png?text=ER',
      bio: 'Emily is our Apple device expert. She stays up-to-date with the latest iPhone models and repair techniques to provide the best service.'
    }
  ];

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
            <h1 className="mb-4">About FixMyPhone</h1>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              We're a team of passionate phone repair specialists dedicated to providing fast, reliable, and affordable repair services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container-custom mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              FixMyPhone was founded in 2015 with a simple mission: to provide high-quality phone repairs at affordable prices with exceptional customer service.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a small repair shop has grown into a trusted service center for all types of smartphone repairs. We've fixed over 10,000 devices and counting!
            </p>
            <p className="text-gray-600">
              Our technicians are certified and continuously trained on the latest repair techniques and technologies to ensure we can handle any issue with your device.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://placehold.co/600x400/3B82F6/FFFFFF/png?text=Our+Story" 
              alt="Our Story" 
              className="rounded-lg shadow-lg w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Our Values</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              These core principles guide everything we do at FixMyPhone.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Clock size={32} className="text-primary" />, 
                title: 'Fast Service', 
                text: 'We value your time. Most repairs are completed in under an hour.' 
              },
              { 
                icon: <Star size={32} className="text-primary" />, 
                title: 'Quality Work', 
                text: 'We use only high-quality parts and stand behind our work with a 90-day warranty.' 
              },
              { 
                icon: <Shield size={32} className="text-primary" />, 
                title: 'Transparency', 
                text: 'No hidden fees or surprises. We provide upfront pricing and honest recommendations.' 
              },
              // In the Our Values section, update the icon for 'Expertise':
              { 
                icon: <Wrench size={32} className="text-primary" />, 
                title: 'Expertise', 
                text: 'Our technicians are certified and continuously trained on the latest repair techniques.' 
              },
              { 
                icon: <Award size={32} className="text-primary" />, 
                title: 'Customer Satisfaction', 
                text: "Your satisfaction is our top priority. We're not happy until you're happy." 
              },
              { 
                icon: <Users size={32} className="text-primary" />, 
                title: 'Community Focus', 
                text: "We're proud to serve our local community and contribute to reducing e-waste." 
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="container-custom py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Meet Our Team</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Our skilled technicians are the heart of our business. Each team member brings unique expertise to ensure your device gets the best care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card text-center"
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.position}</p>
              <p className="text-gray-600">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10,000+', label: 'Devices Repaired' },
              { number: '5,000+', label: 'Happy Customers' },
              { number: '8+', label: 'Years in Business' },
              { number: '4.9/5', label: 'Customer Rating' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card text-center"
        >
          <h2 className="mb-4">Ready to Get Your Phone Fixed?</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600 mb-8">
            Visit our shop or contact us today for a free diagnosis and quote. Most repairs can be completed while you wait!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/services" className="btn btn-primary">
              View Our Services
            </Link>
            <Link to="/contact" className="btn bg-white border border-primary text-primary hover:bg-gray-100">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;