import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

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
  }
});

class GenericImageCard extends React.Component{
	render(){
	    const { classes} = this.props;
		return (
			<Card className={classes.card}>
				<CardHeader
		      		title={this.props.title}
	   			/>
	   			<CardMedia
	   				className={classes.media}
	   				image={this.props.image}
	   			/>
	   			<CardContent>
	   				{this.props.content}
	   			</CardContent>
	   			<CardActions>
	   				{this.props.actions}
	   			</CardActions>
			</Card>
		)		
	}

}

export default withStyles(styles)(GenericImageCard);