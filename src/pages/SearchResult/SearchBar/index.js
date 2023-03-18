import React from 'react'
import { Input } from 'antd';
import backgroundImage from '../../../assets/search-background-img.jpg'

const { Search } = Input;

function SearchBar({searchPhrase, setSearchPhrase, handleSearch}) {
    const handleOnChange = (event) => {
        setSearchPhrase(event.target.value)
    }

    return (
        <div id="search-bar" style={{ 
  backgroundImage: `url(${backgroundImage})` 
            }} > 
            <Search placeholder="Enter stuffs" loading={false} 
            value={searchPhrase} onChange={handleOnChange}
            onSearch={handleSearch}
            />
        </div>
    );
}

export default SearchBar;