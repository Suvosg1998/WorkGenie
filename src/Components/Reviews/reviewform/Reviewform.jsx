import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'
import { baseURL } from '../../../Api/ApiUrl' 
import { endURL } from '../../../Api/ApiUrl'
import { useFormik } from 'formik';
import axios from 'axios';
import "./Reviewform.css"

function Reviewform() {
    let api = baseURL + endURL.reviews;
    // console.log("api",api);

 //base64 conversion
 const getBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });   

  const validator = (data) => {
    let err = {};
    //fullname
    if (!data.fullname) err.fullname = "required field";
    //address
    if (!data.address) err.address = "required field";
    //rating
    if (data.rating===0) err.rating = "required field";
    //review
    if (!data.review) err.review = "required field";
    return err;
  };

  let formik = useFormik({
    initialValues: {
      fullname: "",
      address:"",
      rating: 0,
      review: "",
      image:""
    },
    validate: validator,
    onSubmit: (values) => {
      console.log("Submitted values", values);
      axios.post(api, values)
          .then(response => {
              console.log("response from api:", response.data);
              alert("Review added Successfully")
          })
          .catch(error => {
              console.log("error", error);
              alert("Failed to add Review")
          });
  }
  });

  const [hover, setHover] = useState(null);

  return (
   <section>
    <p className='d-flex justify-content-center text-body fs-3 fw-bold mb-5'>Share Your Valueable Experience</p>
            <Form onSubmit={formik.handleSubmit} className='border border-primary rounded-2 p-4 shadow'>
            <Form.Group className="mb-2" controlId="fullname">
              <Form.Label className=" text-dark-emphasis fs-6">
                Fullname
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Fullname"
                name="fullname"
                value={formik.values.fullname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.fullname && formik.errors.fullname ? (
                <p className="text-end text-danger">{formik.errors?.fullname}</p>) : null}
            </Form.Group> 

            <Form.Group className="mb-2" controlId="address">
              <Form.Label className=" text-dark-emphasis fs-6">
                Address
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.address && formik.errors.address ? (
                <p className="text-end text-danger">{formik.errors?.address}</p>) : null}
            </Form.Group> 

            <Form.Group className="mb-2" controlId="rating">
              <Form.Label className=" text-dark-emphasis fs-6">
                Rating
              </Form.Label>
              <div style={{ display: 'flex', gap: '5px' }}>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <FaStar
                                        key={star}
                                        size={24}
                                        style={{ cursor: 'pointer' }}
                                        color={star <= (hover || formik.values.rating) ? '#ffc107' : '#e4e5e9'}
                                        onMouseEnter={() => setHover(star)}
                                        onMouseLeave={() => setHover(null)}
                                        onClick={() => formik.setFieldValue("rating", star)}
                                    />
                                ))}
                            </div>
                            {formik.touched.rating && formik.errors.rating ? (
                            <p className="text-end text-danger">{formik.errors?.rating}</p>) : null}
            </Form.Group> 

            <Form.Group className="mb-2" controlId="review">
              <Form.Label className=" text-dark-emphasis fs-6">
                Review
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your Review"
                name="review"
                value={formik.values.review}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
               {formik.touched.review && formik.errors.review ? (
                <p className="text-end text-danger">{formik.errors?.review}</p>) : null}
            </Form.Group> 

            <Form.Group className="mb-2" controlId="image">
              <Form.Label className=" text-dark-emphasis fs-6">Upload Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                accept="image/*"
                onChange={(event)=>{
                    getBase64(event.target.files[0]).then(res=>{
                    //   console.log(res);
                      formik.setFieldValue("image",res)
                      
                    }).catch(err=>console.log(err)
                    )
                  }}
              />
            </Form.Group>
            <div className="d-flex justify-content-center mt-4">
              <Button
               variant="outline-primary"
               type="submit"
               value="submit"
               disabled={!(formik.dirty && formik.isValid)}
              >
                Submit
              </Button>
            </div>
            </Form>
   </section>
  )
}

export default Reviewform