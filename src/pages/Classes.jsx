import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Calendar, Filter, ChevronDown } from 'lucide-react';

const Classes = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  
  const classesData = [
    {
      title: "Strength Training",
      description: "Build muscle and increase strength with our comprehensive strength training program.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      schedule: "Mon, Wed, Fri • 9:00 AM",
      duration: "60 min",
      level: "All Levels",
      category: "strength"
    },
    {
      title: "Cardio Kickboxing",
      description: "High-energy workout combining martial arts techniques with fast-paced cardio.",
      image: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      schedule: "Tue, Thu • 6:00 PM",
      duration: "45 min",
      level: "Intermediate"
    },
    {
      title: "Yoga & Meditation",
      description: "Find balance and inner peace with our yoga and meditation classes.",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      schedule: "Mon, Wed, Fri • 7:30 AM",
      duration: "60 min",
      level: "All Levels"
    },
    {
      title: "HIIT Workout",
      description: "High-Intensity Interval Training for maximum calorie burn and fitness gains.",
      image: "https://images.unsplash.com/photo-1517130038641-a774d04afb3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      schedule: "Tue, Thu, Sat • 5:30 PM",
      duration: "30 min",
      level: "Advanced"
    },
    {
      title: "Spin Class",
      description: "Indoor cycling workout that combines rhythm and visualization to improve fitness.",
      image: "https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80",
      schedule: "Mon, Wed • 6:30 PM",
      duration: "45 min",
      level: "All Levels"
    },
    {
      title: "CrossFit",
      description: "Functional movements performed at high intensity to build strength and conditioning.",
      image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      schedule: "Tue, Thu, Sat • 8:00 AM",
      duration: "60 min",
      level: "Intermediate",
      category: "crossfit"
    }
  ];

  // Add category property to all class items
  classesData[1].category = "cardio";
  classesData[2].category = "mind-body";
  classesData[3].category = "hiit";
  classesData[4].category = "cardio";

  const filteredClasses = activeFilter === 'all' 
    ? classesData 
    : classesData.filter(item => item.category === activeFilter);

  const filterOptions = [
    { value: 'all', label: 'All Classes' },
    { value: 'strength', label: 'Strength' },
    { value: 'cardio', label: 'Cardio' },
    { value: 'mind-body', label: 'Mind & Body' },
    { value: 'hiit', label: 'HIIT' },
    { value: 'crossfit', label: 'CrossFit' }
  ];

  return (
    <div className="bg-black text-gray-300 pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="mb-4 text-white">Our <span className="text-primary">Classes</span></h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Discover our wide range of fitness classes designed to help you achieve your goals, 
              whether you're looking to build strength, improve flexibility, or boost your cardio fitness.
            </p>
          </motion.div>

          {/* Filter Section */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <h2 className="text-white mb-4 md:mb-0">Find Your Perfect Class</h2>
              
              <div className="relative">
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                  <Filter className="h-5 w-5" />
                  <span>Filter Classes</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </button>
                
                {showFilters && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-64 bg-gray-800 rounded-md shadow-lg z-10 overflow-hidden"
                  >
                    {filterOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setActiveFilter(option.value);
                          setShowFilters(false);
                        }}
                        className={`w-full text-left px-4 py-3 hover:bg-gray-700 transition-colors ${
                          activeFilter === option.value ? 'bg-primary text-white' : 'text-gray-300'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {filterOptions.map((option) => (
                <motion.button
                  key={option.value}
                  onClick={() => setActiveFilter(option.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === option.value 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {option.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Classes Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredClasses.map((classItem, index) => (
              <motion.div
                key={classItem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                layout
                className="bg-gray-900 rounded-lg overflow-hidden group border border-gray-800 hover:border-primary transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="h-60 overflow-hidden relative">
                  <img 
                    src={classItem.image} 
                    alt={classItem.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {classItem.category.charAt(0).toUpperCase() + classItem.category.slice(1)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{classItem.title}</h3>
                  <p className="text-gray-400 mb-4">{classItem.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="mr-2 h-5 w-5 text-primary" /> 
                      <span>{classItem.schedule}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Clock className="mr-2 h-5 w-5 text-primary" /> 
                      <span>{classItem.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Users className="mr-2 h-5 w-5 text-primary" /> 
                      <span>{classItem.level}</span>
                    </div>
                  </div>
                  <motion.button 
                    className="w-full bg-primary hover:bg-green-600 text-white py-3 px-4 rounded transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Class
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Weekly Schedule Section */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-white">Weekly <span className="text-primary">Schedule</span></h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Plan your week with our comprehensive class schedule. All classes are included with your membership.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-900 text-gray-300 text-left">
                  <th className="py-4 px-6 font-semibold">Time</th>
                  <th className="py-4 px-6 font-semibold">Monday</th>
                  <th className="py-4 px-6 font-semibold">Tuesday</th>
                  <th className="py-4 px-6 font-semibold">Wednesday</th>
                  <th className="py-4 px-6 font-semibold">Thursday</th>
                  <th className="py-4 px-6 font-semibold">Friday</th>
                  <th className="py-4 px-6 font-semibold">Saturday</th>
                  <th className="py-4 px-6 font-semibold">Sunday</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {[
                  { time: "6:00 AM", classes: ["", "CrossFit", "", "CrossFit", "", "CrossFit", ""] },
                  { time: "7:30 AM", classes: ["Yoga", "", "Yoga", "", "Yoga", "", ""] },
                  { time: "9:00 AM", classes: ["Strength", "", "Strength", "", "Strength", "", ""] },
                  { time: "12:00 PM", classes: ["HIIT", "Spin", "HIIT", "Spin", "HIIT", "", ""] },
                  { time: "5:30 PM", classes: ["", "HIIT", "", "HIIT", "", "HIIT", ""] },
                  { time: "6:30 PM", classes: ["Spin", "", "Spin", "", "", "", ""] },
                  { time: "7:30 PM", classes: ["", "Yoga", "", "Yoga", "", "", ""] }
                ].map((row, rowIndex) => (
                  <tr key={rowIndex} className="hover:bg-gray-700">
                    <td className="py-4 px-6 font-medium text-white">{row.time}</td>
                    {row.classes.map((cls, cellIndex) => (
                      <td key={cellIndex} className="py-4 px-6">
                        {cls && (
                          <div className="bg-gray-900 rounded p-2 border-l-4 border-primary">
                            <div className="font-medium text-white">{cls}</div>
                            <div className="text-xs text-gray-400">60 min</div>
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-900 to-primary relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Start Your Fitness Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
              Join FlexForce today and get access to all our premium classes with expert instructors.
            </p>
            <motion.button
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Classes;