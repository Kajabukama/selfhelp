import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './default.css';
import Home from './pages/Home/home';
import Signin from './pages/Login/signin';
import Signup from './pages/Signup/signup';
import Navbar from './components/shared/navbar';

import { theme } from './default-theme';

const MainRoutes = withRouter(({ location }) => {
  return (
    <div>
      {
        location.pathname !== '/signin' &&
        location.pathname !== '/signup' &&
        <Navbar />
      }
      <div className="">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signin' component={Signin} />
          <Route path='/signup' component={Signup} />
        </Switch>
      </div>
    </div>
  )
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <MainRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
