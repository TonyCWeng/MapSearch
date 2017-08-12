import { connect } from 'react-redux';
import { logout, signup } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = ({ session, errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

const SignupFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);

export default SignupFormContainer;
