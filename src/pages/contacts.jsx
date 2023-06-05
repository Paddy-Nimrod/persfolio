import React from "react";
import HeaderComponent from "../components/header";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const messageSchema = Yup.object().shape({
  Email: Yup.string().email("Invalid email address").required("Email Required"),
  message: Yup.string()
    .max(300, "Your message should be less than 300 characters")
    .required("Please enter your message below"),
});

function Contacts() {
  return (
    <div>
      <HeaderComponent />
      <div className="md:flex w-full m-auto md:h-screen p-2 md:p-4">
        <div className="grid grid-cols-1 w-full top-12 relative gap-4 md:flex md:flex-col md:items-center md:justify-center md:w-6/12 my-5 md:m-auto md:h-5/6 p-2 md:p-4 md:gap-4">
          <div className=" h-20 md:h-2/4 flex bg-black w-full m-auto md:w-8/12 rounded-sm md:rounded-md">
            <div className="w-1/3 bg-white h-full"></div>
            <div className="w-2/3 p-2 md:p-4">
              <div className="font-dinregular font-medium text-white">
                hello client
              </div>
            </div>
          </div>

          <div className=" h-20 md:h-2/4 flex bg-black w-full m-auto md:w-8/12 rounded-sm md:rounded-md">
            <div className="w-1/3 bg-white h-full"></div>
            <div className="w-2/3 p-4">
              <div className="font-dinregular font-medium text-white">
                hello client
              </div>
            </div>
          </div>
          <div className=" h-20 md:h-2/4 flex bg-black w-full m-auto md:w-8/12 rounded-sm md:rounded-md border-none">
            <div className="w-1/3 bg-white h-full"></div>
            <div className="w-2/3 p-4">
              <div className="font-dinregular font-medium text-white">
                hello client
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 my-5 md:m-auto md:h-5/6 p-2 md:p-4 gap-2 relative">
          <div className="m-2 md:m-4 font-dinregular font-medium capitalize">
            Please leave your Message
          </div>
          <Formik
            initialValues={{
              email: "",
              message: "",
            }}
            validationSchema={messageSchema}
            onSubmit={(values) => {
              console.log("submited");
              alert(JSON.stringify(values));
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
                    placeholder="email address"
                  />
                </div>
                <div className=" flex flex-col gap-2">
                  <label className="font-semibold uppercase text-xs">
                    Message
                  </label>
                  <Field
                    className="p-2 border-none rounded-sm bg-slate-100 resize-none"
                    name="message"
                    as="textarea"
                    rows="10"
                    placeholder="message ..."
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
