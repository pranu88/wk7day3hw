import React from 'react';
import EmployeeInfo from '../models/EmployeeInfo';
import { useState } from 'react';

function EmployeeListItem() {
    const [data,setData] = useState(EmployeeInfo)
  return (
    <div style={{height:'20em'}}> {data.map((info)=>{return<div style={{border:"solid black", lineHeight:"1px",height:"6rem"}}><img src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" style={{width:"5%"}}/><h5>{info.name}</h5> <p>{info.job}</p> </div> })}</div>
  )
}

export default EmployeeListItem