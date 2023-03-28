import React from "react";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      value2: "",
      value3: "",
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleH = this.handleH.bind(this);
    this.handleB = this.handleB.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }
  handleH(event) {
    this.setState({
      value2: event.target.value,
    });
  }
  handleB(event) {
    this.setState({
      value3: event.target.value,
    });
  }

  handleSubmit(event) {
    alert("your surname and name is: " + this.state.value + ', ' + 'your telephone number is: ' + this.state.value2 + ', ' + 'your year of birth is: ' + this.state.value3);
    console.log("your surname and name is: " + this.state.value + ', ' + 'your telephone number is: ' + this.state.value2 + ', ' + 'your year of birth is: ' + this.state.value3);
    event.preventDefault();
  }

  render() {
    return (
      <div className="box jc-center">
        <div className="boxCenter">
          <div className="text-container jc-center">
            <p className="login">Login</p>
          </div>

          <div className="social jc-center">
            <button className="facebook">login with facebook</button>
          </div>

          <div className="social jc-center">
            <button className="google">login with google</button>
          </div>

          <p className="or jc-center">or</p>

          <form onSubmit={this.handleSubmit}>
            <div className="email jc-center">
              <input
                type={"text"}
                className="input"
                placeholder="surname and name"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </div>

            <div className="telNum jc-center">
              <input
                type={"text"}
                className="input"
                placeholder="telephone number"
                value={this.state.value2}
                onChange={this.handleH}
              />
            </div>

            <div className="birth jc-center">
              <input
                type={"text"}
                className="input"
                placeholder="year of birth"
                value={this.state.value3}
                onChange={this.handleB}
              />
            </div>

            <a href="#" className="forgot-pass">
              forgot your password?
            </a>

            <div className="social jc-center">
              <input type="submit" value={"login"} className="loginBtn" />
            </div>
          </form>

          <p className="acc jc-center">dont have an account?</p>

          <div className="social jc-center">
            <button className="newAcc">create an new account</button>
          </div>
        </div>
      </div>
    );
  }
}

export default InputForm;
