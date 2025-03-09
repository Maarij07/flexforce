import React, { useState, useEffect } from 'react';
import img1 from '../assets/president.jpg';
import img2 from '../assets/vicePresident.jpg';
import img3 from '../assets/generalSecretary.jpg';

const Executives = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState([false, false, false]);

  useEffect(() => {
    // Initial animation for first section
    setIsVisible([true, false, false]);
    
    // Setup intersection observer for each section
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          setActiveSection(index);
          
          // Update visibility state
          const newVisibility = [...isVisible];
          newVisibility[index] = true;
          setIsVisible(newVisibility);
        }
      });
    }, observerOptions);

    // Observe each section
    document.querySelectorAll('.exec-section').forEach(section => {
      sectionObserver.observe(section);
    });

    return () => {
      document.querySelectorAll('.exec-section').forEach(section => {
        sectionObserver.unobserve(section);
      });
    };
  }, []);

  const executives = [
    {
      title: "President",
      name: "Ali Ahmed",
      image: img1,
      description: "We are proud to introduce ALI AHMED, the visionary president of the AUCES. From the beginning of this society, he has played a pivotal role in shaping its foundation and driving its mission forward. Under his leadership, the AUCES has reached new heights, expanding its initiatives and outreach to empower individuals and communities alike. He is committed to raising civic awareness and instilling a sense of social responsibility among youth, all while enhancing their leadership skills. Through innovative programs and active participation, ALI AHMED strives to fulfill the society's mission and vision, inspiring the next generation of leaders to create meaningful change in society. We are excited to see how his passion and dedication continue to shape the future of AUCES!",
      bgColor: "bg-[#1B4965]",
      textColor: "text-white"
    },
    {
      title: "Vice President",
      name: "Iqra Mazhar",
      image: img2,
      description: "We introduce Iqra Mazhar, the dedicated Vice President of the Air University Civic Engagement Society (AUCES). Iqra is a passionate advocate for youth empowerment, tirelessly working to promote our society across various platforms. Her steadfast commitment to social change and civic awareness has made a significant impact on our community and beyond. Through her efforts, Iqra inspires young individuals to engage actively in civic issues, cultivating a sense of responsibility and leadership among the youth. She believes in the power of informed citizens to drive positive change, and her initiatives reflect this belief. As Vice President, Iqra continues to elevate AUCES's mission, ensuring that our society serves as a catalyst for social transformation. We all will witness how her passion and leadership will shape the future of AUCES and empower the next generation of leaders!",
      bgColor: "bg-white",
      textColor: "text-blue-900"
    },
    {
      title: "General Secretary",
      name: "Mudasir Shamshad",
      image: img3,
      description: "We are proud to introduce MUDASIR SHAMSHAD, the General Secretary of AUCES. With extensive experience in advocating for civic awareness among youth, he brings a wealth of knowledge and passion to our organization. Mudasir is committed to effectively communicating the mission and vision of the society, ensuring that its message resonates with the youth. Through his efforts, he strives to enhance student civic awareness and encourage active participation in societal issues. With a strong belief in the power of informed and engaged citizens, MUDASIR SHAMSHAD dedicates his time and efforts to fulfill the goals of AUCES. We look forward to seeing the impact of his leadership on our society and the community at large!",
      bgColor: "bg-[#1B4965]",
      textColor: "text-white"
    }
  ];

  // Navigation dots component
  const NavDots = () => (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
      {executives.map((_, index) => (
        <button
          key={index}
          className={`block w-3 h-3 rounded-full my-3 transition-all duration-300 
            ${activeSection === index ? 'bg-blue-500 scale-150' : 'bg-gray-400'}`}
          onClick={() => {
            document.querySelectorAll('.exec-section')[index].scrollIntoView({
              behavior: 'smooth'
            });
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="bg-white relative">
      <NavDots />
      
      {/* Executive Sections */}
      {executives.map((exec, index) => (
        <section 
          key={index}
          data-index={index}
          className={`exec-section pt-[16vh] min-h-screen flex flex-col md:flex-row items-center ${exec.bgColor} py-8 px-4 md:px-10 lg:px-20 transition-opacity duration-700
            ${isVisible[index] ? 'opacity-100' : 'opacity-0'}`}
        >
          {index % 2 === 0 ? (
            <>
              <div className="flex flex-col items-start justify-center w-full md:w-1/2 md:pr-8 lg:pr-16">
                <div className={`transform ${isVisible[index] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-700 delay-300 ${exec.textColor}`}>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{exec.title}</h1>
                  <p className="text-base md:text-lg mb-6">{exec.description}</p>
                  <div className="relative">
                    <p className="text-xl font-semibold">{exec.name}</p>
                    <div className={`h-1 w-16 mt-2 bg-blue-500 rounded transition-all duration-500 
                      ${isVisible[index] ? 'w-16 opacity-100' : 'w-0 opacity-0'}`}></div>
                  </div>
                </div>
              </div>
              <div className={`mt-8 md:mt-0 md:ml-auto transform ${isVisible[index] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} transition-all duration-700 delay-500`}>
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <img 
                    src={exec.image} 
                    alt={exec.name} 
                    className="h-[40vh] md:h-[60vh] w-auto object-cover transform hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 border-2 border-blue-400 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={`mb-8 md:mb-0 md:mr-auto transform ${isVisible[index] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'} transition-all duration-700 delay-500`}>
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <img 
                    src={exec.image} 
                    alt={exec.name} 
                    className="h-[40vh] md:h-[60vh] w-auto object-cover transform hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 border-2 border-blue-400 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center w-full md:w-1/2 md:pl-8 lg:pl-16">
                <div className={`transform ${isVisible[index] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-700 delay-300 ${exec.textColor}`}>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{exec.title}</h1>
                  <p className="text-base md:text-lg mb-6">{exec.description}</p>
                  <div className="relative">
                    <p className="text-xl font-semibold">{exec.name}</p>
                    <div className={`h-1 w-16 mt-2 bg-blue-500 rounded transition-all duration-500 
                      ${isVisible[index] ? 'w-16 opacity-100' : 'w-0 opacity-0'}`}></div>
                  </div>
                </div>
              </div>
            </>
          )}
        </section>
      ))}
    </div>
  );
};

export default Executives;