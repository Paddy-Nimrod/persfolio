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
      <div className="flex w-full m-auto h-screen p-4 ">
        <div className="flex flex-col items-center justify-center w-6/12 m-auto h-5/6 p-4 gap-4">
          <div className="h-2/4 flex bg-black w-8/12 rounded-md">
            <div className="w-1/3 bg-white h-full"></div>
            <div className="w-2/3 p-4">
              {" "}
              <div className="font-dinregular font-medium text-white">
                hello client
              </div>
            </div>
          </div>
          <div className="h-2/4 flex bg-black w-8/12 rounded-md">
            <div className="w-2/3 p-4">
              <div className="font-dinregular font-medium text-white">
                hello client
              </div>
            </div>
            <div className="w-1/3 bg-white h-full"></div>
          </div>
        </div>
        <div className="w-6/12 m-auto h-5/6 p-4 gap-2">
          <div className="m-4 font-dinregular font-medium capitalize">
            Please leave your Message
          </div>
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
              <Form className="flex flex-col gap-2 w-10/12 m-auto font-dinregular">
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-semibold text-xs uppercase">
                    Email
                  </label>
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                  <Field
                    className="h-9 p-2 w-full rounded-sm border-none bg-slate-100"
                    name="email"
                    type="email"
                  />
                </div>
                <div className="flex flex-col gap-2 h-fit">
                  <label className="font-semibold uppercase text-xs">
                    Message
                  </label>
                  <Field
                    className="h-9 p-2 border-none rounded-sm"
                    name="message"
                    as="textarea"
                    rows="8"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-black text-white items-end font-dinregular h-9 w-4/12 rounded-sm"
                  >
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
