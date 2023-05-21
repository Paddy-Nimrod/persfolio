import React from "react";
import HeaderComponent from "../components/header";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  Email: Yup.string().email("Invalid email address").required("Email Required"),
  message: Yup.string()
    .max(300, "Your message should be less than 300 characters")
    .required("Please enter your message below"),
});

function Contacts() {
  return (
    <div>
      <HeaderComponent />
      <div className="flex">
        <div>
          <Formik
            initialValues={{
              email: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Field name="email" />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
