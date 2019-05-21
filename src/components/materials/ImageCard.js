import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';


import moment from 'moment'

import {modalPhotoOpen} from '../../actions';

import {connect} from 'react-redux';


const styles = theme => ({
  card: {
    maxWidth: 400,
    maxHeight: 600
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class ImageCard extends React.Component {


  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  openModal = (open) => {
    console.log('Open Modal!!!!');
    console.log(this.props)
    this.props.modalPhotoOpen(open);
  }

  checkDescription = (photo) => {
    
    var showText = null

    if (photo.description != null) {
      console.log("not null")
      showText = photo.description;

      if (showText.length > 10) {
        showText = showText.substring(0,30) + " ..."
      }
    }else{
      console.log("null")
      showText = "Description not Available";
    }

    return showText;
  }

  render() {
    const { classes, photo } = this.props;

    return (
      <Card  className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              <img alt={photo.alt_description} src={photo.user.profile_image.medium}/>
            </Avatar>
          }
          title={photo.user.name}
          subheader={moment(photo.updated_at).calendar()}
        />
        <CardMedia
          onClick={ () => this.openModal(photo.id) } onMouseDown={ e => e.stopPropagation() }
          className={classes.media}
          image={photo.urls.regular}
          title={photo.alt_description}
        />
        <CardContent>
          <Typography>
            {this.checkDescription(photo)}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

ImageCard.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  console.log(ownProps)
  return {
    isOpen: state.photos.isOpen
  }
}

export default withStyles(styles)(connect(mapStateToProps,{ modalPhotoOpen })(ImageCard));