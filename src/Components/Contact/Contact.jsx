import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { Button, Form} from 'react-bootstrap'
import { endURL } from '../../Api/ApiUrl';
import { Axiosinstance } from '../../Api/Axiosinstance';
import { useNavigate } from 'react-router-dom';

function Contact() {
  let navigate=useNavigate();
    let api = endURL.contact;
   // console.log("api",api);

    const validator = (data) => {
        let err = {};
        //query
        if (!data.email) err.email = "required field";
        if (!data.question) err.question = "required field";
        return err;
      };
    let formik = useFormik({
        initialValues: {
          email: "",
          question:""
        },
        validate: validator,
        onSubmit: (values) => {
          console.log("Submitted query", values);

          Axiosinstance.post(api, values)
              .then(response => {
                  console.log("response from api:", response.data);
                  alert("Query send Successfully")
                  navigate('/')
              })
              .catch(error => {
                  console.log("error", error);
                  alert("Failed to send Query")
              });
      }
      });
  return (
    <section className="text-start d-flex justify-content-center p-5">
      <Form md={6}
        onSubmit={formik.handleSubmit}
        className="border border-primary rounded-2 p-5 shadow"
      >
        <h4 className="d-flex justify-content-center fw-bold fs-4 text-primary">Contact Us</h4>
        <hr />
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email*</Form.Label>
          <Form.Control
          className='border-primary'
            type="email"
            placeholder="Enter Email"
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

        <Form.Group className="mb-3" controlId="question">
          <Form.Label>Question*</Form.Label>
          <Form.Control
          className='pb-5 border-primary'
            type="textarea"
            placeholder="Enter Your Query"
            name="question"
            value={formik?.values?.question}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched?.question && formik.errors?.question ? (
            <p className="text-end text-danger">{formik.errors?.question}</p>
          ) : (
            ""
          )}
        </Form.Group>

        <div className="d-flex justify-content-center mt-3">
          <Button
            variant="outline-primary"
            type="submit"
            disabled={!(formik.dirty && formik.isValid)}
          >
            Submit
          </Button>
        </div>
      </Form>
    </section>
  )
}

export default Contact