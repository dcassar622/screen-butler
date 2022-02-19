
const WishlistShow = ({show, addToPage, removeFromPage}) => {
  return (
    <div>
      <img src={show.image_thumbnail_path} alt='show-poster' />
        <p> {show.name} </p>
        <p> {show.start_date.substring(0,4)} </p>
        <p> {show.network} </p>
        <button onClick={() => addToPage(show, 'current')}>Add To Current</button>
        <button id='wishlist-remove-btn' onClick={(event) => removeFromPage('wishlist', show, event)}>Remove</button>
    </div>
  )
}

export default WishlistShow