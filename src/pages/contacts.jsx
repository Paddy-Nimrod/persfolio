import React from "react";
import HeaderComponent from "../components/header";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FaMobile, FaWhatsapp } from "react-icons/fa";
import { SiGmail, SiGooglemessages } from "react-icons/si";

import phoneImage from "../assets/images/phone-img.jpg";
import gmail from "../assets/images/gmail.jpg";
import whatsapp from "../assets/images/whatschat.jpg";

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
      <div className="grid grid-cols-1 gap-8 md:flex w-full m-auto h-full md:h-screen p-2 md:p-4">
        <div className="grid grid-cols-1 w-full top-12 relative gap-4 md:flex md:flex-col md:items-center md:justify-center md:w-6/12 my-5 md:m-auto md:h-5/6 p-2 md:p-4 md:gap-4">
          <div className=" h-20 md:h-2/4 flex bg-black w-full m-auto md:w-8/12 rounded-sm">
            <div className="w-1/3 h-full overflow-hidden">
              <img
                src={phoneImage}
                alt="mobile"
                className="object-fit overflow-hidden md:h-full hover:scale-110 opacity-50 hover:opacity-80"
              />
            </div>
            <div className="flex justify-center items-center w-2/3 p-2 md:p-4">
              <div className="flex flex-col gap-2 items-center font-dinregular font-medium text-white">
                <div className="flex items-center gap-2 justify-center">
                  <div className="flex gap-2 items-center">
                    <div className="border-2 border-white rounded-full p-1">
                      <FaMobile />
                    </div>
                    <div className="font-bold">Mobile</div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="border-2 border-white rounded-full p-1">
                      <SiGooglemessages />
                    </div>
                    <div className="font-bold">SMS</div>
                  </div>
                </div>
                <ul className="list-none">
                  <li>0708506842</li>
                </ul>
              </div>
            </div>
          </div>

          <div className=" h-20 md:h-2/4 flex bg-black w-full m-auto md:w-8/12 rounded-sm">
            <div className="w-1/3 h-full">
              <img
                src={gmail}
                alt="email"
                className=" object-cover h-full w-full opacity-50 hover:opacity-80"
              />
            </div>
            <div className="flex flex-col gap-2 items-center justify-center w-2/3 p-2 md:p-4">
              <div className="flex items-center gap-2 font-dinregular font-medium text-white">
                <div className="border-2 border-white rounded-full p-1">
                  <SiGmail />
                </div>
                <div className="font-bold">Email</div>
              </div>
              <ul className="list-none">
                <li className="text-white font-thin font-dinregular cursor-pointer">
                  nimrod.paul21@gmail.com
                </li>
              </ul>
            </div>
          </div>
          <div className=" h-20 md:h-2/4 flex bg-black w-full m-auto md:w-8/12 rounded-sm border-none">
            <div className="w-1/3 h-full">
              <img
                src={whatsapp}
                alt="socialwhatsapp"
                className="opacity-50 object-fill md:h-full hover:opacity-80"
              />
            </div>
            <div className="flex flex-col gap-2 items-center justify-center w-2/3 p-4">
              <div className="flex items-center gap-2 font-dinregular font-medium text-white">
                <div className="border-2 border-white rounded-full p-1">
                  <FaWhatsapp />
                </div>
                <div className="font-bold">Whatsapp.</div>
              </div>
              <ul className="list-none">
                <li className="text-white font-thin font-dinregular cursor-pointer">
                  0708506842
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12  my-4 md:m-auto md:h-5/6 md:p-4 gap-2 block relative">
          <div className="m-2 md:m-4 font-dinregular text-center font-semibold capitalize">
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
              <Form className="flex flex-col gap-2 w-full md:w-10/12 p-2 md:m-auto font-dinregular">
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-thin text-xs uppercase">Email</label>
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
                  <label className="font-thin uppercase text-xs">Message</label>
                  <Field
                    className="p-2 border-none rounded-sm bg-slate-100 resize-none"
                    name="message"
                    as="textarea"
                    rows="8"
                    placeholder="message ..."
                  />
                </div>
                <div className="flex md:justify-center">
                  <button
                    type="submit"
                    className="bg-black text-white items-end font-dinregular h-9 w-full rounded-sm"
                  >
                    Send Message
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
