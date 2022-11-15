import { Button, Card, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
const ProfilePhotoForm = () => {
  const { register, handleSubmit } = useForm();

  const uploadPhoto = () => {};

  return (
    <form onSubmit={handleSubmit(uploadPhoto)}>
      <Card sx={{ p: "1rem" }}>
        <Typography variant="h6" align="center" sx={{ fontSize: "1rem" }}>
          Upload your profile picture
        </Typography>
        <Button
          variant="contained"
          component="label"
          sx={{
            display: "block",
            mx: "auto",
            my: "1rem",
            alignContent: "center",
          }}
        >
          <Typography variant="h6" align="center" sx={{ fontSize: "1rem" }}>
            Select a file
          </Typography>
          <input
            hidden
            type="file"
            {...register("profilePhoto", { required: true })}
          />
        </Button>
        <Button
          type="submit"
          variant="contained"
          sx={{ display: "block", mx: "auto" }}
        >
          Upload
        </Button>
      </Card>
    </form>
  );
};

export default ProfilePhotoForm;