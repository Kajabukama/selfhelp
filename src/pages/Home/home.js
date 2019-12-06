import React, { Component } from 'react';
import Loader from '../../components/shared/loader';
import ScreamCard from '../../components/home/scream';
import { Grid } from '@material-ui/core';
const axios = require('axios');

class Home extends Component {
  state = {
    screams: [],
    isloading: false
  }

  componentDidMount() {
    this.setState({
      isloading: true,
    })
    axios.get('/screams')
      .then((response) => {
        console.log(response.data);
        this.setState({
          screams: response.data,
          isloading: false
        })
      })
      .catch((erro) => console.error(erro));
  }
  render() {
    let listScreams = this.state.screams
      .map((item) =>
        <ScreamCard
          key={item.screamId}
          avatar={item.userImage}
          user={item.handle}
          author={item.userHandle}
          published={item.createdAt}
          image={item.userImage}
          body={item.body}
        />)
    return (
      this.state.isloading ?
        <Loader /> :
        <div className="container">
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start">
            <Grid item sm={3}></Grid>
            <Grid item sm={6}>
              {listScreams}
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </div>
    );
  }
}

export default Home;