import {
  Button,
  FormControl,
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
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { api } from "../utils/api";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CreateRecipeModal({ isOpen, onClose }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [servings, setServings] = useState(0);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [instructions, setInstructions] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [error, setError] = useState(false);
  const { data: session } = useSession();
  const authorId = session?.user.id as string;
  const { mutate } = api.recipes.createRecipe.useMutation();

  const handleCreateRecipe = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      !title ||
      !description ||
      !servings ||
      !ingredients ||
      !instructions ||
      !tags
    ) {
      setError(true);
      return;
    }
    setError(false);
    mutate({
      title,
      description,
      servings,
      ingredients,
      instructions,
      tags,
      authorId,
    });
    onClose();
    window.location.reload();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New Recipe</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isRequired isInvalid={error}>
            <Stack mb={4}>
              <FormLabel>Title</FormLabel>
              <Input
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <FormLabel>Description</FormLabel>
              <Input
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
              />
              <FormLabel>Servings</FormLabel>
              <NumberInput>
                <NumberInputField
                  onChange={(e) => setServings(parseInt(e.target.value))}
                />
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
              <FormLabel>Tags (seperated by semicolons)</FormLabel>
              <Input
                placeholder="Tags"
                onChange={(e) => setTags([...e.target.value.split(";")])}
              />
            </Stack>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleCreateRecipe}>
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
