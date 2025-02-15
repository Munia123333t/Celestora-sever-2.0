import React from "react";
import { Zoom } from "react-awesome-reveal";

const TimelineSection = () => {
    const timelineEvents = [
        {
            year: "3000 BC",
            title: "Ancient Civilizations",
            description: "The beginning of written history and the rise of the earliest known civilizations.",
        },
        {
            year: "476 AD",
            title: "The Fall of Rome",
            description: "Marking the end of the ancient era and the beginning of the Middle Ages.",
        },
        {
            year: "1492",
            title: "Age of Exploration",
            description: "Christopher Columbus discovers the New World, changing global history forever.",
        },
        {
            year: "1969",
            title: "Moon Landing",
            description: "Apollo 11 successfully lands on the moon, marking a leap in human achievement.",
        },
        {
            year: "2023",
            title: "Modern Discoveries",
            description: "Advancements in AI and technology transform how we explore the past and the future.",
        },
    ];

    return (
<section className="py-8 sm:py-16 w-full overflow-hidden container mx-auto bg-white dark:bg-gray-800 text-black dark:text-white">
            <div className="px-4 sm:px-6 max-w-[100vw]">

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8  bg-white dark:bg-gray-800 text-black dark:text-white">
                    Explore Our Timeline
                </h2>

                <div className="relative">

                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full  "></div>

                    <div className="space-y-8 ">
                        {timelineEvents.map((event, index) => (
                            <Zoom key={index} triggerOnce>
                                <div className={`relative flex flex-col md:flex-row items-center ${
                                    index % 2 === 0 ? "md:items-start" : "md:items-end"
                                }`}>

                                    <div className={`hidden lg:block absolute top-6 h-[1px] bg-gray-300 ${
                                        index % 2 === 0 ? "left-0 w-1/2" : "right-0 w-1/2"
                                    }`}></div>

                                    <div className={`bg-gradient-to-r from-yellow-950  to-orange-800 p-4 sm:p-6 rounded-lg shadow-lg w-full md:max-w-md ${
                                        index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                                    }`}>
                                        <h3 className="text-xl sm:text-2xl font-bold text-indigo-100 mb-2">
                                            {event.year}
                                        </h3>
                                        <h4 className="text-lg sm:text-xl font-semibold text-gray-100">
                                            {event.title}
                                        </h4>
                                        <p className="text-sm sm:text-base text-gray-300">{event.description}</p>
                                    </div>
                                </div>
                            </Zoom>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
