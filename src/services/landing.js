import React from "react";
import { useNavigate } from "react-router-dom";

function Landing(props) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="land m-0">
        <h3 className="fw-normal text-center text-white-70 text-uppercase">
          Explore the world with <span>US</span>
        </h3>
        <p className="fadein  text-center text-black-50 fs-2 text-uppercase">
          A new sightseeing <span>experience</span> is waiting for you
        </p>

        <button
          onClick={() => navigate("travelform")}
          className="button btn btn-warning d-flex justify-content-center align-items-center m-2"
        >
          Book now
        </button>
      </div>
    </div>
  );
}

export default Landing;
