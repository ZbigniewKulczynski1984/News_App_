import { Button, Card, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { RegisterFormData } from "../../helpers/interfaces";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm<RegisterFormData>();

  const registerUser = ({ email, password, password2 }: RegisterFormData) => {
    if (password === password2) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => console.log("Succesfully registered a user"))
        .catch((err) => console.error(err.message));
    }else {
        alert('Passwords are not equal!!!');
    }
   
  };

  return (
    <Card sx={{ mt: "1.3rem", p: "10px" }}>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(registerUser)}
      >
        <Typography align="center" variant="h2" sx={{ fontSize: "1.5rem" }}>
          Register new account
        </Typography>
        <TextField
          type="email"
          placeholder="email"
          sx={{ display: "block", mx: "auto", my: ".5rem" }}
          {...register("email", { required: true })}
        />

        <TextField
          type="password"
          placeholder="password"
          sx={{ display: "block", mx: "auto", my: ".5rem" }}
          {...register("password", { required: true })}
        />
        <TextField
          type="password"
          placeholder="repeat password"
          sx={{ display: "block", mx: "auto", my: ".5rem" }}
          {...register("password2", { required: true })}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{ display: "block", mx: "auto" }}
        >
          Register
        </Button>
      </form>
    </Card>
  );
};

export default RegisterPage;