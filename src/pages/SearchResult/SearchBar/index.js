import React from 'react'
import { Input } from 'antd';
import backgroundImage from '../../../assets/search-background-img.jpg'
import './index.css'

const { Search } = Input;

function SearchBar({searchPhrase, setSearchPhrase, handleSearch}) {
    const handleOnChange = (event) => {
        setSearchPhrase(event.target.value)
    }

    return (
        <div className="search-bar-background" style={{ 
  backgroundImage: `url(${backgroundImage})` 
            }} > 
            <Search className='search-bar' placeholder="Enter stuffs" loading={false} 
            value={searchPhrase} onChange={handleOnChange}
            onSearch={handleSearch}
            />
        </div>
    );
}

export default SearchBar;