import React from "react";
import Header from "../components/header/page";

export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
}
