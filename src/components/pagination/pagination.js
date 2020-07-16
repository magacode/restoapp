import React from 'react';

const Pagination = ({ setPageHandler, currentPage, page, pages }) => {
    

    const getPreviousPage = () => {
  
        if (currentPage !== page) {
            console.log(currentPage, page, 'Prev')
            setPageHandler(1);
        }

    }

    
    const getNextPage = () => {
  
        if (currentPage !== pages) {
            console.log(currentPage, page, 'Next')
            setPageHandler(pages);
        }
        
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
                    <span className="page-link" onClick={getPreviousPage}>Previous</span>
                </li>
                <li className={`page-item ${currentPage === pages && 'disabled'}`}>
                    <span className="page-link" onClick={getNextPage}>Next</span>
                </li>
            </ul>
        </nav>
    )

}


export default Pagination;