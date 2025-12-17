import Image from "next/image";
import { Container, Button, Typography, Grid, Divider } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import MeteorShower from "../components/meteorShower/page";
import Marquee from "react-fast-marquee";

export function HeroBanner() {
  return (
    <MeteorShower className="flex aspect-16/9 items-end justify-center">
      <Container>
        <div className="banner-content min-h-screen text-center pt-35">
          <div className="banner-items">
            <Typography variant="h1" sx={{ fontSize: "3rem", mb: 1 }}>
              Welcome to Ninja IT Solutions
            </Typography>
            <Typography variant="h6" sx={{ mb: 4 }}>
              {" "}
              Your one-stop solution for all your hospitality needs.
            </Typography>
            <Button variant="contained">Get Started</Button>
          </div>
          <div className="hero-img pt-20">
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
        className="px-8 py-16"
        style={{ background: "#F7F7F7" }}
      >
        <Container>
          <Grid container>
            <Grid size={12}>
              <div className="services-section py-16 text-center w-full">
                <Typography
                  sx={{ color: "#cc1d2e", fontWeight: "bold" }}
                  variant="h6"
                  gutterBottom
                >
                  Grow you Business with Ninja IT
                </Typography>
                <Typography
                  color="text.primary"
                  variant="h3"
                  sx={{ fontWeight: "bold" }}
                >
                  A Complete Solution For All Your <br /> Hospitality, POS & IT
                  support needs
                </Typography>
              </div>
            </Grid>

            <Grid size={4} className="p-4">
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
                  POS Solutions
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", mb: 2 }}
                >
                  Streamline your operations with our cutting-edge POS systems
                  designed for the hospitality industry.
                </Typography>
                <Button variant="text" sx={{ fontWeight: "bold" }}>
                  Learn More
                </Button>
              </div>
            </Grid>

            <Grid size={4} className="p-4">
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

            <Grid size={4} className="p-4">
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
        className="px-8 py-16"
        style={{ background: "#F7F7F7" }}
      >
        <Container>
          <Grid container spacing={4}>
            <Grid size={6}>
              <Image
                src="images/service-overview.svg"
                alt="Service Overview Image"
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
              />
            </Grid>
            <Grid size={6}>
              <div className="services-section py-16 ">
                <Typography
                  sx={{ color: "#cc1d2e", fontWeight: "bold" }}
                  variant="h6"
                >
                  Why Choose Us
                </Typography>
                <Typography
                  color="text.primary"
                  variant="h3"
                  sx={{ fontWeight: "bold" }}
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
      <section
        id="pricing"
        className="px-8 py-16"
        style={{
          background:
            "linear-gradient(90deg,rgba(249, 234, 234, 1) 20%, rgba(255, 255, 255, 1) 100%)",
        }}
      >
        <Container>
          <Grid container>
            <Grid size={12}>
              <div className="services-section py-16 text-center w-full">
                <Typography
                  sx={{ color: "#cc1d2e", fontWeight: "bold" }}
                  variant="h6"
                  gutterBottom
                >
                  Our Pricing
                </Typography>
                <Typography
                  color="text.primary"
                  variant="h3"
                  sx={{ fontWeight: "bold" }}
                >
                  Transparent Pricings, Find the <br /> Perfect Fit for Your
                  Needs
                </Typography>
              </div>
            </Grid>

            {/* Starter  - $24/month */}
            <Grid size={4} className="p-4">
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
                  <Typography
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
                  </Typography>

                  <ul className="my-4">
                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 rounded-full text-white font-bold flex items-center justify-center "
                        style={{ background: "#CC1D2E" }}
                      >
                        <CheckIcon />
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
                        <CheckIcon />
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
                        <CheckIcon />
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
                        <CheckIcon />
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
                        <CheckIcon />
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
                        <CheckIcon />
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
                  sx={{ fontWeight: "bold" }}
                >
                  Get Started
                </Button>
              </div>
            </Grid>

            {/* Business  - $48/month */}
            <Grid size={4} className="p-4">
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
                  <Typography
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
                  </Typography>

                  <ul className="my-4">
                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 rounded-full text-white font-bold flex items-center justify-center "
                        style={{ background: "#CC1D2E" }}
                      >
                        <CheckIcon />
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
                        <CheckIcon />
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
                        <CheckIcon />
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
                        <CheckIcon />
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
                        <CheckIcon />
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
                        <CheckIcon />
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
                  sx={{ fontWeight: "bold" }}
                >
                  Get Started
                </Button>
              </div>
            </Grid>

            {/* Enterprise  - $72/month */}
            <Grid size={4} className="p-4">
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
                  <Typography
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
                  </Typography>

                  <ul className="my-4">
                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 rounded-full text-white font-bold flex items-center justify-center "
                        style={{ background: "#CC1D2E" }}
                      >
                        <CheckIcon />
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
                        <CheckIcon />
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
                        <CheckIcon />
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
                        <CheckIcon />
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
                        <CheckIcon />
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
                        <CheckIcon />
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
                  sx={{ fontWeight: "bold" }}
                >
                  Get Started
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section
        id="clients"
        className="px-8 py-16"
        style={{ background: "#F7F7F7" }}
      >
        <Container>
          <Grid container>
            <Grid size={12}>
              <div className="services-section py-16 text-center w-full">
                <Typography
                  sx={{ color: "#cc1d2e", fontWeight: "bold" }}
                  variant="h6"
                  gutterBottom
                >
                  Our Clients
                </Typography>
                <Typography
                  color="text.primary"
                  variant="h3"
                  sx={{ fontWeight: "bold" }}
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
                    src="/images/client-1.png"
                    alt=""
                    width={150}
                    height={100}
                    style={{ width: "auto", height: "120px", marginRight: 64 }}
                  />
                  <Image
                    src="/images/client-2.jpg"
                    alt=""
                    width={150}
                    height={100}
                    style={{ width: "auto", height: "120px", marginRight: 64 }}
                  />
                  <Image
                    src="/images/client-3.png"
                    alt=""
                    width={150}
                    height={100}
                    style={{ width: "auto", height: "120px", marginRight: 64 }}
                  />
                  <Image
                    src="/images/client-4.jpg"
                    alt=""
                    width={150}
                    height={100}
                    style={{ width: "auto", height: "120px", marginRight: 64 }}
                  />
                  <Image
                    src="/images/client-5.png"
                    alt=""
                    width={150}
                    height={100}
                    style={{ width: "auto", height: "120px", marginRight: 64 }}
                  />
                  <Image
                    src="/images/client-6.jpg"
                    alt=""
                    width={150}
                    height={100}
                    style={{ width: "auto", height: "120px", marginRight: 64 }}
                  />
                </Marquee>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section
        id="cta"
        className="px-8 py-16"
        style={{ background: "#F7F7F7" }}
      >
        <Container>
          <div
            className="relative service-card py-24 bg-white text-black rounded-lg shadow-md h-full"
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

            <div className="services-section mb-16 text-center w-full">
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", color: "white" }}
                gutterBottom
              >
                Upgrade Your Business with Our <br />
                Cutting-Edge POS Solutions!
              </Typography>
              <Typography
                sx={{ color: "#F7F7F7" }}
                variant="subtitle1"
                gutterBottom
              >
                Experience the future of transactions! Schedule a demo today and{" "}
                <br />
                witness how our POS solution can revolutionize your business.
              </Typography>
            </div>

            <div className="cta-but text-center">
              <Button
                variant="contained"
                sx={{
                  bgcolor: "white", // sets the background color
                  color: "black", // sets the text color for contrast
                  marginRight: 2,
                  fontWeight: "bold",
                  "&:hover": {
                    bgcolor: "#dbdbdb", // optional: lighter white on hover
                  },
                }}
              >
                Start Free Trial
              </Button>
              <Button variant="contained" sx={{ fontWeight: "bold" }}>
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
