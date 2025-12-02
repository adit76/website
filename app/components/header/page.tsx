import React from "react";
import Image from "next/image";
import Logo from "../../../public/logo.jpg";
import { Container, Stack, Button } from "@mui/material";

const Header = () => {
  return (
    <header>
      <Container maxWidth="lg">
        <div className="header-main flex p-4 items-center justify-between">
          <div className="logo">
            <Image src={Logo} alt="Ninja IT" width={200} height={0} priority />
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
              <Button variant="text" sx={{ fontWeight: "900" }}>
                Login
              </Button>
              <Button variant="contained" sx={{ fontWeight: "bold" }}>
                Contact Us
              </Button>
            </Stack>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
