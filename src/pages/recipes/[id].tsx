import { Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { api } from "../../utils/api";

export default function Recipe() {
  const router = useRouter();
  const { id } = router.query;
  const recipe = api.recipes.getbyId.useQuery(id as string).data?.title;

    return (
      <>
        <Heading my={"8"}>{recipe}</Heading>
      </>
    );
}
