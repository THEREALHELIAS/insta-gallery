import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ModalComp from './ModalComp';

import moment from 'moment'

import {modalPhotoOpen} from '../../actions';

import {connect} from 'react-redux';


const styles = theme => ({
  card: {
    maxWidth: 400,
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

  render() {
    const { classes, photo } = this.props;

    return (
      <Card  className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              <img src={photo.user.profile_image.medium}/>
            </Avatar>
          }
          title={photo.alt_description}
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
            {photo.description}
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