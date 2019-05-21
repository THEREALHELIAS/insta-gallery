import React from 'react';

import TextField from '@material-ui/core/TextField';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

// const styles = {
// 	field_style: {

// 	}
// };


class SearchField extends React.Component{

	onKeyPress = (e) => {
		if (e.keyCode === 13) {
			this.props.onChange(e.target.value);
		}
	}

	render(){ 
		console.log(this.props.onChange);
		return (
			<React.Fragment>
				<TextField 
					placeholder="Search..." 
					variant="outlined" 
					fullWidth 
					onKeyDown={this.onKeyPress}
					// onChange={(e) => { this.props.onChange(e.target.value) }}

			/>
			</React.Fragment>
		)
	}
}

SearchField.propTypes ={
	classes: PropTypes.object.isRequired
};

export default withStyles(null)(SearchField);
