import React from 'react'
import { useAppSelector } from '../hooks'
import { selectPagination } from './paginationSlice'
import PaginationElement from './PaginationElement'
import './Pagination.css'

const Pagination = () => {
  const { currentPage, pagesTotal } = useAppSelector(selectPagination)

  const pages: React.ReactNode[] = []
  let counter = 0
  while (counter < pagesTotal) {
    pages.push((<PaginationElement index={counter} current={counter === currentPage} key={`page-${counter}`}/>))
    counter++
  }

  return (
    <div className="page-list">
      {pages}
    </div>
  )
}

export default Pagination
