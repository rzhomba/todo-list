import React, { useState } from 'react'
import './SortPanel.css'

const SortPanel = () => {
  const [sortBy, setSortBy] = useState<'user' | 'email' | 'status'>('user')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')

  const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const by = e.target.value as 'user' | 'email' | 'status'
    setSortBy(by)
  }
  const handleSortDirChange = () => {
    const dir = sortDir === 'asc' ? 'desc' : 'asc'
    setSortDir(dir)
  }

  const sortText = sortDir === 'asc' ? 'Ascending' : 'Descending'

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
