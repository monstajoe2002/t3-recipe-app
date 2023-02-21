import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  getById: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.user.findFirst({
      where: {
        id: input,
      },
    });
  }),
  deleteUser: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.user.delete({
      where: {
        id: input,
      },
    });
  }),
  login: publicProcedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findFirst({
        where: {
          id: ctx.session?.user.id,
          email: input.email,
        },
      });

      if (!user) {
        throw new Error("User not found");
      }
      return user;
    }),
  createUser: publicProcedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.create({
        data: {
          email: input.email,
        },
      });
      return user;
    }),
});
