import "./Hero.css";
import profile from "../../assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="hero">
        {/* Background bubbles */}
      <div className="hero-bg">
        <span></span>
        <span></span>
        <span></span>
                <span></span>

        <span></span>

        <span></span>

        <span></span>
        <span></span>

      </div>

      <div className="container hero-container">
        

        {/* Left */}

        <div className="hero-content">

          <p className="hero-subtitle">
            Hello, I'm
          </p>

          <h1 className="hero-title">
             <span>Ajitha C</span>
          </h1>

          <h2 className="hero-role">
            MERN Stack Developer
          </h2>

          <p className="hero-description">
            I build responsive and user-friendly web applications using
            React, TypeScript, Node.js, Express.js and MongoDB.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              View Projects
            </button>

            <button className="secondary-btn">
              Download Resume
            </button>

          </div>

        </div>

        {/* Right */}

        <div className="hero-image">

          <div className="image-circle">

            <div className="glow-ring"></div>

            <img src={profile}
            alt = "Ajitha"
            className="profile-image"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;