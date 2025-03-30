import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Smartphone, Clock, Award, DollarSign, CheckCircle } from 'lucide-react';
import HeroAnimation from '../components/HeroAnimation';

const Home = () => {
  const services = [
    {
      icon: <Smartphone size={40} className="text-primary" />,
      title: 'Screen Replacement',
      description: 'Cracked screen? We offer high-quality screen replacement for all phone models.'
    },
    {
      icon: <Clock size={40} className="text-primary" />,
      title: 'Battery Replacement',
      description: "Restore your phone's battery life with our professional battery replacement service."
    },
    {
      icon: <Award size={40} className="text-primary" />,
      title: 'Water Damage Repair',
      description: 'Dropped your phone in water? Our experts can fix water damage issues.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'They fixed my iPhone screen in just 30 minutes! Great service and reasonable prices.',
      rating: 5
    },
    {
      name: 'Mike Thompson',
      text: 'My Samsung had water damage and I thought it was gone for good. These guys saved all my data and fixed it perfectly.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      text: "Fast, professional, and honest. They didn't try to upsell me on unnecessary repairs.",
      rating: 4
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <HeroAnimation />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl font-bold mb-4">Professional Phone Repair Services</h1>
              <p className="text-xl mb-6">Fast, reliable repairs for all smartphone brands. Most repairs completed in 30 minutes or less!</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/services" className="btn btn-primary">
                  Our Services
                </Link>
                <Link to="/contact" className="btn bg-white border border-primary text-primary hover:bg-gray-100">
                  Get a Quote
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:block"
            >
              <img src="https://placehold.co/600x400/3B82F6/FFFFFF/png?text=Phone+Repair" alt="Phone Repair" className="rounded-lg shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Why Choose Us</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              We provide fast, reliable, and affordable phone repair services with a customer-first approach.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Clock size={32} />, title: 'Quick Repairs', text: 'Most repairs completed in 30 minutes or less' },
              { icon: <Award size={32} />, title: 'Quality Parts', text: 'We use only high-quality replacement parts' },
              { icon: <DollarSign size={32} />, title: 'Price Match', text: "We'll match any competitor's price for the same repair" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-primary mb-4 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Our Services</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              We offer a wide range of repair services for all major smartphone brands including Apple, Samsung, Google, and more.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to="/services" className="text-primary font-medium hover:underline inline-flex items-center">
                  Learn more <CheckCircle size={16} className="ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">What Our Customers Say</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              Don't just take our word for it. Here's what our satisfied customers have to say.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="text-center">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;