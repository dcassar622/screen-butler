import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SearchPage from './components/SearchPage';
import CurrentShowsPage from './components/CurrentShowsPage';
import WishlistPage from './components/WishlistPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
            <Route path='/' element={<SearchPage />} exact />
            <Route path='current-shows' element={<CurrentShowsPage />} />
            <Route path='wishlist' element={<WishlistPage />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
