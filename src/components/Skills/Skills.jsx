// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 border border-white rounded-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] backdrop-blur-md p-6"
        >
          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-6 text-center">
            {category.title}
          </h3>

          {/* Tilted Skill Grid */}
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
              {category.skills.map((skill) => (
                <div key={skill.name} className="relative group w-full">
                  <div
                    className="flex items-center justify-start gap-2 bg-gray-800 border border-gray-600 rounded-3xl py-2 px-4 text-center min-h-[48px] w-full hover:shadow-lg hover:border-[#8245ec] transition duration-300"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                    />
                    <span className="text-xs sm:text-sm text-gray-300 whitespace-nowrap overflow-hidden text-ellipsis">
                      {skill.name}
                    </span>
                  </div>

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-[#8245ec] text-white text-xs font-medium px-3 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-[-5px] transition-all duration-300 z-20">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>

          </Tilt>
        </div>
      ))}
    </div>

  </section>
);

export default Skills;