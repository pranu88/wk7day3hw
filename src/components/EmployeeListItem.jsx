import React from 'react';
import EmployeeInfo from '../models/EmployeeInfo';
import { useState } from 'react';

function EmployeeListItem() {
    const [data,setData] = useState(EmployeeInfo)
  return (
    <div > {data.map((info)=>{return<div style={{border:"solid black"}}><h5>{info.name}</h5> <p>{info.job}</p> </div> })}</div>
  )
}

export default EmployeeListItem