import React, { Component } from 'react';
import PropTypes from 'prop-types';

// mui components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AccountIcon from '@material-ui/icons/AccountCircleSharp';

import logo from '../../assets/imgs/coat_arms.svg';

import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/user.actions';
import Loader from '../../components/shared/loader';

class Signin extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
    showPassword: false
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  openDialog() {
    this.setState({
      open: true
    });
  }
  showPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword
    })
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let credentials = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.loginUser(credentials, this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }
  render() {
    const { UI: { loading } } = this.props;
    const { errors } = this.state;
    return (
      <div className="signin">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center">
          <Grid item sm={4}>
            <Card className="login-card">
              <CardContent className="card-content">
                <div className="header">
                  <img src={logo} alt="" />
                  <div className="heading">
                    <Typography className="title" variant="h5">signin</Typography>
                    <Typography variant="h6" color="primary">trouble.shoot</Typography>
                  </div>
                </div>
                <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                  <FormControl variant="outlined" fullWidth className="form-field">
                    <OutlinedInput
                      type="email"
                      id="email"
                      name="email"
                      value={this.state.email}
                      error={errors.email ? true : false}
                      label="Email address"
                      placeholder="Email address"
                      onChange={this.handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <AccountIcon />
                        </InputAdornment>
                      }
                    />
                    <FormHelperText>{errors.email}</FormHelperText>
                  </FormControl>
                  <FormControl variant="outlined" fullWidth className="form-field">
                    <OutlinedInput
                      type={this.state.showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={this.state.password}
                      error={errors.password ? true : false}
                      label="Password"
                      placeholder="Password"
                      onChange={this.handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={this.showPassword}
                            edge="end"
                          >
                            {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <FormHelperText>{errors.password}</FormHelperText>
                  </FormControl>
                  <Button
                    disabled={loading}
                    type="submit"
                    className="signin-button" fullWidth
                    variant="contained"
                    color="primary">
                    Signin
                  </Button>
                  {loading && <Loader text="Processing" />}
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
Signin.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI
});
const mapActionToProps = {
  loginUser
}
export default connect(mapStateToProps, mapActionToProps)(Signin);