import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import EmployeeList from './EmployeeList'

function Homepage() {
  return (
    <div style={{border: 'solid Yellow', width:'50%', height: '42em', margin:'2px'}}><Header/>
    <SearchBar/>
    <EmployeeList/>
    
    </div>
  )
}

export default Homepage