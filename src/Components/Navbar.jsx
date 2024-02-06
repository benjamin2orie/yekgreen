import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <header>
        <ul>
          <li>
            <Link to='/About'>About</Link>
          </li>
          <li>
            <Link to='/Contact' id="ada">Contact</Link>
          </li>
        </ul>
        <h5>coming js</h5>
      </header>
    </div>
  );
};

export default Navbar;
