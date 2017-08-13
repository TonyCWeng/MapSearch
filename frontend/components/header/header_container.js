import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import Header from './header';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = ({ session, errors }) => ({
  currentUser: session,
  errors
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors())
});

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;
