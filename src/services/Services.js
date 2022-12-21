import React from "react";
import { useNavigate } from "react-router-dom";

function Services(props) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container serve">
        <h1 className="m-3 text-center">
          Why Choose <span>Us</span>...?
        </h1>
        <div className="row text-center m-3">
          <div className="col-md-6 col-lg-3">
            <div className="feat">
              <i className="fa-solid fa-signs-post fa-2x"></i>
              <h3 className="fs-2 fw-normal"> Mutiple Choices</h3>
              <p className="text-black-50">
                More choice and flexibility for your dream holiday
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="feat">
              <i className="fa-solid fa-euro-sign  fa-2x"></i>
              <h3 className="fs-2 fw-normal"> Low deposits</h3>
              <p className="text-black-50">
                Secure your next holiday from $100
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="feat">
              <i className="fa-solid fa-headset  fa-2x"></i>
              <h3 className="fs-2 fw-normal"> 24/7 Support</h3>
              <p className="text-black-50">
                Expert help whilst you are on holiday
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="feat">
              <i className="fa-solid fa-check  fa-2x"></i>
              <h3 className="fs-2 fw-normal"> Price match</h3>
              <p className="text-black-50">
                Know you are getting the best holiday deal
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className=" col-md-6 col-lg-4">
            <div className="card">
              <img
                src="https://cdn.pixabay.com/photo/2015/08/31/23/26/background-916228__340.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Visit Egypt</h5>
                <h3 className="card-text">Hot Deal</h3>
                <p>
                  Cairo, Nile cruise & Red Sea over Christmas 7days , 8 nights
                </p>

                <span>US$ 1999</span>

                <button
                  onClick={() => navigate("travelform")}
                  to="#"
                  className="btn btn-primary m-2"
                >
                  Book
                </button>
              </div>
            </div>
          </div>
          <div className=" col-md-6 col-lg-4">
            <div className="card">
              <img
                src="https://cdn.pixabay.com/photo/2014/02/09/05/45/maldives-262523__340.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Visit Maldives</h5>
                <h3 className="card-text">Hot Deal</h3>
                <p>
                  Centara Ggrand Islad Resort & spa Maldives 5 days , 6nights
                </p>
                <span> US$ 1440</span>

                <button
                  onClick={() => navigate("travelform")}
                  to="#"
                  className="btn btn-primary m-2"
                >
                  Book
                </button>
              </div>
            </div>
          </div>
          <div className=" col-md-6 col-lg-4">
            <div className="card">
              <img
                src="https://cdn.pixabay.com/photo/2020/09/16/04/02/skyline-5575251__340.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Visit Dubai</h5>
                <h3 className="card-text">Hot Deal</h3>
                <p>
                  Holiday INN Express Dubai In the Heart of Dubai , 4day 5
                  nights
                </p>
                <span> $ 999</span>
                <button
                  onClick={() => navigate("travelform")}
                  to="#"
                  className="btn btn-primary m-2"
                >
                  Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
