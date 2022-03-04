import { useEffect, useState } from 'react'

const CurrentShow = ({ show, removeFromPage, updateShowProgress }) => {

  // set initial season and episode to 1 by default
  let [season, setSeason] = useState('')   
  let [episode, setEpisode] = useState('')

  useEffect(() => {
    setSeason(show.season)
    setEpisode(show.episode)
  }, [show])


  return (
        <div className='show-wrapper' id={show.id}>
           <div className='show-header-wrapper'>
            <img src={show.show.image_thumbnail_path} alt='show-poster' className='show-image'/>
            <div className='show-title-wrapper'>
              <p className='show-title'>{show.show.name}</p>
            </div>
          </div>
          <div className='show-progress-wrapper'>
            <div className='tracker-area-wrapper'>
              <p className='tracker-area-title'>Season</p>
              <div className='buttons-wrapper'>
                <button className='tracker-button' onClick={() => updateShowProgress(show, '-', 'season')}>-</button>
                <p className='current-number-tracker'>{season}</p>
                <button className='tracker-button' onClick={() => updateShowProgress(show, '+', 'season')}>+</button>
              </div>
            </div>
            <div className='tracker-area-wrapper'>
              <p className='tracker-area-title'>Episode</p>
              <div className='buttons-wrapper'>
                <button className='tracker-button' onClick={() => updateShowProgress(show, '-', 'episode')}>-</button>
                <p className='current-number-tracker'>{episode}</p>
                <button className='tracker-button' onClick={() => updateShowProgress(show, '+', 'episode')}>+</button>
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
