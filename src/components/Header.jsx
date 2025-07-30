import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ background: "#333", padding: "1rem", color: "#fff", textAlign: "center" }}>
      <h1><Link to="/" style={{ color: "#fff", textDecoration: "none" }}>📝 My Blog</Link></h1>
    </header>
  );
}

export default Header;
