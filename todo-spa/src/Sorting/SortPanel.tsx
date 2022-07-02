import React from 'react'
import { useAppSelector, useAppDispatch } from '../hooks'
import { selectSort, sortTasksBy, sortTasksDir } from './sortSlice'
import { SortBy, SortDir } from './sortTypes'
import './SortPanel.css'

const SortPanel = () => {
  const { sortBy, sortDir } = useAppSelector(selectSort)
  const dispatch = useAppDispatch()

  const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const by = e.target.value as SortBy
    dispatch(sortTasksBy(by))
  }
  const handleSortDirChange = () => {
    const dir: SortDir = sortDir === 'ascending' ? 'descending' : 'ascending'
    dispatch(sortTasksDir(dir))
  }

  const sortText = sortDir === 'ascending' ? 'Ascending' : 'Descending'

  return (
    <div className="sort">
      <p className="sort-label">Sort by</p>
      <select className="sort-by" value={sortBy} onChange={handleSortByChange}>
        <option value="user">user</option>
        <option value="email">email</option>
        <option value="status">status</option>
      </select>
      <button className="sort-dir" onClick={handleSortDirChange}>
        {sortText}
      </button>
    </div>
  )
}

export default SortPanel
