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
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
type Props = {
  id: string;
  title: string;
  description: string;
  image: string;
  servings: number;
};

export default function RecipeCard({ id, title, description, image,servings }: Props) {
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
      <CardFooter>
        <Button
          as={NextLink}
          href={`/recipes/${id}`}
          colorScheme="orange"
          variant="solid"
        >
          View Recipe
        </Button>
      </CardFooter>
    </Card>
  );
}
