import { AddIcon } from "@chakra-ui/icons";
import {
  Divider,
  Flex,
  Grid,
  Heading,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import type { Recipe } from "@prisma/client";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import CreateRecipeModal from "../components/CreateRecipeModal";
import RecipeCard from "../components/RecipeCard";
import { api } from "../utils/api";

const Home: NextPage = () => {
  const recipes = api.recipes.getAllRecipes;
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { data: session } = useSession();
  const isUserRecipe = (recipe: Recipe) => recipe.authorId === session?.user.id;
  return (
    <>
      <Flex justifyContent={"space-between"}>
        <Heading my={"8"}>Your Recipes</Heading>
        <IconButton
          aria-label="New Recipe"
          icon={<AddIcon />}
          onClick={onOpen}
          my={"auto"}
          visibility={session ? "visible" : "hidden"}
        />
      </Flex>
      <Grid
        justifyItems={"center"}
        templateColumns={{
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
        }}
        gap={4}
      >
        {recipes
          ?.useQuery()
          .data?.filter((recipe) => isUserRecipe(recipe))
          .map(({ id, title, description, servings }) => (
            <RecipeCard
              key={id}
              title={title}
              image={
                "https://via.placeholder.com/300/ffc22b?text=Placeholder+Thumbnail"
              }
              description={description}
              id={id}
              servings={servings}
            />
          ))}
      </Grid>
      <Flex>
        <Text
          mx={"auto"}
          fontSize={"4xl"}
          textAlign={"center"}
          fontWeight={"bold"}
          color={"gray"}
          visibility={!recipes ? "visible" : "hidden"}
        >
          {!session
            ? "You must be logged into view your recipes."
            : "You have no recipes yet. Click the button above to create one."}
        </Text>
      </Flex>
      {/* <Button mx={"auto"} my={"8"} onClick={onOpen}>New Recipe</Button> */}
      <CreateRecipeModal isOpen={isOpen} onClose={onClose} />
      <Divider mt={"8"} />
      <Heading my={"8"}>Community Recipes</Heading>
      <Grid
        justifyItems={"center"}
        templateColumns={{
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
        }}
        gap={4}
      >
        {recipes
          .useQuery()
          .data?.filter((recipe) => !isUserRecipe(recipe))
          .map(({ id, title, description, servings }) => (
            <RecipeCard
              key={id}
              title={title}
              image={
                "https://via.placeholder.com/300/ffc22b?text=Placeholder+Thumbnail"
              }
              description={description}
              id={id}
              servings={servings}
            />
          ))}
      </Grid>
    </>
  );
};

export default Home;
