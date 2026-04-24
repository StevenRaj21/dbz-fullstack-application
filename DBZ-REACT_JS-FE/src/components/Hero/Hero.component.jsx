import "./Hero.component.css";
import heroImage from "../../assets/images/hero-dragonball.png";

const Hero = () => {
  return (
    <section className="hero">
      <img src={heroImage} alt="Dragon Ball Super API" className="hero-image" />
    </section>
  );
};

export default Hero;
