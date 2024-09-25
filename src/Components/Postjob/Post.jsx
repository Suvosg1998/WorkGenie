import React from 'react'
import { Form,Button,Row,Col } from 'react-bootstrap'
import {useFormik} from "formik"
import { Axiosinstance } from '../../Api/Axiosinstance'
import { useNavigate } from 'react-router-dom'
import { endURL } from '../../Api/ApiUrl'

const Post = () => {

 let nevigate=useNavigate();
 let api=endURL.product;
// console.log("Product Api",api);


const formValidator=(data)=>{
let err={}
if(data.company.length<1) err.company="required field";
if(data.title.length<1) err.title="required field";
if(data.description.length<1) err.description="required field";
if(data.category.length<1) err.category="required field";
if(data.skills.length<1) err.skills="required field";
if(data.budget.length<1) err.budget="required field";
if(data.postedDate.length<1) err.postedDate="required field";
if(data.deadline.length<1) err.deadline="required field";
return err;
}
let formik=useFormik({
  initialValues:{
    company:"",
    title:"",
    description:"",
    category:"",
    skills:"",
    budget:"",
    postedDate:"",
    deadline:""
  }, 
  validate:formValidator,
  onSubmit:(formData)=>{
    console.log("Data Recived after form submit:",formData);
 
    Axiosinstance.post(api,formData)
    .then(res=>{
      console.log("axios res",res.data)
      alert("Product added Successfully")
      nevigate("/jobs")
    })
    .catch(err=>{
      console.log("axios error",err)
      alert("Failed to add Product")
    })
  },
 
})
 

  return (
    <section className='m-5 d-flex justify-content-center'>
    <Form onSubmit={formik.handleSubmit} className='border border-primary rounded-2 p-4 shadow'>
        <Form.Text className='d-flex justify-content-center fw-bold fs-4 text-primary'>Post Job</Form.Text><hr />
<Row>
      <Col>
       <Form.Group className="mb-3" controlId="company">
        <Form.Label className='lable'>Company Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Company Name" value={formik.values.company} name='company' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      {formik.touched.company&&formik.errors?.company?<p id='err_msg'>{formik.errors?.company}</p>:''}
      </Form.Group>
      </Col>
      <Col>
       <Form.Group className="mb-3" controlId="title">
        <Form.Label className='lable'>Job Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Job Title" value={formik.values.title} name='title' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      {formik.touched.title&&formik.errors?.title?<p id='err_msg'>{formik.errors?.title}</p>:''}
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label className='lable'>Job description</Form.Label>
        <Form.Control type="textarea" placeholder="Enter Job Description" value={formik.values.description} name='description' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.description&&formik.errors?.description?<p id='err_msg'>{formik.errors?.description}</p>:''}
      </Form.Group>
      </Col>
      </Row>
      <Row>
        <Col>
      <Form.Group className="mb-3" controlId="category">
        <Form.Label className='lable'>Job category</Form.Label>
        <Form.Control type="text" placeholder="Job category" value={formik.values.category} name='category' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.category&&formik.errors?.category?<p id='err_msg'>{formik.errors?.category}</p>:''}
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="skills">
        <Form.Label className='lable'>Job skills</Form.Label>
        <Form.Control type="text" placeholder="Enter Skills" value={formik.values.skills} name='skills' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.skills&&formik.errors?.skills?<p id='err_msg'>{formik.errors?.skills}</p>:''}
      </Form.Group>
      </Col>
      </Row>
   
      <Form.Group className="mb-3" controlId="budget">
        <Form.Label className='lable'>Budget</Form.Label>
        <Form.Control type="text" placeholder="Enter budget" value={formik.values.budget} name='budget' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.budget&&formik.errors?.budget?<p id='err_msg'>{formik.errors?.budget}</p>:''}
      </Form.Group>

      <Form.Group className="mb-3" controlId="deadline">
        <Form.Label className='lable'>Deadline</Form.Label>
        <Form.Control type="date" placeholder="Enter Deadline" value={formik.values.deadline} name='deadline' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        
        {formik.touched.deadline && formik.errors?.deadline?<p id='err_msg'>{formik.errors?.deadline}</p>:''}
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="postedDate">
        <Form.Label className='lable'>Posted Date</Form.Label>
        <Form.Control type="date" placeholder="Enter Posted Date" value={formik.values.postedDate} name='postedDate' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.postedDate && formik.errors?.postedDate?<p id='err_msg'>{formik.errors?.postedDate}</p>:''}
      </Form.Group>

      <div className='d-flex justify-content-end'><Button  variant="outline-primary" type="submit" className='shadow-sm' disabled={!(formik.dirty&&formik.isValid)}>
        Submit
      </Button></div>

    </Form>
    </section>
  )
}

export default Post