import React from "react";
import suitcase from "../images/suitcase.png";
import * as Yup from "yup";

import { useFormik } from "formik";

const TravelForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("First name is required")
        .max(15, "Max 15 characters"),
      lastName: Yup.string()
        .required("Last name is required")
        .max(15, "Max 15 characters"),
      email: Yup.string().required("Email is required"),
      phoneNumber: Yup.string().required("Phone number is required"),
    }),
  });

  return (
    <div>
      <h1 className="text-center">Travel Form</h1>

      <form onSubmit={formik.handleSubmit} className="container row">
        <div className="col-md-6">
          <div>
            <label htmlFor="">First Name</label>
            <input
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              type="text"
              className="form-control m-1"
            />
            {formik.errors.firstName ? (
              <p className="text-white p-2 bg-info">
                {formik.errors.firstName}
              </p>
            ) : null}
          </div>
          <div>
            <label htmlFor="">Last Name</label>
            <input
              name="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              type="text"
              className="form-control m-1"
            />
            {formik.errors.lastName ? (
              <p className="text-white p-2 bg-info">{formik.errors.lastName}</p>
            ) : null}
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              name="email"
              value={formik.values.email}
              type="email"
              className="form-control m-1"
              onChange={formik.handleChange}
            />
            {formik.errors.email ? (
              <p className="text-white p-2 bg-info">{formik.errors.email}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="">Phone number</label>
            <input
              value={formik.phoneNumber}
              name="phone"
              type="number"
              className="form-control m-1 "
            />
            {formik.errors.phoneNumber ? (
              <p className="text-white p-2 bg-info">
                {formik.errors.phoneNumber}
              </p>
            ) : null}
          </div>
          <div>
            <label htmlFor="">Travel date</label>
            <input type="date" className="form-control m-1 " />
          </div>
          <div>
            <label htmlFor="">Return date</label>
            <input type="date" className="form-control m-1 " />
          </div>
          <div>
            <label htmlFor="">Destination</label>
            <select
              className="form-select"
              aria-label="Default select example m-1 "
            >
              <option selected>Choose Destination</option>
              <option value="1">Egypt</option>
              <option value="2">New york</option>
              <option value="3">Greece</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary m-3">
            Submit
          </button>
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center ">
          <img className="suit " src={suitcase} alt="" />
        </div>
      </form>
    </div>
  );
};

export default TravelForm;
