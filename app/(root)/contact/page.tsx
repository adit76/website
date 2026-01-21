import Image from "next/image";
import { Container, Button, Typography, Grid, Divider } from "@mui/material";
import {
    Facebook,
    LinkedIn,
    X,
    Instagram,
    NorthEast,
    LocationOn, LocalPhone, Email, Share
} from "@mui/icons-material";
import ContactForm from "../../components/contactForm/page";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

export default function Contact() {
    return (
        <main>
            {/* Main Banner */}
            <section
                id="detail-banner"
                className="aspect-96/35 relative flex items-center p-12 lg:p-32 "
            >
                <Container>
                    <div
                        className="banner-bg-image absolute top-0 bottom-0 right-0 left-0 -z-9"
                        style={{ background: "rgba(10, 10, 10, 0.7)" }}
                    >
                        <Image
                            src="/images/point-of-sale.jpg"
                            alt="POS Banner"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>

                    <div className="banner-items text-center text-white relative z-10 mt-16">
                        <Typography
                            sx={{
                                mb: 1,
                                fontWeight: "bolder !important",
                                typography: {
                                    xs: "h4",
                                    lg: "h3",
                                },
                            }}
                        >
                            NINJA IT
                        </Typography>
                        <Typography
                            // variant="h6"
                            sx={{ mb: 4, typography: { sm: "h6", xs: "body1" } }}
                        >
                            {" "}
                            For <span style={{ fontWeight: "bold" }}>urgent enquiries or service requests, please call 0429 964 652 | 08 82450150.</span>
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{ fontWeight: "bold" }}
                        >
                            Call Now
                        </Button>
                    </div>
                </Container>
            </section>

            {/* Our Services */}
            <section
                id="services"
                className="py-12 px-2 lg:px-8 lg:py-24"
                style={{ background: "#F7F7F7" }}
            >
                <Container>
                    <Grid container>
                        <Grid size={12}>
                            <div className="services-section pb-8 lg:pb-16 text-center w-full">
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: "#cc1d2e",
                                        fontWeight: "bold !important",
                                        typography: { sm: "h6", xs: "subtitle1" },
                                    }}
                                    gutterBottom
                                >
                                    Contact Us
                                </Typography>
                                <Typography
                                    color="text.primary"
                                    sx={{
                                        fontWeight: "bold !important",
                                        typography: { sm: "h3", xs: "h4" },
                                        maxWidth: 780,
                                        margin: "auto",
                                    }}
                                >
                                    Certified Support for Leading POS Systems
                                </Typography>
                            </div>
                        </Grid>

                        <Grid size={{ xs: 12, md: 3 }} className="py-4 px-0 lg:px-4 text-center">
                            <div>
                                <LocationOn fontSize="large" sx={{ color: "#CC1D2E", mb: 2, fontSize: "3rem" }} />
                                <Typography
                                    variant="h5"
                                    sx={{ color: "#252525", mb: 2, textAlign: "center" }}
                                >
                                    25 Union St, Granville,
                                    NSW 2142, Australia
                                </Typography>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }} className="py-4 px-0 lg:px-4 text-center">
                            <div>
                                <LocalPhone fontSize="large" sx={{ color: "#CC1D2E", mb: 2, fontSize: "3rem" }} />
                                <Typography
                                    variant="h5"
                                    sx={{ color: "#252525", mb: 2, textAlign: "center" }}
                                >
                                    Phone: <br />
                                    (02) 7806 8334
                                </Typography>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }} className="py-4 px-0 lg:px-4 text-center">
                            <div>
                                <Email fontSize="large" sx={{ color: "#CC1D2E", mb: 2, fontSize: "3rem" }} />
                                <Typography
                                    variant="h5"
                                    sx={{ color: "#252525", mb: 2, textAlign: "center" }}
                                >
                                    Email: <br />
                                    info@ycw.org.au
                                </Typography>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }} className="py-4 px-0 lg:px-4 text-center">
                            <div>

                                <Share fontSize="large" sx={{ color: "#CC1D2E", mb: 2, fontSize: "3rem" }} />
                                <Typography
                                    variant="h5"
                                    sx={{ color: "#252525", mb: 2, textAlign: "center" }}
                                >
                                    <div className="socials flex mt-8 gap-4 justify-center">
                                        <Facebook sx={{ color: "#252525", cursor: "pointer", fontSize: "2rem" }} />
                                        <X sx={{ color: "#252525", cursor: "pointer", fontSize: "2rem" }} />
                                        <LinkedIn sx={{ color: "#252525", cursor: "pointer", fontSize: "2rem" }} />
                                        <Instagram sx={{ color: "#252525", cursor: "pointer", fontSize: "2rem" }} />
                                    </div>
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            {/* Services Overview */}
            <section
                id="services-overview"
                className="py-12 px-2 lg:px-8 lg:py-24"
                style={{ background: "#F7F7F7" }}
            >
                <Container>
                    <Grid container spacing={4}>
                        <Grid
                            size={{ sm: 12, md: 6 }}
                        >
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.9696316251357!2d138.60511047650942!3d-34.93229857492689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0cbdf9fe48fd7%3A0xdc3f08aac602fda4!2sNinja%20IT!5e0!3m2!1sen!2sau!4v1768536666528!5m2!1sen!2sau" style={{ border: "none", width: "100%", height: "100%" }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </Grid>
                        <Grid size={{ sm: 12, lg: 6 }}>
                            {/* Contact Form */}
                            <ContactForm />
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </main>
    );
}
