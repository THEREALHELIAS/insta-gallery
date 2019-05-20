import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers:{
		Authorization: 'Client-ID c44c186126c987091262109219c00ac05018ba148537a28771e54a837c89824e'
	}
})