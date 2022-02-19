import CurrentShow from "./CurrentShow";

const CurrentlyWatchingPage = ({ currShows, removeFromPage }) => {

  return (
    <>
    { currShows.length > 0 ? (
    <div>
      {currShows.map(show => (
        <CurrentShow key={show.id} show={show} removeFromPage={removeFromPage} />
      ))}
    </div>) : <h4>No shows at the moment</h4>}
    </>
  )
};

export default CurrentlyWatchingPage;
