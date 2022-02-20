import { useState } from 'react'
import { Row, Card, Col, Icon, CardTitle } from 'react-materialize'

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
        <div className='current-show-wrapper'>
          <img src={show.image_thumbnail_path} alt='show-poster' className='show-image'/>
          
            <p className='show-title'>{show.name}</p>
         
          <div className='show-progress-wrapper'>
            <div className='tracker-area-wrapper'>
              <p className='tracker-area-title'>Season</p>
              <div className='buttons-wrapper'>
                <button className='action-button' onClick={(event) => updateSeason(event)}>-</button>
                <p className='current-number-tracker'>{season}</p>
                <button className='action-button' onClick={(event) => updateSeason(event)}>+</button>
              </div>
            </div>
            <div className='tracker-area-wrapper'>
              <p className='tracker-area-title'>Episode</p>
              <div className='buttons-wrapper'>
                <button className='action-button' onClick={(event) => updateEpisode(event)}>-</button>
                <p className='current-number-tracker'>{episode}</p>
                <button className='action-button' onClick={(event) => updateEpisode(event)}>+</button>
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
