import Login from "./Login";
import Signup from './Signup';
import { Navbar, Icon } from 'react-materialize';

const NavLoggedOut = ({ loginUser, loginAuthError, signupAuthError, clearAuthError, signupUser, modalOpen }) => {

  return (
    <Navbar
    alignLinks="left"
    id="nav-logged-out"
    menuIcon={<Icon>menu</Icon>}
    options={{
      draggable: true,
      edge: 'left',
      inDuration: 250,
      outDuration: 200,
      preventScrolling: true
    }}
    >
          <Login loginUser={loginUser} loginAuthError={loginAuthError} clearAuthError={clearAuthError} />
          <Signup signupUser={signupUser} signupAuthError={signupAuthError} clearAuthError={clearAuthError} modalOpen={modalOpen}/>
    </Navbar>
  )
};

export default NavLoggedOut;
