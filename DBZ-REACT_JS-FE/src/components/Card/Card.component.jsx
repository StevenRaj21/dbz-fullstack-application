import { useEffect, useState } from "react";
import getAllCharacters from "../../../services/dragonBallApi";
import "./card.component.css";
import Hero from "../Hero/Hero.component";
import Characters from "../Characters/Characters.component";
import Footer from "../Footer/Footer.component";

const Card = () => {
  const [charactersDetails, setCharactersDetails] = useState(null);

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        const itemResponce = await getAllCharacters();
        console.log(itemResponce);
        setCharactersDetails(itemResponce);
      } catch (error) {
        console.log(
          `error occured in useEffect 'Card': ${JSON.stringify(error)}`,
        );
      }
    };

    loadCharacters();
  }, []);

  return (
    <main className="card-content">
      <Hero />
      <h1 className="card-title">The Dragon Ball API</h1>

      <Characters characters={charactersDetails} />

      <Footer />
    </main>
  );
};

export default Card;
