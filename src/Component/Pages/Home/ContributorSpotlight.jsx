import React from 'react';
import { motion } from 'framer-motion';
const ContributorSpotlight = () => {
    const contributors = [
        {
            id: 1,
            name: "Dr. Sarah Chen",
            contributions: 127,
            expertise: "Ancient Asian Artifacts",
            avatar: "/api/placeholder/100/100",
            recentFind: "Tang Dynasty Ceramic Vessel"
        },
        {
            id: 2,
            name: "Prof. James Miller",
            contributions: 98,
            expertise: "Medieval European History",
            avatar: "/api/placeholder/100/100",
            recentFind: "15th Century Manuscript"
        },
        {
            id: 3,
            name: "Dr. Amira Hassan",
            contributions: 115,
            expertise: "Middle Eastern Archaeology",
            avatar: "/api/placeholder/100/100",
            recentFind: "Ancient Mesopotamian Tablet"
        }
    ];

    return (
<section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Top Contributors
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {contributors.map((contributor, index) => (
                        <motion.div
                            key={contributor.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden"
                        >
                            <div className="p-6">
                                <div className="flex items-center space-x-4 mb-4">
                                    <img
                                        src={contributor.avatar}
                                        alt={contributor.name}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-800">
                                            {contributor.name}
                                        </h3>
                                        <p className="text-orange-900 font-medium">
                                            {contributor.expertise}
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Contributions:</span>
                                        <span className="font-semibold text-gray-800">
                                            {contributor.contributions}
                                        </span>
                                    </div>
                                    <div className="border-t pt-3">
                                        <p className="text-sm text-gray-600">Recent Discovery:</p>
                                        <p className="font-medium text-gray-800">
                                            {contributor.recentFind}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-gradient-to-r from-yellow-900 via-orange-900 to-red-900 p-4">
                                <button className="w-full text-white font-medium hover:opacity-90 transition-opacity">
                                    View Profile
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContributorSpotlight;