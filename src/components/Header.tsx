import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import {
  Box,
  Button,
  ButtonGroup,
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
          <Heading as={NextLink} href={'/'} size={"lg"} fontWeight={"normal"}>
            Recipe App
          </Heading>
            <ButtonGroup ml={'auto'} spacing="3">
              <IconButton
                aria-label="Toggle Theme"
                onClick={toggleColorMode}
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              />
              <Button colorScheme={"orange"}>Log In</Button>
              <Button colorScheme={"orange"} variant={"outline"}>
                Sign Up
              </Button>
            </ButtonGroup>
        </Flex>
      </Box>
    </>
  );
}
