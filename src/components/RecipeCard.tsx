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
  title: string;
  description: string;
  image?: string;
  ingredients: string[];
  author?: string;
};

export default function RecipeCard({
  title,
  description,
  image,
  ingredients,
  author,
}: Props) {
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
          <Text color="gray.500" fontSize="sm">
            Ingredients: {ingredients}
          </Text>
          <Text color="orange.600" fontSize="2xl">
            {/* By: {author} */}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button as={NextLink} href={"/"} colorScheme="orange" variant="solid">
          View More
        </Button>
      </CardFooter>
    </Card>
  );
}
