import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { IPagination } from "../constants/DataInterface";


function Pagination({ totalPages, currentPage, setCurrentPage }: IPagination) {
    const pageNumbers: number[] = Array.from(Array(totalPages), (_, index) => index + 1);

    const nextPage = () => {
        if (currentPage !== totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }
    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }
    return (
        <div className='pagination'>
            <nav>
                <ul className='paginationLink'>
                    {currentPage === 1 ? ' ' :
                        <li className='paginationPN'>
                            <a onClick={prevPage} href="#"><GrPrevious /></a>
                        </li>
                    }

                    {pageNumbers.map(number => (
                        <li key={number} >
                            <a href="#" className={currentPage === number ? 'active' : ''} onClick={() => setCurrentPage(number)}>{number}</a>
                        </li>
                    ))}

                    {currentPage === 10 ? ' ' :
                        <li className='paginationPN'>
                            <a onClick={nextPage} href="#"><GrNext /></a>
                        </li>
                    }

                </ul>
            </nav>
        </div >
    )
}
export default Pagination;
