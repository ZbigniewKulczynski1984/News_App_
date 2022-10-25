import { useEffect, useState } from 'react';
import axios from 'axios';
import {API_KEY} from "../../helpers/helpers"


const HomePage = () => {
  const [todaysArticles, setTodaysArticles] = useState([]);

	useEffect(() => {

    const today = new Date();
    console.log(today);

    const day = today.getDate() - 1 < 10 
    ? `0${today.getDate() -1}`
    : today.getDate() -1

    const month = today.getMonth() + 1 < 10
    ? `0${today.getMonth() +1}`
    : today.getMonth() +1

    const year = today.getFullYear();

    const date = `${year}-${month}-${day}`
   
		axios.get(
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

	return <div>HomePage</div>;
};

export default HomePage;
