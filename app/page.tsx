import { getServices } from "@/app/actions/booking";
import BookingForm from "@/components/BookingForm";

export default async function Home() {
  // Mengambil data layanan aktif dari database Supabase
  const response = await getServices();
  const services = response.data || [];

  return (
    <div className="w-full min-h-screen bg-[#131315] text-[#e5e1e4] font-sans antialiased">
      {/* =========================================================================
          1. HEADER NAVIGASI FIXED
         ========================================================================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0e0e10]/95 backdrop-blur-md border-b border-[#353437]/60">
        <div className="h-20 w-full px-6 lg:px-16 flex items-center justify-between">
          <a
            className="group flex items-center gap-3 focus:outline-none"
            href="#"
          >
            <div className="w-3.5 h-3.5 bg-[#ffb86d] rounded-sm transform rotate-45 group-hover:rotate-180 transition-transform duration-500" />
            <div className="flex flex-col">
              <span className="font-mono text-xs uppercase text-[#e5e1e4] tracking-widest font-semibold group-hover:text-[#ffb86d] transition-colors">
                WINGKING STUDIO
              </span>
              <span className="font-mono text-[9px] uppercase text-[#a08d7e] tracking-wider">
                Acoustic Facility // @w.hubstudio
              </span>
            </div>
          </a>

          <nav className="hidden xl:flex items-center gap-10 font-mono text-xs uppercase">
            <a
              href="#about"
              className="text-[#d7c3b1] hover:text-[#ffb86d] transition-all py-1"
            >
              Studio
            </a>
            <a
              href="#capabilities"
              className="text-[#d7c3b1] hover:text-[#ffb86d] transition-all py-1"
            >
              Services
            </a>
            <a
              href="#spaces"
              className="text-[#d7c3b1] hover:text-[#ffb86d] transition-all py-1"
            >
              Spaces
            </a>
            <a
              href="#community"
              className="text-[#d7c3b1] hover:text-[#ffb86d] transition-all py-1"
            >
              Community
            </a>
            <a
              href="#booking-console"
              className="text-[#d7c3b1] hover:text-[#ffb86d] transition-all py-1"
            >
              Booking
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/w.hubstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center font-mono text-[10px] text-[#a08d7e] hover:text-[#ffb86d] transition-colors uppercase tracking-wider"
            >
              IG // @w.hubstudio
            </a>
            <div className="h-4 w-px bg-[#353437] hidden md:block"></div>
            <a
              href="/admin"
              className="inline-flex items-center gap-2 bg-[#ffb86d] text-[#492900] font-mono text-xs uppercase tracking-wider px-4 py-2 hover:bg-[#e59840] transition-colors font-semibold"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#492900]"></span>
              Admin Portal →
            </a>
          </div>
        </div>
      </header>

      <main className="w-full pt-20 bg-[#131315] flex-1">
        {/* =========================================================================
            2. TOP RUNNING TELEMETRY TICKER
           ========================================================================= */}
        <div className="w-full bg-[#0e0e10] px-6 lg:px-16 py-2 flex items-center justify-between text-[#c7c7c3] border-b border-[#353437]/40">
          <div className="flex items-center gap-4 overflow-hidden whitespace-nowrap">
            <div className="flex items-center gap-2 text-[#ffb86d] shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#ffb86d] animate-pulse"></span>
              <span className="font-mono text-[10px] uppercase tracking-wider font-semibold">
                ON AIR DISPATCH
              </span>
            </div>
            <div className="h-3 w-px bg-[#353437] shrink-0"></div>
            <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-wide overflow-x-auto no-scrollbar">
              <span>[STUDIO A] TRACKING DRUMS // 96kHz 24-BIT</span>
              <span className="text-[#353437]">•</span>
              <span className="text-[#d7c3b1]">
                [STUDIO B] TUBE SUMMING & MIX REVISIONS
              </span>
              <span className="text-[#353437]">•</span>
              <span>[REHEARSAL BAY 01] READY FOR LOCKOUT</span>
              <span className="text-[#353437]">•</span>
              <span className="text-[#ffb86d]">
                [CONTROL ALPHA] MASTER TAPE BIAS CALIBRATED
              </span>
            </div>
          </div>
          <div className="hidden xl:flex items-center gap-4 shrink-0 text-[#a08d7e] font-mono text-[10px]">
            <span>TEMP: 21.4°C // RH: 42%</span>
            <span className="text-[#ffb86d]">BAROMETRIC: NOMINAL</span>
          </div>
        </div>

        {/* =========================================================================
            3. HERO SECTION (MAIN CONTROL CONSOLE & EDITORIAL TYPOGRAPHY)
           ========================================================================= */}
        <section className="relative w-full bg-[#0e0e10]">
          <div className="relative w-full h-[580px] lg:h-[680px] overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDptAJUL0MDaNlofnooeMZ_ffMEAtzF7DgwyHFlLOw_OaMxX5GIUfGeVPgQt9XDZN8AFQ8SNmSXfhhgNq3AdPF72Y4sEc7aC3v-X7M73-7agnoiF4wg9-KRounN05qdO9AGCZadcTAXs12l_EuhNb_TEs0iintSwWMJao6_ohiOiA94a4HTelMhsG0pAj3F-C6vriU2RHIpgAeH5uVRbpXozPaObuE640kU5W-zWoYByIvSandD6HaUZQ"
              alt="Wingking Studio Master Control Room Console"
              className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.08] transition-transform duration-1000 ease-out hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#131315] via-[#0e0e10]/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e10]/80 via-transparent to-[#0e0e10]/40"></div>

            {/* Live Floating Indicator */}
            <div className="absolute top-6 left-6 lg:left-16 flex items-center gap-2 bg-[#0e0e10]/90 px-3 py-1.5 backdrop-blur-md shadow-2xl border border-[#353437]/50">
              <span className="w-2 h-2 rounded-full bg-[#ffb86d] animate-ping"></span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#e5e1e4]">
                SYS. BAY-04: LIVE ROUTING
              </span>
              <span className="text-[#a08d7e] font-mono text-[10px]">
                | ACOUSTIC TREATED SPACE
              </span>
            </div>

            {/* Realtime VU Meter Overlay */}
            <div className="hidden md:flex absolute top-6 right-6 lg:right-16 items-center gap-2 bg-[#0e0e10]/90 px-3 py-1.5 backdrop-blur-md border border-[#353437]/50">
              <span className="font-mono text-[10px] text-[#a08d7e] uppercase mr-1">
                VU L/R
              </span>
              <div className="flex items-end gap-[2px] h-3">
                <div className="w-1 bg-[#ffb86d] h-full"></div>
                <div className="w-1 bg-[#ffb86d] h-5/6"></div>
                <div className="w-1 bg-[#ffb86d] h-4/6"></div>
                <div className="w-1 bg-[#e59840] h-3/6"></div>
                <div className="w-1 bg-[#353437] h-2/6"></div>
              </div>
              <div className="flex items-end gap-[2px] h-3 ml-2">
                <div className="w-1 bg-[#ffb86d] h-full"></div>
                <div className="w-1 bg-[#ffb86d] h-5/6"></div>
                <div className="w-1 bg-[#e59840] h-4/6"></div>
                <div className="w-1 bg-[#353437] h-2/6"></div>
              </div>
            </div>

            {/* Hero Text Content */}
            <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-16 pb-12">
              <div className="max-w-6xl">
                <div className="inline-flex items-center gap-2 bg-[#2a2a2c] px-3 py-1 mb-4 border border-[#353437]">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#ffb86d] font-semibold">
                    [ @W.HUBSTUDIO — ACOUSTIC ARCHITECTURE ]
                  </span>
                </div>
                <h1 className="font-serif text-5xl lg:text-8xl tracking-tight text-[#e5e1e4] uppercase max-w-4xl leading-[0.95]">
                  Your Sound. <br className="hidden sm:inline" />
                  Your Space.
                </h1>
                <p className="text-[#d7c3b1] text-base lg:text-xl max-w-2xl mt-4 font-light leading-relaxed">
                  Studio rekaman & latihan musik berstandar akustik presisi di
                  Purwokerto untuk merealisasikan karya musikmu dengan analog
                  weight yang autentik.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href="#booking-console"
                    className="inline-flex items-center gap-2 bg-[#ffb86d] text-[#492900] font-mono text-xs uppercase tracking-wider px-6 py-3.5 font-semibold hover:bg-[#e59840] transition-all shadow-xl"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#492900]"></span>
                    Book a Session
                  </a>
                  <a
                    href="#spaces"
                    className="inline-flex items-center gap-2 bg-[#2a2a2c]/80 hover:bg-[#353437] text-[#e5e1e4] font-mono text-xs uppercase tracking-wider px-6 py-3.5 backdrop-blur-md transition-colors border border-[#353437]"
                  >
                    Explore Studio Spaces
                    <span className="material-symbols-outlined text-[16px] text-[#ffb86d]">
                      arrow_downward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. MANIFESTO & TELEMETRY STATS
           ========================================================================= */}
        <section
          id="about"
          className="w-full bg-[#131315] py-20 px-6 lg:px-16 border-b border-[#353437]/60"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#ffb86d] font-semibold">
                    01 // MANIFESTO
                  </span>
                  <span className="h-px w-12 bg-[#353437]"></span>
                  <span className="font-mono text-[10px] uppercase text-[#a08d7e]">
                    Acoustic Momentum
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-5xl text-[#e5e1e4] leading-tight max-w-xl">
                  Dirancang untuk kemurnian akustik dan alur kerja kreatif tanpa
                  hambatan.
                </h2>
                <div className="space-y-4 mt-6 text-[#d7c3b1] text-sm leading-relaxed max-w-xl">
                  <p>
                    Di Wingking Studio (@w.hubstudio), kami memadukan ruang
                    berisolasikan tinggi dengan analog gear terpilih agar setiap
                    karakter vokal dan instrumen terekam secara utuh.
                  </p>
                  <p>
                    Baik sesi rehearsal band, live tracking drum, hingga mixing
                    & mastering, ruang studio kami dikalibrasi untuk
                    menghadirkan respon frekuensi yang seimbang dan atmosfer
                    yang menginspirasi.
                  </p>
                </div>
              </div>

              {/* Telemetry Counter Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-6 bg-[#1b1b1d] p-4 border border-[#353437]">
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-[#a08d7e] uppercase">
                    Acoustic Isolation
                  </span>
                  <span className="font-serif text-3xl text-[#ffb86d] mt-1">
                    38dB
                  </span>
                  <span className="font-mono text-[9px] text-[#b5b5b2]">
                    PNC-15 Isolation
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-[#a08d7e] uppercase">
                    Console Topology
                  </span>
                  <span className="font-serif text-3xl text-[#e5e1e4] mt-1">
                    32 Ch.
                  </span>
                  <span className="font-mono text-[9px] text-[#b5b5b2]">
                    Discrete Class-A
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-[#a08d7e] uppercase">
                    Sessions Tracked
                  </span>
                  <span className="font-serif text-3xl text-[#e5e1e4] mt-1">
                    1,500+
                  </span>
                  <span className="font-mono text-[9px] text-[#b5b5b2]">
                    Live & Rehearsal
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-[#a08d7e] uppercase">
                    Access Mode
                  </span>
                  <span className="font-serif text-3xl text-[#ffb86d] mt-1">
                    24 / 7
                  </span>
                  <span className="font-mono text-[9px] text-[#b5b5b2]">
                    By Reservation
                  </span>
                </div>
              </div>
            </div>

            {/* Action Photography */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="relative w-full aspect-[4/3] bg-[#1b1b1d] overflow-hidden shadow-2xl border border-[#353437]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAik7Pwgn9T5SqU2rXUlKg1AlYQxuQLDzJRGbU1DbOmqaN-FueKJo12nKMYoN2y6Gj2FH-jlLRhKw7JxJutRX8bjTssMfPg-HSPJFZiXD9MEDBViRpprLDISN0hv00r5CEIR4SMYrMtNcvdpp7__NMUBj9ylhXfruuKB93THGimQb5jejVJW6JY0IHlW4SYbSpdK33PuYqwsOAInEIZ9c020b6mkfTFc9c01Wz_yHGTYlpoeHdwwJtZXQ"
                  alt="Band Session Wingking Studio"
                  className="w-full h-full object-cover filter brightness-[0.88] hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#0e0e10]/90 px-3 py-1 backdrop-blur-md border border-[#353437]">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#ffb86d] font-semibold">
                    [ ROOM 01 // LIVE CAPTURE ]
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. SERVICES & CAPABILITIES
           ========================================================================= */}
        <section
          id="capabilities"
          className="w-full bg-[#1b1b1d] py-20 px-6 lg:px-16 border-b border-[#353437]/60"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#ffb86d] font-semibold">
                  02 // CAPABILITIES
                </span>
                <span className="h-px w-12 bg-[#353437]"></span>
                <span className="font-mono text-[10px] uppercase text-[#a08d7e]">
                  Engineered Production
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#e5e1e4]">
                Services & Technical Capabilities
              </h2>
            </div>
            <p className="text-xs text-[#d7c3b1] max-w-md">
              Layanan audio komprehensif mulai dari rehearsal studio, live
              tracking multi-mic, hingga mixing & mastering.
            </p>
          </div>

          {/* Cards Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#131315] p-8 border border-[#353437] flex flex-col justify-between relative group">
              <div>
                <div className="flex items-center justify-between pb-2 mb-4 border-b border-[#353437]">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#ffb86d] font-semibold">
                    [ SVC_01 // MULTI-TRACK RECORDING ]
                  </span>
                  <span className="font-mono text-[10px] uppercase text-[#a08d7e]">
                    Rates From Rp 150.000 / Jam
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-[#e5e1e4] mb-2">
                  Tracking & Analog Recording
                </h3>
                <p className="text-xs text-[#d7c3b1] leading-relaxed mb-6">
                  Sesi rekaman dengan keterasingan akustik maksimal untuk drum
                  kit, vokal jernih, dan instrumen elektrik tanpa bleeding.
                </p>
                <div className="space-y-1 font-mono text-[11px]">
                  <div className="flex items-center justify-between py-1 bg-[#0e0e10] px-3">
                    <span className="text-[#a08d7e] uppercase">Mic Locker</span>
                    <span className="text-[#e5e1e4]">
                      Large Condenser, Shure SM57/58, Drum Kits
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1 px-3">
                    <span className="text-[#a08d7e] uppercase">Monitoring</span>
                    <span className="text-[#e5e1e4]">
                      Calibrated Studio Monitors & Subwoofer
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-4 flex items-center justify-between">
                <a
                  href="#booking-console"
                  className="font-mono text-xs uppercase text-[#ffb86d] font-semibold flex items-center gap-1"
                >
                  Book Recording Session{" "}
                  <span class="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            <div className="bg-[#131315] p-8 border border-[#353437] flex flex-col justify-between relative group">
              <div>
                <div className="flex items-center justify-between pb-2 mb-4 border-b border-[#353437]">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#ffb86d] font-semibold">
                    [ SVC_02 // STUDIO REHEARSAL ]
                  </span>
                  <span className="font-mono text-[10px] uppercase text-[#a08d7e]">
                    Rates From Rp 75.000 / Jam
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-[#e5e1e4] mb-2">
                  Rehearsal & Pre-Production
                </h3>
                <p className="text-xs text-[#d7c3b1] leading-relaxed mb-6">
                  Ruang latihan band berdaya tinggi yang dilengkapi backline
                  amplifier bermutu dan pendingin ruangan terawat.
                </p>
                <div className="space-y-1 font-mono text-[11px]">
                  <div className="flex items-center justify-between py-1 bg-[#0e0e10] px-3">
                    <span className="text-[#a08d7e] uppercase">
                      Drum Backline
                    </span>
                    <span className="text-[#e5e1e4]">
                      Professional Acoustic Drumkit & Sabian Cymbals
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1 px-3">
                    <span className="text-[#a08d7e] uppercase">
                      Guitar/Bass Rigs
                    </span>
                    <span className="text-[#e5e1e4]">
                      High Gain Marshall / Orange / Fender Tube Amps
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-4 flex items-center justify-between">
                <a
                  href="#booking-console"
                  className="font-mono text-xs uppercase text-[#ffb86d] font-semibold flex items-center gap-1"
                >
                  Reserve Rehearsal Slot{" "}
                  <span class="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. ACOUSTIC SPACES BENTO GRID
           ========================================================================= */}
        <section
          id="spaces"
          className="w-full bg-[#131315] py-20 px-6 lg:px-16 border-b border-[#353437]/60"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#ffb86d] font-semibold">
                  03 // SPACES
                </span>
                <span className="h-px w-12 bg-[#353437]"></span>
                <span className="font-mono text-[10px] uppercase text-[#a08d7e]">
                  Architectural Plan
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#e5e1e4]">
                The Studio Spaces
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Space 1 */}
            <div className="bg-[#1b1b1d] p-4 border border-[#353437]">
              <div className="flex items-center justify-between text-[#a08d7e] font-mono text-[10px] uppercase mb-2">
                <span>[ BAY 01 ]</span>
                <span className="text-[#ffb86d]">LIVE ROOM A</span>
              </div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAik7Pwgn9T5SqU2rXUlKg1AlYQxuQLDzJRGbU1DbOmqaN-FueKJo12nKMYoN2y6Gj2FH-jlLRhKw7JxJutRX8bjTssMfPg-HSPJFZiXD9MEDBViRpprLDISN0hv00r5CEIR4SMYrMtNcvdpp7__NMUBj9ylhXfruuKB93THGimQb5jejVJW6JY0IHlW4SYbSpdK33PuYqwsOAInEIZ9c020b6mkfTFc9c01Wz_yHGTYlpoeHdwwJtZXQ"
                alt="Live Room A"
                className="w-full h-40 object-cover mb-3"
              />
              <h3 className="font-semibold text-lg text-[#e5e1e4] mb-1">
                Main Live Tracking Room
              </h3>
              <p className="text-xs text-[#d7c3b1] leading-relaxed">
                Ruang luas dengan difuser kayu solid untuk rehearsal band dan
                perekaman multi-instrumen.
              </p>
            </div>

            {/* Space 2 */}
            <div className="bg-[#1b1b1d] p-4 border border-[#353437]">
              <div className="flex items-center justify-between text-[#a08d7e] font-mono text-[10px] uppercase mb-2">
                <span>[ BAY 02 ]</span>
                <span className="text-[#ffb86d]">CONTROL ROOM</span>
              </div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDptAJUL0MDaNlofnooeMZ_ffMEAtzF7DgwyHFlLOw_OaMxX5GIUfGeVPgQt9XDZN8AFQ8SNmSXfhhgNq3AdPF72Y4sEc7aC3v-X7M73-7agnoiF4wg9-KRounN05qdO9AGCZadcTAXs12l_EuhNb_TEs0iintSwWMJao6_ohiOiA94a4HTelMhsG0pAj3F-C6vriU2RHIpgAeH5uVRbpXozPaObuE640kU5W-zWoYByIvSandD6HaUZQ"
                alt="Control Room"
                className="w-full h-40 object-cover mb-3"
              />
              <h3 className="font-semibold text-lg text-[#e5e1e4] mb-1">
                Control Suite Alpha
              </h3>
              <p className="text-xs text-[#d7c3b1] leading-relaxed">
                Ruang kontrol audio akurat dengan sistem monitoring terkalibrasi
                untuk proses mixing.
              </p>
            </div>

            {/* Space 3 */}
            <div className="bg-[#1b1b1d] p-4 border border-[#353437]">
              <div className="flex items-center justify-between text-[#a08d7e] font-mono text-[10px] uppercase mb-2">
                <span>[ BAY 03 ]</span>
                <span className="text-[#ffb86d]">REHEARSAL BAY</span>
              </div>
              <div
                className="w-full h-40 bg-cover bg-center mb-3"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCzPY9kmYit4dv1byy808m1VdCcoIH68WtRCuhbNJn1wzbPgK5lE_US_KlmqKqC4-p-99LYMH9mbn4rPq0JkDDFSM-OS1ZxMwVOTiRy82VoCAReDUm2kIazAxYNkjsWcB-BsbMYx2ajNfYwZAbt9uqSCEVCrVzhBplewTIIVjc2U8JOSOeknFhMiR1HFp6m_cBqnuDxwQTrDkxH8sQo1YS661NPesh3eDePOm5wxjnjl4CfhNJQ4AEuCg')",
                }}
              ></div>
              <h3 className="font-semibold text-lg text-[#e5e1e4] mb-1">
                Rehearsal Suite B
              </h3>
              <p className="text-xs text-[#d7c3b1] leading-relaxed">
                Kamar latihan berdaya kedap tinggi lengkap dengan instrumen
                backline siap pakai.
              </p>
            </div>

            {/* Space 4 */}
            <div className="bg-[#1b1b1d] p-4 border border-[#353437]">
              <div className="flex items-center justify-between text-[#a08d7e] font-mono text-[10px] uppercase mb-2">
                <span>[ BAY 04 ]</span>
                <span className="text-[#ffb86d]">VOCAL BOOTH</span>
              </div>
              <div
                className="w-full h-40 bg-cover bg-center mb-3"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA0yv62PagzUUzZxCORkTCXN2GijrI1nkiJvsTuHL45efqWRveulCkI23ZvX1BO6-B1xs3Xuc3hs-kIwlzj2gzPSQkF58gR4_FzMdfan7t6z8lJWUWGuYVQV_lJfNOPqFhJ2Abl6SJQxYkEGfQwHCytSUFYhpyuMdjuFix5pzkxmtok6TgEkEu16LAmf6uNTL0jJ5eRjYOsE4Pe_99kIB9UG46voMs9EmrJ47K0_VEagS_mDRy3OtFUzA')",
                }}
              ></div>
              <h3 className="font-semibold text-lg text-[#e5e1e4] mb-1">
                Iso Vocal Booth
              </h3>
              <p className="text-xs text-[#d7c3b1] leading-relaxed">
                Booth terisolasi khusus vokal atau rekaman akustik tunggal tanpa
                pantulan berlebih.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. RESERVATION CONSOLE INTEGRATED WITH FORM
           ========================================================================= */}
        <section
          id="booking-console"
          className="w-full bg-[#1b1b1d] py-20 px-6 lg:px-16 border-b border-[#353437]/60"
        >
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#ffb86d] font-semibold">
                  04 // RESERVATION CONSOLE
                </span>
                <span className="h-px w-8 bg-[#353437]"></span>
                <span className="font-mono text-[10px] uppercase text-[#a08d7e]">
                  Realtime Dispatch
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#e5e1e4]">
                Form Reservasi Jadwal
              </h2>
            </div>

            {/* Komponen Form Booking yang terhubung ke Backend Supabase */}
            <BookingForm services={services} />
          </div>
        </section>
      </main>

      {/* =========================================================================
          8. MEGA FOOTER & TRANSMISSION
         ========================================================================= */}
      <footer className="w-full bg-[#0e0e10] border-t border-[#353437] text-[#e5e1e4] py-12 px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#353437]/60 pb-8">
          <div className="md:col-span-5 space-y-3">
            <div className="font-mono text-sm uppercase tracking-widest font-bold text-[#e5e1e4]">
              WINGKING STUDIO
            </div>
            <p className="text-xs text-[#d7c3b1] max-w-sm leading-relaxed">
              Purwokerto Acoustic & Audio Production Suite (@w.hubstudio).
              Didesain untuk musisi, band, dan audio creator.
            </p>
          </div>

          <div className="md:col-span-3 space-y-2 font-mono text-xs">
            <span className="text-[#a08d7e] uppercase tracking-wider block border-b border-[#353437] pb-1">
              Lokasi & Jam
            </span>
            <p className="text-[#d7c3b1]">Purwokerto, Jawa Tengah</p>
            <p className="text-[#ffb86d]">MON–SUN 09:00 — 23:00 WIB</p>
          </div>

          <div className="md:col-span-4 space-y-2 font-mono text-xs">
            <span className="text-[#a08d7e] uppercase tracking-wider block border-b border-[#353437] pb-1">
              Transmission
            </span>
            <a
              href="https://instagram.com/w.hubstudio"
              target="_blank"
              className="block text-[#ffb86d] hover:underline"
            >
              Instagram // @w.hubstudio
            </a>
            <p className="text-[#a08d7e] text-[10px] mt-2">
              © {new Date().getFullYear()} WINGKING STUDIO. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
