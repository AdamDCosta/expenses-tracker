import React from 'react'
import "./ExpensesFilter.scss";

const ExpensesFilter = (props) => {

  const { onChangeFilter, selectedYear } = props

  

  const yearChangeHandler = (event) => {
    onChangeFilter(event.target.value);
  };

  return (
    <article className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={selectedYear} onChange={yearChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </article>
  )
}

export default ExpensesFilter
