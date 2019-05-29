import React from 'react';

import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';

import { Field, reduxForm } from 'redux-form';

class SignUpForm extends React.Component{
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
		return(
			<form>
				<Grid container justify="center" spacing={8}>
					<Grid item xs={12} sm={12}>
						<Field name="firstName" component={this.renderTextField} label="First Name" placeholder="First Name"/>
					</Grid>
					<Grid item xs={12} sm={12}>
						<Field name="middleName" component={this.renderTextField} label="Middle Name" placeholder="Middle Name"/>
					</Grid>
					<Grid item xs={12} sm={12}>
						<Field name="lastName" component={this.renderTextField} label="Last Name" placeholder="Last Name"/>
					</Grid>
					<Grid item xs={12}>
						<Field name="contactNumber" component={this.renderTextField} label="Contact Number" placeholder="Contact Number"/>
					</Grid>
					<Grid item xs={12}>
						<Field name="email" component={this.renderTextField} label="Email" placeholder="Email" type="email"/>
					</Grid>
					<Grid item xs={12}>
						<Field name="password" component={this.renderTextField} label="Password" placeholder="Password" type="password"/>
					</Grid>
				</Grid>
			</form>
		)
	}
}

export default reduxForm({
	form: 'SignUpForm'
})(SignUpForm);