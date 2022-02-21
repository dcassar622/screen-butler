const SearchForm = ( {updateResults} ) => {

  const submitAndGetResults = async (event) => {

    event.preventDefault();
    let searchQuery = document.getElementById('search-query').value;

    // get main show data
    const fetchMainData = await fetch(`https://www.episodate.com/api/search?q=${searchQuery}&page=1`)
    const mainData = await fetchMainData.json();
    
    mainData === '' ? updateResults([]) : updateResults(mainData);
  }

  return (
      <div id='search-form-wrapper'>
        <form id='search-form' onSubmit={submitAndGetResults}>
          <input type='text' name='query' id='search-query' placeholder='Series Title' />
          <button type='submit' id='search-btn' className='action-btn'> Search </button>
        </form>
      </div>
  )
};

export default SearchForm;
