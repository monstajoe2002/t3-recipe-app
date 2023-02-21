import { Divider, Grid, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import RecipeCard from "../components/RecipeCard";
import { api } from "../utils/api";

const Home: NextPage = () => {
  const recipes = api.recipes.getAllRecipes;
  return (
    <>

      <Heading my={"8"}>Your Recipes</Heading>
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
          .data?.map(({ id, title, description }) => (
            <RecipeCard
              key={id}
              title={title}
              image={
                "https://via.placeholder.com/300/ffc22b?text=Placeholder+Thumbnail"
              }
              description={description}
              id={id}
            />
          ))}
      </Grid>
    </>
  );
};

export default Home;
