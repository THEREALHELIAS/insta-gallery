import React from 'react';

import Dialog from '@material-ui/core/Dialog';

import DialogActions from '@material-ui/core/DialogActions';

import DialogContent from '@material-ui/core/DialogContent';

import DialogContentText from '@material-ui/core/DialogContentText';

import DialogTitle from '@material-ui/core/DialogTitle';

import Divider from '@material-ui/core/Divider';

import { connect } from 'react-redux';

import { 
		genericDialogClose
	} from '../../actions';

class GenericDialog extends React.Component{

	closeDialog = () =>{
		this.props.genericDialogClose()
	}

	render(){
		console.log(this.props)
		return(
			<Dialog open={this.props.dialogStatus} onClose={ () => this.closeDialog() } aria-labelledby="form-dialog-title">
				<DialogTitle>
					{this.props.dialogContent.dialogHeader}
				</DialogTitle>
				<DialogContent>
					{this.props.dialogContent.dialogContent}
				</DialogContent>
				<DialogActions>
					{this.props.dialogContent.dialogActions}
				</DialogActions>
			</Dialog>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		dialogStatus: state.app.genericDialogStatus,
		dialogContent: state.app.dialogContent
	} 
}

export default connect(mapStateToProps,{genericDialogClose})(GenericDialog);