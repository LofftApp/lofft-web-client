import logo from "./../../logo.svg";
import CountDownToLaunch from "../countdown";
import { Link } from "react-router-dom";

const Header = ({ toggle, isLanding }) => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Lofft Logo" className="logo" />
      </Link>
      <nav className="nav">
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="/investors">For Investors</Link>
          </li>
          {/* Temporary link to test API interaction and a login page */}
          <li className="nav-link">
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
        <CountDownToLaunch />
      </nav>
    </header>
  );
};

export default Header;
