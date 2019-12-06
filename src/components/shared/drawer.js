import React, { Component } from 'react';

// MUI components
import { withStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';


const useStyles = theme => ({
  root: {
    width: 250,
  },
});

class SideMenuDrawer extends Component {
  state = {
    options: ['Inbox', 'Starred', 'Send email', 'Drafts'],
    common: ['All mail', 'Trash', 'Spam'],
  }
  render() {
    const { classes } = this.props;
    const { options, common } = this.state;
    return (
      <div
        role="presentation"
        onClick={this.props.toggle} >
        <Drawer
          variant="temporary"
          anchor="left"
          open={this.props.isOpen}
          onClose={this.props.toggle}>
          <List className={classes.root}>
            {options.map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {common.map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div >
    )
  }
}


export default withStyles(useStyles)(SideMenuDrawer);