import {
  Heading,
  Text,
  Image,
  UnorderedList,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { api } from "../../utils/api";

export default function Recipe() {
  const router = useRouter();
  const { id } = router.query;
  const recipe = api.recipes.getbyId.useQuery(id as string).data;

  return (
    <>
      <Image
        my={"8"}
        src="https://via.placeholder.com/500/ffc22b?text=Placeholder+Image"
        alt={recipe?.title}
        mx={"auto"}
      />
      <Heading my={"8"}>{recipe?.title}</Heading>
      <Text fontSize={"2xl"}>{recipe?.description}</Text>
      <Text mt="4" textColor={'orange'} fontWeight={'bold'} fontSize={"xl"}>
        {recipe?.servings} servings
      </Text>
      <Text mt="4" textColor={'gray'} fontWeight={'bold'} fontSize={"lg"}>
        Tags: {recipe?.tags.map((tag) => tag).join(", ")}
      </Text>
      <Heading as={"h2"} size={"lg"} my={"8"}>
        Ingredients
      </Heading>
      <UnorderedList>
        {recipe?.ingredients.map((ingredient, id) => (
          <ListItem key={id}>{ingredient}</ListItem>
        ))}
      </UnorderedList>
      <Heading as={"h2"} size={"lg"} my={"8"}>
        Instructions
      </Heading>
      <OrderedList>
        {recipe?.instructions.map((instruction, id) => (      
          <ListItem key={id}>{instruction}</ListItem>
        ))}
      </OrderedList>
    </>
  );
}
