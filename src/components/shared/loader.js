import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress'
import Paper from '@material-ui/core/Paper'

const styles = {
  overlay: {
    width: '100%',
    height: '100%',
    display: 'flex',
    direction: 'column',
    alignItems: 'center',
    position: 'absolute',
    top: '0px',
    left: '0px',
    backgroundColor: 'rgba(0, 0, 0, 0.15)'
  },
  loader: {
    padding: '2rem',
    background: 'transparent',
    display: 'flex',
    direction: 'column',
    alignItems: 'center',
  },
  text: {
    fontSize: '1.3rem',
    fontWeight: '100 !important'
  }
}
class Loader extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.overlay}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center">
          <Grid item>
            <Paper className={classes.loader} elevation={0}>
              <CircularProgress color="primary" />
            </Paper>
          </Grid>
          <Grid item>
            <Typography color="primary" className={classes.text}>{this.props.text} ...</Typography>
          </Grid>
        </Grid>
      </div>
    )
  }
}
export default withStyles(styles)(Loader);