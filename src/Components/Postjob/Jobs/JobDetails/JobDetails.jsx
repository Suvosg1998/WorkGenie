import React,{useState,useEffect} from 'react'
import { Axiosinstance } from '../../../../Api/Axiosinstance'
import { Button, Card, ListGroup,Row,Col, Container,Table} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { endURL } from '../../../../Api/ApiUrl'
const JobDetails = () => {
    let api=endURL.product
    let{id}=useParams()
    // console.log("id",id);

     let[data,getData]=useState([])
const getProduct_details=()=>{
    Axiosinstance.get(api)
    .then(res=>{
        console.log("res",res);
        getData(res.data)
    })
    .catch(err=>{
        console.log("axios errpr",err);
    })
}
useEffect(()=>{
    getProduct_details()
},[getData])
  let v=data.find((x)=>x.id===id)
  return (
    <section className='d-flex justify-content-center m-5'>   
     <Card style={{ width: '18rem' }} key={v?.id} className='shadow'>
    <Card.Body>
      <Card.Title>{v?.company}</Card.Title>
      <Card.Text>
      {v?.title}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Description - {v?.description}</ListGroup.Item>
      <ListGroup.Item>Category - {v?.category}</ListGroup.Item>
      <ListGroup.Item>Required Skills - {v?.skills}</ListGroup.Item>
      <ListGroup.Item>Salary - {v?.budget}</ListGroup.Item>
      <ListGroup.Item>Job Posted - {v?.postedDate}</ListGroup.Item>
      <ListGroup.Item>Deadline - {v?.deadline}</ListGroup.Item>
    </ListGroup>
<Card.Body>
    <Button variant='outline-success'>Apply Now</Button>
    </Card.Body>
  </Card>
  </section>

  )
}

export default JobDetails