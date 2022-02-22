const Result = ({result, metaResult, addToPage}) => {

  return (
    <div className='show-wrapper'>
      <div className='show-header-wrapper'>
        <img className='show-image' src={result.image_thumbnail_path} alt='show-poster'/>  
        <div className='show-title-wrapper'>
          <p className='show-title'>{result.name}</p>
        </div>
      </div>
      <div className='show-info-wrapper'> 
        <p> {result.start_date.substring(0,4)} ({result.network}) </p>
      </div> 
      <div className='result-button-wrapper'>
        <button className='result-curr-btn' onClick={() => addToPage({...result}, 'current')}>Add to Current</button>
        <button className='result-wishlist-btn' onClick={() => addToPage({...result}, 'wishlist')}>Add to Wishlist</button>
      </div>
      </div>
  )
};

export default Result;
