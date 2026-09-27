import { config } from "../config";
import "./styles/CallToAction.css";

const CallToAction = () => {
  const linkedInUrl = config.contact.linkedin.startsWith("http")
    ? config.contact.linkedin
    : `https://${config.contact.linkedin}`;

  return (
    <div className="cta-section">
      <div className="cta-buttons">
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn cta-btn-hire"
          data-cursor="disable"
        >
          Hire Me →
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
