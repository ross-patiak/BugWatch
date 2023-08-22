import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const ticketRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        content: z.string(),
        employeeId: z.string(),
        status: z.string(),
        priority: z.string(),
        category: z.string(),
      })
    )
    .mutation(
      async ({
        input: { title, content, employeeId, status, priority, category },
        ctx,
      }) => {
        const ticket = await ctx.prisma.ticket.create({
          data: { title, content, employeeId, status, priority, category },
        });

        return ticket;
      }
    ),

  getTickets: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.ticket.findMany({
      include: {
        employee: {
          select: {
            name: true,
            image: true,
          },
        },
      },
      orderBy: { title: "desc" },
    });
  }),

  getTicket: protectedProcedure
    .input(z.object({ ticketId: z.string() }))
    .query(async ({ input: { ticketId }, ctx }) => {
      return await ctx.prisma.ticket.findUnique({
        where: {
          id: ticketId,
        },
      });
    }),

  getTicketsByStatus: protectedProcedure
    .input(
      z.object({
        status: z.string(),
      })
    )
    .query(async ({ input: { status }, ctx }) => {
      return await ctx.prisma.ticket.findMany({
        where: {
          status: status,
        },
      });
    }),

  getOpenTicketsGroupedByPriority: protectedProcedure.query(async ({ ctx }) => {
    const res = await ctx.prisma.ticket.groupBy({
      by: ["priority"],
      where: {
        status: {
          notIn: ["closed"],
        },
      },
      _count: { priority: true },
    });

    return res;
  }),

  getOpenTicketsGroupedByCategory: protectedProcedure.query(async ({ ctx }) => {
    const res = await ctx.prisma.ticket.groupBy({
      by: ["category"],
      where: {
        status: {
          notIn: ["closed"],
        },
      },
      _count: { category: true },
    });

    return res;
  }),

  // getTicketsClosedToday: protectedProcedure
  //   .input(
  //     z.object({
  //       updatedAt: z.date(),
  //       status: z.string(),
  //     })
  //   )
  //   .query( async ({input: {updatedAt, status}, ctx}) => {
  //     return await ctx.prisma.ticket.count({
  //       where:{
  //         updatedAt: {
  //           equals: new Date().getDate().toLocaleString()
  //         },
  //       },
  //     });
  //   }),

  getUnassignedTickets: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.ticket.findMany({
      where: {
        employeeId: "",
      },
    });
  }),
});
