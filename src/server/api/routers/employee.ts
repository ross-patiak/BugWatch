import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

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

  getEmployee: protectedProcedure
    .input(z.object({ employeeId: z.string() }))
    .query(async ({ input: { employeeId }, ctx }) => {
      return await ctx.prisma.employee.findUnique({
        where: {
          id: employeeId,
        },
        include: {
          tickets: true,
        },
      });
    }),

  getEmployees: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.employee.findMany({
      //TODO: maybe change the default orderBy (maybe by name but u gotta parse last names on the frontend before passing it to the back i think)
      include: {
        tickets: true,
      },
      orderBy: { userRole: "desc" },
    });
  }),
});
