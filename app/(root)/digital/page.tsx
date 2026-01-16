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
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Marquee from "react-fast-marquee";
import { useTheme } from "@mui/material/styles";

export default function Digital() {
  return (
    <main>
      {/* Main Banner */}
      <section
        id="detail-banner"
        className="aspect-96/35 relative flex items-center p-12 lg:p-32 my-24 lg:my-4"
        style={{
          background:
            "radial-gradient(circle, rgba(204, 29, 46, 0.6) 0%, rgba(0, 0, 0, 1) 40%)",
        }}
      >
        <Container>
          <div className="banner-items text-center text-white relative z-10 mt-16">
            <Typography
              sx={{
                mb: 1,
                fontWeight: "bolder !important",
                typography: {
                  xs: "h4",
                  lg: "h3",
                },
                color: "#E0E0E0",
                maxWidth: 768,
                margin: "auto",
              }}
            >
              Bring Your Business Online with Complete{" "}
              <span style={{ color: "#CC1D2E", textDecoration: "underline" }}>
                Digital Solutions
              </span>
            </Typography>
            <Typography
              // variant="h6"
              sx={{
                mb: 4,
                color: "#E0E0E0",
                typography: { sm: "h6", xs: "body1" },
              }}
            >
              {" "}
              From websites to marketing, we provide end-to-end digital growth
              services.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{ fontWeight: "bold" }}
            >
              Let&apos;s Chat
            </Button>
          </div>
        </Container>
      </section>

      {/* Clientale */}
      <section
        id="services"
        className="py-1 px-2 lg:px-8"
        style={{ background: "#000" }}
      >
        <Container>
          <Grid container>
            <Grid size={12}>
              <div className="services-section pb-2 lg:pb-4 text-center w-full subtitle-divider">
                <Typography
                  variant="h6"
                  sx={{
                    color: "#E0E0E0",
                    fontWeight: "bold !important",
                    typography: { sm: "h6", xs: "subtitle1" },
                    margin: "auto 30px",
                  }}
                  gutterBottom
                >
                  Trusted by Amazing Brands
                </Typography>
              </div>

              <div className="trusted-by"></div>
            </Grid>

            <Grid size={{ xs: 12, md: 12 }} className="py-4 px-0 lg:px-4">
              <div
                className="service-card p-6 text-black rounded-lg shadow-md h-full"
                style={{ background: "#252525" }}
              >
                <Marquee
                  className="marquee"
                  speed={70}
                  pauseOnHover
                  gradient={false}
                >
                  <Image
                    className="h-12 sm:h-24 mr-8 lg:mr-16 w-auto"
                    src="/images/client-1.png"
                    alt=""
                    width={150}
                    height={100}
                  />
                  <Image
                    src="/images/client-2.jpg"
                    alt=""
                    width={150}
                    height={100}
                    className="h-12 sm:h-24 mr-8 lg:mr-16 w-auto"
                  />
                  <Image
                    src="/images/client-3.png"
                    alt=""
                    width={150}
                    height={100}
                    className="h-12 sm:h-24 mr-8 lg:mr-16 w-auto"
                  />
                  <Image
                    src="/images/client-4.jpg"
                    alt=""
                    width={150}
                    height={100}
                    className="h-12 sm:h-24 mr-8 lg:mr-16 w-auto"
                  />
                  <Image
                    src="/images/client-5.png"
                    alt=""
                    width={150}
                    height={100}
                    className="h-12 sm:h-24 mr-8 lg:mr-16 w-auto"
                  />
                  <Image
                    src="/images/client-6.jpg"
                    alt=""
                    width={150}
                    height={100}
                    className="h-12 sm:h-24 mr-8 lg:mr-16 w-auto"
                  />
                </Marquee>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Our Services */}
      <section
        id="services"
        className="py-12 px-2 lg:px-8 lg:py-24"
        style={{ background: "#000" }}
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
                  Our Capabilities
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold !important",
                    typography: { sm: "h3", xs: "h4" },
                    maxWidth: 780,
                    margin: "auto",
                    color: "#E0E0E0",
                  }}
                >
                  We can help you with...
                </Typography>
              </div>

              <div className="button-grid flex flex-wrap justify-center gap-4">
                <Button variant="contained" size="medium">
                  Web Design & UI
                </Button>
                <Button variant="contained" size="medium">
                  SEO Services
                </Button>
                <Button variant="contained" size="medium">
                  Web Application Development
                </Button>
                <Button variant="contained" size="medium">
                  Microsoft Solutions
                </Button>
                <Button variant="contained" size="medium">
                  POS Solutions
                </Button>
                <Button variant="contained" size="medium">
                  IT Software & Hardware
                </Button>
                <Button variant="contained" size="medium">
                  Graphic Design
                </Button>

                <Button variant="contained" size="medium">
                  Mobile Application Development
                </Button>

                <Button variant="contained" size="medium">
                  Digital Marketing
                </Button>
                <Button variant="contained" size="medium">
                  Security & Manageed IT Services
                </Button>
                <Button variant="contained" size="medium">
                  Managed Print Services
                </Button>
              </div>

              <div
                className="button-grid-desc service-card mt-4 p-6 text-black rounded-lg shadow-md"
                style={{ background: "#252525", color: "#fff" }}
              >
                <Typography variant="subtitle1">
                  Some description that goes into this section
                </Typography>

              </div>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Featured Offer */}
      <section
        id="services-overview"
        className="py-12 px-2 lg:px-8 lg:py-24"
        style={{ background: "#000" }}
      >
        <Container>
          <Grid container spacing={4}>
            <Grid size={{ sm: 12, md: 6 }}>
              <Image
                src="/images/website-preview.jpg"
                alt="Service Overview Image"
                width={700}
                height={0}
                style={{ width: "100%", height: "auto" }}
              />
            </Grid>
            <Grid size={{ sm: 12, lg: 6 }} sx={{ mt: "auto", mb: "auto" }}>
              <div className="services-section pb-4 ">
                <Typography
                  sx={{
                    color: "#cc1d2e",
                    fontWeight: "bold !important",
                    typography: { sm: "h6", xs: "subtitle1" },
                  }}
                >
                  Limited-Time Offer
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold !important",
                    typography: { sm: "h3", xs: "h4" },
                    maxWidth: 780,
                    color: "#E0E0E0",
                  }}
                  gutterBottom
                >
                  Get a Professional Website for just{" "}
                  <span
                    style={{
                      color: "#CC1D2E",
                      textDecoration: "underline",
                      fontWeight: "bolder",
                    }}
                  >
                    $1000!
                  </span>
                </Typography>
                <Typography
                  sx={{
                    color: "#E0E0E0",
                    typography: { sm: "h6", xs: "subtitle1" },
                  }}
                  variant="subtitle1"
                  gutterBottom
                >
                  A modern, conversion‑focused website built for restaurants,
                  cafés, and hospitality venues that want to look professional
                  from day one.
                </Typography>
              </div>

              <Divider sx={{ borderColor: "#EAEAEA" }} />

              <div className="card-body my-4">
                <ul className="my-4">
                  <li className="flex items-center mb-2">
                    <div
                      className="number-box w-8 h-8 rounded-full text-white font-bold flex items-center justify-center "
                      style={{ background: "#CC1D2E" }}
                    >
                      <Check />
                    </div>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#EAEAEA", ml: 2 }}
                    >
                      High‑end, mobile‑friendly design
                    </Typography>
                  </li>
                  <li className="flex items-center mb-2">
                    <div
                      className="number-box w-8 h-8 rounded-full text-white font-bold flex items-center justify-center "
                      style={{ background: "#CC1D2E" }}
                    >
                      <Check />
                    </div>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#EAEAEA", ml: 2 }}
                    >
                      SEO‑optimized structure for better Google visibility
                    </Typography>
                  </li>
                  <li className="flex items-center mb-2">
                    <div
                      className="number-box w-8 h-8 rounded-full text-white font-bold flex items-center justify-center "
                      style={{ background: "#CC1D2E" }}
                    >
                      <Check />
                    </div>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#EAEAEA", ml: 2 }}
                    >
                      Clean, easy‑to‑browse menu layout
                    </Typography>
                  </li>
                  <li className="flex items-center mb-2">
                    <div
                      className="number-box w-8 h-8 rounded-full text-white font-bold flex items-center justify-center "
                      style={{ background: "#CC1D2E" }}
                    >
                      <Check />
                    </div>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#EAEAEA", ml: 2 }}
                    >
                      Ready for online ordering & table bookings
                    </Typography>
                  </li>
                  <li className="flex items-center mb-2">
                    <div
                      className="number-box w-8 h-8 rounded-full text-white font-bold flex items-center justify-center "
                      style={{ background: "#CC1D2E" }}
                    >
                      <Check />
                    </div>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#EAEAEA", ml: 2 }}
                    >
                      Fully customizable branding
                    </Typography>
                  </li>
                  <li className="flex items-center mb-2">
                    <div
                      className="number-box w-8 h-8 rounded-full text-white font-bold flex items-center justify-center "
                      style={{ background: "#CC1D2E" }}
                    >
                      <Check />
                    </div>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#EAEAEA", ml: 2, fontWeight: "bold" }}
                    >
                      1 year of hosting + domain included
                    </Typography>
                  </li>
                </ul>
              </div>

              <Button
                variant="contained"
                size="large"
                sx={{ mt: 2, fontWeight: "bold" }}
              >
                View Demo
              </Button>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="py-12 px-2 lg:px-8 lg:py-24"
        style={{
          background:
            "linear-gradient(90deg,rgba(249, 234, 234, 1) 20%, rgba(255, 255, 255, 1) 100%)",
        }}
      >
        <Container>
          <Grid container>
            <Grid size={12}>
              <div className="services-section pb-8 lg:pb-16 text-center w-full">
                <Typography
                  sx={{
                    color: "#cc1d2e",
                    fontWeight: "bold !important",
                    typography: { sm: "h6", xs: "subtitle1" },
                  }}
                  gutterBottom
                >
                  Our Pricing
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
                  Transparent Pricings, Find the Perfect Fit for Your Needs
                </Typography>
              </div>
            </Grid>

            {/* Starter  - $24/month */}
            <Grid size={{ sm: 12, lg: 4 }} className="py-4 px-0 lg:px-4 w-full">
              <div
                className="service-card p-6 bg-white text-black rounded-lg shadow-md h-full"
                style={{ background: "#252525" }}
              >
                <div className="card-header flex items-center mb-4">
                  <div className="icon-container bg-white w-18 h-18 rounded-full text-white font-bold flex items-center justify-center ">
                    <Image
                      src="images/icon-pricing-1.svg"
                      alt="Starter "
                      width={24}
                      height={0}
                    />
                  </div>

                  <div className="card-header-desc ml-4">
                    <Typography
                      sx={{ fontWeight: "bold", color: "white" }}
                      variant="h4"
                    >
                      Basic
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#EAEAEA" }}>
                      Excellent value, all basics covered
                    </Typography>
                  </div>
                </div>

                <Divider sx={{ borderColor: "#EAEAEA" }} />

                <div className="card-body mt-4">
                  <Typography
                    // className="flex items-end"
                    sx={{ fontWeight: "bold", color: "white" }}
                    variant="h4"
                  >
                    $1000
                  </Typography>

                  <ul className="my-4">
                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 rounded-full text-white font-bold flex items-center justify-center "
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        Awesome feature
                      </Typography>
                    </li>
                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 rounded-full text-white font-bold flex items-center justify-center "
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        Awesome feature
                      </Typography>
                    </li>
                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 rounded-full text-white font-bold flex items-center justify-center "
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        Awesome feature
                      </Typography>
                    </li>
                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 rounded-full text-white font-bold flex items-center justify-center "
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        Awesome feature
                      </Typography>
                    </li>
                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 rounded-full text-white font-bold flex items-center justify-center "
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        Awesome feature
                      </Typography>
                    </li>
                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 rounded-full text-white font-bold flex items-center justify-center "
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        Awesome feature
                      </Typography>
                    </li>
                  </ul>
                </div>

                <Button
                  variant="contained"
                  fullWidth
                  sx={{ fontWeight: "bold", mt: 2 }}
                >
                  Get Started
                </Button>
              </div>
            </Grid>

            {/* Business  - $48/month */}
            <Grid size={{ sm: 12, lg: 4 }} className="py-4 px-0 lg:px-4 w-full">
              <div
                className="service-card p-6 bg-white text-black rounded-lg shadow-md h-full"
                style={{ background: "#252525" }}
              >
                <div className="card-header flex items-center mb-4">
                  <div className="icon-container bg-white w-18 h-18 rounded-full text-white font-bold flex items-center justify-center ">
                    <Image
                      src="images/icon-pricing-2.svg"
                      alt="Starter "
                      width={35}
                      height={0}
                    />
                  </div>

                  <div className="card-header-desc ml-4">
                    <Typography
                      sx={{ fontWeight: "bold", color: "white" }}
                      variant="h4"
                    >
                      Advanced
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#EAEAEA" }}>
                      Advanced feature and integrations
                    </Typography>
                  </div>
                </div>

                <Divider sx={{ borderColor: "#EAEAEA" }} />

                <div className="card-body mt-4">
                  <Typography
                    // className="flex items-end"
                    sx={{ fontWeight: "bold", color: "white" }}
                    variant="h4"
                  >
                    $2500
                  </Typography>

                  <ul className="my-4">
                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 rounded-full text-white font-bold flex items-center justify-center "
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        Awesome feature
                      </Typography>
                    </li>
                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 rounded-full text-white font-bold flex items-center justify-center "
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        Awesome feature
                      </Typography>
                    </li>
                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 rounded-full text-white font-bold flex items-center justify-center "
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        Awesome feature
                      </Typography>
                    </li>
                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 rounded-full text-white font-bold flex items-center justify-center "
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        Awesome feature
                      </Typography>
                    </li>
                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 rounded-full text-white font-bold flex items-center justify-center "
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        Awesome feature
                      </Typography>
                    </li>
                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 rounded-full text-white font-bold flex items-center justify-center "
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        Awesome feature
                      </Typography>
                    </li>
                  </ul>
                </div>

                <Button
                  variant="contained"
                  fullWidth
                  sx={{ fontWeight: "bold", mt: 2 }}
                >
                  Get Started
                </Button>
              </div>
            </Grid>

            {/* Enterprise  - $72/month */}
            <Grid size={{ sm: 12, lg: 4 }} className="py-4 px-0 lg:px-4 w-full">
              <div
                className="service-card p-6 bg-white text-black rounded-lg shadow-md h-full"
                style={{ background: "#252525" }}
              >
                <div className="card-header flex items-center mb-4">
                  <div className="icon-container bg-white w-18 h-18 rounded-full text-white font-bold flex items-center justify-center ">
                    <Image
                      src="images/icon-pricing-3.svg"
                      alt="Starter "
                      width={35}
                      height={0}
                    />
                  </div>

                  <div className="card-header-desc ml-4">
                    <Typography
                      sx={{ fontWeight: "bold", color: "white" }}
                      variant="h4"
                    >
                      Custom
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#EAEAEA" }}>
                      Every feature you need, tailored for you
                    </Typography>
                  </div>
                </div>

                <Divider sx={{ borderColor: "#EAEAEA" }} />

                <div className="card-body mt-4">
                  <Typography
                    // className="flex items-end"
                    sx={{ fontWeight: "bold", color: "white" }}
                    variant="h4"
                  >
                    Custom
                  </Typography>

                  <ul className="my-4">
                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 rounded-full text-white font-bold flex items-center justify-center "
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        Awesome feature
                      </Typography>
                    </li>
                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 rounded-full text-white font-bold flex items-center justify-center "
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        Awesome feature
                      </Typography>
                    </li>
                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 rounded-full text-white font-bold flex items-center justify-center "
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        Awesome feature
                      </Typography>
                    </li>
                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 rounded-full text-white font-bold flex items-center justify-center "
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        Awesome feature
                      </Typography>
                    </li>
                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 rounded-full text-white font-bold flex items-center justify-center "
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        Awesome feature
                      </Typography>
                    </li>
                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 rounded-full text-white font-bold flex items-center justify-center "
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        Awesome feature
                      </Typography>
                    </li>
                  </ul>
                </div>

                <Button
                  variant="contained"
                  fullWidth
                  sx={{ fontWeight: "bold", mt: 2 }}
                >
                  Get Started
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>

        <Container>
          <div
            className="relative service-card py-12 lg:py-24 px-4 mt-8 lg:mt-16  bg-white text-black rounded-lg shadow-md h-full"
            style={{ background: "#252525" }}
          >
            <Image
              src="/images/cta-design-1.svg"
              width={280}
              height={0}
              alt="cta-design"
              className="absolute bottom-0 left-0"
            />
            <Image
              src="/images/cta-design-2.svg"
              width={180}
              height={0}
              alt="cta-design"
              className="absolute top-0 right-0"
            />

            <div className="services-section mb-12 text-center w-full">
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  typography: { sm: "h3", xs: "h5" },
                }}
                gutterBottom
              >
                Elevate Your Business with Smart Digital Solutions
              </Typography>
              <Typography
                sx={{
                  color: "#F7F7F7",
                  typography: { sm: "h6", xs: "subtitle1" },
                }}
                variant="h6"
                gutterBottom
              >
                For tailored advice, technical guidance, or ongoing support,
                connect with our team and get the right solution from experts
                who understand your industry.
              </Typography>
            </div>

            <div className="cta-but text-center">
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "white", // sets the background color
                  color: "black", // sets the text color for contrast
                  marginRight: 2,
                  marginBottom: 2,
                  fontWeight: "bold",
                  "&:hover": {
                    bgcolor: "#dbdbdb", // optional: lighter white on hover
                  },
                }}
              >
                Request a Quote
              </Button>
              <Button
                variant="contained"
                size="large"
                sx={{ fontWeight: "bold", marginRight: 2, marginBottom: 2 }}
              >
                Talk to an Expert
              </Button>
            </div>
          </div>
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
