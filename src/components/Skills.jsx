import { useState } from "react";
import "./Skills.css";

import { skills, filters } from "../data/skills";

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Filter Skills
  const filteredSkills =
    activeFilter === "all"
      ? skills
      : skills.filter((skill) =>
          skill.categories?.includes(activeFilter)
        );

  return (
    <section className="skills-section" id="skills">
      
      {/* Section Heading */}
      <h2>
        <i className="fas fa-tools"></i>
        {" "}Tools & Expertise
      </h2>

      {/* Filter Buttons */}
      <div className="skill-filter holographic-filter">
        {filters.map((filter) => (
          <button
            key={filter.key}
            className={`filter-btn ${
              activeFilter === filter.key ? "active" : ""
            }`}
            onClick={() => setActiveFilter(filter.key)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-cloud holographic-cloud">
        {filteredSkills.map((skill, idx) => (
          <div
            key={idx}
            className="skill-chip holographic-chip"
          >
            <i className={skill.icon}></i>

            <span className="skill-name">
              {skill.name}
            </span>

            <span className="chip-glow"></span>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredSkills.length === 0 && (
        <div className="no-skills-message">
          <i className="fas fa-circle-info"></i>
          {" "}No skills found in this category.
        </div>
      )}
    </section>
  );
};

export default Skills;