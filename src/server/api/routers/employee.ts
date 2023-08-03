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

  getEmployees: protectedProcedure
    // .input(
    //   z.object({
    //     limit: z.number().optional(),
    //   })
    // )
    .query(async ({ ctx }) => {
      //query comes from trpc/react query
      //notice return
      return await ctx.prisma.employee.findMany({
        //TODO: maybe change the default orderBy (maybe by name but u gotta parse last names on the frontend before passing it to the back i think)
        // take: limit + 1, //take is a prisma attr from this object that is = to LIMIT keyword in SQL
        orderBy: { userRole: "desc" },
      });
    }),
});
