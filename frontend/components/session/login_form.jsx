import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.clearErrors();
    this.props.login(user);
  }

  handleDemo(e) {
    e.preventDefault();
    const user = {username: 'Guest', password: 'password'};
    this.props.clearErrors();
    this.props.login(user);
  }

  handleSwitch(e) {
    e.preventDefault();
    this.props.history.push('/');
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
          <div className="session-title">Log In</div>
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

            <button className="btn submit-button" onClick={this.handleSubmit}>
              Log In
            </button>

            <button className="btn switch-button" onClick={this.handleDemo}>
              Guest
            </button>

            <button className="btn form-button" onClick={this.handleSwitch}>
              Sign Up
            </button>
          </div>
          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(LoginForm);
