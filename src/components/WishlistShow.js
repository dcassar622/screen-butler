
const WishlistShow = ({show, addToPage, removeFromPage}) => {
  return (
    <div>
      <img src={show.show.image_thumbnail_path} alt='show-poster' />
        <p> {show.show.name} </p>
        <p> {show.show.start_date.substring(0,4)} </p>
        <p> {show.show.network} </p>
        <button onClick={() => addToPage(show, 'current')}>Add To Current</button>
        <button id='wishlist-remove-btn' onClick={() => removeFromPage('wishlist', show)}>Remove</button>
    </div>
  )
}

export default WishlistShow