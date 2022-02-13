import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav>
          <Link to='/'>Search</Link>
          <Link to='current-shows'>Current Shows</Link>
          <Link to='wishlist'>Wishlist</Link>
      </nav>
    </div>
  )
};

export default Nav;
