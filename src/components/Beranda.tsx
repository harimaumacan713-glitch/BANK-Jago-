import {
  Bell,
  Check,
  ChevronDown,
  ChevronRight,
  Copy,
  CreditCard,
  EyeOff,
  Gift,
  MoreHorizontal,
  ArrowRightLeft,
  ScanLine,
  User,
  Wallet,
  X,
} from "lucide-react";
import { useJago } from "../context/JagoContext";

export default function Beranda() {
  const { user, balance, login } = useJago();

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-7 pb-3">
        <div className="flex items-center">
          {/* Custom Jago Logo mimicking the design */}
          <h1 className="text-2xl font-bold tracking-tighter flex flex-col relative">
            <div className="flex absolute -top-[5px] left-[4px] gap-[2px]">
              <div className="w-[3px] h-[3px] bg-black rounded-full"></div>
              <div className="w-[3px] h-[3px] bg-black rounded-full"></div>
            </div>
            <span className="font-extrabold text-[22px] tracking-tight">Jago</span>
          </h1>
        </div>
        <div className="flex space-x-4 items-center">
          <div 
            className="w-6 h-6 rounded-full border-[1.5px] border-black flex items-center justify-center cursor-pointer"
            onClick={!user ? login : undefined}
          >
            <User className={`w-4 h-4 ${user ? 'text-green-600' : 'text-black'}`} strokeWidth={2.5} />
          </div>
          <div className="relative">
            <Bell className="w-6 h-6 text-black" strokeWidth={2} />
            <span className="absolute -top-1 -right-2 bg-[#d93025] text-white text-[9px] font-bold px-1.5 py-[1px] rounded-full border border-white">
              16
            </span>
          </div>
        </div>
      </div>

      {/* Kantong Utama Card */}
      <div className="px-5 mt-1">
        <div className="bg-[#f9f8f4] rounded-[24px] p-[18px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#f2efe6]">
          <div className="flex justify-between items-start">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-[#cca370] rounded-full flex items-center justify-center text-xl shadow-inner mt-0.5">
                💰
              </div>
              <div className="flex flex-col">
                <h2 className="font-bold text-[17px] text-black tracking-tight">Kantong Utama</h2>
                <div className="flex items-center gap-1.5 text-gray-500 text-[13px] mt-0.5">
                  <span className="font-medium">1036 5384 7791</span>
                  <Copy className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="font-bold text-[19px] tracking-tight text-black">
                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(balance)}
              </span>
              <EyeOff className="w-5 h-5 text-black" strokeWidth={2} />
            </div>
          </div>
          <button className="w-full mt-4 bg-white border border-gray-200 rounded-full py-2.5 text-[14px] font-bold text-gray-500 flex justify-center items-center gap-1 shadow-sm">
            Aktivitas Terakhir <ChevronDown className="w-[18px] h-[18px] text-gray-400" strokeWidth={2.5} />
          </button>
        </div>
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-4 mb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffb800]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
        </div>
      </div>

      {/* Orange Banner */}
      <div className="px-5 mt-3">
        <div className="bg-[#ef7001] rounded-full pl-2 pr-4 py-2 flex items-center shadow-[0_4px_10px_rgba(239,112,1,0.2)]">
          <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-inner relative ring-2 ring-white/20">
             <div className="w-2 h-2 bg-yellow-300 rounded-full absolute top-1 left-1"></div>
          </div>
          <span className="text-white text-[13px] font-medium ml-3 flex-1 tracking-tight">Yuk, tambah uang dulu ke Kantong kamu</span>
          <ChevronRight className="w-5 h-5 text-white" strokeWidth={2.5} />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-5 mt-6 grid grid-cols-2 gap-3.5">
        <button className="bg-white rounded-3xl py-4 flex flex-row items-center justify-center gap-3 shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-gray-100">
          <div className="relative">
            <CreditCard className="w-6 h-6 text-orange-500" strokeWidth={1.5} />
            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
               <ArrowRightLeft className="w-3 h-3 text-purple-700" strokeWidth={3} />
            </div>
          </div>
          <span className="font-bold text-[14px] text-black">Transfer & Bayar</span>
        </button>
        <button className="bg-white rounded-3xl py-4 flex flex-row items-center justify-center gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-gray-100">
          <ScanLine className="w-6 h-6 text-purple-800" strokeWidth={2} />
          <span className="font-bold text-[14px] text-black">Scan QRIS</span>
        </button>
      </div>

      {/* Misi Section */}
      <div className="px-5 mt-10">
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-xl font-bold tracking-tight text-black">Misi</h3>
          <a href="#" className="text-[14px] font-bold border-b-[2px] border-orange-400 pb-[1px] text-black hover:text-orange-600 transition-colors">
            Lihat Semua
          </a>
        </div>

        <div className="relative mt-2">
          <div className="absolute -top-3.5 left-0 bg-[#f0f0f2] text-gray-500 text-[11px] font-medium px-3 py-1.5 rounded-t-xl rounded-br-xl z-0">
            Berakhir 5 hari lagi
          </div>
          <div className="bg-white rounded-[20px] p-4 shadow-[0_4px_15px_rgba(0,0,0,0.04)] relative z-10 border border-gray-100">
            {/* Top Banner Text */}
            <div className="flex justify-between items-start gap-4">
              <h4 className="font-bold text-[16px] leading-[1.3] text-black">
                Transaksi di Jago & dapetin <span className="text-[#84239c]">bonus s.d ...</span>
              </h4>
              <div className="bg-[#6b2585] text-white text-[9px] font-black px-2 py-1.5 rounded-md leading-tight text-center tracking-wider flex-shrink-0">
                JAGOAN<br />ADVENTURE
              </div>
            </div>
            
            {/* Progress Tracker Nodes */}
            <div className="mt-6 mb-2 flex items-center justify-between relative px-1">
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-2 right-2 h-[2px] bg-gray-100 -z-10 -translate-y-1/2"></div>
              
              {/* Nodes */}
              <div className="w-5 h-5 rounded-full bg-[#46b353] flex items-center justify-center shadow-sm z-10">
                <Check className="w-[14px] h-[14px] text-white" strokeWidth={3} />
              </div>
              <div className="w-5 h-5 rounded-full bg-[#c9c9c9] flex items-center justify-center shadow-sm z-10">
                <Check className="w-[14px] h-[14px] text-white" strokeWidth={3} />
              </div>
              <div className="w-5 h-5 rounded-full bg-[#c9c9c9] flex items-center justify-center shadow-sm z-10">
                <Check className="w-[14px] h-[14px] text-white" strokeWidth={3} />
              </div>
              
              {/* Gift Node 1 */}
              <div className="z-10 flex flex-col items-center justify-center mt-0.5">
                 <Gift className="w-6 h-6 text-[#72208a] fill-[#72208a]/10 bg-white" strokeWidth={1.5} />
              </div>

              <div className="w-5 h-5 rounded-full bg-[#c9c9c9] flex items-center justify-center shadow-sm z-10">
                <Check className="w-[14px] h-[14px] text-white" strokeWidth={3} />
              </div>
              <div className="w-5 h-5 rounded-full bg-[#c9c9c9] flex items-center justify-center shadow-sm z-10">
                <Check className="w-[14px] h-[14px] text-white" strokeWidth={3} />
              </div>
              
              {/* Gift Node 2 */}
              <div className="z-10 flex flex-col items-center justify-center mt-0.5">
                 <Gift className="w-6 h-6 text-[#72208a] fill-[#72208a]/10 bg-white" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spotlight Section */}
      <div className="px-5 mt-10">
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-xl font-bold tracking-tight text-black">Spotlight</h3>
          <a href="#" className="text-[14px] font-bold border-b-[2px] border-orange-400 pb-[1px] text-black hover:text-orange-600 transition-colors">
            Lihat Semua
          </a>
        </div>

        <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x pb-4">
          {/* Spotlight Card 1 - Proteksi Diri */}
          <div className="snap-center min-w-[280px] h-[175px] rounded-[24px] relative overflow-hidden flex-shrink-0 p-5 shadow-[0_4px_12px_rgba(0,0,0,0.06)] bg-gradient-to-br from-[#c8985c] to-[#a67439]">
            {/* Simulated puzzle piece overlay using CSS/SVG patterns */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" 
                 style={{
                   backgroundImage: `radial-gradient(circle at 30% 0%, transparent 20px, #000 21px),
                                     radial-gradient(circle at 100% 40%, transparent 20px, #000 21px),
                                     radial-gradient(circle at 50% 100%, transparent 20px, #000 21px)`,
                   backgroundSize: '100px 100px',
                 }}>
            </div>
            {/* Additional puzzle aesthetic layers */}
            <div className="absolute inset-0 border-[30px] border-transparent border-t-[#d4a873]/10 border-l-[#d4a873]/10 border-r-[#8a5d28]/10 border-b-[#8a5d28]/10 rounded-[24px] pointer-events-none"></div>

            {/* Close Button */}
            <div className="absolute top-3 right-3 w-7 h-7 bg-white/70 backdrop-blur-md rounded-full flex justify-center items-center shadow-sm cursor-pointer z-20 hover:bg-white transition-colors">
              <X className="w-[15px] h-[15px] text-black" strokeWidth={3} />
            </div>

            <div className="relative z-10 text-white flex flex-col justify-center h-full pt-1">
              <p className="text-[13px] font-medium tracking-wide">Checklist Wajib</p>
              <h4 className="text-[34px] font-serif font-semibold leading-[1.05] mt-1 tracking-tight text-white/95">
                Proteksi<br />Diri
              </h4>
              <p className="text-[13px] font-medium mt-1">di 2026</p>
              
              {/* Tiny fake legal text at bottom */}
              <div className="absolute -bottom-1 left-0 text-[5px] text-white/50 leading-tight w-2/3">
                 PT Bank Jago Tbk terdaftar dan diawasi oleh Otoritas Jasa Keuangan (OJK), 
                 serta merupakan peserta penjaminan LPS
              </div>
            </div>
          </div>

          {/* Spotlight Card 2 - Diskon 25% */}
          <div className="snap-center min-w-[280px] h-[175px] rounded-[24px] bg-[#fcb714] relative overflow-hidden flex-shrink-0 p-5 text-[#3b2505] shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
             {/* Aesthetic circles matching the orange/yellow vibe */}
             <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-orange-500/20 rounded-full"></div>
             <div className="absolute top-1/2 -right-5 w-16 h-16 bg-orange-400/20 rounded-full"></div>

            <div className="relative z-10 flex flex-col justify-center h-full pt-2">
              <p className="font-bold text-[15px] tracking-tight text-[#452c07]">Diskon</p>
              <div className="flex items-start">
                 <h4 className="text-[75px] font-black leading-none -mt-3 -ml-1 text-[#2d1c03] tracking-tighter">
                   25
                 </h4>
                 <span className="text-[36px] font-black leading-none mt-1 text-[#2d1c03] tracking-tighter">%</span>
              </div>
              <p className="font-bold text-[14px] mt-0 tracking-tight text-[#452c07]">dengan Kartu Jago</p>
              
              {/* Tiny fake legal text at bottom */}
              <div className="absolute -bottom-1 left-0 text-[5px] text-[#3b2505]/50 leading-tight">
                 Min. transaksi Rp65.000 | Periode promo: 1 Agustus - 31 Desember 2026<br/>
                 Info selengkapnya: jago.com/id/jago/promo/jago-greenam<br/>
                 PT Bank Jago Tbk berizin dan diawasi oleh Otoritas Jasa Keuangan (OJK)
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
