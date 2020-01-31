import React, { Component } from 'react';
import PropTypes from 'prop-types';
// mui components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormHelperText from '@material-ui/core/FormHelperText'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import EmailIcon from '@material-ui/icons/EmailSharp';
import AccountIcon from '@material-ui/icons/AccountCircleSharp';
// React redux configuration
import { connect } from 'react-redux';
import { signupUser } from '../../redux/actions/user.actions';
// custom components
import Loader from '../../components/shared/loader';
import logo from '../../assets/imgs/coat_arms.svg';

class Signup extends Component {
  state = {
    email: '',
    password: '',
    handle: '',
    errors: {},
    showPassword: false
  }

  showPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword
    })
  };

  handleChange = (eve) => {
    this.setState({ [eve.target.name]: eve.target.value })
  }

  handleSubmit = (eve) => {
    eve.preventDefault();

    let credentials = {
      handle: this.state.handle,
      email: this.state.email,
      password: this.state.password
    }
    this.props.signupUser(credentials, this.props.history);
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
                    <Typography className="title" variant="h6">Signup</Typography>
                    <Typography variant="h5" color="primary">trouble.shoot</Typography>
                  </div>
                </div>
                <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                  <FormControl variant="outlined" fullWidth className="form-field">
                    <OutlinedInput
                      type="handle"
                      id="handle"
                      name="handle"
                      value={this.state.handle}
                      error={errors.handle ? true : false}
                      label="Username"
                      placeholder="Username"
                      onChange={this.handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <AccountIcon />
                        </InputAdornment>
                      }
                    />
                    <FormHelperText>{errors.handle}</FormHelperText>
                  </FormControl>
                  <FormControl variant="outlined" fullWidth className="form-field">
                    <OutlinedInput
                      type="email"
                      id="email"
                      helperText="some text"
                      name="email"
                      value={this.state.email}
                      error={errors.email ? true : false}
                      label="Email address"
                      placeholder="Email address"
                      onChange={this.handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <EmailIcon />
                        </InputAdornment>
                      }
                    />
                    <FormHelperText>{errors.email}</FormHelperText>
                  </FormControl>
                  <FormControl className="form-field" variant="outlined" fullWidth>
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

                  <div className="form-button-field">
                    <Button
                      disabled={loading}
                      type="submit"
                      className="signin-button"
                      fullWidth
                      variant="contained"
                      color="primary">
                      Create Account
                    </Button>
                    {loading && <Loader text="Processing" />}
                  </div>
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

Signup.proTypes = {
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  signupUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI
});

const mapActionsToProps = {
  signupUser
}

export default connect(mapStateToProps, mapActionsToProps)(Signup);