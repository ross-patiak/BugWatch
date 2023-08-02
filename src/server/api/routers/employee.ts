import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const employeeRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string(),
        userRole: z.string(),
        image: z.string(),
      })
    )
    .mutation(async ({ input: { name, email, userRole, image }, ctx }) => {
      const employee = await ctx.prisma.employee.create({
        data: { name, email, image, userRole },
      });

      return employee;
    }),
});
