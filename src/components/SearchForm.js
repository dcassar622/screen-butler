const SearchForm = ( {updateResults} ) => {

  const submitAndGetResults = async (event) => {

    event.preventDefault();
    let searchQuery = document.getElementById('search-query').value;

    // get main show data
    const fetchMainData = await fetch(`https://www.episodate.com/api/search?q=${searchQuery}&page=1`);
    const mainData = await fetchMainData.json();
    
    updateResults(mainData);
  }

  return (
      <div>
        <form onSubmit={submitAndGetResults}>
          
          <input type='text' name='query' id='search-query' placeholder='Search' />
          <input type='submit' value='Search'/>
        </form>
      </div>
  )
};

export default SearchForm;
