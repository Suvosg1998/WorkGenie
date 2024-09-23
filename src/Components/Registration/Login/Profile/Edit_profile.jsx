import React,{useState,useEffect} from 'react'
import { Axiosinstance } from '../../../../Api/Axiosinstance' 
import { endURL } from '../../../../Api/ApiUrl' 
import { useParams } from 'react-router-dom'
import { Form,Button,Row,Col } from 'react-bootstrap'
import {useFormik} from 'formik'
import { useNavigate,Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const Edit_profile = () => {
  let{id}=useParams()
    // console.log("id",id);
    let api=endURL.auth+'/'+id
    // console.log("Edit Api:",api)
    let nevigate=useNavigate()
    let[data,setData]=useState()
let swalAlert=(x,y)=>{
  Swal.fire({
    title:y,
    text:x,
    icon:y
  });
}
const getBase64=file=>new Promise((resolve,reject)=>{
  const reader=new FileReader()
  reader.readAsDataURL(file)
  reader.onload=()=>resolve(reader.result)
  reader.onerror=reject
})
    let getData_ForEdit=()=>{
        Axiosinstance.get(api)
        .then(res=>{
            console.log("Axios res for edit :",res);
            setData(res.data)
        })
        .catch(err=>{
            console.log("Axios err of edit section :",err);
        })
    }
    useEffect(()=>{
        getData_ForEdit()
    },[setData,api])

    const formValidator=(data)=>{
      let err={}
      if(data.name.length<1) err.name="required field"
      if(data.email.length<1) err.email="required field"
      if(data.bio.length<1) err.bio="required field"
      if(data.skills.length<1) err.skills="required field"
      if(data.experience.length<1) err.experience="required field"
      if(data.password.length<1) err.password="required field"
      return err;
      }
      let formik=useFormik({
        enableReinitialize:true,
        initialValues:{
          name:data?.name,
          email:data?.email,
          bio:data?.bio,
          skills:data?.skills,
          experience:data?.experience,
          password:data?.password,
          cv_drop:data?.cv_drop,
          profile_pic:data?.profile_pic
        }, 
        validate:formValidator,
        onSubmit:(editData)=>{
          console.log("Data Recived after form submit:",editData);
        Axiosinstance.put(api,editData)
        .then(res=>{
          console.log("Axios res after edit:",res)
          swalAlert("Updated successfully","success")
          nevigate('/allprofile')
        })
        .catch(err=>{
        console.log("axios error",err);    
          swalAlert("Ops something went wromg","error")
        })
        console.log(editData);
        },
      })
  return (
    <section className='text-start d-flex justify-content-center p-5'> 
    <Form onSubmit={formik.handleSubmit} className='border border-primary rounded-2 p-4 shadow'>
        <h4 className='d-flex justify-content-center fw-bold fs-4 text-primary'>Edit Profile</h4><hr />
    <Row> 
      <Col>   
    <Form.Group className="mb-3 mx-3 " controlId="name">
      <Form.Label>Name*</Form.Label>
      <Form.Control type="text" placeholder="Name" name='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
   {formik.touched?.name&&formik.errors?.name?<p className='text-end text-danger'>{formik.errors?.name}</p>:''}
    </Form.Group>
    </Col>
    <Col>
    <Form.Group className="mb-3 " controlId="email">
      <Form.Label>Email address*</Form.Label>
      <Form.Control type="email" placeholder="Enter Email" name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      {formik.touched?.email&&formik.errors?.email?<p className='text-end text-danger'>{formik.errors?.email}</p>:''}
      </Form.Group>
      </Col>
      </Row>
      <Row>
        <Col>
      <Form.Group className="mb-3 mt-3 mx-3" controlId="Bio">
      <Form.Label>Bio*</Form.Label>
      <Form.Control type="text" placeholder="Enter Bio" name='bio' value={formik.values.bio} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
   {formik.touched?.bio&&formik.errors?.bio?<p className='text-end text-danger'>{formik.errors?.bio}</p>:''}
    </Form.Group>
    </Col>
    <Col>
    <Form.Group className="mb-3 mt-3" controlId="skills">
      <Form.Label>Skills*</Form.Label>
      <Form.Control type="text" placeholder="Enter Skills" name='skills' value={formik.values.skills} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
   {formik.touched?.skills&&formik.errors?.skills?<p className='text-end text-danger'>{formik.errors?.skills}</p>:''}
    </Form.Group>
    </Col>
    </Row>
    <Row>
      <Col>
    <Form.Group className="mb-3 mx-3" controlId="experience">
      <Form.Label>Experience*</Form.Label>
      <Form.Control type="text" placeholder="Experience" name='experience' value={formik.values.experience} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
   {formik.touched?.experience&&formik.errors?.experience?<p className='text-end text-danger'>{formik.errors?.experience}</p>:''}
    </Form.Group>
    </Col>
    <Col>
    <Form.Group className="mb-3" controlId="password">
      <Form.Label>Password*</Form.Label>
      <Form.Control type="password" placeholder="Password" name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      {formik.touched?.password&&formik.errors?.password?<p className='text-end text-danger'>{formik.errors?.password}</p>:''}
    </Form.Group>
    </Col>
    </Row>
    <Form.Group className="mb-3 mx-3" controlId="cv_drop">
      <Form.Label>choose a file*</Form.Label>
      <Form.Control type="file" name='cv_drop' 
                onChange={(event)=>{
                  getBase64(event.target.files[0]).then(res=>{
                    // console.log(res);
                    formik.setFieldValue("cv_drop",res)
                  }).catch(err=>console.log(err)
                  )
                }}
                accept="file/*"
 />
    </Form.Group>

    <Form.Group className="mb-3 mx-3" controlId="profile_pic">
      <Form.Label>choose a image*</Form.Label>
      <Form.Control type="file" name='profile_pic' 
                onChange={(event)=>{
                  getBase64(event.target.files[0]).then(res=>{
                    // console.log(res);
                    formik.setFieldValue("profile_pic",res)
                  }).catch(err=>console.log(err)
                  )
                }}
                accept="image/*"
 />
    </Form.Group>

<div className='d-flex justify-content-end mt-3'>
    <Button variant="outline-primary" type="submit" disabled={!(formik.dirty&&formik.isValid)}>
      Submit
    </Button>
    </div>
  </Form>
  </section>
  )
}

export default Edit_profile