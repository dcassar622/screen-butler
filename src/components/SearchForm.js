const SearchForm = ( {updateResults} ) => {

  const submitAndGetResults = async (event) => {

    event.preventDefault();
    let searchQuery = document.getElementById('search-query').value;

    const fetchData = await fetch(`https://www.episodate.com/api/search?q=${searchQuery}&page=1`);

    const fetchDataJSON = await fetchData.json();
    updateResults(fetchDataJSON);
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
