import "./Skills.css";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Bootstrap"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST API"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "Mongoose"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Thunder Client", "Vite"],
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">

        <h2 className="section-title">
          My <span>Skills</span>
        </h2>

        <div className="skills-grid">

          {skillCategories.map((category, index) => (
            <div className="skill-card" key={index}>

              <h3>{category.title}</h3>

              <div className="skill-list">
                {category.skills.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;