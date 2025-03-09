import React, { useState, useEffect } from 'react';

const Events = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  
  // Sample events data - you can replace with your actual events
  const events = [
    {
      id: 1,
      title: "Civic Leadership Workshop",
      date: "April 15, 2025",
      description: "Join us for an interactive workshop focused on developing essential leadership skills for civic engagement. Learn from experienced facilitators about effective communication, community organizing, and project management. This workshop is designed to empower students with practical tools to lead initiatives in their communities.",
      image: "https://source.unsplash.com/random/800x600/?workshop",
      category: "Workshop"
    },
    {
      id: 2,
      title: "Community Cleanup Drive",
      date: "May 2, 2025",
      description: "AUCES invites you to participate in our annual community cleanup initiative. Together, we'll work to beautify our local parks and streets while building connections with fellow students and community members. All cleaning supplies will be provided. This event offers a great opportunity to make a visible impact while demonstrating our commitment to environmental stewardship.",
      image: "https://source.unsplash.com/random/800x600/?cleanup",
      category: "Volunteer"
    },
    {
      id: 3,
      title: "Public Policy Forum",
      date: "May 20, 2025",
      description: "Engage in meaningful discussions about current public policy issues affecting our community. This forum brings together students, faculty, and guest speakers to explore diverse perspectives and develop a deeper understanding of complex social challenges. Participants will have the opportunity to ask questions and contribute to the dialogue.",
      image: "https://source.unsplash.com/random/800x600/?forum",
      category: "Discussion"
    },
    {
      id: 4,
      title: "Voter Registration Drive",
      date: "June 5, 2025",
      description: "Exercise your democratic right! AUCES is hosting a voter registration drive to help students register to vote in upcoming elections. Our team will provide guidance through the registration process and share information about the importance of voter participation. Don't miss this chance to ensure your voice is heard in our democracy.",
      image: "https://source.unsplash.com/random/800x600/?vote",
      category: "Civic Action"
    },
    {
      id: 5,
      title: "Social Innovation Hackathon",
      date: "July 12-13, 2025",
      description: "Put your problem-solving skills to the test at our weekend-long Social Innovation Hackathon. Teams will collaborate to develop creative solutions to pressing community challenges. Mentors will be available to provide guidance, and prizes will be awarded to the most promising projects. This is your chance to transform ideas into actionable plans for positive change.",
      image: "https://source.unsplash.com/random/800x600/?innovation",
      category: "Competition"
    },
    {
      id: 6,
      title: "Guest Speaker Series: Civic Tech",
      date: "August 3, 2025",
      description: "Learn how technology is transforming civic engagement from industry leaders and innovators. This speaker series will explore the intersection of technology and civic participation, highlighting how digital tools can enhance democratic processes and community involvement. Attendees will gain insights into emerging trends and opportunities in the civic tech landscape.",
      image: "https://source.unsplash.com/random/800x600/?speaker",
      category: "Seminar"
    }
  ];

  // Animation effect for cards appearing
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards(Array(events.length).fill(true));
    }, 100);
    
    return () => clearTimeout(timer);
  }, [events.length]);

  // Function to truncate description
  const truncateDescription = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  return (
    <div className="bg-white min-h-screen pt-[16vh] px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1B4965] mb-4">Our Events</h1>
        <div className="h-1 w-24 bg-blue-500 mx-auto rounded"></div>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
          Join us in making a difference through our diverse range of civic engagement activities.
        </p>
      </div>

      {/* Event Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto pb-16">
        {events.map((event, index) => (
          <div 
            key={event.id}
            className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
              visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              transitionDelay: `${index * 100}ms`,
              transition: 'all 0.5s ease-out'
            }}
          >
            <div className="relative">
              {/* Event Image */}
              <div className="h-48 w-full overflow-hidden">
                <div 
                  className="h-full w-full bg-[#1B4965] bg-opacity-20 bg-center bg-cover transform hover:scale-110 transition-all duration-500"
                  style={{ backgroundImage: `url(${event.image})` }}
                ></div>
              </div>
              
              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-[#1B4965] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {event.category}
                </span>
              </div>
            </div>
            
            {/* Event Content */}
            <div className="p-6">
              <div className="text-sm text-blue-500 font-semibold mb-2">{event.date}</div>
              <h3 className="text-xl font-bold text-[#1B4965] mb-3 hover:text-blue-600 transition-colors">
                {event.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {truncateDescription(event.description)}
              </p>
              
              {/* Button */}
              <button className="mt-2 inline-flex items-center text-blue-500 font-medium hover:text-blue-700 transition-colors group">
                Read more
                <svg 
                  className="ml-2 w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
            
            {/* Bottom Bar */}
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-[#1B4965]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;