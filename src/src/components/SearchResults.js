import Result from "./Result";

const SearchResults = ( {results, metaResults, addToPage} ) => { 

return  ( 
  <>
    {results.length !== 0 ? 
      <div className='results-wrapper'>
          {results.map((result, index) => (
              <Result key={result.id} 
                      result={result}
                      metaResult={metaResults[index]}
                      addToPage={addToPage} />
          ))}
      </div> : 
      <></>
    }   
  </>
  )
};

export default SearchResults;
