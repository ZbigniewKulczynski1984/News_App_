import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { LoginFormData } from "../../helpers/interfaces";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginFormData>();

  const logUserIn = ({ email, password }: LoginFormData) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Logged in");
      })
      .catch((err) => console.error(err.message));
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit(logUserIn)}
    >
      <TextField
        variant="outlined"
        type="email"
        placeholder="email"
        sx={{ display: "block", mx: "auto", my: ".5rem" }}
        {...register("email", { required: true })}
      />
      <TextField
        variant="outlined"
        type="password"
        placeholder="password"
        sx={{ display: "block", mx: "auto", my: ".8rem" }}
        {...register("password", { required: true })}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ mb: "1rem", display: "block", mx: "auto" }}
      >
        Log in
      </Button>
    </form>
  );
};

export default LoginForm;