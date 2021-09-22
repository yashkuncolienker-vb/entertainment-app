import { useHistory } from 'react-router';
import './Navbar.css';

const Navbar = ({ loggedUser }) => {
  const history = useHistory();
  const handleClick = () => {
    localStorage.removeItem('loggedUser');
    history.push('/');
  };

  return (
    <div className="width-100">
      <nav className="navbar">
        <h1>Entertainment App</h1>
        <h3>
          Welcome {loggedUser.toUpperCase()}
          <button className="logout-btn" onClick={handleClick}>
            Logout
          </button>
        </h3>
      </nav>
    </div>
  );
};

export default Navbar;
