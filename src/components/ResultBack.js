const ResultBack = ({result, metaResult, addToPage}) => {

    return (
      <>
          <img src={result.image_thumbnail_path} alt='show-poster' />
          <p>{metaResult.tvShow.description}</p>
          <button onClick={() => addToPage(result, 'current')}>Add to Currently Watching</button>
          <button onClick={() => addToPage(result, 'wishlist')}>Add to Wishlist</button>
      </>)
  };
  
  export default ResultBack;