import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const ticketRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        content: z.string(),
        employeeId: z.string(),
      })
    )
    .mutation(async ({ input: { title, content, employeeId }, ctx }) => {
      const ticket = await ctx.prisma.ticket.create({
        data: { title, content, employeeId },
      });

      return ticket;
    }),
});
