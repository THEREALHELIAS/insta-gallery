import React from 'react';

import LoginForm from '../form-fields/LoginForm';

import GenericModal from '../materials/GenericModal';

import GenericDialog from '../materials/GenericDialog';

class EntryPage extends React.Component {
	render(){
		return(
			<div>
				<LoginForm/>
				<GenericDialog/>
			</div>
		)
	}
}

export default EntryPage;