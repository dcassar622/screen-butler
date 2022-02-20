import { Link } from 'react-router-dom';
import { Navbar, Button } from 'react-materialize';

const NavLoggedIn = ({ signoutUser, currUser }) => {
  return (
    <Navbar
    className='navbar-main'
    options={{
      draggable: true,
      edge: "left",
      inDuration: 250,
      outDuration: 200,
      preventScrolling: true
    }}
    >
        <Link to='/'>Search</Link>
        <Link to='current-shows'>Current Shows</Link> 
        <Link to='wishlist'>Wishlist</Link>
        <div className='nav-right-content'>
          <p>Welcome {currUser.name}</p>
          <Button node="button" style={{ marginRight: '5px' }} waves="light" 
                  onClick={signoutUser} >
                    Log Out
          </Button>
        </div>
         
    </ Navbar>
  )
};

export default NavLoggedIn;
