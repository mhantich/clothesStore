import { ErrorMessage, Field } from "formik";
import React from "react";

function Shoop({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  setFieldValue,
}) {

  return (
    <div>
      <Field
        type="text"
        name="billingAddress.firstName"
        values={values.billingAddress.firstName}
      />
      <ErrorMessage name="billingAddress.firstName" />
      <br />

      <Field
        type="text"
        name="ShoopingForm.firstName"
        values={values.ShoopingForm.firstName}
      />
      <ErrorMessage name="ShoopingForm.firstName" />

      <Field
        type="text"
        name="ShoopingForm.lastname"
        values={values.ShoopingForm.lastname}
      />
      <ErrorMessage name="ShoopingForm.lastname" />

      <input
        type="checkbox"
        onChange={()=>{setFieldValue('ShoopingForm.isSameAddress',!values.ShoopingForm.isSameAddress,false)}}
        name="ShoopingForm.isSameAddress"
        values={values.ShoopingForm.isSameAddress}
      />
      {values.ShoopingForm.isSameAddress}
    </div>
  );
}

export default Shoop;
