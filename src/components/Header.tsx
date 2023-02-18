import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={2}>
        <Flex>
          <Heading size={"lg"} fontWeight={"normal"}>
            Recipe App
          </Heading>
          <Flex ml={"auto"} fontWeight={'bold'}>
            <Button colorScheme={"orange"}>Login</Button>
            <Button colorScheme={"orange"} ml={2} variant={"ghost"}>
              Sign Up
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
