import "./NavBar.css"; // You can create a CSS file for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="company-title">Company Name</div>
      <div className="menu-icon">&#9776;</div> {/* Hamburger menu icon */}
      <div className="nav-options">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Services</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
};

export default NavBar;
