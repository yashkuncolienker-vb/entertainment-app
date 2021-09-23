import './Navbar.css';

const Navbar = ({ loggedUser }) => {
  return (
    <nav className="navbar">
      <h1>Entertainment App</h1>
      <h3>
        Welcome {loggedUser.toUpperCase()}
        <button
          className="logout-btn hvr-btn"
          onClick={(e) => e.preventDefault()}
        >
          Logout
        </button>
      </h3>
    </nav>
  );
};

export default Navbar;
