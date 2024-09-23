import React,{useState,useEffect} from 'react'
import { Axiosinstance } from '../../../Api/Axiosinstance'
import { Button, Card, ListGroup,Row,Col, Container} from 'react-bootstrap'
import { endURL } from '../../../Api/ApiUrl'

 const Jobs = () => {
let api=endURL.product
let[product,getProducts]=useState([])

const getAllproduct=()=>{
  Axiosinstance.get(api)
.then(res=>{
    console.log("Axios res for product:",res)
    getProducts(res.data)
})
.catch(err=>{
    console.log("Axios err for products:",err)
})
}
useEffect(()=>{
    getAllproduct()
},[])

  return (
     <section>
           <Container >
    <Col >
    <Row xxl={3} xl={3} lg={4} md={6} sm={12} className='d-flex justify-content-center'>
        {
            product.map((v,i)=>
                <Card style={{ width: '18rem' }} key={i} className='shadow m-3 p-2'>
                <Card.Body>
                  <Card.Title>{v?.company}</Card.Title>
                  <Card.Text>
                  Job title - {v?.title}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Discription : {v?.discription}</ListGroup.Item>
                  <ListGroup.Item>Category. - {v?.category}</ListGroup.Item>
                  <ListGroup.Item>required Skills - {v?.skills}</ListGroup.Item>
                  <ListGroup.Item>Salary - {v?.budget}</ListGroup.Item>
                </ListGroup>
            <Card.Body>
                <Button variant='outline-success'>Apply Now</Button>
                </Card.Body>
              </Card>
            )
        }
    </Row>
</Col>
</Container> 

     </section>
  )
}

export default Jobs