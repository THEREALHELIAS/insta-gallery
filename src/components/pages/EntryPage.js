import React from 'react';

import LoginForm from '../form-fields/LoginForm';

import GenericModal from '../materials/GenericModal';

class EntryPage extends React.Component {
	render(){
		return(
			<div>
				<LoginForm/>
				<GenericModal/>
			</div>
		)
	}
}

export default EntryPage;