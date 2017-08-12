import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
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
    <div>

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
        </div>

        <div className="submission">
        <div className='button'>
          <button className="btn" onClick={this.handleClose}>
            Sign In
          </button>

          <button className="btn" onClick={this.handleClick}>
            Submit
          </button>
        </div>
        </div>

      </div>
    );
  }
}
