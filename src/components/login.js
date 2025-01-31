import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import './login.css';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      Username: "",
      password: "",
    },
    validationSchema: Yup.object({
      Username: Yup.string()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters")
        .matches(/^[A-Z]/, "Password must start with an uppercase letter"),
      
    }),
    onSubmit: (values, { resetForm }) => {
      
      if(values.Username === "abhi" && values.password === "Abhijeet"){
        alert(`Login successfully: ${JSON.stringify(values,2)}`);
        navigate("/");
      }
      else {
        alert("Invalid Username or Password");
      }
      resetForm(); // Clears the form after submission
    },
  });


  return (
    <>
    <div className="container2">
        <h1 style={{ textAlign: "center",textDecoration:"underline" }}>Login</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="user">
            <label>Username:</label>
            <input 
              type="text"
              name="Username"
              id="Username"
              value={formik.values.Username}
              onChange={formik.handleChange}
            />
            {formik.touched.Username && formik.errors.Username &&(
              <div style={{ color: "red" }}>{formik.errors.Username}</div>
            )}
          </div>  
          <div style={{fontSize:"20px"}}>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              id="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password &&(
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            )}
          </div>
          <button className="btn1" type="submit">Submit</button>
        </form>
        </div>
    </>
  );
}
