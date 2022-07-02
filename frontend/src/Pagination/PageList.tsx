import React from 'react'
import { useAppSelector } from '../hooks'
import { selectPagination } from './paginationSlice'
import PageElement from './PageElement'
import './PageList.css'

const PageList = () => {
  const { currentPage, pagesTotal } = useAppSelector(selectPagination)

  const pages: React.ReactNode[] = []
  let counter = 0
  while (counter < pagesTotal) {
    pages.push((<PageElement index={counter} current={counter === currentPage} key={`page-${counter}`}/>))
    counter++
  }

  return (
    <div className="page-list">
      {pages}
    </div>
  )
}

export default PageList
