import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleClick(e) {
    e.preventDefault();
    const user = this.state;
    this.props.clearErrors();
    this.props.signup(user);
  }

  renderErrors() {
    return(
      <ul className='errors-list'>
        {this.props.errors.map((error, i) =>(
          <li className='errors' key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
    <div className="session-container">

        <div className="session-form">
          <div className="session-title">Sign Up</div>
          {this.renderErrors()}
          <div className="form-item">

            <input
              placeholder="Username"
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="session-input"
            />

          </div>

          <div className="form-item">

            <input
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="session-input"
            />
          </div>
          <div className="form-item">
          <div className='buttons'>
            <button className="btn form-button" onClick={this.handleClose}>
              Sign In
            </button>

            <button className="btn submit-button" onClick={this.handleClick}>
              Submit
            </button>
          </div>
          </div>
        </div>



      </div>
    );
  }
}

export default SignupForm;
