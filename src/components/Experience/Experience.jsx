import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans relative"
    >
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:linear-gradient(to_bottom,transparent_0%,#000_10%,#000_90%,transparent_100%),linear-gradient(to_right,transparent_0%,#000_15%,#000_85%,transparent_100%)] [mask-composite:intersect] pointer-events-none"></div>
      
      <div className="relative z-10">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#2B2E1E]">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-[#2B2E1E] mx-auto mt-4"></div>
        <p className="text-[#4a4d3e] mt-4 text-lg font-semibold">
          An overview of my professional experience and the roles I have held across various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-[#2B2E1E] h-full"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            {/* <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-[#F4EEE0] border-4 border-[#2B2E1E] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div> */}

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border-2 border-[#2B2E1E] bg-white backdrop-blur-md shadow-[0_0_20px_1px_rgba(43,46,30,0.2)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* Company Logo/Image */}
                <div className="w-16 h-16 bg-[#F4EEE0] rounded-md overflow-hidden border border-[#2B2E1E]">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Role, Company Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#2B2E1E]">
                      {experience.role}
                    </h3>
                    <h4 className="text-md sm:text-sm text-[#4a4d3e]">
                      {experience.company}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-[#7A6B5E] mt-2">{experience.date}</p>
                </div>
              </div>

              <p className="mt-4 text-[#4a4d3e]">{experience.desc}</p>
              <div className="mt-4">
                <h5 className="font-medium text-[#2B2E1E]">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#2B2E1E] text-[#EDE3D6] px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-[#2B2E1E] font-semibold"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Experience;
