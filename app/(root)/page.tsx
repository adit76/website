import Image from "next/image";
import { Container, Button, Typography } from "@mui/material";
import MeteorShower from "../components/meteorShower/page";

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
      <section id="main-banner">
        <HeroBanner />
      </section>
      <section id="services" style={{ background: "#F7F7F7" }}>
        <Container>
          <div className="services-section py-20">
            <Typography color="text.primary" variant="h3" gutterBottom>
              Our Services
            </Typography>
          </div>
        </Container>
      </section>
    </main>
  );
}
