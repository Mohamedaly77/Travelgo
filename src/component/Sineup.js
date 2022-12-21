import React from "react";
import membership from "../images/membership.jpg";
import * as Yup from "yup";

import { useFormik } from "formik";

function Sineup(props) {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .max(15, "Maximum length is 15 or less"),

      email: Yup.string().required("Email is required"),

      password: Yup.string().required("Password is required"),
    }),

    onSubmit: (value) => {
      console.log(formik.values);
    },
  });

  return (
    <div>
      <div className="container row  ">
        <div className="col-md-6">
          <form onSubmit={formik.handleSubmit}>
            <div>
              <h1 className="text-center">Sine up</h1>
              <label className="m-2" htmlFor="">
                Username
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.name}
                name="name"
                id="name"
                type="text"
                className="form-control"
              />
              {formik.errors.name ? (
                <p className="text-white p-2 bg-info">{formik.errors.name}</p>
              ) : null}
            </div>
            <div>
              <label className="m-2" htmlFor="">
                Email
              </label>
              <input
                onChange={formik.handleChange}
                name="email"
                value={formik.values.email}
                type="email"
                className="form-control"
              />
              {formik.errors.email ? (
                <p className="text-white p-2  bg-info ">
                  {formik.errors.email}
                </p>
              ) : null}
            </div>
            <div>
              <label className="m-2" htmlFor="">
                Password
              </label>
              <input
                onChange={formik.handleChange}
                name="password"
                id="password"
                value={formik.values.password}
                type="password"
                className="form-control"
              />
              {formik.errors.password ? (
                <p className="text-white p-2 bg-info ">
                  {formik.errors.password}
                </p>
              ) : null}
            </div>

            <button type="submit" className="btn btn-primary m-2">
              Submit
            </button>
          </form>
        </div>
        <div className=" image col-md-6 mt-3">
          <img className="memb" src={membership} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Sineup;
