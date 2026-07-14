import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">

      <div className="container">

        <h2 className="section-title">
          Contact <span>Me</span>
        </h2>

        <p className="contact-subtitle">
          I'm currently looking for MERN Stack Developer opportunities.
          Feel free to connect with me.
        </p>

        <div className="contact-grid">

          <div className="contact-card">
            <h3>Email</h3>
            <a href="mailto:YOUR_EMAIL@gmail.com">
              YOUR_EMAIL@gmail.com
            </a>
          </div>

          <div className="contact-card">
            <h3>GitHub</h3>
            <a
              href="https://github.com/ajithamca-gif"
              target="_blank"
              rel="noreferrer"
            >
              github.com/ajithamca-gif
            </a>
          </div>

          <div className="contact-card">
            <h3>LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/ajitha-c-895b02399/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/ajitha-c-895b02399
            </a>
          </div>

          <div className="contact-card">
            <h3>Location</h3>
            <p>Nagercoil, Tamil Nadu</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;