import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./singin.css";
import { useNavigate } from "react-router-dom";


export default function Singin() {

  const navigate = useNavigate();


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters")
        .matches(/^[A-Z]/, "Password must start with an uppercase letter"),

        confirm_password: Yup.string()
        .required("Confirmation password is required")
        .oneOf([Yup.ref("password"), null], "Passwords do not match"),
      
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Form values:", values); // Debuggin
      alert(`Form submitted: ${JSON.stringify(values, null, 2)}`);
      navigate("/loging");
      resetForm(); // Clears the form after submission
    },
  });

  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Register</h1>
        <form onSubmit={formik.handleSubmit}>
          <div
            style={{ marginLeft: "10px", marginTop: "30px", fontSize: "20px" }}
          >
            <label>Name:</label>
            <input
              className="input1"
              type="text"
              name="name"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.touched.name && formik.errors.name &&(
              <div style={{ color: "red" }}>{formik.errors.name}</div>
            )}
          </div>  
          <div style={{ marginLeft: "10px", fontSize: "20px" }}>
            <label>Email:</label>
            <input
              className="input1"
              type="email"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email &&(
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            )}
          </div>
          <div style={{ marginRight: "20px", fontSize: "20px" }}>
            <label>Password:</label>
            <input
              className="input1"
              type="password"
              name="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password &&(
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            )}
          </div>
          <div style={{ marginRight: "20px", fontSize: "20px" }}>
            <label>confirm_password:</label>
            <input className="input2"
              type="password"
              name="confirm_password"
              value={formik.values.confirm_password}
              onChange={formik.handleChange}
            />
            {formik.touched.confirm_password && formik.errors.confirm_password &&(
              <div style={{ color: "red" }}>
                {formik.errors.confirm_password}
              </div>
            )}
          </div>
          <button className="btn1" type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
