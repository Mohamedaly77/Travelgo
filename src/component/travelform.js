import React from "react";
import suitcase from "../images/suitcase.png";

function TravelForm(props) {
  return (
    <div>
      <h1 className="text-center">Travel Form</h1>

      <form className="container row">
        <div className="col-md-6">
          <div>
            <label htmlFor="">Name</label>
            <input type="text" className="form-control m-1" />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" className="form-control m-1" />
          </div>
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
              class="form-select"
              aria-label="Default select example m-1 "
            >
              <option selected>Choose Destination</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
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
}

export default TravelForm;
