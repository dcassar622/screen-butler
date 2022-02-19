import { useState } from 'react'

const CurrentShow = ({show, removeFromPage}) => {

  // set initial season and episode to 1 by default
  let [season, setSeason] = useState(1)   
  let [episode, setEpisode] = useState(1)


  const updateSeason = (event) => {
    event.target.textContent === '+' ? setSeason(season++) : (
        season > 0 ? 
        setSeason(season--) : alert(`season number must be at least 1`)
      )
  }

  const updateEpisode = (event) => {
    event.target.textContent === '+' ? setEpisode(episode++) : (
        episode > 0 ? 
        setEpisode(episode--) : alert(`episode number must be at least 1`)
      )
  }

  return (
    <div>
      <img src={show.image_thumbnail_path} alt='show-poster' />
            <p> {show.name} </p>
            <p> {show.start_date.substring(0,4)} </p>
            <p> {show.network} </p>
            <div className='show-progress-container'>
                <h4>Show Progress</h4>
                <div className='season-container'>
                  <p>Season</p>
                  <p>{season}</p>
                  <button onClick={(event) => updateSeason(event)}>+</button>
                  <button onClick={(event) => updateSeason(event)}>-</button>
                </div>
                <div className='episode-container'>
                  <p>Episode</p>
                  <p>{episode}</p>
                  <button onClick={(event) => updateEpisode(event)}>+</button>
                  <button onClick={(event) => updateEpisode(event)}>-</button>
                </div>
              <button id='curr-remove-btn' onClick={(event) => removeFromPage('current', show, event)}>Remove</button>
            </div>
    </div>
  )
};

export default CurrentShow;
