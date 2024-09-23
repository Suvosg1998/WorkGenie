import React,{useState,useEffect} from 'react'
import { Axiosinstance } from '../../../../Api/Axiosinstance'
import { Card, ListGroup,Row,Col, Container} from 'react-bootstrap'
import { endURL } from '../../../../Api/ApiUrl'

 const AllProfile = () => {
let api=endURL.auth
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
                <Card.Img variant="top" src={v?.profile_pic} />
                <Card.Body>
                  <Card.Title>{v?.name}</Card.Title>
                  <Card.Text>
                  Email - {v?.email}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Discription : {v?.bio}</ListGroup.Item>
                  <ListGroup.Item>Skills - {v?.skills}</ListGroup.Item>
                  <ListGroup.Item>Experience - {v?.experience}</ListGroup.Item>
                </ListGroup>
              </Card>
            )
        }
    </Row>
</Col>
</Container> 

     </section>
  )
}

export default AllProfile