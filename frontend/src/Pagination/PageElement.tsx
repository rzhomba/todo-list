import React from 'react'
import './PageElement.css'

interface PageElementProps {
  index: number
}

const PageElement = (props: PageElementProps) => {
  return (
    <button className="page-element button-active">
      <div>{props.index}</div>
    </button>
  )
}

export default PageElement
