import React, { useState } from "react";
import "./signup.css";
import { signupSchema } from "../../components/schemas/signupSchema";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

const initialValues = {
  username : "",
  email : "",
  password : "",
  confirmpassword : "",
}

export function Signup() {
  // const [username, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmpassword, setConfirmPassword] = useState("");

  const { values, errors, handleBlur,touched, handleChange, handleSubmit } =
  useFormik({
    initialValues,
    validationSchema: signupSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });

  //  console.log(errors);
    console.log(touched);

  const handelClick = () => {};
  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-2" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <h3 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Sign up
              </h3>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput
                  label="User Name"
                  id="form1"
                  type="text"
                  className="w-100 margin_top"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                />
              </div>
              { touched.username && errors.username ? (
              <p style={{fontSize:"15px"}}>{errors.username}</p>
            ) : (
              ""
            )}
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput
                  label="Your Email"
                  id="form2"
                  type="email"
                  name="email"
                  className="margin_top"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size="lg" />
                <MDBInput
                  label="Password"
                  id="form3"
                  type="password"
                  name="password"
                  className="margin_top"
                  value={values.password}
                  onChange={handleChange}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size="lg" />
                <MDBInput
                  label="Repeat your password"
                  id="form4"
                  type="confirmpassword"
                  className="margin_top"
                  value={values.confirmpassword}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Subscribe to our newsletter"
                />
              </div>

              <MDBBtn className="mb-4" size="lg" onClick={handelClick}>
                Register
              </MDBBtn>
              <p className="small fw-bold mt-2 pt-1 mb-2">
                allready have an account?{" "}
                <Link
                  to="/signin"
                  style={{ textDecoration: "none", color: "red" }}
                >
                  Login
                </Link>
              </p>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
