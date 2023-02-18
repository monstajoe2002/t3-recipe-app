import { Flex } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Flex mx={"auto"} p={8}>
        <Header />
        {children}
      </Flex>
    </>
  );
}
