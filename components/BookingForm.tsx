"use client";

import { useState } from "react";
import { createBooking } from "@/app/actions/booking";

// Tipe data untuk daftar layanan yang diterima dari server
interface Service {
  id: string;
  name: string;
  pricePerHour: number;
}

export default function BookingForm({ services }: { services: Service[] }) {
  // State untuk menyimpan data yang diisi pelanggan di form
  const [formData, setFormData] = useState({
    customerName: "",
    customerPhone: "",
    serviceId: services[0]?.id || "",
    date: "",
    startTime: "10:00",
    durationHours: 2,
  });

  // State untuk indikator loading dan pesan status
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  // Fungsi yang dipanggil saat tombol Submit ditekan
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // Mengirim data form ke fungsi server action createBooking
    const res = await createBooking(formData);

    if (res.success) {
      setMessage({
        type: "success",
        text: "🔥 Booking berhasil dikirim! Tim Wingking Studio akan mengonfirmasi via WhatsApp.",
      });
      // Reset isian form setelah berhasil
      setFormData({
        customerName: "",
        customerPhone: "",
        serviceId: services[0]?.id || "",
        date: "",
        startTime: "10:00",
        durationHours: 2,
      });
    } else {
      setMessage({
        type: "error",
        text: res.error || "Terjadi kesalahan saat mengirim booking.",
      });
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 bg-zinc-900 border border-zinc-800 p-6 md:p-8 rounded-2xl"
    >
      <h3 className="text-xl font-black uppercase tracking-wider text-amber-400 border-b border-zinc-800 pb-3">
        Form Reservasi Jadwal
      </h3>

      {/* Menampilkan pesan respon (sukses / error) */}
      {message && (
        <div
          className={`p-4 rounded-lg text-sm font-semibold ${
            message.type === "success"
              ? "bg-emerald-950/80 border border-emerald-500/50 text-emerald-300"
              : "bg-rose-950/80 border border-rose-500/50 text-rose-300"
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Input Nama Pemesan */}
      <div>
        <label className="block text-xs uppercase tracking-widest text-zinc-400 font-bold mb-2">
          Nama Lengkap / Nama Band
        </label>
        <input
          type="text"
          required
          placeholder="Contoh: Budi (The Rockers)"
          value={formData.customerName}
          onChange={(e) =>
            setFormData({ ...formData, customerName: e.target.value })
          }
          className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400 transition"
        />
      </div>

      {/* Input Nomor WhatsApp */}
      <div>
        <label className="block text-xs uppercase tracking-widest text-zinc-400 font-bold mb-2">
          Nomor WhatsApp
        </label>
        <input
          type="tel"
          required
          placeholder="Contoh: 08123456789"
          value={formData.customerPhone}
          onChange={(e) =>
            setFormData({ ...formData, customerPhone: e.target.value })
          }
          className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400 transition"
        />
      </div>

      {/* Dropdown Pilihan Paket Layanan */}
      <div>
        <label className="block text-xs uppercase tracking-widest text-zinc-400 font-bold mb-2">
          Pilih Paket Studio
        </label>
        <select
          value={formData.serviceId}
          onChange={(e) =>
            setFormData({ ...formData, serviceId: e.target.value })
          }
          className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400 transition"
        >
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name} — Rp {service.pricePerHour.toLocaleString("id-ID")}
              /jam
            </option>
          ))}
        </select>
      </div>

      {/* Tanggal & Jam Mulai */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-widest text-zinc-400 font-bold mb-2">
            Tanggal
          </label>
          <input
            type="date"
            required
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400 transition"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-zinc-400 font-bold mb-2">
            Jam Mulai
          </label>
          <input
            type="time"
            required
            value={formData.startTime}
            onChange={(e) =>
              setFormData({ ...formData, startTime: e.target.value })
            }
            className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400 transition"
          />
        </div>
      </div>

      {/* Durasi Jam */}
      <div>
        <label className="block text-xs uppercase tracking-widest text-zinc-400 font-bold mb-2">
          Durasi (Jam)
        </label>
        <input
          type="number"
          min="1"
          max="12"
          required
          value={formData.durationHours}
          onChange={(e) =>
            setFormData({ ...formData, durationHours: Number(e.target.value) })
          }
          className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400 transition"
        />
      </div>

      {/* Tombol Kirim Reservasi */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-amber-400 hover:bg-amber-300 text-zinc-950 font-black uppercase tracking-wider py-4 rounded-lg transition transform active:scale-95 disabled:opacity-50 mt-2"
      >
        {loading ? "Memproses..." : "Kirim Reservasi Sekarang"}
      </button>
    </form>
  );
}
