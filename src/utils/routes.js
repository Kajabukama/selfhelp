
import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Navbar from '../components/shared/navbar';
import Home from '../pages/Home/home';
import Signin from '../pages/Login/signin';
import Signup from '../pages/Signup/signup';
import Detail from '../pages/Detail/details';
import NotFound from '../pages/Errors/notfound';

const MainRoutes = withRouter(({ location }) => {
  return (
    <div className="wrapper">
      {
        location.pathname !== '/signin' &&
        location.pathname !== '/signup' && <Navbar />
      }
      <div className="">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signin' component={Signin} />
          <Route path='/signup' component={Signup} />
          <Route path='/add-details' component={Detail} />
          <Route path='**' component={NotFound} />
        </Switch>
      </div>
    </div>
  )
})

export default MainRoutes;