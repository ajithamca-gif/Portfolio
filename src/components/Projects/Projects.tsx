import "./Projects.css";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";

const projects = [
  {
    title: "QuickSeva",
    image: project1,
    description: "Full Stack Service Booking Platform",
    tech: ["React", "TypeScript", "Node.js", "MongoDB"],
    github: "https://github.com/ajithamca-gif/quickseva-frontend",
    live: "https://quickseva-frontend.vercel.app",
  },
  {
    title: "Plant Shop",
    image: project2,
    description: "E-commerce Plant Store",
    tech: ["React", "Bootstrap", "JSON Server"],
    github: "https://github.com/ajithamca-gif/plant-shop",
    live: "https://plant-shop-qe7g.vercel.app",
  },
  {
    title: "Portfolio",
    image: project3,
    description: "Personal Portfolio Website",
    tech: ["React", "TypeScript", "CSS"],
    github: "https://github.com/ajithamca-gif",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">

        <h2 className="section-title">
          My <span>Projects</span>
        </h2>
        <div className="projects-grid">

{projects.map((project, index) => (
  <div className="project-card" key={index}>

    <img
      src={project.image}
      alt={project.title}
      className="project-image"
    />

    <h3>{project.title}</h3>

    <p className="project-description">{project.description}</p>

    <div className="tech-stack">
      {project.tech.map((tech, i) => (
        <span key={i}>{tech}</span>
      ))}
    </div>

    <div className="project-links">

      <a
        href={project.live}
        target="_blank"
        rel="noreferrer"
      >
        Live Demo
      </a>

      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>

    </div>

  </div>
))}
</div>
        

      </div>
    </section>
  );
};

export default Projects;