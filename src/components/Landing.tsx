import "./styles/Landing.css";
import { config } from "../config";

const Landing = () => {
  const nameParts = config.developer.fullName.split(" ");
  const firstName = nameParts[0] || config.developer.name;
  const lastName = nameParts.slice(1).join(" ") || "";
  const linkedInUrl = config.contact.linkedin.startsWith("http")
    ? config.contact.linkedin
    : `https://${config.contact.linkedin}`;

  return (
    <div className="landing-section landing-text-hero" id="landingDiv">
      <div className="landing-container landing-hero-layout">
        <div className="landing-intro">
          <h2>Hello! I'm</h2>
          <h1>
            {firstName.toUpperCase()}
            <span>{lastName.toUpperCase()}</span>
          </h1>
        </div>

        <div className="landing-info">
          <h2 className="landing-info-h2">
            <span className="landing-h2-1">SOFTWARE ENGINEER</span>
          </h2>
          <p className="landing-h2-info">WEB DEVELOPER · AI ENTHUSIAST</p>
          <p className="landing-description">
            I build scalable web applications and intelligent solutions that solve real-world problems.
          </p>
          <nav className="landing-social-links" aria-label="Social and contact links">
            <a href={config.contact.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <span aria-hidden="true">·</span>
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <span aria-hidden="true">·</span>
            <a href={`mailto:${config.contact.email}`}>Email</a>
          </nav>
        </div>

      </div>

      <a className="landing-scroll" href="#about">
        <span aria-hidden="true">↓</span>
        <span>SCROLL TO EXPLORE</span>
      </a>
    </div>
  );
};

export default Landing;
