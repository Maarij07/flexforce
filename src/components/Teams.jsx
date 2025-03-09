import React from 'react';
import CircularGallery from './CircularGallery';

const Teams = () => {
  // Team members data with Asian names
  const teamMembers = [
    { image: 'https://picsum.photos/seed/team1/800/600', text: 'Jin Park' },
    { image: 'https://picsum.photos/seed/team2/800/600', text: 'Ming Zhang' },
    { image: 'https://picsum.photos/seed/team3/800/600', text: 'Arjun Patel' },
    { image: 'https://picsum.photos/seed/team4/800/600', text: 'Sakura Tanaka' },
    { image: 'https://picsum.photos/seed/team5/800/600', text: 'Raj Kumar' },
    { image: 'https://picsum.photos/seed/team6/800/600', text: 'Mei Lin Chen' },
    { image: 'https://picsum.photos/seed/team7/800/600', text: 'Akira Watanabe' },
    { image: 'https://picsum.photos/seed/team8/800/600', text: 'Siti Rahman' },
    { image: 'https://picsum.photos/seed/team9/800/600', text: 'Haruki Nakamura' },
    { image: 'https://picsum.photos/seed/team10/800/600', text: 'Priya Sharma' },
    { image: 'https://picsum.photos/seed/team11/800/600', text: 'Yuna Kim' },
    { image: 'https://picsum.photos/seed/team12/800/600', text: 'Ravi Singh' }
  ];

  return (
    <div className="w-full bg-white py-[16vh] px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B4965] mb-4">
            Our Hard Working Team
          </h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated individuals who make our mission possible through their expertise, 
            passion, and commitment to excellence.
          </p>
        </div>

        {/* Gallery Section */}
        <div className="h-[600px] relative rounded-lg overflow-hidden shadow-xl">
          <CircularGallery 
            items={teamMembers} 
            bend={3} 
            textColor="#ffffff" 
            borderRadius={0.05}
            font="bold 30px DM Sans"
          />
        </div>
        
        {/* Optional: Add a caption or instruction for users */}
        <div className="text-center mt-6 text-gray-500">
          <p>Drag or scroll to explore our team members</p>
        </div>
      </div>
    </div>
  );
};

export default Teams;