import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className='header'>

          <div className='header-left'>
            Welcome, {this.props.currentUser.username}!
          </div>

          <div className='header-center title'>
            Map Searcher
          </div>

          <div className='header-right'>
            <button
              className="header-button"
              onClick={ this.handleLogout }
              >
              Logout
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className='header'>
          <div className='header-center title'>
            Map Searcher
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Header);
