import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const ticketRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        content: z.string(),
      })
    )
    .mutation(async ({ input: { title, content }, ctx }) => {
      const ticket = await ctx.prisma.ticket.create({
        data: { title, content, userId: ctx.session.user.id },
      });

      return ticket;
    }),
});
