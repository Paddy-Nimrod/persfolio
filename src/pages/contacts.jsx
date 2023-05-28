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
      <div className="grid grid-cols-1 items-center justify-center w-full m-auto h-screen">
        <div className="grid grid-cols-2 gap-2 w-8/12 m-auto h-1/2 ">
          <div className="h-14 bg-black w-1/2"> </div>
          <div className="h-12 bg-black w-1/2"></div>
        </div>
        <div className="w-11/12 m-auto">
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
              <Form className="flex flex-col gap-2 w-8/12 m-auto">
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-medium">Email</label>
                  <Field
                    className="h-9 p-2 border-2 w-full"
                    name="email"
                    type="email"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium">Message</label>
                  <Field
                    className="h-9 p-2 border-2"
                    name="message"
                    type="textarea"
                  />
                </div>
                <div className="flex justify-end">
                  <button className="bg-black text-white items-end font-dinregular h-9 w-4/12 rounded-sm">
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
