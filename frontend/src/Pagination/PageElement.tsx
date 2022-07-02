import React from 'react'
import { useAppDispatch } from '../hooks'
import { setPage } from './paginationSlice'
import './PageElement.css'

interface PageElementProps {
  index: number
  current: boolean
}

const PageElement = (props: PageElementProps) => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(setPage(props.index))
  }

  return (
    <button className={`page-element ${!props.current ? 'button-active' : ''}`}
            onClick={handleClick}>
      <div>{props.index + 1}</div>
    </button>
  )
}

export default PageElement
