import CountUp from "react-countup";

import React from "react";

function Stats(props) {
  return (
    <div className="stats">
      <div className=" container">
        <div className="row ">
          <div className="col-md-6 , col-lg-4">
            <div className="Number1" />
            <span className="align-center d-flex justify-content-center">
              <CountUp end={85} />
            </span>
            <p className="text-white d-flex justify-content-center">
              Destinations
            </p>
          </div>
          <div className="col-md-6 , col-lg-4">
            <div className="Number2" />
            <span className=" d-flex justify-content-center">
              <CountUp end={96} />{" "}
            </span>
            <p className="text-white  d-flex justify-content-center">
              Trips/week
            </p>
          </div>
          <div className="col-md-6 , col-lg-4">
            <div className="Number3" />
            <span className="d-flex justify-content-center">
              <CountUp end={3000000} />
            </span>
            <p className="text-white d-flex justify-content-center">
              Travellers a year
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
