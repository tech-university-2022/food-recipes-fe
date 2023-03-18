import MainLayout from "../../layouts/MainLayout";
import Pagination from "../../components/Pagination";
import React, { useEffect, useCallback, useState } from 'react'
import SearchBar from "./SearchBar";
import Results from "./Results";

const Content = () => {
    const [searchPhrase, setSearchPhrase] = useState('');
    const [searchResult, setSearchResult] = useState([]);
	const [page, setPage] = useState(0)
    const handleSearch = () => {
        // make request to BE here
        console.log(searchPhrase)
    }

    useEffect(() => {
        setSearchResult()
    }, [searchResult])

    return ( <div id="search-result"> 
        <SearchBar searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} handleSearch={handleSearch}/>
        <Results searchResults={searchResult}/>
        <Pagination
				numPages={10}
				maxItem={3}
				page={page}
				setPage={(page) => {
					setPage(page)
					console.log(page)
				}}  
		/>
    </div>);
}

function SearchResult() {
    return (
        <MainLayout content={<Content />} />
    );
}

export default SearchResult;