import './Navbar.css';

const Navbar = ({ loggedUser }) => {
  return (
    <div className="width-100">
      <nav className="navbar">
        <h1>Entertainment App</h1>
        <h3>
          Welcome {loggedUser.toUpperCase()}
          <button className="logout-btn" onClick={(e) => e.preventDefault()}>
            Logout
          </button>
        </h3>
      </nav>
    </div>
  );
};

export default Navbar;
