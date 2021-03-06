import React from 'react';

import _ from 'lodash';

import { withStyles } from '@material-ui/core/styles';

import Modal from '@material-ui/core/Modal';

import { connect } from 'react-redux';

import { 
		modalPhotoClose, 
		addToPersonalList,
		fetchPhotos,
		genericModalOpen,
		genericModalClose
	} from '../../actions';

import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';

import CardHeader from '@material-ui/core/CardHeader';

import CardMedia from '@material-ui/core/CardMedia';

import CardContent from '@material-ui/core/CardContent';

import Avatar from '@material-ui/core/Avatar';

import CardActions from '@material-ui/core/CardActions';

import moment from 'moment'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { 
	faCheckCircle
 } from '@fortawesome/free-solid-svg-icons'

library.add(
  faCheckCircle
)

const styles = theme => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    outline: 'none',
    width: '50%',
    borderRadius: 10
  },
  image:{
  	position: 'relative',
 	maxWidth: '100%',
 	maxHeight: '100%'
  },
  card: {
    maxWidth: 900,
  },
  media: {
    
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
  }
});

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

class ModalComp extends React.Component{
	componentDidMount(){
		this.props.fetchPhotos();
	}

	errorHeader = () => {
		return (
			<Typography color="error" variant="subtitle1" align="center">
				Warning: Photo
			</Typography>
		)
	}

	errorContent = () =>{
		return (
			<Typography>
				This photo already existed in your personal list.
			</Typography>
		)
	}

	errorActions = () => {
		return (
			<Button onClick={() => this.props.genericModalClose()} color="secondary">
				Close
			</Button>
		)
	}


	addPhoto = () => {
		if(_.some(this.props.existingPhotos, ['id',this.props.photo.id])){
			const header = this.errorHeader()
			const content = this.errorContent();
			const actions = this.errorActions();

			this.props.modalPhotoClose();
			this.props.genericModalOpen({modalHeader: header, modalContent: content, modalActions: actions})
		}else{
			this.props.addToPersonalList(this.props.photo);
			this.props.modalPhotoClose();

			const header = () => {
				return (
					<Typography color="primary" variant="subtitle1" align="center">
						Success <FontAwesomeIcon icon="check-circle"/>
					</Typography>
				)
			}	

			const content = () => {
				return (
					<Typography>
						Photo successfully added to your list.
					</Typography>
				)
			}

			const actions = () => {
				return(
					<Button onClick={() => this.props.genericModalClose()} color="secondary">
						Close
					</Button>
				)
			}

			this.props.genericModalOpen({
				modalHeader: header(),
				modalContent: content(),
				modalActions: actions()
			})

		}
	}

	render(){
		const { modal_status, photo, classes } = this.props
		if (photo) {
			return (
				
				<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={modal_status}
				onClose={() => this.props.modalPhotoClose()}
				>	
					<div style={getModalStyle()} className={classes.paper}>
			       		<Card className={classes.card}>
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
					          className={classes.media}
					          image={photo.urls.regular}
					          title={photo.alt_description}

					        />
					        <CardContent>
					          <Typography>
					            {photo.description}
					          </Typography>
					        </CardContent>
					        <CardActions>
					        	<Button onClick={() => this.addPhoto()} color="primary">
					        		Add To Personal PhotoList
					        	</Button>
					        </CardActions>
			       		</Card>
		          	</div>
				</Modal>
			)
		}

		return(
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={false}
				>
			</Modal>
		)
	}
}	

const mapStateToProps = (state) => {
	return {
		errorStatus : state.photos.error_status,
		existingPhotos: Object.values(state.existingPhotos)
	}
}
export default withStyles(styles)(connect(mapStateToProps,{ modalPhotoClose, addToPersonalList, fetchPhotos, genericModalOpen, genericModalClose})(ModalComp));