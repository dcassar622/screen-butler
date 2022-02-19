import NavLoggedIn from './NavLoggedIn';
import NavLoggedOut from './NavLoggedOut';

// logged in status hardcoded for now
const Nav = ({loggedIn, loginUser, loginAuthError, signupAuthError, clearAuthError, signupUser, modalOpen, signoutUser, currUser}) => {

  return (
    <div>
      {loggedIn ? <NavLoggedIn signoutUser={signoutUser} currUser={currUser}/> : 
                  <NavLoggedOut 
                      loginUser={loginUser} 
                      loginAuthError={loginAuthError} 
                      signupAuthError={signupAuthError}
                      clearAuthError={clearAuthError} 
                      signupUser={signupUser} 
                      modalOpen={modalOpen}
                  />}
    </div>
  )
};

export default Nav;
