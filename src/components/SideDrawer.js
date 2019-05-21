import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { connect } from 'react-redux';

import { sideBarClose } from '../actions';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class SideDrawer extends React.Component {

  toggleDrawer = () => {
    this.props.sideBarClose()
  };

  render() {
    const { classes, sideBarStatus } = this.props;
    console.log(this.props)
    const sideList = (
      <div className={classes.list}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <SwipeableDrawer
          anchor="right"
          open={sideBarStatus}
          onClose={() => this.toggleDrawer()}
          onOpen={() => this.toggleDrawer()}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={() => this.toggleDrawer()}
            onKeyDown={() => this.toggleDrawer()}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

SideDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    sideBarStatus: state.sideBar.sideBarStatus
  }
}
export default withStyles(styles)(connect(mapStateToProps,{sideBarClose})(SideDrawer));