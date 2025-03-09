import React from 'react';
import CircularGallery from './CircularGallery';
import img1 from '../assets/bushra.jpg'
import img2 from '../assets/maarij.jpg'
import img3 from '../assets/laiba.jpg'
import img4 from '../assets/mashal.jpg'
import img5 from '../assets/muskan.jpg'
import img6 from '../assets/omema.jpg'
import img7 from '../assets/talha.jpg'

const Teams = () => {
  // Team members data with Asian names
  const teamMembers = [
    { image: img1, text: '.' },
    { image: img2, text: '.' },
    { image: img3, text: '.' },
    { image: img4, text: '.' },
    { image: img5, text: '.' },
    { image: img6, text: '.' },
    { image: img7, text: '.' }
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