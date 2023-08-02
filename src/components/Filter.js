import React from 'react'

const Filter = ({handleFilterNameChange, filterName}) => {
  return (
    <div>filter show with <input onChange={handleFilterNameChange} value={filterName} /></div>
  )
}

export default Filter