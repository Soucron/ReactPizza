import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'
import {memo} from 'react';



type PaginationPropsType = {
    setCurrentPage: (currentPage: number) => void,
    currentPage: number
}
export const Pagination = memo(({setCurrentPage, currentPage}: PaginationPropsType) => {



    return (
        <ReactPaginate pageCount={3}
                       className={styles.root}
                       breakLabel="..."
                       nextLabel=" >"
                       onPageChange={(event) => setCurrentPage(event.selected+1)}
                       pageRangeDisplayed={4}
                       previousLabel={'< '}
                       renderOnZeroPageCount={null}
                       forcePage={currentPage-1}
        />
    )
} )