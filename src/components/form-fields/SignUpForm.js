import React from 'react';

import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';

import Radio from '@material-ui/core/Radio';

import RadioGroup from '@material-ui/core/RadioGroup';

import FormControlLabel from '@material-ui/core/FormControlLabel';

import FormControl from '@material-ui/core/FormControl';

import FormLabel from '@material-ui/core/FormLabel';

import { Field, reduxForm } from 'redux-form';

class SignUpForm extends React.Component{
	renderTextField = ({input,label, placeholder, type}) => (
		<TextField
			variant="outlined"
			type={type}
			label={label}
			placeholder={placeholder}
			{...input}
			fullWidth
		/>
	)

	renderRadio = (collection) => {
		return collection.map((entity,i) => {
			return(
				<FormControlLabel
					key={i}
					value={entity}
					control={<Radio/>}
					label={entity}
				/>
			)
		})
	}

	renderRadioButton = ({input,collection, label}) => (
		<FormControl component="fieldset">
			<FormLabel component="legend">{label}</FormLabel>
			<RadioGroup aria-label="position" {...input} name="position" row>
				{this.renderRadio(collection)}
			</RadioGroup>
    	</FormControl>
	)

	onSubmit = (formValues) => {
		console.log(formValues)
	}

	render(){
		console.log(this.props)
		return(

			<form onSubmit={this.props.handleSubmit(this.onSubmit)}>
				<FormControl component="fieldset">
					<Grid container justify="center" spacing={8}>
						<Grid item xs={12} sm={12} md={4}>
							<Field name="firstName" component={this.renderTextField} label="First Name" placeholder="First Name"/>
						</Grid>
						<Grid item xs={12} sm={12} md={4}>
							<Field name="middleName" component={this.renderTextField} label="Middle Name" placeholder="Middle Name"/>
						</Grid>
						<Grid item xs={12} sm={12} md={4}>
							<Field name="lastName" component={this.renderTextField} label="Last Name" placeholder="Last Name"/>
						</Grid>
						<Grid item xs={12}>
							<Field name="gender" component={this.renderRadioButton} label="Gender" collection={['Male','Female']}/>
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
						<Grid item xs={12}>
							<Button type="submit" variant="contained" color="secondary" fullWidth>
								Submit
							</Button>
						</Grid>
					</Grid>
				</FormControl>
			</form>
		)
	}
}

export default reduxForm({
	form: 'SignUpForm'
})(SignUpForm);