import { Link } from 'react-router-dom';
import logo from '../logo.png'

const NavLoggedIn = ({ signoutUser, currUser }) => {
  return (
    <nav className='navbar-main'>
      <img src={logo} alt='logo' id='logo'/>
      <div className='nav-links-wrapper'>
        <Link className='nav-link' to='/'>Search</Link>
        <Link className='nav-link' to='current-shows'>Current Shows</Link> 
        <Link className='nav-link' to='wishlist'>Wishlist</Link>
      </div> 
      <div className='nav-right-wrapper'>
        <p id='username-wrapper'>Hello {currUser.name}</p>
        <p id='logout-wrapper' onClick={signoutUser} > Log Out </p>
      </div>       
    </ nav>
  )
};

export default NavLoggedIn;
