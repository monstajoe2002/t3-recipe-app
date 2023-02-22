import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import React from "react";
import { BsGoogle } from "react-icons/bs";
type Props = {
  isOpen: boolean;
  onClose: () => void;
};
export default function AuthModal({ isOpen, onClose }: Props) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create An Account</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex justifyContent={"center"} direction={"column"} my={8} gap={8}>
              <Button
                leftIcon={<BsGoogle />}
                colorScheme={"red"}
                onClick={}
              >
                Sign up with Google
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
