import React from 'react'
import { RecipeBox } from '../../../components/Recipe';
import './index.css'

function Results({searchResults}) {
    // recipeMock will be replace by search result later
    const recipeMock = [] 
    for (let i = 1; i <=12; i+=1 ) {
        recipeMock.push(i)
    }

    return (
        <div id='search-results-container'>
            <div className='search-results-total'> See {recipeMock.length} results </div>
            <div className='search-results'> 
				{recipeMock.map((item, idx) => 
					<RecipeBox
						key={idx}
						name='Delicious Fancy Glazed Blueberry Donuts'
						author_name='Nhi Mai'
						time='3 days ago'
						comment_count={100}
					/>
				)}
            </div>
        </div>
    );
}

export default Results;