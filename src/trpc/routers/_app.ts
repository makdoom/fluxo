import prisma from "@/lib/db";

import { baseProcedure, createTRPCRouter, protectedProcedure } from "../init";
import { inngest } from "@/inngest/client";

export const appRouter = createTRPCRouter({
  testai: baseProcedure.mutation(async () => {
    await inngest.send({ name: "execute/ai" });
  }),
  getUsers: protectedProcedure.query(({ ctx }) => {
    return prisma.user.findMany({
      where: {
        id: ctx.auth.user.id,
      },
    });
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
