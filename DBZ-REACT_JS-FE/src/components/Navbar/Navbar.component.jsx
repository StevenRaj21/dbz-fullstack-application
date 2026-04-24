import "./Navbar.component.css";
import logo from "../../assets/images/dragonball-icon-bg-remove.png";

const Navbar = () => {
  return (
    <header className="navbar">
      <section className="navbar-content">
        <div>
          <img src={logo} alt="Dragon Ball API Logo" className="navbar-logo" />
        </div>

        <nav>
          <ul className="navbar-links">
            <li>
              <a href="https://web.dragonball-api.com/documentation">Docs</a>
            </li>
            <li>
              <a href="https://web.dragonball-api.com/about">About</a>
            </li>
            <li>
              <a href="https://web.dragonball-api.com/support" className="support-btn">
                SUPPORT US
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Navbar;
