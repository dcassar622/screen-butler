import Login from "./Login";
import Signup from './Signup';
import logo from '../logo.png'

const NavLoggedOut = ({ loginUser, loginAuthError, signupAuthError, clearAuthError, signupUser, modalOpen }) => {

  return (
    <nav className='navbar-main'>
      <div className='auth-btns-wrapper'>
          <img src={logo} alt='logo' id='logo'/>
          <Login loginUser={loginUser} loginAuthError={loginAuthError} clearAuthError={clearAuthError} />
          <Signup signupUser={signupUser} signupAuthError={signupAuthError} clearAuthError={clearAuthError} modalOpen={modalOpen}/>
      </div>
    </nav>
  )
};

export default NavLoggedOut;
