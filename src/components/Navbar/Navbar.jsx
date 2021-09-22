import { useHistory } from 'react-router';

const Navbar = ({ loggedUser }) => {
  const history = useHistory();
  const handleClick = () => {
    localStorage.removeItem('loggedUser');
    history.push('/');
  };

  return (
    <div>
      <nav>
        <h1>{loggedUser}</h1>
        <button onClick={handleClick}>Logout</button>
      </nav>
    </div>
  );
};

export default Navbar;
