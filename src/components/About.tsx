import "./styles/About.css";
import { config } from "../config";

const About = () => {
  return (
    <section className="about-section about-redesign" id="about">
      <figure className="about-photo">
        <img
          src="/images/Arun2.jpg"
          alt="Arun Ramesh Chavan"
          loading="lazy"
          decoding="async"
        />
      </figure>
      <div className="about-me">
        <h3 className="title">{config.about.title}</h3>
        <p className="about-description">
          I'm a Software Engineer focused on building scalable web applications and intelligent solutions. I enjoy working with modern web technologies, backend systems, cloud technologies, and AI.
        </p>
        <p className="about-technologies">
          My experience includes .NET, ASP.NET Core, React, Python, Flask, FastAPI, Node.js, AWS, SQL, and MongoDB.
        </p>
      </div>
    </section>
  );
};

export default About;
