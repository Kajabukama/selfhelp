import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SideMenuDrawer from './drawer';

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
});

class Navbar extends Component {

  state = {
    isOpen: false
  }

  toggleDrawer = (event) => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.grow}>
        <AppBar position="fixed">
          <Toolbar className="toolbar">
            <IconButton
              className={classes.menuButton}
              onClick={this.toggleDrawer}
              edge="end"
              color="inherit"
              aria-label="drawer">
              <MenuIcon />
            </IconButton>
            <div className={classes.grow} />
            <Typography variant="h5" noWrap>trouble.shoot</Typography>
            <div className={classes.grow} />
            <div>
              <IconButton
                aria-label="show mails"
                color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="notifications"
                color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="current user"
                aria-haspopup="true"
                color="inherit">
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <SideMenuDrawer
          toggle={this.toggleDrawer}
          isOpen={this.state.isOpen} />
      </div >
    );
  }

}
Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Navbar);