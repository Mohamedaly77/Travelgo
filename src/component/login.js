import React, { Component } from "react";
import subscribe from "../images/subscribe.jpg";

class Login extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },

    errors: {},
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.setState({ account });
  };
  render() {
    const { account } = this.state;
    return (
      <div className="container row  ">
        <div className="col-md-6">
          <form onSubmit={this.handleSubmit}>
            <div>
              <h1 className="text-center">Login</h1>
              <label htmlFor="">Username</label>
              <input
                onChange={this.handleChange}
                value={account.username}
                id="username"
                name="username"
                type="text"
                className="form-control"
              />
            </div>
            <div>
              <label htmlFor="">Password</label>
              <input
                onChange={this.handleChange}
                value={account.password}
                id="password"
                type="password"
                name="password"
                className="form-control"
              />
            </div>
            <button className="btn btn-primary m-2">Submit</button>
          </form>
        </div>
        <div className=" image col-md-6 mt-3">
          <img className="sub" src={subscribe} alt=""></img>
        </div>
      </div>
    );
  }
}

export default Login;
