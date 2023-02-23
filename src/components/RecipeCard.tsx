import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  Divider,
  Heading,
  Stack,
  useToast,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { api } from "../utils/api";
import { DeleteIcon } from "@chakra-ui/icons";
import { useSession } from "next-auth/react";
import DeleteRecipeModal from "./DeleteRecipeModal";
type Props = {
  id: string;
  title: string;
  description: string;
  image: string;
  servings: number;
  authorId: string;
};

export default function RecipeCard({
  id,
  title,
  description,
  image,
  servings,
  authorId,
}: Props) {
  const { mutate: deleteRecipe } = api.recipes.deleteRecipe.useMutation();
  const { data: session } = useSession();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isUserRecipe = authorId === session?.user.id;

  const handleDelete = () => {
    toast({
      title: "Recipe deleted.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    deleteRecipe(id);
    onClose();
    window.location.reload();
  };
  return (
    <Card w="sm">
      <CardBody>
        <Image
          src={image}
          alt={title}
          borderRadius="lg"
          mx={"auto"}
          boxSize={320}
          objectFit="cover"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
          <Text color="orange.600" fontSize="2xl">
            Servings: {servings}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter justifyContent={"space-between"}>
        <Button
          as={NextLink}
          href={`/recipes/${id}`}
          colorScheme="orange"
          variant="solid"
        >
          View Recipe
        </Button>
        <IconButton
          aria-label="Delete Recipe"
          colorScheme={"red"}
          icon={<DeleteIcon />}
          onClick={onOpen}
          visibility={isUserRecipe ? "visible" : "hidden"}
        />
        <DeleteRecipeModal
          isOpen={isOpen}
          onClose={onClose}
          handleDelete={handleDelete}
        />
      </CardFooter>
    </Card>
  );
}
