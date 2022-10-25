import { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
	useEffect(() => {
		axios.get('https://newsapi.org/v2/everything?q=world');
	}, []);

	return <div>HomePage</div>;
};

export default HomePage;
