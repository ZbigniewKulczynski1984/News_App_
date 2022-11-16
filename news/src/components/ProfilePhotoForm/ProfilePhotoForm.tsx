import { Button, Card, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { auth, storage } from "../../firebaseConfig";
import { ref, uploadBytes } from "firebase/storage";
import { ProfilePhotoFormData } from "../../helpers/interfaces";

const ProfilePhotoForm = () => {
  const { register, handleSubmit } = useForm<ProfilePhotoFormData>();

  const submitHandler = (data: ProfilePhotoFormData) => {
    const photo = data.profilePhoto[0];
    if (auth.currentUser) {
      const storageRef = ref(
        storage,
        `/users/${auth.currentUser.uid}/profilePhoto`
      );
      uploadBytes(storageRef, photo)
        .then(() => console.log("Successfully uploaded the photo"))
        .catch((err) => console.error(err.message));
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
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