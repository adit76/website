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
import Clients from "../../components/ourClients/page";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

export default function POS() {
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
              POS Installations and Support
            </Typography>
            <Typography
              // variant="h6"
              sx={{ mb: 4, typography: { sm: "h6", xs: "body1" } }}
            >
              {" "}
              We keep your POS running; so your business doesn’t stop.
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
                  What We Do
                </Typography>
                <Typography
                  color="text.primary"
                  sx={{
                    fontWeight: "bold !important",
                    typography: { sm: "h3", xs: "h4" },
                    maxWidth: 780,
                  }}
                >
                  End-to-End POS Services
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
                      POS Installation & Setup
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary", mb: 2 }}
                    >
                      From your first setup to every system upgrade, we’ve got
                      your back.
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
                      Fast & Reliable Support
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary", mb: 2 }}
                    >
                      We are available 8am–10pm, 7 days a week, for
                      installation, maintenance, and issue resolution.
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
                      Support & Maintainance
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary", mb: 2 }}
                    >
                      Bronze, Silver, and Gold programs provide preventative
                      maintenance, priority support, and loan equipment where
                      applicable.
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
                      Hardware & Consumables
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary", mb: 2 }}
                    >
                      High-quality POS hardware and consumables are supplied
                      with manufacturer warranties and next-day delivery within
                      metro areas.
                    </Typography>
                  </div>
                </Grid>
              </Grid>
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
                  Maintenance & Support Plans
                </Typography>
                <Typography
                  color="text.primary"
                  sx={{
                    fontWeight: "bold !important",
                    typography: { sm: "h3", xs: "h4" },
                    maxWidth: 600,
                    margin: "auto",
                  }}
                >
                  Reliable Maintenance, Minimal Downtime
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
                      Bronze
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
                        className="number-box w-8 h-8 mb-auto  p-4 rounded-full text-white font-bold flex items-center justify-center"
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        Priority 3 response: Attempt to respond within 90
                        minutes; critical equipment outages treated with highest
                        priority
                      </Typography>
                    </li>

                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 mb-auto  p-4 rounded-full text-white font-bold flex items-center justify-center"
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        Phone support: 8am–10pm, 7 days/week
                      </Typography>
                    </li>

                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 mb-auto  p-4 rounded-full text-white font-bold flex items-center justify-center"
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        On-site support: 9am–5pm, Monday–Friday
                      </Typography>
                    </li>

                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 mb-auto  p-4 rounded-full text-white font-bold flex items-center justify-center"
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        2 free after-hours on-site call-outs per year (5pm–9pm
                        weekdays, 9am–9pm weekends)
                      </Typography>
                    </li>

                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 mb-auto  p-4 rounded-full text-white font-bold flex items-center justify-center"
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        Loan equipment: Not included
                      </Typography>
                    </li>

                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 mb-auto  p-4 rounded-full text-white font-bold flex items-center justify-center"
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        1 planned preventative maintenance visit per year
                        (scheduled 1 week in advance)
                      </Typography>
                    </li>

                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 mb-auto  p-4 rounded-full text-white font-bold flex items-center justify-center"
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        Assistance with Redcat software upgrades
                      </Typography>
                    </li>

                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 mb-auto  p-4 rounded-full text-white font-bold flex items-center justify-center"
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        Hardware and network troubleshooting
                      </Typography>
                    </li>

                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 mb-auto  p-4 rounded-full text-white font-bold flex items-center justify-center"
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        5% discount on hardware, consumables, parts, and
                        services not covered by this agreement
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
                      Silver
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
                        className="number-box w-8 h-8 mb-auto  p-4 rounded-full text-white font-bold flex items-center justify-center"
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        Priority 3 response: Attempt to respond within 90
                        minutes; critical equipment outages treated with highest
                        priority
                      </Typography>
                    </li>

                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 mb-auto  p-4 rounded-full text-white font-bold flex items-center justify-center"
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        Phone support: 8am–10pm, 7 days/week
                      </Typography>
                    </li>

                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 mb-auto  p-4 rounded-full text-white font-bold flex items-center justify-center"
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        On-site support: 9am–5pm, Monday–Friday
                      </Typography>
                    </li>

                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 mb-auto  p-4 rounded-full text-white font-bold flex items-center justify-center"
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        2 free after-hours on-site call-outs per year (5pm–9pm
                        weekdays, 9am–9pm weekends)
                      </Typography>
                    </li>

                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 mb-auto  p-4 rounded-full text-white font-bold flex items-center justify-center"
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        Loan equipment: Not included
                      </Typography>
                    </li>

                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 mb-auto  p-4 rounded-full text-white font-bold flex items-center justify-center"
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        1 planned preventative maintenance visit per year
                        (scheduled 1 week in advance)
                      </Typography>
                    </li>

                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 mb-auto  p-4 rounded-full text-white font-bold flex items-center justify-center"
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        Assistance with Redcat software upgrades
                      </Typography>
                    </li>

                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 mb-auto  p-4 rounded-full text-white font-bold flex items-center justify-center"
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        Hardware and network troubleshooting
                      </Typography>
                    </li>

                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 mb-auto  p-4 rounded-full text-white font-bold flex items-center justify-center"
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        5% discount on hardware, consumables, parts, and
                        services not covered by this agreement
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
                      Gold
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
                        className="number-box w-8 h-8 mb-auto  p-4 rounded-full text-white font-bold flex items-center justify-center"
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        Priority 1 response: Attempt to respond within 30
                        minutes; critical equipment outages treated with highest
                        priority
                      </Typography>
                    </li>

                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 mb-auto  p-4 rounded-full text-white font-bold flex items-center justify-center"
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        Phone support: 8am–10pm, 7 days/week
                      </Typography>
                    </li>

                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 mb-auto  p-4 rounded-full text-white font-bold flex items-center justify-center"
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        On-site support: 9am–5pm, Monday–Friday
                      </Typography>
                    </li>

                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 mb-auto  p-4 rounded-full text-white font-bold flex items-center justify-center"
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        4 free after-hours on-site call-outs per year (5pm–9pm
                        weekdays, 9am–9pm weekends)
                      </Typography>
                    </li>

                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 mb-auto  p-4 rounded-full text-white font-bold flex items-center justify-center"
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        Loan equipment: PC, screen, or printer (maximum 2 weeks)
                        if taken off-site for repair; accessories excluded
                      </Typography>
                    </li>

                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 mb-auto  p-4 rounded-full text-white font-bold flex items-center justify-center"
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        1 planned preventative maintenance visit per year
                        (scheduled 1 week in advance)
                      </Typography>
                    </li>

                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 mb-auto  p-4 rounded-full text-white font-bold flex items-center justify-center"
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        Assistance with Redcat software upgrades
                      </Typography>
                    </li>

                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 mb-auto  p-4 rounded-full text-white font-bold flex items-center justify-center"
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        Hardware and network troubleshooting
                      </Typography>
                    </li>

                    <li className="flex items-center mb-2">
                      <div
                        className="number-box w-8 h-8 mb-auto  p-4 rounded-full text-white font-bold flex items-center justify-center"
                        style={{ background: "#CC1D2E" }}
                      >
                        <Check />
                      </div>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#EAEAEA", ml: 2 }}
                      >
                        10% discount on hardware, consumables, parts, and
                        services not covered by this agreement
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
      <Clients />

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
                Upgrade Your Business with Reliable POS Solutions!
              </Typography>
              <Typography
                sx={{
                  color: "#F7F7F7",
                  typography: { sm: "h6", xs: "subtitle1" },
                }}
                variant="h6"
                gutterBottom
              >
                For detailed information, system advice, or ongoing support,
                call NinjaIT today and let our expert technicians assist your
                business efficiently
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
                Submit an Enquiry
              </Button>
              <Button
                variant="contained"
                size="large"
                sx={{ fontWeight: "bold", marginRight: 2, marginBottom: 2 }}
              >
                Call Now
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
