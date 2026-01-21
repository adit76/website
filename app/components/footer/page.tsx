import Image from "next/image";
import { Container, Button, Typography, Grid, Divider } from "@mui/material";
import {
    Facebook,
    LinkedIn,
    X,
    Instagram,
    NorthEast,
} from "@mui/icons-material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

const Footer = () => {

    return (
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
    );
};

export default Footer;
