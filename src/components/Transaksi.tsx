import { useState } from "react";
import { useJago } from "../context/JagoContext";
import {
  ReceiptText,
  ArrowDownLeft,
  X,
  Building2,
  Wallet,
  Smartphone,
  Tv,
  Zap,
  CreditCard,
  Heart,
  Grid,
  HandCoins,
  QrCode,
  Sparkles,
  ChevronRight
} from "lucide-react";

export default function Transaksi() {
  const { transactions, balance } = useJago();
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafafc] pb-28">
      {/* Top Warm Yellowish Gradient Background header */}
      <div className="bg-gradient-to-b from-[#ffecc8] via-[#fef7ec] to-[#fafafc] pt-7 px-5 pb-4">
        {/* Top Bar Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[28px] font-extrabold text-black tracking-tight">Transaksi</h1>
          <button
            onClick={() => setShowHistory(true)}
            className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur-md shadow-sm border border-amber-200/60 flex items-center justify-center active:scale-95 transition-transform relative"
            title="Riwayat Transaksi"
          >
            <ReceiptText className="w-5 h-5 text-black" strokeWidth={2.2} />
            {transactions.length > 0 && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#ef7001] rounded-full border-2 border-white" />
            )}
          </button>
        </div>

        {/* Section: Transfer & Bayar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-[15px] text-black">Transfer & Bayar</h2>
            <button
              onClick={() => setShowHistory(true)}
              className="text-[12px] font-bold text-[#ef7001] flex items-center gap-0.5"
            >
              Riwayat <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 8 Action Items Grid (4 columns x 2 rows) */}
          <div className="grid grid-cols-4 gap-2.5 mb-3">
            {/* 1. Bank Transfer */}
            <div className="bg-white rounded-2xl p-2.5 border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center min-h-[92px] text-center cursor-pointer active:scale-95 transition-transform">
              <div className="w-10 h-10 rounded-full bg-[#fff4e8] flex items-center justify-center mb-1.5 relative">
                <Building2 className="w-5 h-5 text-[#ef7001]" strokeWidth={2} />
                <div className="absolute -bottom-0.5 -right-0.5 bg-[#ef7001] text-white p-0.5 rounded-full border border-white">
                  <Sparkles className="w-2.5 h-2.5" />
                </div>
              </div>
              <span className="text-[11px] font-bold text-gray-800 leading-tight">Bank Transfer</span>
            </div>

            {/* 2. Topup e-Wallet */}
            <div className="bg-white rounded-2xl p-2.5 border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center min-h-[92px] text-center cursor-pointer active:scale-95 transition-transform">
              <div className="w-10 h-10 rounded-full bg-[#fff4e8] flex items-center justify-center mb-1.5 relative">
                <Wallet className="w-5 h-5 text-[#ef7001]" strokeWidth={2} />
                <div className="absolute -bottom-0.5 -right-0.5 bg-emerald-500 text-white p-0.5 rounded-full border border-white">
                  <Sparkles className="w-2.5 h-2.5" />
                </div>
              </div>
              <span className="text-[11px] font-bold text-gray-800 leading-tight">Topup e-Wallet</span>
            </div>

            {/* 3. Topup Pulsa & Data */}
            <div className="bg-white rounded-2xl p-2.5 border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center min-h-[92px] text-center cursor-pointer active:scale-95 transition-transform">
              <div className="w-10 h-10 rounded-full bg-[#eef7ff] flex items-center justify-center mb-1.5 relative">
                <Smartphone className="w-5 h-5 text-blue-600" strokeWidth={2} />
                <div className="absolute -bottom-0.5 -right-0.5 bg-amber-500 text-white text-[8px] font-bold px-1 rounded-full border border-white">
                  Rp
                </div>
              </div>
              <span className="text-[11px] font-bold text-gray-800 leading-tight">Topup Pulsa & Data</span>
            </div>

            {/* 4. Internet & TV */}
            <div className="bg-white rounded-2xl p-2.5 border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center min-h-[92px] text-center cursor-pointer active:scale-95 transition-transform">
              <div className="w-10 h-10 rounded-full bg-[#fff4e8] flex items-center justify-center mb-1.5">
                <Tv className="w-5 h-5 text-[#ef7001]" strokeWidth={2} />
              </div>
              <span className="text-[11px] font-bold text-gray-800 leading-tight">Internet & TV</span>
            </div>

            {/* 5. PLN */}
            <div className="bg-white rounded-2xl p-2.5 border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center min-h-[92px] text-center cursor-pointer active:scale-95 transition-transform">
              <div className="w-10 h-10 rounded-full bg-[#fff9e6] flex items-center justify-center mb-1.5">
                <Zap className="w-5 h-5 text-amber-500" strokeWidth={2} />
              </div>
              <span className="text-[11px] font-bold text-gray-800 leading-tight">PLN</span>
            </div>

            {/* 6. Kartu Kredit */}
            <div className="bg-white rounded-2xl p-2.5 border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center min-h-[92px] text-center cursor-pointer active:scale-95 transition-transform">
              <div className="w-10 h-10 rounded-full bg-[#f3e8ff] flex items-center justify-center mb-1.5">
                <CreditCard className="w-5 h-5 text-purple-600" strokeWidth={2} />
              </div>
              <span className="text-[11px] font-bold text-gray-800 leading-tight">Kartu Kredit</span>
            </div>

            {/* 7. Jago Amal */}
            <div className="bg-white rounded-2xl p-2.5 border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center min-h-[92px] text-center cursor-pointer active:scale-95 transition-transform">
              <div className="w-10 h-10 rounded-full bg-[#ffeef2] flex items-center justify-center mb-1.5">
                <Heart className="w-5 h-5 text-rose-500" strokeWidth={2} />
              </div>
              <span className="text-[11px] font-bold text-gray-800 leading-tight">Jago Amal</span>
            </div>

            {/* 8. Fitur Lainnya */}
            <div className="bg-white rounded-2xl p-2.5 border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center min-h-[92px] text-center cursor-pointer active:scale-95 transition-transform">
              <div className="w-10 h-10 rounded-full bg-[#f0f2f5] flex items-center justify-center mb-1.5">
                <Grid className="w-5 h-5 text-gray-700" strokeWidth={2} />
              </div>
              <span className="text-[11px] font-bold text-gray-800 leading-tight">Fitur Lainnya</span>
            </div>
          </div>

          {/* Bottom 2 Wide Buttons: Tagih Uang & Scan QRIS */}
          <div className="grid grid-cols-2 gap-3 mt-3">
            {/* Tagih Uang */}
            <button className="bg-white rounded-[20px] px-4 py-3.5 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex items-center justify-center gap-2.5 active:scale-95 transition-transform">
              <div className="w-8 h-8 rounded-full bg-amber-100/80 flex items-center justify-center">
                <HandCoins className="w-4 h-4 text-[#ef7001]" strokeWidth={2.2} />
              </div>
              <span className="font-bold text-[14px] text-black tracking-tight">Tagih Uang</span>
            </button>

            {/* Scan QRIS */}
            <button className="bg-white rounded-[20px] px-4 py-3.5 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex items-center justify-center gap-2.5 active:scale-95 transition-transform">
              <div className="w-8 h-8 rounded-full bg-purple-100/80 flex items-center justify-center">
                <QrCode className="w-4 h-4 text-purple-700" strokeWidth={2.2} />
              </div>
              <span className="font-bold text-[14px] text-black tracking-tight">Scan QRIS</span>
            </button>
          </div>
        </div>
      </div>

      {/* Section 2: PILIH KARTUMU */}
      <div className="px-5 mb-8">
        <div className="flex items-start gap-4 overflow-x-auto no-scrollbar py-2">
          {/* Left Fixed Label Block */}
          <div className="flex-shrink-0 w-[120px] pt-4">
            <h3 className="font-extrabold text-[18px] text-black leading-tight tracking-tight uppercase">
              PILIH<br />KARTUMU
            </h3>
            <p className="text-[12px] text-gray-600 leading-snug mt-2 font-medium">
              Mulai perjalanan sesuai maumu.
            </p>
          </div>

          {/* Card 1: Kartu Digital Pro */}
          <div className="relative flex-shrink-0">
            {/* "Baru" Badge */}
            <span className="absolute -top-2.5 left-4 z-10 bg-[#ff1a40] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
              Baru
            </span>
            <div className="bg-gradient-to-b from-[#fffae8] to-[#fffef5] border border-amber-200/70 rounded-3xl p-5 w-[210px] flex flex-col items-center text-center shadow-[0_4px_16px_rgba(239,112,1,0.06)]">
              {/* Graphic Card Illustration */}
              <div className="w-[140px] h-[86px] rounded-xl bg-gradient-to-br from-[#f8d070] via-[#e5a024] to-[#b87600] p-2.5 text-white shadow-md relative overflow-hidden flex flex-col justify-between text-left">
                <div className="flex justify-between items-start">
                  <span className="font-black text-[11px] tracking-wider italic">VISA</span>
                  <span className="text-[8px] font-bold bg-white/30 px-1 rounded">Pro</span>
                </div>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:8px_8px]" />
                <div className="flex justify-between items-end z-10">
                  <div className="w-5 h-3.5 bg-amber-200/80 rounded-sm" />
                  <span className="text-[10px] font-bold tracking-tight">Jago</span>
                </div>
              </div>

              <h4 className="font-bold text-[15px] text-black mt-3">Kartu Digital Pro</h4>
              <p className="text-[11px] text-gray-600 leading-tight mt-1">
                Upgrade hidupmu. Limit lebih tinggi, benefit lebih banyak.
              </p>
            </div>
          </div>

          {/* Card 2: Kartu Purple */}
          <div className="flex-shrink-0">
            <div className="bg-gradient-to-b from-[#f5edff] to-[#fcf9ff] border border-purple-200/70 rounded-3xl p-5 w-[210px] flex flex-col items-center text-center shadow-[0_4px_16px_rgba(147,51,234,0.05)]">
              {/* Graphic Card Illustration */}
              <div className="w-[140px] h-[86px] rounded-xl bg-gradient-to-br from-[#a855f7] via-[#7e22ce] to-[#581c87] p-2.5 text-white shadow-md relative overflow-hidden flex flex-col justify-between text-left">
                <div className="flex justify-between items-start">
                  <span className="font-black text-[11px] tracking-wider italic">VISA</span>
                  <span className="text-[8px] font-bold bg-white/30 px-1 rounded">Global</span>
                </div>
                <div className="flex justify-between items-end z-10">
                  <div className="w-5 h-3.5 bg-purple-300/80 rounded-sm" />
                  <span className="text-[10px] font-bold tracking-tight">Jago</span>
                </div>
              </div>

              <h4 className="font-bold text-[15px] text-black mt-3">Kartu Utama</h4>
              <p className="text-[11px] text-gray-600 leading-tight mt-1">
                Akses global. Bayar di mana saja dengan mudah.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Semakin Jago Atur Keuangan */}
      <div className="px-5">
        <h3 className="font-bold text-[16px] text-black mb-3 tracking-tight">
          Semakin Jago Atur Keuangan
        </h3>

        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          {/* Banner 1 */}
          <div className="bg-[#fff9ea] rounded-2xl p-4 border border-amber-100 min-w-[240px] flex-shrink-0 flex items-center justify-between shadow-sm">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#ef7001]">Fitur Otomatis</span>
              <h4 className="font-bold text-[14px] text-black mt-0.5">Jago Autodebit</h4>
              <p className="text-[11px] text-gray-600 mt-1">Bayar tagihan tepat waktu tanpa ribet</p>
            </div>
            <div className="w-12 h-12 bg-white rounded-xl shadow-xs flex items-center justify-center text-[#ef7001] font-bold text-xs">
              📅
            </div>
          </div>

          {/* Banner 2 */}
          <div className="bg-[#fef4f0] rounded-2xl p-4 border border-rose-100 min-w-[240px] flex-shrink-0 flex items-center justify-between shadow-sm">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600">Analisis Keuangan</span>
              <h4 className="font-bold text-[14px] text-black mt-0.5">Laporan Bulanan</h4>
              <p className="text-[11px] text-gray-600 mt-1">Pantau pengeluaranmu secara detail</p>
            </div>
            <div className="w-12 h-12 bg-white rounded-xl shadow-xs flex items-center justify-center text-rose-500 font-bold text-xs">
              📊
            </div>
          </div>
        </div>
      </div>

      {/* Slide-Up Drawer / Modal for Realtime Firebase Transactions */}
      {showHistory && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl max-h-[85vh] flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-200">
            {/* Drawer Header */}
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between bg-[#fafafc]">
              <div>
                <h3 className="font-bold text-[17px] text-black">Riwayat Transaksi</h3>
                <p className="text-[11px] text-gray-500">
                  Total saldo masuk: {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(balance)}
                </p>
              </div>
              <button
                onClick={() => setShowHistory(false)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-black"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Transactions List */}
            <div className="p-5 overflow-y-auto space-y-3 flex-1">
              {transactions.length === 0 ? (
                <div className="text-center text-gray-500 py-12 text-[14px]">
                  Belum ada riwayat transaksi
                </div>
              ) : (
                transactions.map((tx) => (
                  <div key={tx.id} className="bg-[#f9fafb] rounded-2xl p-4 border border-gray-100 shadow-xs">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                          <ArrowDownLeft className="w-5 h-5 text-emerald-600" strokeWidth={2.5} />
                        </div>
                        <div>
                          <h4 className="font-bold text-[14px] text-black">Uang Masuk</h4>
                          <span className="text-[12px] font-medium text-gray-500">
                            Dari: {tx.source === "garuda_inves" ? "Garuda Inves" : tx.source}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-[15px] text-emerald-600">
                          +{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(tx.amount)}
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-3 mt-2 border border-gray-100 text-[11px] space-y-1">
                      <div className="flex justify-between">
                        <span className="text-gray-500 font-medium">Status</span>
                        <span className="font-bold text-emerald-600 uppercase">
                          {tx.status === "completed" ? "Berhasil" : tx.status}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 font-medium">Tanggal</span>
                        <span className="font-medium text-black">
                          {new Date(tx.createdAt).toLocaleString('id-ID')}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 font-medium">ID Transaksi</span>
                        <span className="font-medium text-black truncate max-w-[160px]">
                          {tx.transactionId}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
