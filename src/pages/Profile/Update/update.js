import React, { Component } from 'react';
import PropTypes from 'prop-types';
// mui components

// React redux configuration
import { connect } from 'react-redux';
import { updateUserDetails } from '../../../redux/actions/user.actions';
// custom components

class UpdateUser extends Component {
  state = {
    firstName: '',
    lastName: '',
    gender: '',
    errors: {},
  }

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
    this.props.addUserDetails(credentials, this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }
  render() {
    return (
      <div className="container">

      </div>
    )
  }
}

UpdateUser.proTypes = {
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  signupUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI
});

const mapActionsToProps = {
  updateUserDetails
}

export default connect(mapStateToProps, mapActionsToProps)(UpdateUser);