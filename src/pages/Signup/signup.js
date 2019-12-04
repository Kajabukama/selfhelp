import React, { Component } from 'react';
import axios from 'axios';

// mui components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import logo from '../../assets/imgs/coat_arms.svg';

class Signup extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
    handle: '',
    loading: false,
    errors: {}
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ loading: true });

    let credentials = {
      email: this.state.email,
      password: this.state.password
    }
    axios.post('/signup', credentials)
      .then((response) => {
        this.setState({ loading: false });
        console.log(response.data);
        this.props.history.push('/')
      })
      .catch((err) => {
        this.setState({
          errors: err.response.data,
          loading: false
        })
      })
  }
  render() {
    const { errors, loading } = this.state;
    return (
      <div className="signin">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center">
          <Grid item sm>
            <Card className="login-card">
              <CardContent className="card-content">
                <div className="header">
                  <img src={logo} alt="" />
                  <div className="heading">
                    <Typography className="title" variant="h5">Signup</Typography>
                    <Typography variant="body1">Use valid credentials</Typography>
                  </div>
                </div>
                <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                  <div className="form-field">
                    <TextField
                      fullWidth
                      id="handle"
                      name="handle"
                      value={this.state.handle}
                      helperText={errors.handle}
                      error={errors.handle ? true : false}
                      label="Username"
                      placeholder="Username"
                      margin="normal"
                      variant="outlined" onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <TextField
                      fullWidth
                      id="email"
                      name="email"
                      value={this.state.email}
                      helperText={errors.email}
                      error={errors.email ? true : false}
                      label="Email address"
                      placeholder="Email address"
                      margin="normal"
                      variant="outlined" onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <TextField fullWidth
                      type="password"
                      id="password"
                      name="password"
                      value={this.state.password}
                      helperText={errors.password}
                      error={errors.password ? true : false}
                      label="Password"
                      placeholder="Password"
                      margin="normal"
                      variant="outlined" onChange={this.handleChange}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="signin-button" fullWidth
                    variant="contained"
                    color="primary">
                    Create Account
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm>
            <div className="content-footer">
              <Button>English (United States)</Button>
              <Button>About</Button>
              <Button>Help</Button>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Signup;