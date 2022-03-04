
/**** Component for each show in the Wishlist Page */

/* receives the show to be shown, and the functions to both add and remove said show from the page */
const WishlistShow = ({show, addToPage, removeFromPage}) => {
  return (
    <div className='show-wrapper'>
      <div className='show-header-wrapper'>
        <img src={show.show.image_thumbnail_path} alt='show-poster' className='show-image'/>
        <div className='show-title-wrapper wishlist-title-wrapper'>
          <p className='show-title'> {show.show.name} </p>
        </div>
      </div>
      <div className='show-progress-wrapper wishlist-info-wrapper'>
        <p> {show.show.start_date.substring(0,4)} ({show.show.network}) </p>
      </div>
      <div className='wishlist-buttons-wrapper'>
        <button onClick={() => addToPage(show, 'current')}
                className='wishlist-curr-btn waves-effect waves-light btn-small'>
          Add To Current
        </button>
        <button className='wishlist-remove-btn waves-effect waves-light btn-small'
                onClick={() => removeFromPage('wishlist', show)}>
          Remove
        </button>
      </div>
    </div>
  )
}

export default WishlistShow