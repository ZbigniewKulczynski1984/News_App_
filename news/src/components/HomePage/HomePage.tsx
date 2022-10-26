import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY } from '../../helpers/helpers';
import { Typography, List } from '@mui/material';
import Article from '../Article/Article';


const HomePage = () => {
	const [todaysArticles, setTodaysArticles] = useState([]);

	useEffect(() => {
		const today = new Date();
		
		const day =
			today.getDate() - 1 < 10
				? `0${today.getDate() - 1}`
				: today.getDate() - 1;

		const month =
			today.getMonth() + 1 < 10
				? `0${today.getMonth() + 1}`
				: today.getMonth() + 1;

		const year = today.getFullYear();

		const date = `${year}-${month}-${day}`;

		axios
			.get(
				`https://newsapi.org/v2/everything?q=world&from=${date}&language=en&sortBy=popularity&apiKey=${API_KEY}`
			)
			.then((response) => {
				// console.log(response.data.articles);
				setTodaysArticles(response.data.articles);
			})
			.catch((err) => {
				console.error(err.message);
			});
	}, []);

	return (
		<>
			<Typography
				variant="h2"
				align="center"
				sx={{ fontSize: '2rem', fontWeight: '200', my: '0.8rem'}}
			>
				Today's hottest news:
			</Typography>
			<List sx={{ width: '100%', alignContent: 'center' }}>
      </List>
	  
	  {todaysArticles.length !== 0 && (
        <Article art={todaysArticles[0]} key={1} />
      )}
	</>
	);
};

export default HomePage;

// Your API key is: d2bc634a5b0e46b6823fb6c94a15e10b
