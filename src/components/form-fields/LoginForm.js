import React from 'react';

import { Field, reduxForm } from 'redux-form';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import CardActions from '@material-ui/core/CardActions';

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';

import Link from '@material-ui/core/Link';

import { genericModalOpen } from '../../actions'

import { connect } from 'react-redux';

import SignUpForm from './SignUpForm';

const styles = {
	card: {
		padding: 20


  	},
  	button: {
  		background: 'linear-gradient(45deg, #3FA34D 30%, #96CC9D 90%)',
  		color: 'white'
  	}
}

class LoginForm extends React.Component {

	renderSignUp = () => {
		return(
			<SignUpForm/>
		)
	}

	renderSignUpHeader = () => {
		return(
			<Typography variant="subtitle1" align="center">
				Sign Up
			</Typography>
		)
	}

	onClickSignUp = () => {
		this.props.genericModalOpen({
			modalHeader: this.renderSignUpHeader(),
			modalContent: this.renderSignUp()
		});
	}

	renderTextField = ({label, placeholder, type}) => (
		<TextField
			variant="outlined"
			type={type}
			label={label}
			placeholder={placeholder}
			fullWidth
		/>
	)

	render(){

		const {classes} = this.props

		return(
				<Grid 
					justify="center"
					container 
					spacing={8}
				>
					<Grid item xs={12} sm={12} md={5}>
						<Card className={ classes.card }>
							<CardContent>
								<form>
									<Grid container spacing={16}>
										<Grid item xs={12}>
											<Field name="username" component={this.renderTextField} label="Username" placeholder="Email or Username" type="null" />
										</Grid>
										<Grid item xs={12}>
											<Field name="password" component={this.renderTextField} label="Password" placeholder="Password" type="password"/>
										</Grid>
										<Grid item xs={12}>
											<Button size="large" className={classes.button} fullWidth height="50%" variant="contained">
												Login
											</Button>
										</Grid>
									</Grid>
								</form>
								<CardActions>
									<Typography>
										Don't have an account yet? <Link component="button" variant="body2" onClick={() => this.onClickSignUp()}>Click here to create one.</Link>
									</Typography>
								</CardActions>
							</CardContent>
						</Card>
					</Grid>
				</Grid>			
		)
	}
}

export default reduxForm({
	form:'LoginForm'
})(withStyles(styles)(connect(null,{genericModalOpen})(LoginForm)));