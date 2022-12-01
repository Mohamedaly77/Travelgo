import React from "react";
import membership from "../images/membership.jpg";

function Sineup(props) {
  return (
    <div>
      <div className="container row  ">
        <div className="col-md-6">
          <form>
            <div>
              <h1 className="text-center">Sine up</h1>
              <label htmlFor="">Username</label>
              <input type="text" className="form-control" />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input type="email" className="form-control" />
            </div>
            <div>
              <label htmlFor="">password</label>
              <input type="password" className="form-control" />
            </div>
            <button className="btn btn-primary m-2">Submit</button>
          </form>
        </div>
        <div className=" image col-md-6 mt-3">
          <img className="memb" src={membership}></img>
        </div>
      </div>
    </div>
  );
}

export default Sineup;
