import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// Redux configurations
import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { fetchUserData, logoutUser } from './redux/actions/user.actions';

// compoents
import Navbar from './components/shared/navbar';
import Home from './pages/Home/home';
import Signin from './pages/Login/signin';
import Signup from './pages/Signup/signup';
import UpdateUser from './pages/Profile/Update/update'
import NotFound from './pages/Errors/notfound';
import AuthRoute from './utils/auth_route';

import './default.css';
import { theme } from './utils/theme';

const token = localStorage.TokenFB;
if (token) {
  const decoded = jwtDecode(token);
  if (decoded.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = '/signin';
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(fetchUserData());
  }
}

const MainRoutes = withRouter(({ location }) => {
  return (
    <div className="wrapper">
      {
        location.pathname !== '/signin' &&
        location.pathname !== '/signup' && <Navbar />
      }
      <div className="">
        <Switch>
          <Route
            exact path='/'
            component={Home} />
          <Route
            path="/update-user-details"
            component={UpdateUser} />
          <AuthRoute
            path='/signin'
            component={Signin} />
          <AuthRoute
            path='/signup'
            component={Signup} />
          <Route path='**' component={NotFound} />
        </Switch>
      </div>
    </div>
  )
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <MainRoutes />
          </Router>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
