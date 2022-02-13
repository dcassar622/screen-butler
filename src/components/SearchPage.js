import {useState} from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

const SearchPage = () => {

    const [results, setResults] = useState([]);

    const dummyData = [{id: 1}, {id : 2}, {id : 3}]; // will later be removed and results (in State) used instad as props for SearchResults

    const updateResults = (returnedResults) => {
        console.log(returnedResults);
        setResults(returnedResults.tv_shows);
    }

    return (
        <div>
            <SearchForm updateResults={updateResults}/>
            <SearchResults results={results}/>
        </div>
    )
};

export default SearchPage;
