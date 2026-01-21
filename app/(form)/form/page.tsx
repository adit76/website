"use client";

import { useState } from "react";
import {
  FormControl,
  Grid,
  Typography,
  TextField,
  Rating,
  Button,
  CircularProgress,
} from "@mui/material";
import Form from "next/form";
import MeteorShower from "@/app/components/meteorShower/page";

const FeedbackForm = () => {
  const [rating, setRating] = useState<number | null>(0);

  const [loading, setLoading] = useState(false);

  const formAction = async (formData: FormData) => {
    setLoading(true);
    const venue = formData.get("Venue");
    const givenNames = formData.get("Given Names");
    const lastName = formData.get("Last Name");
    const comments = formData.get("Comments");

    console.log(venue, givenNames, lastName, comments, rating);

    setLoading(false);
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
                  name="Venue"
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
                  name="Given Names"
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
                  name="Last Name"
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
                  name="Rating"
                  value={rating}
                  onChange={(event, newValue) => {
                    setRating(newValue);
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
                  name="Comments"
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
                    "& .MuiOutlinedInput-input": {
                      color: "secondary.main",
                    },
                    "input::placeholder": {
                      color: "secondary.main",
                      opacity: 1,
                    },
                  }}
                ></TextField>
              </FormControl>
            </Grid>

            <Grid size={12}>
              <Button variant="contained" type="submit" disabled={loading}>
                Submit{" "}
                {loading ? (
                  <CircularProgress size={20} sx={{ ml: 2 }} color="inherit" />
                ) : (
                  ""
                )}
              </Button>
            </Grid>
          </Grid>
        </Form>
      </MeteorShower>
    </section>
  );
};

export default FeedbackForm;
