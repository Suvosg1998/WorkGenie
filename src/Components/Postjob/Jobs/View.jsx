import React,{useState,useEffect} from 'react'
import { Axiosinstance } from '../../../Api/Axiosinstance' 
import { endURL } from '../../../Api/ApiUrl'
import { Button, Table} from 'react-bootstrap'

import { Link, useNavigate } from 'react-router-dom'
import {MdDelete,MdViewHeadline } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";

const View = () => {
  const navigate = useNavigate();
  let prod_api=endURL.product
  // console.log(prod_api);
  let[state,setState]=useState([])

 const getData=()=>{
  Axiosinstance.get(prod_api)
  .then(res=>{
   console.log("Product :",res.data);
   setState(res.data)
  })
  .catch(err=>{
   console.log(err);
  })
 }
 useEffect(()=>{
  getData()
 },[setState,prod_api])

 // method for single product deletion 
const deleteItem=(id)=>{
console.log("Id of the product to be deleted",id);
    Axiosinstance.delete(`http://localhost:1000/jobs/${id}`)
.then(res=>{
  console.log("Axios res for delete: ",res);
  alert('Data Deleted Successfully')
  getData() //re-fetching of item after deletion
}) 
.catch(err=>{
  console.log("Axios err to delete item",err);
  
})
}
const logout = () => {
  window.sessionStorage.clear();
  navigate("/")
};

  return (
 <section className='view m-5'>
  <div className='top d-flex justify-content-end'>
    <Button onClick={logout}  variant='outline-danger' className='d-flex m-2 fw-bold'>Logout</Button></div>
    <Table bordered striped hover className='bg-dark'>
      <thead >
        <tr>
          <th>List</th>
          <th>Company</th>
          <th>Job Title</th>
          <th>Operations</th>
        </tr>
      </thead>
 {state.map((v,i)=>
      <tbody key={v.id}>
        <tr >
          <td>{i+1}</td>
          <td>{v.company}</td>
          <td>{v.title}</td>
          <td>
          <Button variant='outline-danger' size='md' className='shadow-sm me-2' onClick={()=>{deleteItem(v.id)}}><MdDelete className='mb-1'></MdDelete>
          Delete</Button>
            <Button variant='outline-dark' size='md' className='shadow-sm me-2' as={Link} to={`jobDetails/${v.id}`}><MdViewHeadline  className='mb-1'>
            </MdViewHeadline>
            View</Button>
            <Button variant='outline-success' size='md' className='shadow-sm' as={Link} to={`jobEdit/${v.id}`}><BiSolidEdit  className='mb-1'>
            </BiSolidEdit>
            Edit</Button>
          </td>
         </tr>
      </tbody>
)}
   </Table>

 </section>

  )
}

export default View