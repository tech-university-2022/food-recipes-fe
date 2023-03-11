import React, { useCallback } from 'react'
import './style.css'
import { LeftArrow, RightArrow } from '../../assets'

const Pagination = ({ numPages = 1, page = 1, setPage = () => {} }) => {
	const handlePrevious = useCallback((page) => {
		setPage(page > 1 ? page - 1 : 1)
	}, [numPages])

	const handleNext = useCallback((page) => {
		setPage(page < numPages ? page + 1 : numPages)
	}, [numPages])
    
	return (
		<div className="pagination">
			<button 
				className='move-btn' 
				onClick={() => handlePrevious(page)}
				disabled={page == 1}
			>
				<img src={LeftArrow}/>
			</button>
			<button 
				className='move-btn' 
				onClick={() => handleNext(page)}
				disabled={page == numPages}
			>
				<img src={RightArrow}/>
			</button>
		</div>
	)
}

export default Pagination