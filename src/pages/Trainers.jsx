import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Clock, Users, ChevronDown, Instagram, Twitter, Linkedin } from 'lucide-react';

const Trainers = () => {
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  
  const trainers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Head Trainer & Strength Specialist",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      experience: "15+ years",
      specialties: ["Strength Training", "Powerlifting", "Nutrition"],
      bio: "Former Olympic athlete with a passion for helping clients achieve their maximum potential. Alex has trained professional athletes and everyday fitness enthusiasts with the same dedication and personalized approach.",
      certifications: ["NASM Certified Personal Trainer", "Certified Strength and Conditioning Specialist", "Precision Nutrition Level 2"],
      schedule: ["Mon-Wed: 6AM-2PM", "Thu-Fri: 12PM-8PM"],
      social: {
        instagram: "alex_strength",
        twitter: "alexjohnsonfit",
        linkedin: "alexjohnson-trainer"
      },
      testimonial: {
        text: "Alex completely transformed my approach to fitness. I've never been stronger or more confident.",
        author: "Michael R., Client for 3 years"
      }
    },
    {
      id: 2,
      name: "Sarah Martinez",
      role: "Nutrition Coach & HIIT Specialist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80",
      experience: "10+ years",
      specialties: ["Nutrition Planning", "HIIT Workouts", "Weight Management"],
      bio: "Sarah combines her expertise in nutrition science with high-intensity training methods to create transformative fitness experiences. Her holistic approach addresses both physical performance and dietary needs.",
      certifications: ["Precision Nutrition Level 2", "HIIT Certified Trainer", "Functional Movement Specialist"],
      schedule: ["Mon-Tue: 7AM-3PM", "Thu-Sat: 9AM-5PM"],
      social: {
        instagram: "sarah_nutrition",
        twitter: "sarahmartinezfit",
        linkedin: "sarahmartinez-nutrition"
      },
      testimonial: {
        text: "Sarah's nutrition guidance alongside her challenging workouts helped me lose 30 pounds and keep it off.",
        author: "Jessica T., Client for 2 years"
      }
    },
    {
      id: 3,
      name: "David Kim",
      role: "Martial Arts & Conditioning Coach",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      experience: "12+ years",
      specialties: ["Kickboxing", "Functional Training", "Core Conditioning"],
      bio: "With a background in competitive martial arts, David brings discipline and technical precision to his training programs. He specializes in building functional strength and explosive power through martial arts-inspired workouts.",
      certifications: ["3rd Degree Black Belt in Taekwondo", "Certified Functional Strength Coach", "TRX Suspension Training Specialist"],
      schedule: ["Tue-Fri: 10AM-6PM", "Sat: 8AM-2PM"],
      social: {
        instagram: "david_martial",
        twitter: "davidkimfitness",
        linkedin: "davidkim-coach"
      },
      testimonial: {
        text: "Training with David has improved not just my fitness but my focus and discipline in all areas of life.",
        author: "Robert L., Client for 4 years"
      }
    },
    {
      id: 4,
      name: "Maya Patel",
      role: "Yoga & Mindfulness Expert",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80",
      experience: "8+ years",
      specialties: ["Vinyasa Yoga", "Meditation", "Flexibility Training"],
      bio: "Maya believes in the transformative power of connecting mind and body through movement. Her classes focus on building strength and flexibility while cultivating mindfulness and reducing stress.",
      certifications: ["500-Hour Registered Yoga Teacher", "Mindfulness Meditation Instructor", "Flexibility Specialist"],
      schedule: ["Mon-Wed: 8AM-2PM", "Fri-Sun: 7AM-1PM"],
      social: {
        instagram: "maya_yoga",
        twitter: "mayapatelyoga",
        linkedin: "mayapatel-yoga"
      },
      testimonial: {
        text: "Maya's yoga sessions have been life-changing for my chronic back pain and stress management.",
        author: "Samantha K., Client for 1 year"
      }
    }
  ];

  return (
    <div className="bg-black text-gray-300 pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Elite <span className="text-primary">Trainers</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-10 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Train with the best minds in fitness. Our expert trainers will guide you through personalized programs designed to transform your body and elevate your performance.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center">
                <Star className="text-primary mr-2" />
                <span className="text-white">World-Class Expertise</span>
              </div>
              <div className="flex items-center">
                <Award className="text-primary mr-2" />
                <span className="text-white">Certified Professionals</span>
              </div>
              <div className="flex items-center">
                <Users className="text-primary mr-2" />
                <span className="text-white">Personalized Coaching</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="h-10 w-10 text-primary" />
        </motion.div>
      </section>

      {/* Trainers Showcase */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Meet Your <span className="text-primary">Transformation</span> Team</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-400">
              Our trainers bring decades of combined experience and specialized knowledge to help you achieve your fitness goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer, index) => (
              <motion.div
                key={trainer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-primary transition-all duration-300 ${selectedTrainer === trainer.id ? 'ring-2 ring-primary' : ''}`}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedTrainer(trainer.id === selectedTrainer ? null : trainer.id)}
              >
                <div className="relative h-80 overflow-hidden group">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex space-x-4 justify-center">
                      <a href={`https://instagram.com/${trainer.social.instagram}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                        <Instagram />
                      </a>
                      <a href={`https://twitter.com/${trainer.social.twitter}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                        <Twitter />
                      </a>
                      <a href={`https://linkedin.com/in/${trainer.social.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                        <Linkedin />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-white">{trainer.name}</h3>
                  <div className="text-primary mb-3">{trainer.role}</div>
                  <div className="flex items-center mb-3 text-gray-400">
                    <Clock className="mr-2 h-4 w-4 text-primary" />
                    <span>{trainer.experience} Experience</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {trainer.specialties.map((specialty, i) => (
                      <span key={i} className="bg-gray-800 text-xs text-gray-300 px-3 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                  
                  <motion.button 
                    className="w-full bg-primary hover:bg-green-600 text-white py-2 px-4 rounded transition-colors duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Session
                  </motion.button>
                </div>
                
                {selectedTrainer === trainer.id && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6"
                  >
                    <div className="border-t border-gray-800 pt-4 mb-4">
                      <h4 className="text-white font-semibold mb-2">About {trainer.name}</h4>
                      <p className="text-gray-400 mb-4">{trainer.bio}</p>
                      
                      <h4 className="text-white font-semibold mb-2">Certifications</h4>
                      <ul className="list-disc list-inside text-gray-400 mb-4">
                        {trainer.certifications.map((cert, i) => (
                          <li key={i}>{cert}</li>
                        ))}
                      </ul>
                      
                      <h4 className="text-white font-semibold mb-2">Schedule</h4>
                      <ul className="text-gray-400 mb-4">
                        {trainer.schedule.map((time, i) => (
                          <li key={i}>{time}</li>
                        ))}
                      </ul>
                      
                      <div className="bg-gray-800 p-4 rounded-lg italic">
                        <p className="text-gray-300 mb-2">"{trainer.testimonial.text}"</p>
                        <p className="text-primary text-sm">— {trainer.testimonial.author}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Training Philosophy */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-30"></div>
          <div className="absolute h-96 w-96 rounded-full bg-primary/20 blur-3xl -top-48 -left-48"></div>
          <div className="absolute h-96 w-96 rounded-full bg-primary/20 blur-3xl -bottom-48 -right-48"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Training <span className="text-primary">Philosophy</span></h2>
              
              <p className="text-gray-400 mb-6">
                At FlexForce, we believe that exceptional fitness results come from a combination of scientific knowledge, personalized attention, and unwavering motivation.
              </p>
              
              <p className="text-gray-400 mb-6">
                Our trainers don't just guide you through workouts—they educate you on the science behind each movement, adapt programs to your unique body mechanics, and push you beyond perceived limitations.
              </p>
              
              <p className="text-gray-400 mb-8">
                This holistic approach ensures sustainable results and empowers you with knowledge that extends beyond the gym walls.
              </p>
              
              <div className="space-y-4">
                {[
                  "Personalized programming based on your unique body and goals",
                  "Continuous education on proper form and technique",
                  "Progressive overload principles for consistent improvement",
                  "Holistic approach addressing nutrition, recovery, and mindset"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <p className="text-gray-300">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden border-2 border-primary/50">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Trainer working with client" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-black p-4 rounded-lg border border-primary/50 shadow-xl">
                <div className="text-4xl font-bold text-primary mb-1">10+</div>
                <div className="text-white">Years Average Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-primary relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Train With The Elite?</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto text-gray-200">
              Book your complimentary consultation with one of our expert trainers and start your transformation journey today.
            </p>
            <motion.button
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Your Free Session
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Trainers;