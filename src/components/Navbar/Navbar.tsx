import "./Navbar.css";
import resume from "../../assets/Ajitha_C_Resume.pdf";
// import logo from "../../assets/AJ-logo.png";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container nav-container">

<div className="logo">
  <img src="/AJ-logo.png" alt="AJ Logo" className="logo-img" />
</div>
        <nav>
          <ul className="nav-links">

            <li><a href="#home">Home</a></li>

            <li><a href="#about">About</a></li>

            <li><a href="#skills">Skills</a></li>

            <li><a href="#projects">Projects</a></li>

            <li><a href="#contact">Contact</a></li>

          </ul>
        </nav>

        <button className="resume-btn">
          <a
  href={resume}
  download
  className="resume-btn"
>
  Download Resume
</a>
        </button>

      </div>
    </header>
  );
};

export default Navbar;