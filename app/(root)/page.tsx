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
import MeteorShower from "../components/meteorShower/page";
import Marquee from "react-fast-marquee";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

export function HeroBanner() {
  return (
    <MeteorShower className="main-banner flex aspect-16/9 items-end justify-center">
      <Container>
        <div className="banner-content min-h-screen text-center pt-60 lg:pt-35">
          <div className="banner-items">
            <Typography
              sx={{
                mb: 1,
                fontWeight: "bold",
                typography: { sm: "h1", xs: "h3" },
              }}
            >
              Welcome to Ninja IT Solutions
            </Typography>
            <Typography
              // variant="h6"
              sx={{ mb: 4, typography: { sm: "h6", xs: "body1" } }}
            >
              {" "}
              Our advanced POS software is designed to revolutionize your
              business operations. With its powerful features and <br />
              user-friendly interface, enhance customer experiences, and boost
              your overall efficiency.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{ fontWeight: "bold" }}
            >
              Get Started
            </Button>
          </div>
          <div className="hero-img pt-24">
            <Image
              src="/hero-image.png"
              alt="Hero Image"
              width={1800}
              height={0}
              priority
            />
          </div>
        </div>
      </Container>
    </MeteorShower>
  );
}

export default function Home() {
  return (
    <main>
      {/* Main Banner */}
      <section id="main-banner">
        <HeroBanner />
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
                  Grow your Business with Ninja IT
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
                  A Complete Solution For All Your Hospitality, POS & IT support
                  needs
                </Typography>
              </div>
            </Grid>

            <Grid size={{ sm: 12, lg: 4 }} className="py-4 px-0 lg:px-4">
              <div className="service-card p-6 bg-white text-black rounded-lg shadow-md h-full">
                <Image
                  src="images/icon-pos.svg"
                  alt="Hero Image"
                  width={70}
                  height={0}
                  priority
                  className="mb-4 "
                />
                <Typography
                  sx={{
                    fontWeight: "bold",
                  }}
                  variant="h5"
                  gutterBottom
                >
                  POS Solutions
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", mb: 2 }}
                >
                  Streamline your operations with our cutting-edge POS systems
                  designed for the hospitality industry.
                </Typography>
                <Button variant="text">Learn More</Button>
              </div>
            </Grid>

            <Grid size={{ sm: 12, lg: 4 }} className="py-4 px-0 lg:px-4">
              <div className="service-card p-6 bg-white text-black rounded-lg shadow-md h-full">
                <Image
                  src="images/icon-website.svg"
                  alt="Hero Image"
                  width={70}
                  height={0}
                  priority
                  className="mb-4 "
                />
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="h5"
                  gutterBottom
                >
                  Digital Solutions
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", mb: 2 }}
                >
                  Streamline your operations with our cutting-edge POS systems
                  designed for the hospitality industry.
                </Typography>
                <Button variant="text">Learn More</Button>
              </div>
            </Grid>

            <Grid size={{ sm: 12, lg: 4 }} className="py-4 px-0 lg:px-4">
              <div className="service-card p-6 bg-white text-black rounded-lg shadow-md h-full">
                <Image
                  src="images/icon-pos.svg"
                  alt="Hero Image"
                  width={70}
                  height={0}
                  priority
                  className="mb-4 "
                />
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="h5"
                  gutterBottom
                >
                  Business Solutions
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", mb: 2 }}
                >
                  Streamline your operations with our cutting-edge POS systems
                  designed for the hospitality industry.
                </Typography>
                <Button variant="text">Learn More</Button>
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
              sx={{
                display: { xs: "none", lg: "block" },
              }}
            >
              <Image
                src="images/service-overview.svg"
                alt="Service Overview Image"
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
              />
            </Grid>
            <Grid size={{ sm: 12, lg: 6 }}>
              <div className="services-section pb-8 lg:pb-16 ">
                <Typography
                  sx={{
                    color: "#cc1d2e",
                    fontWeight: "bold !important",
                    typography: { sm: "h6", xs: "subtitle1" },
                  }}
                >
                  Why Choose Us
                </Typography>
                <Typography
                  color="text.primary"
                  sx={{
                    fontWeight: "bold !important",
                    typography: { sm: "h3", xs: "h4" },
                    maxWidth: 780,
                  }}
                >
                  Quick Value Proposition
                </Typography>
              </div>

              <Grid container spacing={4}>
                <Grid size={6}>
                  <div
                    className="number-box w-12 h-12 rounded-full text-white font-bold flex items-center justify-center mb-4 text-xl"
                    style={{ background: "#CC1D2E" }}
                  >
                    01
                  </div>
                  <div className="text-black h-full">
                    <Typography
                      sx={{ fontWeight: "bold" }}
                      variant="h5"
                      gutterBottom
                    >
                      Why Businesses Choose NinjaIT
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary", mb: 2 }}
                    >
                      Fast, reliable and complete tech solutions for hospitality
                      and small business.
                    </Typography>
                  </div>
                </Grid>
                <Grid size={6}>
                  <div
                    className="number-box w-12 h-12 rounded-full text-white font-bold flex items-center justify-center mb-4 text-xl"
                    style={{ background: "#CC1D2E" }}
                  >
                    02
                  </div>
                  <div className="text-black h-full">
                    <Typography
                      sx={{ fontWeight: "bold" }}
                      variant="h5"
                      gutterBottom
                    >
                      Why Businesses Choose NinjaIT
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary", mb: 2 }}
                    >
                      Fast, reliable and complete tech solutions for hospitality
                      and small business.
                    </Typography>
                  </div>
                </Grid>
                <Grid size={6}>
                  <div
                    className="number-box w-12 h-12 rounded-full text-white font-bold flex items-center justify-center mb-4 text-xl"
                    style={{ background: "#CC1D2E" }}
                  >
                    03
                  </div>
                  <div className="text-black h-full">
                    <Typography
                      sx={{ fontWeight: "bold" }}
                      variant="h5"
                      gutterBottom
                    >
                      Why Businesses Choose NinjaIT
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary", mb: 2 }}
                    >
                      Fast, reliable and complete tech solutions for hospitality
                      and small business.
                    </Typography>
                  </div>
                </Grid>
                <Grid size={6}>
                  <div
                    className="number-box w-12 h-12 rounded-full text-white font-bold flex items-center justify-center mb-4 text-xl"
                    style={{ background: "#CC1D2E" }}
                  >
                    04
                  </div>
                  <div className="text-black h-full">
                    <Typography
                      sx={{ fontWeight: "bold" }}
                      variant="h5"
                      gutterBottom
                    >
                      Why Businesses Choose NinjaIT
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary", mb: 2 }}
                    >
                      Fast, reliable and complete tech solutions for hospitality
                      and small business.
                    </Typography>
                  </div>
                </Grid>
              </Grid>
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
                      Starter
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#EAEAEA" }}>
                      For small business
                    </Typography>
                  </div>
                </div>

                <Divider sx={{ borderColor: "#EAEAEA" }} />

                <div className="card-body mt-4">
                  {/* <Typography
                    // className="flex items-end"
                    sx={{ fontWeight: "bold", color: "white" }}
                    variant="h4"
                  >
                    $24
                    <span
                      className="ml-1 text-lg font-normal"
                      style={{ color: "#EAEAEA" }}
                    >
                      /month
                    </span>
                  </Typography> */}

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
                      Business
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#EAEAEA" }}>
                      For your daily business needs
                    </Typography>
                  </div>
                </div>

                <Divider sx={{ borderColor: "#EAEAEA" }} />

                <div className="card-body mt-4">
                  {/* <Typography
                    // className="flex items-end"
                    sx={{ fontWeight: "bold", color: "white" }}
                    variant="h4"
                  >
                    $48
                    <span
                      className="ml-1 text-lg font-normal"
                      style={{ color: "#EAEAEA" }}
                    >
                      /month
                    </span>
                  </Typography> */}

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
                      Enterprise
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#EAEAEA" }}>
                      For small business
                    </Typography>
                  </div>
                </div>

                <Divider sx={{ borderColor: "#EAEAEA" }} />

                <div className="card-body mt-4">
                  {/* <Typography
                    // className="flex items-end"
                    sx={{ fontWeight: "bold", color: "white" }}
                    variant="h4"
                  >
                    $72
                    <span
                      className="ml-1 text-lg font-normal"
                      style={{ color: "#EAEAEA" }}
                    >
                      /month
                    </span>
                  </Typography> */}

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
      </section>

      {/* Our Clients */}
      <section
        id="clients"
        className="py-12 px-2 lg:px-8 lg:py-24"
        style={{ background: "#F7F7F7" }}
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
                  Our Clients
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
                  Some of the our Amazing Clients{" "}
                </Typography>
              </div>

              <Grid size={12}>
                <Marquee
                  className="marquee"
                  speed={70}
                  pauseOnHover
                  gradient={false}
                >
                  <Image
                    className="h-20 sm:h-40 mr-8 lg:mr-16 w-auto"
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
                    className="h-20 sm:h-40 mr-8 lg:mr-16 w-auto"
                  />
                  <Image
                    src="/images/client-3.png"
                    alt=""
                    width={150}
                    height={100}
                    className="h-20 sm:h-40 mr-8 lg:mr-16 w-auto"
                  />
                  <Image
                    src="/images/client-4.jpg"
                    alt=""
                    width={150}
                    height={100}
                    className="h-20 sm:h-40 mr-8 lg:mr-16 w-auto"
                  />
                  <Image
                    src="/images/client-5.png"
                    alt=""
                    width={150}
                    height={100}
                    className="h-20 sm:h-40 mr-8 lg:mr-16 w-auto"
                  />
                  <Image
                    src="/images/client-6.jpg"
                    alt=""
                    width={150}
                    height={100}
                    className="h-20 sm:h-40 mr-8 lg:mr-16 w-auto"
                  />
                </Marquee>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Call to Action */}
      <section
        id="cta"
        className="px-2 lg:px-8 lg:py-24 py-12"
        style={{ background: "#F7F7F7" }}
      >
        <Container>
          <div
            className="relative service-card py-12 lg:py-24 px-4 bg-white text-black rounded-lg shadow-md h-full"
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
                Upgrade Your Business with Our Cutting-Edge POS Solutions!
              </Typography>
              <Typography
                sx={{
                  color: "#F7F7F7",
                  typography: { sm: "h6", xs: "subtitle1" },
                }}
                variant="h6"
                gutterBottom
              >
                Experience the future of transactions! Schedule a demo today and{" "}
                witness how our POS solution can revolutionize your business.
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
                Start Free Trial
              </Button>
              <Button
                variant="contained"
                size="large"
                sx={{ fontWeight: "bold", marginRight: 2, marginBottom: 2 }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <footer className="p-4" style={{ background: "#000" }}>
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
