"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.jpg";
import {
  AppBar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  Container,
  Stack,
  Button,
} from "@mui/material";
import { Menu, Close } from "@mui/icons-material";

const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "POS Solutions",
    href: "/services",
  },
  {
    label: "Digital Solutions",
    href: "/about",
  },
  {
    label: "About Us",
    href: "/contact",
  },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <header className="bg-black fixed z-999 top-0 left-0 right-0">
      <Container maxWidth="lg">
        <div className="header-main flex py-4 px-0 lg:px-4 items-center justify-between">
          <div className="logo">
            <Link href="/">
              <Image
                src={Logo}
                alt="Ninja IT"
                width={200}
                height={0}
                priority
                className="w-32 lg:w-48 h-auto "
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          {!isMobile && (
            <nav className="menu-items">
              <ul className="flex gap-8">
                {menuItems.map((item) => (
                  <li key={item.label} style={{ fontWeight: "bold" }}>
                    {item.label}
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div className="actions">
            <Stack spacing={2} direction="row">
              {!isMobile && (
                <Button variant="text" sx={{ fontWeight: "bold" }}>
                  Login
                </Button>
              )}
              {!isMobile && <Button variant="contained">Contact Us</Button>}

              {isMobile && (
                <IconButton
                  color="inherit"
                  aria-label="menu"
                  edge="start"
                  onClick={() => setDrawerOpen(true)}
                >
                  <Menu />
                </IconButton>
              )}
            </Stack>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "black",
            color: "white",
            borderLeft: "2px solid rgba(255, 255, 255, 0.20)",
          },
        }}
      >
        <Box sx={{ width: 280 }}>
          <List>
            <Close
              className="flex justify-end m-4 cursor-pointer"
              onClick={() => setDrawerOpen(false)}
            />
            {menuItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}

            <ListItem disablePadding>
              <ListItemButton>
                <Button variant="text" sx={{ fontWeight: "bold" }}>
                  Login
                </Button>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <Button variant="contained">Contact Us</Button>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </header>
  );
};

export default Header;
