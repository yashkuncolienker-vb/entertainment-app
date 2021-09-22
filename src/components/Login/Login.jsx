import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
const Login = () => {
  const userLogin = useRef(null);
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    const fname = userLogin.current.children[0].value.toLowerCase();
    const lname = userLogin.current.children[1].value.toLowerCase();

    if (fname && lname) {
      localStorage.setItem('loggedUser', fname + ' ' + lname);
      history.push('/main');
    } else {
      alert('Please Enter Your Full Name');
    }
  };

  return (
    <div>
      <form ref={userLogin}>
        <input type="text" placeholder="FirstName" />
        <input type="text" placeholder="LastName" />
        <button onClick={handleClick}>Login</button>
      </form>
    </div>
  );
};

export default Login;
