import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">

        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="about-content">

          <div className="about-text">

            <p>
              I'm <strong>Ajitha C</strong>, a passionate MERN Stack Developer
              from Nagercoil. I enjoy building responsive and user-friendly web
              applications using modern technologies.
            </p>

            <p>
              I have hands-on experience with React, TypeScript, Node.js,
              Express.js and MongoDB. I love learning new technologies and
              improving my development skills every day.
            </p>

            <p>
              My goal is to join a company where I can contribute, grow as a
              developer, and build high-quality web applications.
            </p>

          </div>

          <div className="about-info">

            <div className="info-card">
              <h3>Experience</h3>
              <p>Fresher</p>
            </div>

            <div className="info-card">
              <h3>Projects</h3>
              <p>3+</p>
            </div>

            <div className="info-card">
              <h3>Location</h3>
              <p>Nagercoil, Tamil Nadu</p>
            </div>

            <div className="info-card">
              <h3>Education</h3>
              <p>MCA (Computer Applications)</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;