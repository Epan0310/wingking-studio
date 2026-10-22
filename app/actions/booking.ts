"use server";

// Mengimpor koneksi Prisma Client
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// 1. Fungsi untuk mengambil seluruh daftar layanan dari database
export async function getServices() {
  try {
    const services = await prisma.service.findMany({
      orderBy: { createdAt: "asc" }, // Urutkan berdasarkan waktu buat
    });
    return { success: true, data: services };
  } catch (error) {
    console.error("Error fetching services:", error);
    return { success: false, error: "Gagal mengambil data layanan" };
  }
}

// 2. Fungsi untuk menyimpan data booking baru yang dikirim dari form pelanggan
export async function createBooking(formData: {
  customerName: string;
  customerPhone: string;
  serviceId: string;
  date: string;
  startTime: string;
  durationHours: number;
}) {
  try {
    const newBooking = await prisma.booking.create({
      data: {
        customerName: formData.customerName,
        customerPhone: formData.customerPhone,
        serviceId: formData.serviceId,
        date: new Date(formData.date), // Mengubah string tanggal menjadi format Date
        startTime: formData.startTime,
        durationHours: Number(formData.durationHours),
        status: "PENDING", // Status default saat booking baru masuk
      },
    });

    // Memperbarui cache halaman utama agar data langsung ter-refresh
    revalidatePath("/");
    return { success: true, data: newBooking };
  } catch (error) {
    console.error("Error creating booking:", error);
    return { success: false, error: "Gagal membuat booking" };
  }
}
