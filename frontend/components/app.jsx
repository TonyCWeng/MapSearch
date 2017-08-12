import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
  <div>
    <SignupFormContainer />
  </div>
);


export default App;
