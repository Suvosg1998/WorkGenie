import React,{useState,useEffect} from 'react'
import { Button, Card,ListGroup, Row} from 'react-bootstrap'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { endURL } from '../../../../Api/ApiUrl'
import { Axiosinstance } from '../../../../Api/Axiosinstance'
import { BiSolidEdit } from "react-icons/bi";
 const Profile = () => {
  let{id}=useParams()
    let api=endURL.auth+"/"+id
    const navigate=useNavigate()
    let[state,setState]=useState([])
    let getData=()=>{
        Axiosinstance.get(api)
        .then(res=>{
            console.log("Axios res for Profile:",res.data);
            setState(res.data)
        })
        .catch(err=>{
          console.log("Axios err",err)
        })
    }
    useEffect(()=>{
        getData()
    },[setState,api])

    const logout = () => {
      window.sessionStorage.clear();
      navigate("/login")
  };
  return (
    <section>
      <Row xxl={3} xl={3} lg={4} md={6} sm={12} className='d-flex justify-content-center p-4'>
     <Card style={{ width: '20rem' }} className='m-3 p-3 shadow'>
    <Card.Img variant="top" src={state.profile_pic} height={330} width={300}/>
    <ListGroup className="list-group-flush mx-1 pt-3">
    <ListGroup.Item >Name : <b className='text-info'>{state.name}</b></ListGroup.Item>
    <ListGroup.Item className='text-secondary'>Email Id : {state.email}</ListGroup.Item>
    <ListGroup.Item className='text-secondary'>Bio : {state.bio}</ListGroup.Item>
    <ListGroup.Item className='text-secondary'>Skills : {state.skills}</ListGroup.Item>
    <ListGroup.Item className='text-secondary'>Experience : {state.experience}</ListGroup.Item>
    <br />
    <Button variant='outline-primary' onClick={logout}>Logout</Button> <br />
<Button variant='outline-success' size='md' className='shadow-sm' as={Link} to={`editprofile/${state.id}`}><BiSolidEdit  className='mb-1'>
            </BiSolidEdit>
            Edit</Button>
       </ListGroup>
  </Card>
  
</Row>
  </section>
  )
}
export default Profile
