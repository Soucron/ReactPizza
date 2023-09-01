import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'

type PaginationPropsType = {
    setCurrentPage: (currentPage: number) => void
}
export const Pagination = ({setCurrentPage} : PaginationPropsType) => {
  return (
      <ReactPaginate pageCount={3}
                     className={styles.root}
                     breakLabel="..."
                     nextLabel=" >"
                     onPageChange={(event) => setCurrentPage(event.selected + 1)}
                     pageRangeDisplayed={4}
                     previousLabel={'< '}
                     renderOnZeroPageCount={null}
      />
  )
}