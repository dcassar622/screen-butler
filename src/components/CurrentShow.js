import { useState } from 'react'

const CurrentShow = ({show, removeFromPage}) => {

  // set initial season and episode to 1 by default
  let [season, setSeason] = useState(1)   
  let [episode, setEpisode] = useState(1)


  const updateSeason = (operator) => {
    operator === '+' ? setSeason(season + 1) : (
        season > 1 ? 
        setSeason(season - 1) : alert(`season number must be at least 1`)
      )
  }

  const updateEpisode = (operator) => {
    operator === '+' ? setEpisode(episode + 1) : (
        episode > 1 ? 
        setEpisode(episode - 1) : alert(`episode number must be at least 1`)
      )
  }

  return (
        <div className='show-wrapper'>
          <img src={show.image_thumbnail_path} alt='show-poster' className='show-image'/>
          <p className='show-title'>{show.name}</p>
          <div className='show-progress-wrapper'>
            <div className='tracker-area-wrapper'>
              <p className='tracker-area-title'>Season</p>
              <div className='buttons-wrapper'>
                <button className='tracker-button' onClick={() => updateSeason('-')}>-</button>
                <p className='current-number-tracker'>{season}</p>
                <button className='tracker-button' onClick={() => updateSeason('+')}>+</button>
              </div>
            </div>
            <div className='tracker-area-wrapper'>
              <p className='tracker-area-title'>Episode</p>
              <div className='buttons-wrapper'>
                <button className='tracker-button' onClick={() => updateEpisode('-')}>-</button>
                <p className='current-number-tracker'>{episode}</p>
                <button className='tracker-button' onClick={() => updateEpisode('+')}>+</button>
              </div>
            </div>
          </div>
          <button className="waves-effect waves-light btn-small curr-remove-btn" 
                onClick={(event) => removeFromPage('current', show, event)}>
                Remove        
          </button>
        </div>
  
        
     
  )
};

export default CurrentShow;
