import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress'
import Paper from '@material-ui/core/Paper'

class Loader extends Component {
  render() {
    return (
      <div className="overlay">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center">
          <Grid item>
            <Paper className="loader-container" elevation={3}>
              <CircularProgress color="primary" />
              <Typography className="loading-text">Loading ...</Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}
export default Loader;