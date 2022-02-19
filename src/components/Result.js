import { useState } from "react";
import ResultFront from "./ResultFront";
import ResultBack from "./ResultBack";

const Result = ({result, metaResult, addToPage}) => {

  const [hover, setHover] = useState(false);    // changes state depending on mouse hover over result div

  const onHover = () => { setHover(true) };       // set hover state to true is mouseOver

  const onLeave = () => { setHover(false) };      // set hover state to false if mouseLeave
  
  return (
    <div onMouseEnter={() => onHover()} onMouseLeave={() => onLeave()} className='result-container' >
    {hover ? <ResultBack result={result}
                         metaResult={metaResult}
                         addToPage={addToPage} /> 
                         : <ResultFront result={result} />}
        
    </div>
  )
};

export default Result;
