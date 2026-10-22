import { getServices } from "@/app/actions/booking";
import BookingForm from "@/components/BookingForm";

export default async function Home() {
  // Mengambil data paket layanan langsung dari database Supabase
  const response = await getServices();
  const services = response.data || [];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-amber-400 selection:text-zinc-950">
      {/* Header / Navigation Bar */}
      <header className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <div className="font-black text-2xl tracking-tighter text-amber-400">
          WINGKING<span className="text-white">STUDIO</span>
        </div>
        <a
          href="/admin"
          className="text-xs uppercase font-bold tracking-widest text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 px-3 py-1.5 rounded-md transition"
        >
          Admin Portal →
        </a>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <div className="inline-block bg-amber-400/10 border border-amber-400/30 text-amber-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
          @w.hubstudio — Rehearsal & Recording
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-tight text-white">
          Latihan & Recording dengan{" "}
          <span className="text-amber-400">Gear Profesional</span>
        </h1>
        <p className="mt-3 text-zinc-400 text-base md:text-lg max-w-2xl">
          Ruang studio akustik presisi di Purwokerto. Cocok untuk rehearsal
          band, live tracking, hingga mixing & mastering karya musikmu.
        </p>
      </section>

      {/* Main Section: Daftar Paket & Form Booking */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Kolom Kiri: Daftar Paket Layanan */}
        <div className="lg:col-span-5 space-y-4">
          <h2 className="text-lg font-bold uppercase tracking-wider text-white border-b border-zinc-800 pb-3">
            Daftar Paket & Tarif
          </h2>
          <div className="space-y-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="p-5 bg-zinc-900/60 border border-zinc-800 rounded-xl hover:border-amber-400/40 transition"
              >
                <h3 className="font-bold text-lg text-white">{service.name}</h3>
                <p className="mt-1 text-2xl font-black text-amber-400">
                  Rp {service.pricePerHour.toLocaleString("id-ID")}
                  <span className="text-xs font-normal text-zinc-400">
                    {" "}
                    / jam
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom Kanan: Form Reservasi */}
        <div className="lg:col-span-7">
          <BookingForm services={services} />
        </div>
      </section>
    </main>
  );
}
