import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={2}>
        <Flex>
          <Heading size={"lg"} fontWeight={"normal"}>
            Recipe App
          </Heading>
          <Flex ml={"auto"} fontWeight={"bold"}>
            <IconButton
              mr={4}
              aria-label="Toggle Theme"
              onClick={toggleColorMode}
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            />
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
