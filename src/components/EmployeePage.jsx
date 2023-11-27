import React from 'react'
import Header from './Header'

function EmployeePage() {
  return (
    <div style={{border:'solid brown', width: '50%', height: '42em',margin:'2px'}} >
      <Header/>
      <img src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" style={{width:"25%",paddingLeft:'35%'}}/>
      <div style={{border:'solid black', width:'100%',height:'4em',marginTop:'10px'}}>Call Office</div>
      <div style={{border:'solid black', width:'100%',height:'4em'}}>Call Mobile</div>
      <div style={{border:'solid black', width:'100%',height:'4em'}}>SMS</div>
      <div style={{border:'solid black', width:'100%',height:'4em'}}>Email</div>
     </div>
  )
}

export default EmployeePage