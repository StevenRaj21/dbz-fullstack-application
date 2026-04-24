import Card from "../../components/Card/Card.component";
import Navbar from "../../components/Navbar/Navbar.component";
import "./home.style.css";

const Home = () => {
  return (
    <div className="bg-container">
      <Navbar />
      <Card />
    </div>
  );
};

export default Home;
