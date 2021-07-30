import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { LoginView, RegisterView } from '../views';
import PrivateRoutes from "./PrivateRoutes"

const isAuth = () => {
  const token = localStorage.getItem('token')
  if(token) return true
  else return false
}

const PrivateRoute: React.FC = ({ children }) => isAuth() ? <Fragment>{children}</Fragment> : <Redirect to="/login" />

function Routes() {

  return (
      <Router>
            <Switch>

              <Route exact path="/login" component={LoginView} /> 
              <Route exact path="/register" component={RegisterView} /> 
              <PrivateRoute>
                <PrivateRoutes />
              </PrivateRoute>
              
            </Switch>
      </Router>
  );
}

export default Routes;
