import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Trading Dashboard</h2>

      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/strategy">Strategy</Link></li>
        <li><Link to="/results">Results</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;