import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const recipeRouter = createTRPCRouter({
  getbyId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.recipe.findFirst({
      where: {
        id: input,
      },
    });
  }),
  getbyUserId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.user.findFirst({
      where: {
        id: input,
      },
      include: {
        recipes: true,
      },
    });
  }),
  getAllRecipes: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.recipe.findMany();
  }),
  createRecipe: publicProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        servings: z.number(),
        ingredients: z.array(z.string()),
        instructions: z.array(z.string()),
        tags: z.array(z.string()),
        authorId: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.recipe.create({
        data: {
          title: input.title,
          description: input.description,
          servings: input.servings,
          ingredients: input.ingredients,
          instructions: input.instructions,
          tags: input.tags,
          author: {
            connect: {
              id: input.authorId,
            },
          },
        },
      });
    }),
  deleteRecipe: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.recipe.delete({
      where: {
        id: input,
      },
    });
  }),
});
