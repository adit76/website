"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import {
    Grid,
    Typography,
    TextField,
    Button,
    CircularProgress,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from "@mui/material";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [enquiry, setEnquiry] = useState("");

    const handleEnquiryChange = (event: SelectChangeEvent) => {
        setEnquiry(event.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        const payload = {
            givenNames: formData.get("givenNames"),
            lastName: formData.get("lastName"),
            venue: formData.get("venue"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            enquiry,
            description: formData.get("description"),
        };

        console.log("Submitted:", payload);

        // Simulate API delay
        try { await emailjs.send("service_vgjhclj", "template_jl422ry", payload, "_7OSZadtf3-j-UqQG"); setSubmitted(true); } catch (error) { console.error("Error submitting Form:", error); } setLoading(false);
    };

    if (submitted) { return (<div className="flex flex-col items-center justify-center px-4 text-center py-10 min-h-150"> <Typography variant="h4" sx={{ color: "#CC1D2E", mb: 2, fontWeight: "bold" }}> Thank you! </Typography> <Typography variant="subtitle1" sx={{ color: "#252525" }}> Your form has been submitted. We’ll get back to you shortly. </Typography> </div>); }

    return (
        <section id="form-section" className="px-4">
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} maxWidth="sm">
                    <Grid size={12}>
                        <Typography variant="h4" sx={{ color: "#CC1D2E" }}>
                            Contact Form
                        </Typography>
                        <Typography variant="subtitle2" sx={{ color: "#252525" }}>
                            We&rsquo;ll get back to you as soon as possible!
                        </Typography>
                    </Grid>

                    <Grid size={{ sm: 12, lg: 6 }} >
                        <FormControl fullWidth>
                            <TextField
                                label="Given Names"
                                name="givenNames"
                                required
                            />
                        </FormControl>
                    </Grid>

                    <Grid size={{ sm: 12, lg: 6 }} >
                        <FormControl fullWidth>
                            <TextField
                                label="Last Name"
                                name="lastName"
                                required
                            />
                        </FormControl>
                    </Grid>

                    <Grid size={12}>
                        <FormControl fullWidth>
                            <TextField
                                label="Organization / Venue"
                                name="venue"
                            />
                        </FormControl>
                    </Grid>

                    <Grid size={{ sm: 12, lg: 6 }} >
                        <FormControl fullWidth>
                            <TextField
                                label="Email"
                                name="email"
                                type="email"
                                required
                            />
                        </FormControl>
                    </Grid>

                    <Grid size={{ sm: 12, lg: 6 }} >
                        <FormControl fullWidth>
                            <TextField
                                label="Phone"
                                name="phone"
                                required
                            />
                        </FormControl>
                    </Grid>

                    <Grid size={12}>
                        <FormControl fullWidth>
                            <InputLabel>Enquiry</InputLabel>
                            <Select
                                value={enquiry}
                                label="Enquiry"
                                onChange={handleEnquiryChange}
                                name="enquiry"
                            >
                                <MenuItem value="General Enquiry">General Enquiry</MenuItem>
                                <MenuItem value="Quote & Pricing">Request a Quote / Pricing</MenuItem>
                                <MenuItem value="Technical Support">Technical Support (Existing Clients)</MenuItem>
                                <MenuItem value="POS & IT">POS / IT Solutions</MenuItem>
                                <MenuItem value="Website & App">Website / App Development</MenuItem>
                                <MenuItem value="Marketing & SEO">Digital Marketing / SEO</MenuItem>
                                <MenuItem value="Careers">Careers / Internship</MenuItem>
                                <MenuItem value="Others">Others</MenuItem>


                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid size={12}>
                        <FormControl fullWidth>
                            <TextField
                                label="Description"
                                name="description"
                                multiline
                                rows={4}
                            />
                        </FormControl>
                    </Grid>

                    <Grid size={12}>
                        <Button
                            variant="contained"
                            type="submit"
                            disabled={loading}
                        >
                            Submit
                            {loading && (
                                <CircularProgress
                                    size={20}
                                    sx={{ ml: 2 }}
                                    color="inherit"
                                />
                            )}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </section>
    );
}
