import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
} from "@chakra-ui/react";
import React from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CreateRecipeModal({ isOpen, onClose }: Props) {
  const [ingredients, setIngredients] = React.useState<string[]>([]);
  const [instructions, setInstructions] = React.useState<string[]>([]);
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New Recipe</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isRequired>
            <Stack mb={4}>
              <FormLabel>Title</FormLabel>
              <Input placeholder="Title" />
              <FormLabel>Description</FormLabel>
              <Input placeholder="Description" />
              <FormLabel>Servings</FormLabel>
              <NumberInput>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormLabel>Ingredients (seperated by commas)</FormLabel>
              <Input
                placeholder="Ingredients"
                onChange={(e) => setIngredients([...e.target.value.split(",")])}
              />
              <FormLabel>Instructions (seperated by semicolons)</FormLabel>
              <Input
                placeholder="Instructions"
                onChange={(e) =>
                  setInstructions([...e.target.value.split(";")])
                }
              />
            </Stack>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => console.dir({ ingredients, instructions })}
          >
            Create
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
