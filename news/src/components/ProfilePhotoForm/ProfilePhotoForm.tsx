import { Button, Card, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { auth, storage } from "../../firebaseConfig";
import { ProfilePhotoFormData } from "../../helpers/interfaces";
import { ref, uploadBytes } from "firebase/storage";
const ProfilePhotoForm = () => {
  const { register, handleSubmit } = useForm<ProfilePhotoFormData>();

  const uploadPhoto = ({ profilePhotoList }: ProfilePhotoFormData) => {
    const profilePhoto = profilePhotoList[0];

    if (auth.currentUser) {
      const storageRef = ref(
        storage,
        `/users/${auth.currentUser.uid}/profilePhoto`
      );
      uploadBytes(storageRef, profilePhoto)
        .then(() => console.log("ok"))
        .catch((err) => console.error(err.message));
    }
  };

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
            {...register("profilePhotoList", { required: true })}
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