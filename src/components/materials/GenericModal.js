import React from 'react';
import Modal from '@material-ui/core/Modal';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { 
		genericModalClose
	} from '../../actions';
import Divider from '@material-ui/core/Divider';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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



class GenericModal extends React.Component{
	render(){
		const { classes } = this.props;
		return(
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={this.props.modalStatus}
				onClose={() => this.props.genericModalClose()}
				>
				<div style={getModalStyle()} className={classes.paper}>
			       		<Card className={classes.card}>
			       			<CardHeader
							      title={this.props.modalLayout.modalHeader}
			       			/>
			       			<Divider/>
					        <CardContent>
					          	{this.props.modalLayout.modalContent}
					        </CardContent>
					        <Divider/>
					        <CardActions>
					        	{this.props.modalLayout.modalActions}
					        </CardActions>
			       		</Card>
		          	</div>
			</Modal>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		modalStatus: state.app.genericModalStatus,
		modalLayout: state.app.modalContent
	}
}

export default withStyles(styles)(connect(mapStateToProps, {genericModalClose})(GenericModal));