import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import { Axiosinstance } from "../../../Api/Axiosinstance";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { endURL } from "../../../Api/ApiUrl";

const Login = () => {
  let api = endURL.auth;
  let nevigate = useNavigate();
  let [state, setState] = useState();
  let swalAlert=(x,y,t)=>{
    Swal.fire({
        title:y,
        text:x,
        icon:y,
        timer:t
    })
  }
  const formValidtor = (data) => {
    let err = {};
    if (data.email.length < 1) err.email = "requuired field";
    if (data.password.length < 1) err.password = "requuired field";
    return err;
  };
  let getData = () => {
    Axiosinstance
      .get(api)
      .then((res) => {
        // console.log("axios res data",res);
        setState(res.data);
      })
      .catch((err) => console.log("axios err for edit:", err));
  };
  useEffect(() => {
    getData();
  }, [setState, api]);

  const formSubmit = (formData) => {
      let mail=state.find((x)=>x.email===formData.email)      
      let pass=state.find((x)=>x.password==formData.password)
 
if(!mail){
  swalAlert("Entered email is wrong","error",700)
}
else if(!pass){
  swalAlert("Password is wrong","error",700)
}
else{
  swalAlert("Logged in successfully","success",800)
nevigate(`/profile/${mail.id}`) 
}
  }
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: formValidtor,
    onSubmit: formSubmit,
  });
  return (
    <section className="text-start d-flex justify-content-center p-5">
      <Form
        onSubmit={formik.handleSubmit}
        className="border border-primary rounded-2 p-4 shadow"
      >
        <h4 className="d-flex justify-content-center fw-bold fs-4 text-primary">Log in</h4>
        <hr />
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formik?.values?.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched?.email && formik.errors?.email ? (
            <p className="text-end text-danger">{formik.errors?.email}</p>
          ) : (
            ""
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formik?.values?.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched?.password && formik.errors?.password ? (
            <p className="text-end text-danger">{formik.errors?.password}</p>
          ) : (
            ""
          )}
        </Form.Group>

        <div className="d-flex justify-content-end mt-3">
          <Button
            variant="outline-primary"
            type="submit"
            disabled={!(formik.dirty && formik.isValid)}
          >
            Log in
          </Button>
        </div><br />
        <p>Not Have a Account <Link to="/registration" className="text-decoration-none">Register </Link>Here</p>
      </Form>
    </section>
  );
};

export default Login;
