import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import ErrorMassage from "../validation/ErrorMassage";
import UserList from "./UserList";
import { Link } from "react-router-dom";

const Register = () => {
  const [payload, setPayload] = useState({});
  const initialValues = {
    name: "",
    email: "",
    number: "",
    city: "",
  };
  const schemaValidation = yup.object({
    name: yup.string().required("Enter name"),
    email: yup.string().required("Enter email").email(),
    number: yup
      .number()
      .required("Enter number")
      .typeError("Number is not valid"),
    city: yup.string().required("Enter city"),
  });

  const onRegister = (payload) => {
    setPayload(payload);
  };

  return (
    <>
      <div className="parent">
        <Formik
          initialValues={initialValues}
          validationSchema={schemaValidation}
          onSubmit={(payload) => onRegister(payload)}
        >
          <Form>
            <div>
              <label>
                Name <span className="text-danger"> *</span>
              </label>
              <br />
              <Field type="text" name="name" placeholder="Name" />
              <ErrorMassage name="name" />
            </div>
            <div className="my-2">
              <label>
                Email <span className="text-danger"> *</span>
              </label>
              <br />
              <Field type="text" name="email" placeholder="Email" />
              <ErrorMassage name="email" />
            </div>
            <div>
              <label>
                Number <span className="text-danger"> *</span>
              </label>
              <br />
              <Field type="text" name="number" placeholder="Number" />
              <ErrorMassage name="number" />
            </div>
            <div className="my-2">
              <label>
                City <span className="text-danger"> *</span>
              </label>
              <br />
              <Field type="text" name="city" placeholder="City" />
              <ErrorMassage name="city" />
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </Form>
        </Formik>
        <UserList userList={payload} />
        <Link to="/">
          <button className="btn btn-primary">Go Back</button>
        </Link>
      </div>
    </>
  );
};

export default Register;
