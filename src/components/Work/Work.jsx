import React, { useState, useEffect } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Disable background scroll
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset'; // Re-enable background scroll
  };

  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && selectedProject) {
        handleCloseModal();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    
    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset'; // Ensure scroll is re-enabled on unmount
    };
  }, [selectedProject]);

  return (
    <>
      <section
        id="work"
        className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
      >
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:linear-gradient(to_bottom,transparent_0%,#000_10%,#000_90%,transparent_100%),linear-gradient(to_right,transparent_0%,#000_15%,#000_85%,transparent_100%)] [mask-composite:intersect] pointer-events-none"></div>
        
        <div className="relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2B2E1E]">PROJECTS</h2>
          <div className="w-32 h-1 bg-[#2B2E1E] mx-auto mt-4"></div>
          <p className="text-[#4a4d3e] mt-4 text-lg font-semibold">
            A collection of projects that reflect my hands-on experience and technical expertise across multiple technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className="border-2 border-[#2B2E1E] bg-white backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-[#2B2E1E]/50 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2B2E1E] mb-2">
                  {project.title}
                </h3>
                <p className="text-[#4a4d3e] mb-4 pt-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-[#2B2E1E] text-[#EDE3D6] text-xs font-semibold rounded-full px-2 py-1 mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Modal Container - Rendered outside section to avoid z-index stacking context issues */}
      {selectedProject && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black/90 p-4 overflow-y-auto"
          onClick={handleCloseModal}
          style={{ zIndex: 9999 }}
        >
          <div 
            className="bg-[#F4EEE0] rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl relative my-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Fixed at top */}
            <div className="sticky top-0 right-0 flex justify-end p-4 bg-[#F4EEE0] z-10 border-b-2 border-[#2B2E1E]">
              <button
                onClick={handleCloseModal}
                className="text-[#2B2E1E] text-3xl font-bold hover:text-[#7A6B5E] transition-colors duration-200 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-[#F4EEE0] px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl border-2 border-[#2B2E1E]"
                />
              </div>
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-[#2B2E1E] mb-4 text-md">
                  {selectedProject.title}
                </h3>
                <p className="text-[#4a4d3e] mb-6 lg:text-base text-xs">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#2B2E1E] text-[#EDE3D6] text-xs font-semibold rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-[#7A6B5E] hover:bg-[#2B2E1E] text-[#EDE3D6] lg:px-6 lg:py-3 px-3 py-2 rounded-xl lg:text-xl text-sm font-semibold text-center transition-colors duration-200"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-[#2B2E1E] hover:bg-[#7A6B5E] text-[#EDE3D6] lg:px-6 lg:py-3 px-3 py-2 rounded-xl lg:text-xl text-sm font-semibold text-center transition-colors duration-200"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Work;
