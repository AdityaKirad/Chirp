import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

const DEV_ENV = process.env.NODE_ENV === "development";

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: DEV_ENV ? ["query", "error", "warn"] : ["error"],
  });

if (DEV_ENV) globalForPrisma.prisma = db;
