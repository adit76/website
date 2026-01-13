import React from "react";
import Image from "next/image";
import { Container, Typography, Grid } from "@mui/material";
import Marquee from "react-fast-marquee";

function Clients() {
  return (
    <>
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
                    className="h-20 sm:h-32 mr-8 lg:mr-16 w-auto"
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
                    className="h-20 sm:h-32 mr-8 lg:mr-16 w-auto"
                  />
                  <Image
                    src="/images/client-3.png"
                    alt=""
                    width={150}
                    height={100}
                    className="h-20 sm:h-32 mr-8 lg:mr-16 w-auto"
                  />
                  <Image
                    src="/images/client-4.jpg"
                    alt=""
                    width={150}
                    height={100}
                    className="h-20 sm:h-32 mr-8 lg:mr-16 w-auto"
                  />
                  <Image
                    src="/images/client-5.png"
                    alt=""
                    width={150}
                    height={100}
                    className="h-20 sm:h-32 mr-8 lg:mr-16 w-auto"
                  />
                  <Image
                    src="/images/client-6.jpg"
                    alt=""
                    width={150}
                    height={100}
                    className="h-20 sm:h-32 mr-8 lg:mr-16 w-auto"
                  />
                </Marquee>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}

export default Clients;
