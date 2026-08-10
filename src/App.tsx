import { useState } from "react";
import { Home, Wallet, ArrowRightLeft, CreditCard, MoreHorizontal } from "lucide-react";
import Beranda from "./components/Beranda";
import Kantong from "./components/Kantong";
import Transaksi from "./components/Transaksi";

export default function App() {
  const [activeTab, setActiveTab] = useState('beranda');

  return (
    <div className="bg-[#f2f2f2] min-h-screen text-gray-900 font-sans">
      <div className="w-full bg-[#fafafc] min-h-screen relative overflow-x-hidden pb-24">
        
        {/* Render Active View */}
        {activeTab === 'beranda' && <Beranda />}
        {activeTab === 'kantong' && <Kantong />}
        {activeTab === 'transaksi' && <Transaksi />}

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 w-full bg-white border-t border-gray-100 flex justify-around sm:justify-center sm:gap-20 px-6 py-2.5 pb-6 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
          <div 
            onClick={() => setActiveTab('beranda')}
            className={`flex flex-col items-center gap-1.5 cursor-pointer transition-colors ${activeTab === 'beranda' ? 'text-[#ef7001]' : 'text-gray-500 hover:text-black'}`}
          >
            <Home className="w-6 h-6" fill={activeTab === 'beranda' ? "#ef7001" : "none"} strokeWidth={2} />
            <span className="text-[10px] font-semibold tracking-tight">Beranda</span>
          </div>
          <div 
            onClick={() => setActiveTab('kantong')}
            className={`flex flex-col items-center gap-1.5 cursor-pointer transition-colors ${activeTab === 'kantong' ? 'text-[#ef7001]' : 'text-gray-500 hover:text-black'}`}
          >
            <Wallet className="w-6 h-6" fill={activeTab === 'kantong' ? "#ef7001" : "none"} strokeWidth={2} />
            <span className="text-[10px] font-semibold tracking-tight">Kantong</span>
          </div>
          <div 
            onClick={() => setActiveTab('transaksi')}
            className={`flex flex-col items-center gap-1.5 cursor-pointer transition-colors ${activeTab === 'transaksi' ? 'text-[#ef7001]' : 'text-gray-500 hover:text-black'}`}
          >
            <ArrowRightLeft className="w-6 h-6" strokeWidth={2} />
            <span className="text-[10px] font-medium tracking-tight">Transaksi</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 cursor-pointer text-gray-500 hover:text-black transition-colors">
            <CreditCard className="w-6 h-6" strokeWidth={2} />
            <span className="text-[10px] font-medium tracking-tight">Kartu</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 cursor-pointer text-gray-500 hover:text-black transition-colors">
            <MoreHorizontal className="w-6 h-6" strokeWidth={2} />
            <span className="text-[10px] font-medium tracking-tight">Lainnya</span>
          </div>
        </div>

      </div>
    </div>
  );
}
