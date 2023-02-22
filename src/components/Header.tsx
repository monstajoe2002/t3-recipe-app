import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const {data:session}=useSession();
  return (
    <>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={2}>
        <Flex>
          <Heading as={NextLink} href={"/"} size={"lg"} fontWeight={"normal"}>
            Recipe App
          </Heading>
          <ButtonGroup ml={"auto"} spacing="3">
            {session ? (
              <>
                <Text my={"auto"} fontWeight={"bold"}>
                  {session.user.name}
                </Text>
                <Button colorScheme={"orange"} onClick={() => signOut()}>
                  Sign Out
                </Button>
              </>
            ) : (
              <Button colorScheme={"orange"} onClick={() => signIn()}>
                Log In
              </Button>
            )}
            <IconButton
              aria-label="Toggle Theme"
              onClick={toggleColorMode}
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            />
          </ButtonGroup>
        </Flex>
      </Box>
    </>
  );
}
