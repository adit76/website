import Image from "next/image";
import { Container, Button, Typography, Grid, Divider } from "@mui/material";
import {
    Check,
    Facebook,
    LinkedIn,
    X,
    Instagram,
    NorthEast,
} from "@mui/icons-material";
import ContactForm from "../../components/contactForm/page";
import Clients from "../../components/ourClients/page";
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
                                    Trusted POS Partners
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

                        <Grid size={{ xs: 12, md: 4 }} className="py-4 px-0 lg:px-4">
                            <div className="service-card p-6 bg-white text-black rounded-lg shadow-md h-full">
                                <Image
                                    src="/images/redcat.webp"
                                    alt="Hero Image"
                                    width={170}
                                    height={0}
                                    priority
                                    className="mb-4 "
                                />
                                <Typography
                                    variant="body1"
                                    sx={{ color: "text.secondary", mb: 2 }}
                                >
                                    A comprehensive POS solution for hospitality businesses,
                                    designed to streamline operations and manage sales, inventory,
                                    and reporting efficiently.
                                </Typography>
                                <Button variant="text">Learn More</Button>
                            </div>
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }} className="py-4 px-0 lg:px-4">
                            <div className="service-card p-6 bg-white text-black rounded-lg shadow-md h-full">
                                <Image
                                    src="/images/ordermate.png"
                                    alt="Hero Image"
                                    width={170}
                                    height={0}
                                    priority
                                    className="mb-4 "
                                />
                                <Typography
                                    variant="body1"
                                    sx={{ color: "text.secondary", mb: 2 }}
                                >
                                    A specialized POS system for cafés and restaurants, providing
                                    order management, table service, and real-time reporting.
                                </Typography>
                                <Button variant="text">Learn More</Button>
                            </div>
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }} className="py-4 px-0 lg:px-4">
                            <div className="service-card p-6 bg-white text-black rounded-lg shadow-md h-full">
                                <Image
                                    src="/images/oolio.webp"
                                    alt="Hero Image"
                                    width={170}
                                    height={0}
                                    priority
                                    className="mb-4 "
                                />
                                <Typography
                                    variant="body1"
                                    sx={{ color: "text.secondary", mb: 2 }}
                                >
                                    A modern POS platform focused on fast-service and café
                                    environments, offering intuitive interfaces and reliable
                                    transaction management.
                                </Typography>
                                <Button variant="text">Learn More</Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>

            <footer
                className="relative overflow-hidden p-4"
                style={{ background: "#000" }}
            >
                <Container>
                    <Grid
                        container
                        spacing={2}
                        className="relative footer-wrapper my-8 lg:my-16"
                    >
                        <Grid size={{ sm: 12, md: 4 }} sx={{ width: "100%" }}>
                            <Image src="/logo.jpg" width={180} height={100} alt="Logo" />
                            <Typography variant="body1" sx={{ color: "#E0E0E0", mt: 4 }}>
                                Ninja IT provide a Complete solution for all Hospitality POS &
                                IT support needs in Adelaide. We specialise in Cafes,
                                Restaurants and Retail environments and their unique
                                requirements for POS systems.
                            </Typography>
                            <div className="socials flex mt-8 gap-4">
                                <Facebook sx={{ color: "#E0E0E0", cursor: "pointer" }} />
                                <X sx={{ color: "#E0E0E0", cursor: "pointer" }} />
                                <LinkedIn sx={{ color: "#E0E0E0", cursor: "pointer" }} />
                                <Instagram sx={{ color: "#E0E0E0", cursor: "pointer" }} />
                            </div>
                        </Grid>
                        <Grid
                            size={{ sm: 12, md: 2 }}
                            offset={{ sm: 0, md: 1 }}
                            sx={{ width: "100%" }}
                        >
                            <Typography variant="h5">Quick Links</Typography>
                            <ul
                                className="mt-4 lg:mt-8 space-y-3"
                                style={{ color: "#E0E0E0" }}
                            >
                                <li>Home</li>
                                <li>Services</li>
                                <li>About Us</li>
                                <li>Contact Us</li>
                            </ul>
                        </Grid>
                        <Grid size={{ sm: 12, md: 2 }} sx={{ width: "100%" }}>
                            <Typography variant="h5">Support</Typography>
                            <ul
                                className="mt-4 lg:mt-8 space-y-3"
                                style={{ color: "#E0E0E0" }}
                            >
                                <li>FAQ&apos;s</li>
                                <li>Articles</li>
                                <li>Live Chat</li>
                            </ul>
                        </Grid>
                        <Grid size={{ sm: 12, md: 3 }} sx={{ width: "100%" }}>
                            <Typography variant="h5">Subscribe Newsletter</Typography>
                            <Paper
                                component="form"
                                sx={{
                                    p: "2px 4px",
                                    display: "flex",
                                    alignItems: "center",
                                    width: "100%",
                                    mt: 4,
                                }}
                            >
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Your Email"
                                    inputProps={{ "aria-label": "search google maps" }}
                                />

                                <Button
                                    variant="contained"
                                    size="small"
                                    sx={{ fontWeight: "bold", lineHeight: 1.5, ml: 1 }}
                                    endIcon={<NorthEast fontSize="small" />}
                                >
                                    Send
                                </Button>
                            </Paper>
                        </Grid>
                        <Image
                            className="absolute -right-50 bottom-0 hidden lg:block"
                            src="/images/footer-design-1.svg"
                            alt=""
                            width={400}
                            height={300}
                        />
                    </Grid>

                    <Divider sx={{ borderColor: "rgba(117,117,117,0.5)", my: 2 }} />
                    <Typography
                        variant="body1"
                        sx={{ color: "#757575", textAlign: "center" }}
                    >
                        © Copyright 2025. Designed by Adit
                    </Typography>
                </Container>
            </footer>
        </main>
    );
}
