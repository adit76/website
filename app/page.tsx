import Image from "next/image";
import { Container, Stack, Button } from "@mui/material";
import MeteorShower from "./components/meteorShower/page";

export function HeroBanner() {
  return (
    <MeteorShower className="flex aspect-16/9 items-end justify-center">
      <Container>
        <div className="banner-content min-h-screen text-center pt-35">
          <div className="banner-items">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to Ninja IT Solutions
            </h1>
            <p className="text-lg mb-8">
              Your one-stop solution for all your hospitality needs.
            </p>
            <Button variant="contained" size="large">
              Get Started
            </Button>
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
      <header>
        <Container>
          <div className="header-main flex p-4 items-center justify-between">
            <div className="logo">
              <Image
                src="/logo.jpg"
                alt="Ninja IT"
                width={200}
                height={0}
                priority
              />
            </div>
            <div className="menu-items">
              <ul className="flex gap-8">
                <li>Home</li>
                <li>Services</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="actions">
              <Stack spacing={2} direction="row">
                <Button variant="text">Login</Button>
                <Button variant="contained">Contact Us</Button>
              </Stack>
            </div>
          </div>
        </Container>
      </header>
      <section id="main-banner">
        <HeroBanner />
      </section>
      <section id="services" style={{ background: "#F7F7F7" }}>
        <Container>
          <div className="services-section py-20">
            <h2 className="text-3xl font-bold mb-10 text-black">
              Our Services
            </h2>
          </div>
        </Container>
      </section>
    </main>
  );
}
