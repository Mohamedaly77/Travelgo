import React from "react";
import suitcase from "../images/suitcase.png";
import FormValidateion from "./FormValidateion";
import ValidateInfo from "./ValidateInfo";

const TravelForm = () => {
  const { handleChange, values, handleSubmit, errors } =
    FormValidateion(ValidateInfo);

  return (
    <div>
      <h1 className="text-center">Travel Form</h1>

      <form onSubmit={handleSubmit} className="container row">
        <div className="col-md-6">
          <div>
            <label htmlFor="">Name</label>
            <input
              name="username"
              onChange={handleChange}
              value={values.username}
              type="text"
              className="form-control m-1"
            />

            {errors.username && (
              <p className="text-danger">{errors.username}</p>
            )}
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              name="email"
              value={values.email}
              type="email"
              className="form-control m-1"
              onChange={handleChange}
            />
          </div>
          {errors.email && <p className="text-danger">{errors.email}</p>}
          <div>
            <label htmlFor="">Phone number</label>
            <input type="number" className="form-control m-1 " />
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
          <button className="btn btn-primary m-3">Submit</button>
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center ">
          <img className="suit " src={suitcase} alt="" />
        </div>
      </form>
    </div>
  );
};

export default TravelForm;
