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
});
