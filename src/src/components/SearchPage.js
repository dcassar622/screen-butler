import {useState} from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

const SearchPage = ( { addToPage } ) => {

    const [results, setResults] = useState([])
    const [metaResults, setMetaResults] = useState([])

    const setMetaData = (shows) => {
        shows.forEach(async (item) => {
            let showMetaData = await fetch (`https://www.episodate.com/api/show-details?q=${item.id}`);
            let showMetaDataJSON = await showMetaData.json();
            setMetaResults([...metaResults, showMetaDataJSON])
        })
    }

    const updateResults = (mainData) => {
        setResults(mainData.tv_shows)
        setMetaData(mainData.tv_shows)
    }

    return (
        <div>
            <div className='page-intro-wrapper'>
                <h4>Search Shows</h4>
                <p> Look up TV shows and add them to your currently watching or wishlist page!</p>
            </div>   
            <SearchForm updateResults={updateResults}/>
            <SearchResults 
                results={results}
                metaResults={metaResults}
                addToPage={addToPage}
            />
        </div>
    )
};

export default SearchPage;
