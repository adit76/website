"use client";

import { useState } from "react";
import {
  FormControl,
  Grid,
  Typography,
  TextField,
  Rating,
  Button,
} from "@mui/material";
import Image from "next";
import Form from "next/form";

import Logo from "@/public/logo.jpg";

import MeteorShower from "@/app/components/meteorShower/page";

const FeedbackForm = () => {
  const [value, setValue] = useState<number | null>(0);

  const formAction = async (formData: FormData) => {
    // "use server";
    const venue = formData.get("Venue");
    const givenNames = formData.get("Given Names");
    const lastName = formData.get("Last Name");
    const comments = formData.get("Comments");

    console.log(venue, givenNames, lastName, comments);
  };

  return (
    <section id="form-section" className="px-4">
      <MeteorShower className="flex h-screen items-center justify-center">
        <Form action={formAction}>
          <Grid
            container
            maxWidth="sm"
            spacing={2}
            sx={{
              p: 4,
              background: "rgba(255, 255, 255, 0.1)",
              border: "2px solid rgba(255, 255, 255, 0.20)",
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
              backdropFilter: "blur(8px)",
              color: "#fff",
            }}
          >
            <Typography variant="h4" gutterBottom width="100%">
              Feedback Form
            </Typography>

            <Grid size={12}>
              <FormControl fullWidth>
                <TextField
                  label="Venue"
                  variant="outlined"
                  color="secondary"
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "secondary.main",
                      },
                      "&:hover fieldset": {
                        borderColor: "secondary.main",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "secondary.main",
                      },
                    },
                    input: { color: "secondary.main" },
                    "input::placeholder": {
                      color: "secondary.main",
                      opacity: 1,
                    },
                  }}
                ></TextField>
              </FormControl>
            </Grid>

            <Grid size={6}>
              <FormControl fullWidth>
                <TextField
                  label="Given Names"
                  variant="outlined"
                  color="secondary"
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "secondary.main",
                      },
                      "&:hover fieldset": {
                        borderColor: "secondary.main",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "secondary.main",
                      },
                    },
                    input: { color: "secondary.main" },
                    "input::placeholder": {
                      color: "secondary.main",
                      opacity: 1,
                    },
                  }}
                ></TextField>
              </FormControl>
            </Grid>

            <Grid size={6}>
              <FormControl fullWidth>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  color="secondary"
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "secondary.main",
                      },
                      "&:hover fieldset": {
                        borderColor: "secondary.main",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "secondary.main",
                      },
                    },
                    input: { color: "secondary.main" },
                    "input::placeholder": {
                      color: "secondary.main",
                      opacity: 1,
                    },
                  }}
                ></TextField>
              </FormControl>
            </Grid>

            <Grid size={12}>
              <FormControl>
                <Typography variant="subtitle1">
                  How did you like our service?
                </Typography>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  sx={{
                    "& .MuiRating-icon": {
                      fontSize: "2rem", // bigger than large
                    },
                    "& .MuiRating-iconEmpty": {
                      color: "#888", // light grey for empty stars
                    },
                  }}
                />
              </FormControl>
            </Grid>

            <Grid size={12}>
              <FormControl fullWidth>
                <TextField
                  label="Comments"
                  variant="outlined"
                  color="secondary"
                  multiline
                  rows={4}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "secondary.main",
                      },
                      "&:hover fieldset": {
                        borderColor: "secondary.main",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "secondary.main",
                      },
                    },
                    input: { color: "secondary.main" },
                    "input::placeholder": {
                      color: "secondary.main",
                      opacity: 1,
                    },
                  }}
                />
              </FormControl>
            </Grid>

            <Grid size={12}>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Form>
      </MeteorShower>
    </section>
  );
};

export default FeedbackForm;
