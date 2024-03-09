import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-headline">
          <h1>Project</h1>
          <h1>Lorum</h1>
        </div>
        <div className="hero-img-container">
          <Link to="/">
            <button type="button">View Project 🡒</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
