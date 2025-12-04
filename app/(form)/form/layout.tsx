import React from "react";

export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <React.Fragment>{children}</React.Fragment>;
}
