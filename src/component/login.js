import React from "react";
import subscribe from "../images/subscribe.jpg";

function Login(props) {
  return (
    <>
      <div className="container row  ">
        <div className="col-md-6">
          <form>
            <div>
              <h1 className="text-center">Login</h1>
              <label htmlFor="">Username</label>
              <input type="text" className="form-control" />
            </div>
            <div>
              <label htmlFor="">Password</label>
              <input type="password" className="form-control" />
            </div>
            <button className="btn btn-primary m-2">Submit</button>
          </form>
        </div>
        <div className=" image col-md-6 mt-3">
          <img className="sub" src={subscribe}></img>
        </div>
      </div>
    </>
  );
}

export default Login;
