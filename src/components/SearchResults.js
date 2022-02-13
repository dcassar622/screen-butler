import Result from "./Result";

const SearchResults = ( {results} ) => { 

  return (
      <div>
          {results.map(result => (
              <Result key={Math.random(10)} name={result.name}/>
          ))}
      </div>
  )
};

export default SearchResults;
