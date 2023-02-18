import { Container } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Container maxW={"container.xl"} p={6}>
        <Header />
        {children}
      </Container>
    </>
  );
}
