import CurrentShow from "./CurrentShow";

const CurrentlyWatchingPage = ({ currUser, currShows, removeFromPage, updateShowProgress }) => {

  return (
    <div> 
    { currShows.length > 0 ? (
      <>
        <div className='page-intro-wrapper'>
          <h4>Your Current Shows</h4>
          <p> (add as many shows as you like... everything will be saved for your next visit)</p>
        </div>   
        <div className='results-wrapper'>
          {currShows.map(show => (
            <CurrentShow key={show.id} show={show} 
                        removeFromPage={removeFromPage} 
                        updateShowProgress={updateShowProgress}/>
          ))}
        </div> 
      </>
    ) : 
    <>
      <div className='page-intro-wrapper'> 
          <h5>You have no shows added here at the moment, but...</h5> 
          <p>You can add some from the Search or the Wishlist page :)</p> 
      </div> 
      </>
    }

    </div>
  )
};

export default CurrentlyWatchingPage;
