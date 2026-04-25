import "./Characters.component.css";

const Characters = ({ characters }) => {
  console.log(characters);
  
  return (
    <>
      <h1 className="characters-heading">Characters</h1>
      <section className="characters">
        {characters.map((character) => (
          <article className="card" key={character.id}>
            <div className="img-box">
              <img src={character.image} alt={character.name} />
            </div>

            <div className="info">
              <h2>{character.name}</h2>
              <p className="race">{character.race}</p>

              <p>
                <span>Gender:</span> {character.gender}
              </p>

              <p>
                <span>Ki:</span> {character.ki}
              </p>

              <p>
                <span>Max Ki:</span> {character.maxKi}
              </p>

              <p>
                <span>Affiliation:</span> {character.affiliation}
              </p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};

export default Characters;
