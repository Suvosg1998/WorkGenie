import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Reviewform from './reviewform/Reviewform'; 
import { baseURL } from '../../Api/ApiUrl';
import { endURL } from '../../Api/ApiUrl';
import axios from 'axios';
import "./Reviews.css"
import { FaStar } from 'react-icons/fa';
import { Col, Container, Row } from 'react-bootstrap';

function Reviews() {
    let api=baseURL+endURL.reviews;
    console.log("api",api);
    let[state,setState]=useState([]);
    const getReview=()=>{
        axios.get(api)
        .then(res=>{
            console.log("review",res.data);
            setState(res.data)
        })
        .catch(err=>{
            console.log("Axios error",err);
        })
    }
    useEffect(()=>{
        getReview()
    },[setState,api])
//rating
const renderStars = (rating) => {
    const totalStars = 5;
    return [...Array(totalStars)].map((_, index) => (
        <FaStar
            key={index} 
            size={24} 
            color={index < rating ? '#ffc107' : '#e4e5e9'} 
        />
    ));
};
  return (
    <section>
        <h5 className='mx-auto d-flex justify-content-center text-primary pt-4'>Testimonials</h5>
         <h3 className='heading'>We Care About Our Customers Experience Too</h3>
    <Container>
        <Row className=' d-flex flex-column justify-content-center'>
            <Col sm={12} md={6} className='my-4 mx-auto'>
           <div className=' border border-primary rounded-2 p-4 shadow'>
            <Carousel data-bs-theme="dark" className='carousel'>
                {state.map((value, index) => (
                    <Carousel.Item key={index}>
                        <div className='image-container'>
                        <img
                            className="img"
                            src={value.image}
                            alt={`Slide ${index}`}
                        />
                        </div>
                        <Carousel.Caption className='caption'>
                            <h3>{value.fullname}</h3>
                            <h4>{value.address}</h4>
                            <div style={{ display: 'flex', justifyContent: 'center' }} className='star my-2'>
                                    {renderStars(value.rating)}
                                </div>
                            <h6>{value.review}</h6>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
         </div>
         </Col>
         <Col sm={12} md={6} className='my-5 mx-auto'>
         <Reviewform />
         </Col>
         </Row>
         </Container>
</section>


  )
}

export default Reviews