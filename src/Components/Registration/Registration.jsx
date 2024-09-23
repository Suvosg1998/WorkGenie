import React,{useState,useEffect} from 'react'
import {Form,Button,Row,Col} from 'react-bootstrap'
import {useFormik} from 'formik'
import { Axiosinstance } from '../../Api/Axiosinstance'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { endURL } from '../../Api/ApiUrl'
 
const Registration = () => {
    let api=endURL.auth
    let[state,setState]=useState([])
    let nevigate=useNavigate()
    let swalAlert=(x,y,z)=>{
      Swal.fire({
        title:y,
        text:x,
        icon:y,
        timer:z
      })
    }

    const getBase64=file => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    })
    
    const formValidator=(data)=>{
        let err={}
    if(data.name.length<1) err.name="required field"
    if(data.email.length<1) err.email="required field"
    if(data.bio.length<1) err.bio="required field"
    if(data.skills.length<1) err.skills="required field"
    if(data.experience.length<1) err.experience="required field"
    if(data.password.length<1) err.password="required field"
        return err ;
    }
const getDetails=()=>{
  Axiosinstance.get(api)
  .then(res=>{
    console.log("Axios res for email verify in Rege.",res);
    setState(res.data)
  })
  .catch(err=>console.log("Axios error for email verify in Rege.",err)
  )
}
useEffect(()=>{
  getDetails()
},[setState,api])
    const submitValidator=(formData)=>{
 console.log("Form Data:",formData);
 let emailVerify=state.find((v)=>v.email===formData.email)
 console.log("Check for matched email:",emailVerify);
 
  if(emailVerify){
    swalAlert("Email id is already used","error",1000)
    // console.log("Email is used:",emailVerify);

 }
else{
  console.log(emailVerify);
    Axiosinstance.post(api,formData)
.then(res=>{
  console.log("axios Res for Rege.",res);
  swalAlert("Logged in successfully","success",1000)
nevigate("/login")
})
.catch(err=>console.log("axios err for Rege.",err)
)
}
}

// axiosInstance.post(api,formData)
//     .then((res)=>{
//         console.log("Axios res",res);
//          swalAlert("Account created successfully","success",700);
//         nevigate("/login");
//      })
// .catch((err)=>{
//     console.log("Axios error",err);
// })


    let formik=useFormik({
        initialValues:{
            name:"",
            email:"",
            bio:"",
            skills:"",
            experience:"",
            password:"",
            cv_drop:"",
            profile_pic:""
        },
        validate:formValidator,
        onSubmit:submitValidator
    })

  return (
    <section className='text-start d-flex justify-content-center p-5'> 
    <Form onSubmit={formik.handleSubmit} className='border border-primary rounded-2 p-4 shadow'>
        <h4 className='d-flex justify-content-center fw-bold fs-4 text-primary'>Registration</h4><hr />
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
);
}

export default Registration