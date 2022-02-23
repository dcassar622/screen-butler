import WishlistShow from "./WishlistShow";

const WishlistPage = ({ wishlist, addToPage, removeFromPage}) => {

  return (
    <div>
      { wishlist.length > 0 ? (
        <>
          <div className='page-intro-wrapper'>
            <h4>Your Wishlist</h4>
            <p> Which shows are you asking Santa to bring you for Christmas?</p>
          </div>   
          <div className='results-wrapper'>
            {wishlist.map(show => (
              <WishlistShow key={show.id} show={show} addToPage={addToPage} removeFromPage={removeFromPage} />
            ))}
          </div> 
        </> ) 
      : <>
          <div className='page-intro-wrapper'> 
              <h5>You have no shows added here at the moment, but...</h5> 
              <p>You can add some from the Search Page!</p> 
          </div> 
          <div className='results-wrapper-no-shows'>
          </div>
      </> }
    </div>
  )
};

export default WishlistPage;

