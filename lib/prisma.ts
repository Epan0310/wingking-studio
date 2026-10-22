import { PrismaClient } from "@prisma/client";

// Membuat objek global untuk menyimpan instance Prisma.
// Hal ini mencegah error "too many connections" saat Next.js melakukan Hot Reload di mode development.
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"], // Menampilkan log query SQL di terminal untuk mempermudah debugging
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
