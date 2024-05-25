import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  userName: "",
  password: "",
  email: "",
};

const onSubmit = (values) => {

};

const schemaValidation = Yup.object({
  userName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
});

function Form() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: schemaValidation, // Use validationSchema, not schemaValidation
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        height: "499px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        fontSize: "2rem",
      }}
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
     
        name="userName"
      
        {... formik.getFieldProps('userName')}
      />
      {formik.touched.userName && formik.errors.userName && (
        <p style={{ color: "red", fontSize: "0.9rem" }}>
          {formik.errors.userName}
        </p>
      )}
      <br />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
   
        name="password"
        {... formik.getFieldProps('password')}
      />
      {formik.touched.password && formik.errors.password && (
        <p style={{ color: "red", fontSize: "0.9rem" }}>
          {formik.errors.password}
        </p>
      )}

      <br />

      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        {... formik.getFieldProps('email')}
        name="email"
    
      />
      {formik.touched.email && formik.errors.email && (
        <p style={{ color: "red", fontSize: "0.9rem" }}>
          {formik.errors.email}
        </p>
      )}
      <button type="submit">Send</button>
    </form>
  );
}

export default Form;
