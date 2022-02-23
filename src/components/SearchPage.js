import {useState} from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

const SearchPage = ( { addToPage } ) => {

    const [results, setResults] = useState([])
    const [metaResults, setMetaResults] = useState([])
    const [noResultsFound, setNoResultsFound] = useState()

    const setMetaData = (shows) => {
        shows.forEach(async (item) => {
            let showMetaData = await fetch (`https://www.episodate.com/api/show-details?q=${item.id}`);
            let showMetaDataJSON = await showMetaData.json();
            setMetaResults([...metaResults, showMetaDataJSON])
        })
    }

    const updateResults = (mainData) => {
        if (mainData !==[]) {
            setNoResultsFound(false)
            setResults(mainData.tv_shows)
            setMetaData(mainData.tv_shows)
        }
        else {
            setNoResultsFound(true)
        }
    }

    return (
        <div>
            <div className='page-intro-wrapper'>
                <h4>Search Shows</h4>
                <p> Look up TV shows and add them to your currently watching or wishlist page!</p>
            </div>   
            <SearchForm updateResults={updateResults}/>
            { noResultsFound ? <h4>No Results Found</h4> : 
                <SearchResults 
                           results={results}
                           metaResults={metaResults}
                           addToPage={addToPage}
                           />}
        </div>
    )
};

export default SearchPage;
