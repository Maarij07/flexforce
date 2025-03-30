import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Smartphone, Battery, Droplet, Cpu, Clock, Shield, CheckCircle } from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      id: 'screen',
      title: 'Screen Repairs',
      icon: <Smartphone size={40} className="text-primary" />,
      description: 'We fix cracked, shattered, or non-responsive screens for all major phone brands.',
      services: [
        { name: 'iPhone Screen Replacement', price: 'From $79', time: '30-60 min' },
        { name: 'Samsung Screen Replacement', price: 'From $99', time: '45-60 min' },
        { name: 'Google Pixel Screen Replacement', price: 'From $89', time: '45-60 min' },
        { name: 'Other Android Screen Replacement', price: 'From $69', time: '45-60 min' },
      ]
    },
    {
      id: 'battery',
      title: 'Battery Replacement',
      icon: <Battery size={40} className="text-primary" />,
      description: "Restore your phone's battery life with our professional battery replacement service.",
      services: [
        { name: 'iPhone Battery Replacement', price: 'From $49', time: '30 min' },
        { name: 'Samsung Battery Replacement', price: 'From $59', time: '45 min' },
        { name: 'Google Pixel Battery Replacement', price: 'From $59', time: '45 min' },
        { name: 'Other Android Battery Replacement', price: 'From $49', time: '45 min' },
      ]
    },
    {
      id: 'water',
      title: 'Water Damage Repair',
      icon: <Droplet size={40} className="text-primary" />,
      description: 'Dropped your phone in water? Our experts can fix water damage issues and recover your data.',
      services: [
        { name: 'Water Damage Diagnostic', price: '$29', time: '30 min' },
        { name: 'Basic Water Damage Repair', price: 'From $79', time: '1-2 hours' },
        { name: 'Advanced Water Damage Repair', price: 'From $129', time: '2-24 hours' },
        { name: 'Data Recovery (Water Damaged Device)', price: 'From $99', time: 'Varies' },
      ]
    },
    {
      id: 'software',
      title: 'Software Issues',
      icon: <Cpu size={40} className="text-primary" />,
      description: 'We can resolve software problems, remove viruses, and restore your phone to optimal performance.',
      services: [
        { name: 'Software Diagnostic', price: '$19', time: '30 min' },
        { name: 'OS Reinstallation', price: 'From $49', time: '1-2 hours' },
        { name: 'Data Backup & Transfer', price: 'From $39', time: '30-60 min' },
        { name: 'Virus/Malware Removal', price: 'From $49', time: '1 hour' },
      ]
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
            <h1 className="mb-4">Our Repair Services</h1>
            <p className="text-lg max-w-3xl mx-auto text-gray-600 mb-8">
              We offer professional repair services for all major smartphone brands including Apple, Samsung, Google, and more. Most repairs can be completed while you wait!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#screen" className="btn btn-primary">Screen Repairs</a>
              <a href="#battery" className="btn btn-primary">Battery Replacement</a>
              <a href="#water" className="btn btn-primary">Water Damage</a>
              <a href="#software" className="btn btn-primary">Software Issues</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container-custom mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Why Choose Our Repair Service</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            We pride ourselves on providing fast, reliable, and affordable phone repair services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Clock size={32} className="text-primary" />, 
              title: 'Quick Turnaround', 
              text: 'Most repairs are completed in 30-60 minutes while you wait.' 
            },
            { 
              icon: <Shield size={32} className="text-primary" />, 
              title: '90-Day Warranty', 
              text: 'All our repairs come with a 90-day warranty on parts and labor.' 
            },
            { 
              icon: <CheckCircle size={32} className="text-primary" />, 
              title: 'Quality Parts', 
              text: 'We use only high-quality replacement parts for all repairs.' 
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4 mx-auto">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, index) => (
        <section 
          id={category.id}
          key={category.id} 
          className={`py-16 ${index % 2 === 1 ? 'bg-gray-50' : ''}`}
        >
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 items-center mb-8"
            >
              <div>
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h2 className="ml-4">{category.title}</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">{category.description}</p>
              </div>
              <div className="hidden md:block">
                <img 
                  src={`https://placehold.co/600x400/3B82F6/FFFFFF/png?text=${category.title}`} 
                  alt={category.title} 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-4 border-b">Service</th>
                      <th className="text-left p-4 border-b">Price</th>
                      <th className="text-left p-4 border-b">Time</th>
                      <th className="text-right p-4 border-b"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.services.map((service, idx) => (
                      <tr key={idx} className="border-b hover:bg-gray-50">
                        <td className="p-4">{service.name}</td>
                        <td className="p-4">{service.price}</td>
                        <td className="p-4">{service.time}</td>
                        <td className="p-4 text-right">
                          <Link to="/contact" className="text-primary hover:underline">
                            Book Now
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4">Need Your Phone Fixed?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Contact us today for a free diagnosis and quote. Most repairs can be completed while you wait!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+1234567890" className="btn bg-white text-primary hover:bg-gray-100">
                Call Now
              </a>
              <Link to="/contact" className="btn border border-white hover:bg-white hover:text-primary">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;