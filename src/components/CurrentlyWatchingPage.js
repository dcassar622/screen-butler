import CurrentShow from "./CurrentShow";

const CurrentlyWatchingPage = ({ currShows, removeFromPage }) => {

  return (
    <div>
    { currShows.length > 0 ? (
    <div className='results-wrapper'>
      {currShows.map(show => (
        <CurrentShow key={show.id} show={show} removeFromPage={removeFromPage} />
      ))}
    </div>) : <h4>No shows at the moment</h4>}
    </ div>
  )
};

export default CurrentlyWatchingPage;
