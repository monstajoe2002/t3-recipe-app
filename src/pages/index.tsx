import {
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import CreateRecipeModal from "../components/CreateRecipeModal";
import RecipeCard from "../components/RecipeCard";
import { api } from "../utils/api";

const Home: NextPage = () => {
  const recipes = api.recipes.getAllRecipes;
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <>
      <Heading my={"8"}>Your Recipes</Heading>
      <Flex>
        <Text
          mx={"auto"}
          fontSize={"4xl"}
          textAlign={"center"}
          fontWeight={"bold"}
          color={"gray"}
        >
          You must be logged in
          <br /> to view your recipes.
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
          .data?.map(({ id, title, description, servings }) => (
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
