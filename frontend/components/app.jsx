import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import { Switch } from 'react-router';
import HeaderContainer from './header/header_container';
import Map from './map/map';

const App = () => (
  <div>
    <HeaderContainer />
    <Switch>
      <AuthRoute exact path="/" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
    </Switch>
    <ProtectedRoute exact path="/map" component={Map} />

  </div>
);


export default App;
