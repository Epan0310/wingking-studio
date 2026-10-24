"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { adminReady, checkAdminPassword, closeAdminSession, isAdmin, openAdminSession } from "@/lib/admin-auth";
import { loginLimit } from "@/lib/login-limiter";

export async function loginAdmin(formData: FormData) {
  const ip = (await headers()).get("x-real-ip") || (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const key = `login:${ip}`;
  const pass = formData.get("password");
  const password = typeof pass === "string" ? pass : "";
  if (!adminReady() || loginLimit(key) || !checkAdminPassword(password)) {
    redirect("/admin?error=login");
  }
  loginLimit(key, true);
  await openAdminSession();
  redirect("/admin");
}

export async function logoutAdmin() {
  await closeAdminSession();
  redirect("/admin");
}

export async function setBookingStatus(formData: FormData) {
  if (!await isAdmin()) redirect("/admin?error=login");
  const bookingId = formData.get("bookingId");
  const status = formData.get("status");
  if (typeof bookingId !== "string" || !/^[a-z0-9]{10,40}$/i.test(bookingId)) return;
  if (status !== "CONFIRMED" && status !== "CANCELLED" && status !== "PENDING") return;
  await prisma.booking.update({ where: { id: bookingId }, data: { status } });
  revalidatePath("/admin");
}

export async function updateServicePrice(formData: FormData) {
  if (!await isAdmin()) redirect("/admin?error=login");
  const serviceId = formData.get("serviceId");
  const price = Number(formData.get("price"));
  if (typeof serviceId !== "string" || !/^[a-z0-9]{10,40}$/i.test(serviceId)) return;
  if (!Number.isInteger(price) || price < 1000 || price > 10_000_000) return;
  await prisma.service.update({ where: { id: serviceId }, data: { pricePerHour: price } });
  revalidatePath("/");
  revalidatePath("/admin");
}
