import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Lightbulb, Calendar, MapPin, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-black text-gray-300 pt-24">
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-center mb-12 text-white">About <span className="text-primary">FlexForce</span></h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-4 text-white">Our Story</h2>
                <p className="mb-4 text-gray-400">
                  Founded in 2010, FlexForce Gym was created with a simple mission: to provide a welcoming, 
                  inclusive environment where people of all fitness levels could achieve their health and wellness goals.
                </p>
                <p className="mb-4 text-gray-400">
                  What started as a small local gym has grown into a community of fitness enthusiasts, 
                  dedicated trainers, and individuals committed to living healthier lives.
                </p>
                <p className="text-gray-400">
                  Today, we continue to expand our facilities and services while maintaining our core values 
                  of quality, community, and results-driven fitness programs.
                </p>
              </div>
              <motion.div 
                className="rounded-lg overflow-hidden shadow-xl border border-gray-800"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
                  alt="FlexForce Gym" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container-custom text-center">
          <h2 className="mb-12 text-white">Our Mission & Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-12 w-12 text-primary" />,
                title: "Excellence",
                description: "We strive for excellence in everything we do, from our facilities to our training programs."
              },
              {
                icon: <Users className="h-12 w-12 text-primary" />,
                title: "Community",
                description: "We foster a supportive community where members motivate each other to achieve their goals."
              },
              {
                icon: <Lightbulb className="h-12 w-12 text-primary" />,
                title: "Innovation",
                description: "We continuously evolve our methods and equipment to provide the best fitness experience."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
                }}
                viewport={{ once: true }}
                className="card bg-gray-900 border border-gray-800 hover:border-primary transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="mb-4 text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <h2 className="text-center mb-16 text-white">Our Journey</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30"></div>
            
            {/* Timeline items */}
            {[
              {
                year: "2010",
                title: "The Beginning",
                description: "FlexForce opens its first location with just 5 trainers and basic equipment.",
                icon: <Calendar />
              },
              {
                year: "2013",
                title: "Expansion",
                description: "We expanded our facility to include specialized training areas and a nutrition center.",
                icon: <MapPin />
              },
              {
                year: "2016",
                title: "Community Recognition",
                description: "Awarded 'Best Fitness Center' by the local community for our dedication to member success.",
                icon: <Award />
              },
              {
                year: "2020",
                title: "Digital Transformation",
                description: "Launched virtual training programs to support our members during challenging times.",
                icon: <Lightbulb />
              },
              {
                year: "2023",
                title: "Today",
                description: "Continuing to grow with multiple locations and a thriving community of fitness enthusiasts.",
                icon: <Users />
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-1/2"></div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="bg-primary text-white rounded-full p-3 z-10">
                    {item.icon}
                  </div>
                </div>
                
                <motion.div 
                  className={`w-1/2 bg-gray-800 p-6 rounded-lg border border-gray-700 ${
                    index % 2 === 0 ? "mr-8 text-right" : "ml-8"
                  }`}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-primary font-bold text-xl mb-2">{item.year}</div>
                  <h3 className="text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <h2 className="text-center mb-16 text-white">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Founder & Head Trainer",
                image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                bio: "Former Olympic athlete with 15+ years of training experience."
              },
              {
                name: "Sarah Martinez",
                role: "Nutrition Specialist",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80",
                bio: "Certified nutritionist passionate about holistic wellness approaches."
              },
              {
                name: "David Kim",
                role: "Strength Coach",
                image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
                bio: "Powerlifting champion dedicated to helping clients build strength safely."
              },
              {
                name: "Maya Patel",
                role: "Yoga Instructor",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80",
                bio: "Brings 10 years of mindfulness and flexibility training to our team."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-primary transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold mb-1">{member.name}</h3>
                  <div className="text-primary mb-3">{member.role}</div>
                  <p className="text-gray-400">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;