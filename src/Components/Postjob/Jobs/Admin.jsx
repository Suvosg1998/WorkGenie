import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import { Axiosinstance } from "../../../Api/Axiosinstance";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { endURL } from "../../../Api/ApiUrl";

const Admin = () => {
  let api = endURL.product;
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
    if (data.username.length < 1) err.username = "requuired field";
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
      let user=state.find((x)=>x.username===formData.username)      
      let pass=state.find((x)=>x.password==formData.password)
 
if(!user){
  swalAlert("Entered email is wrong","error",700)
}
else if(!pass){
  swalAlert("Password is wrong","error",700)
}
else{
  swalAlert("Logged in successfully","success",800)
nevigate(`view`) 
}
  }
  let formik = useFormik({
    initialValues: {
      username: "",
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
        <h4 className="d-flex justify-content-center fw-bold fs-4 text-primary">Admin</h4>
        <hr />
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            name="username"
            value={formik?.values?.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched?.username && formik.errors?.username ? (
            <p className="text-end text-danger">{formik.errors?.username}</p>
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
        </div>
      </Form>
    </section>
  );
};

export default Admin;
