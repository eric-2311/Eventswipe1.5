import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

//Auth route to ensure login and sign up page cannot be accessed when logged in
const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={props => (
     !loggedIn ? <Component {...props} /> : <Redirect to="/" />)} />
);

//Protected route to ensure users must be logged in to view component
const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={props => (
     loggedIn ? <Component {...props} /> : <Redirect to="/login" />)} />
);

//Checking for whether a user is logged in
const mSTP = state => (
  {loggedIn: Boolean(state.session.id)}
);

export const AuthRoute = withRouter(connect(mSTP)(Auth));

export const ProtectedRoute = withRouter(connect(mSTP)(Protected));