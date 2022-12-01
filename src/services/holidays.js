import React from "react";
import luxor from "../images/luxor.jpg";
import greece from "../images/greece.jpg";
import newyork from "../images/newyork.jpg";
import { useNavigate } from "react-router-dom";

function Holiday(props) {
  const navigate = useNavigate();
  return (
    <div className="mt-0">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={luxor} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="fs-2">Luxor</h5>
              <p className="fs-3 text-uppercase">
                Live the history inside luxor temples
              </p>
              <button
                onClick={() => navigate("Luxor")}
                className="btn btn-danger"
              >
                Explore
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={newyork} class="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="fs-2">New Yourk</h5>
              <p className="fs-3 text-uppercase">
                Visit new your and catch a memory with skyscrappers
              </p>
              <button
                onClick={() => navigate("NewYork")}
                className="btn btn-danger"
              >
                Explore
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={greece} class="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="fs-2">Greece</h5>
              <p className="fs-3 text-uppercase">
                Enjoy the magic of Greek nights and Historial Museums
              </p>
              <button
                onClick={() => navigate("Greece")}
                className="btn btn-danger"
              >
                Explore
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Holiday;
