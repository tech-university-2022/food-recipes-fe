import React, { useCallback, useEffect, useState } from 'react';
import { createPages } from '../../utils';
import "./style.css"

const Pagination = ({ numPages = 1, page = 1, setPage = () => {}, maxItem = 5 }) => {
    const [pages, setPages] = useState([]);

    useEffect(() => {
        handleStart();
    }, numPages)

    const handleStart = useCallback(() => {
        setPage(1);
        setPages(createPages({
            page: 1,
            numPages: numPages,
            maxItem: maxItem
        }))
    }, [numPages])

    const handleEnd = useCallback(() => {
        setPage(numPages);
        setPages(createPages({
            page: numPages,
            numPages: numPages,
            maxItem: maxItem
        }))
    }, [numPages])

    const handlePrevious = useCallback((page) => {
        setPage(page - 1);
        setPages(createPages({
            page: page - 1,
            numPages: numPages,
            maxItem: maxItem
        }))
    }, [numPages])

    const handleNext = useCallback((page) => {
        setPage(page + 1);
        setPages(createPages({
            page: page + 1,
            numPages: numPages,
            maxItem: maxItem
        }))
    }, [numPages])
    
    return (
        <div id="pagination">
            <button 
                className='move-btn' 
                onClick={handleStart}
                disabled={page == 1}
            >
                {"<<"}
            </button>
            <button 
                className='move-btn' 
                onClick={() => handlePrevious(page)}
                disabled={page == 1}
            >
                {"<"}
            </button>
            {pages.map((item) => 
                <button 
                    className={item == page ? 'chosen-page-btn' : 'page-btn'} 
                    onClick={() => handleChangePage(item)}
                >
                    {item}
                </button>
            )}
            <button 
                className='move-btn' 
                onClick={() => handleNext(page)}
                disabled={page == numPages}
            >
                {">"}
            </button>
            <button 
                className='move-btn' 
                onClick={handleEnd}
                disabled={page == numPages}
            >
                {">>"}
            </button>
        </div>
    )
}

export default Pagination