import { useJago } from "../context/JagoContext";
import { ArrowDownLeft, ReceiptText } from "lucide-react";

export default function Transaksi() {
  const { transactions } = useJago();

  return (
    <div className="pt-7 px-5 pb-24 min-h-screen bg-[#fafafc]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-black tracking-tight">Riwayat Transaksi</h2>
        <ReceiptText className="w-6 h-6 text-black" strokeWidth={2} />
      </div>

      <div className="space-y-4">
        {transactions.length === 0 ? (
          <div className="text-center text-gray-500 py-10 text-[14px]">
            Belum ada transaksi
          </div>
        ) : (
          transactions.map((tx) => (
            <div key={tx.id} className="bg-white rounded-2xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-gray-100">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <ArrowDownLeft className="w-5 h-5 text-green-600" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[15px] text-black">Uang Masuk</h4>
                    <span className="text-[12px] font-medium text-gray-500">Dari: {tx.source === "garuda_inves" ? "Garuda Inves" : tx.source}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-[15px] text-green-600">
                    +{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(tx.amount)}
                  </div>
                </div>
              </div>
              <div className="bg-[#f9f9f9] rounded-xl p-3 mt-3">
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-gray-500 font-medium">Status</span>
                  <span className="font-bold text-green-600 uppercase tracking-wide">{tx.status === "completed" ? "Berhasil" : tx.status}</span>
                </div>
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-gray-500 font-medium">Tanggal</span>
                  <span className="font-medium text-black">{new Date(tx.createdAt).toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-gray-500 font-medium">ID Transaksi</span>
                  <span className="font-medium text-black truncate max-w-[150px]">{tx.transactionId}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
