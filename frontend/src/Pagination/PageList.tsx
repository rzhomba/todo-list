import React from 'react'
import PageElement from './PageElement'
import './PageList.css'

const PageList = () => {
  const pages = [1, 4, 5, 6, 7, 8, 12].map(p => (
    <PageElement index={p} key={`page-${p}`}/>
  ))

  return (
    <div className="page-list">
      {pages}
    </div>
  )
}

export default PageList
