import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User } from 'lucide-react';
const VlogPage = () => {
    const allVlogs = [
        // Previous featured vlogs
        {
            id: 1,
            title: "Unveiling the Rosetta Stone",
            description: "A deep dive into the discovery that unlocked ancient Egyptian hieroglyphs",
            image: "/api/placeholder/600/400",
            author: "Dr. Sarah Walker",
            date: "Feb 10, 2025",
            duration: "15 min",
            category: "Ancient Egypt"
          },
          {
            id: 2,
            title: "Hidden Treasures of Pompeii",
            description: "Exploring newly excavated artifacts from the ancient Roman city",
            image: "/api/placeholder/600/400",
            author: "Prof. Marco Bianchi",
            date: "Feb 9, 2025",
            duration: "12 min",
            category: "Roman Empire"
          },
          {
            id: 3,
            title: "The Terracotta Army Up Close",
            description: "Behind-the-scenes look at China's most impressive archaeological find",
            image: "/api/placeholder/600/400",
            author: "Dr. Li Wei",
            date: "Feb 8, 2025",
            duration: "18 min",
            category: "Ancient China"
          },
          {
            id: 4,
            title: "Mysteries of Göbekli Tepe",
            description: "Uncovering the world's oldest known temple complex",
            image: "/api/placeholder/600/400",
            author: "Dr. Maya Peterson",
            date: "Feb 7, 2025",
            duration: "20 min",
            category: "Prehistoric"
          },
          {
            id: 5,
            title: "Lost Cities of the Maya",
            description: "Digital reconstruction of newly discovered Mayan settlements",
            image: "/api/placeholder/600/400",
            author: "Dr. Carlos Ruiz",
            date: "Feb 6, 2025",
            duration: "25 min",
            category: "Mesoamerica"
          },
          {
            id: 6,
            title: "Viking Treasures of Norway",
            description: "Exploring recently unearthed Viking artifacts and their historical significance",
            image: "/api/placeholder/600/400",
            author: "Dr. Erik Larsson",
            date: "Feb 5, 2025",
            duration: "30 min",
            category: "Viking Age"
          }
      ];
    
      const categories = ["All", "Ancient Egypt", "Roman Empire", "Ancient China", "Prehistoric", "Mesoamerica", "Viking Age"];
      const [selectedCategory, setSelectedCategory] = React.useState("All");
    
      const filteredVlogs = selectedCategory === "All" 
        ? allVlogs 
        : allVlogs.filter(vlog => vlog.category === selectedCategory);
    
    return (
<div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-4 text-gray-900">Artifact Stories</h1>
        <p className="text-xl text-center text-gray-600 mb-12">Discover the fascinating world of historical artifacts through our expert-led video series</p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVlogs.map((vlog) => (
            <div key={vlog.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
              <img src={vlog.image} alt={vlog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="text-sm font-semibold text-blue-600 mb-2">{vlog.category}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{vlog.title}</h3>
                <p className="text-gray-600 mb-4">{vlog.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <User size={16} className="mr-2" />
                    <span>{vlog.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    <span>{vlog.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default VlogPage;