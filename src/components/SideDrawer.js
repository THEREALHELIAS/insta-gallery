import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { connect } from 'react-redux';

import { sideBarClose } from '../actions';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import { 
  faStroopwafel,
  faList,
  faUser
 } from '@fortawesome/free-solid-svg-icons'

library.add(
  faStroopwafel, 
  faList,
  faUser
)

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
    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <FontAwesomeIcon icon="user"/>
            </ListItemIcon>
            <ListItemText primary={"Personal Info"}/>
          </ListItem>

          <Link to="/personal-gallery" style={{ textDecoration: 'none' }}>
            <ListItem button>
                <ListItemIcon>
                  <FontAwesomeIcon icon="list"/>
                </ListItemIcon>
                <ListItemText primary={"My Picked Photos"}/>
            </ListItem>
          </Link>

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
  return {
    sideBarStatus: state.app.sideBarStatus
  }
}

export default withStyles(styles)(connect(mapStateToProps,{sideBarClose})(SideDrawer));