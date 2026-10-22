import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Memulai proses seeding data layanan...");

  // Menghapus data layanan lama agar tidak terjadi duplikasi saat script dijalankan ulang
  await prisma.service.deleteMany();

  // Menambahkan daftar layanan resmi Wingking Studio
  await prisma.service.createMany({
    data: [
      {
        name: "Studio Rehearsal (Regular)",
        pricePerHour: 75000, // Harga per jam (Rp)
      },
      {
        name: "Recording Session",
        pricePerHour: 150000,
      },
      {
        name: "Mixing & Mastering",
        pricePerHour: 500000,
      },
    ],
  });

  console.log("✅ Data layanan berhasil ditambahkan ke database Supabase!");
}

main()
  .catch((e) => {
    console.error("❌ Terjadi kesalahan saat seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    // Memutuskan koneksi database setelah selesai
    await prisma.$disconnect();
  });
