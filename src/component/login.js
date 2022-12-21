import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import subscribe from "../images/subscribe.jpg";

function Login() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),

      password: Yup.string().required("Password is required"),
    }),

    onSubmit: (values) => {
      console.log(formik.values);
    },
  });

  return (
    <div className="container row  ">
      <div className="col-md-6">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <h1 className="text-center">Login</h1>
            <label htmlFor="">Username</label>
            <input
              onChange={formik.handleChange}
              value={formik.values.username}
              id="username"
              name="username"
              type="text"
              className="form-control"
            />

            {formik.errors.username ? (
              <p className="text-white p-2 bg-info">{formik.errors.username}</p>
            ) : null}
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input
              onChange={formik.handleChange}
              value={formik.values.password}
              id="password"
              type="password"
              name="password"
              className="form-control"
            />
            {formik.errors.password ? (
              <p className="text-white p-2 bg-info">{formik.errors.password}</p>
            ) : null}
          </div>
          <button type="submit" className="btn btn-primary m-2">
            Submit
          </button>
        </form>
      </div>
      <div className=" image col-md-6 mt-3">
        <img className="sub" src={subscribe} alt=""></img>
      </div>
    </div>
  );
}

export default Login;
