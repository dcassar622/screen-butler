import WishlistShow from "./WishlistShow";

const WishlistPage = ({ wishlist, addToPage, removeFromPage}) => {

  return (
    <>
    { wishlist.length > 0 ? (
    <div className='results-wrapper'>
      {wishlist.map(show => (
        <WishlistShow key={show.id} show={show} addToPage={addToPage} removeFromPage={removeFromPage} />
      ))}
    </div>) : <h4>No shows at the moment</h4>}
    </>
  )
};

export default WishlistPage;

