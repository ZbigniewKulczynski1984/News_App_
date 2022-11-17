import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "../../helpers/helpers";
import SearchForm from "../SearchForm/SearchForm";
import { List } from "@mui/material";
const SearchPage = () => {
  const [keyword, setKeyword] = useState("");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (keyword !== "") {
      axios
        .get(
          `https://newsapi.org/v2/everything?q=${keyword}&from=2022-11-14&language=en&sortBy=popularity&apiKey=${API_KEY}`
        )
        .then((data) => {
          setArticles(data.data.articles);
        })
        .catch((err) => console.error(err.message));
    }
  }, [keyword]);

  return (
    <>
      <SearchForm />
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          alignContent: "center",
        }}
      ></List>
    </>
  );
};

export default SearchPage;