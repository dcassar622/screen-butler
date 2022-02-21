const Result = ({result, metaResult, addToPage}) => {

  return (
    <div className='show-wrapper'>
      <img className='show-image' src={result.image_thumbnail_path} alt='show-poster' className='show-image'/>  
      <div className='show-info-wrapper'>
        <p className='show-title'>{result.name}</p>
        <p> {result.start_date.substring(0,4)} </p>
        <p> {result.network} </p>
      </div> 
      <div className='result-button-wrapper'>
        <button className='action-btn' onClick={() => addToPage(result, 'current')}>Add to Current</button>
        <button className='action-btn' onClick={() => addToPage(result, 'wishlist')}>Add to Wishlist</button>
      </div>
      </div>
  )
};

export default Result;
