import React from "react";
import { useForm } from "react-hook-form";
import { SearchFormData, SearchFormProps } from "../../helpers/interfaces";
import { TextField, Button } from "@mui/material";

const SearchForm: React.FC<SearchFormProps> = ({ setKeyword }) => {
  const { register, handleSubmit } = useForm<SearchFormData>();

  const liftKeywordUp = ({ keyword }: SearchFormData) => {
    setKeyword(keyword);
  };

  return (
    <form
      onSubmit={handleSubmit(liftKeywordUp)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <TextField
        placeholder="Keyword"
        sx={{ my: ".5rem", display: "block", mx: "auto" }}
        {...register("keyword", { required: true })}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{ display: "block", mx: "auto" }}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchForm;