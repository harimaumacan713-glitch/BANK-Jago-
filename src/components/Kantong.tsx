import {
  Info,
  EyeOff,
  MoreHorizontal,
  Search,
  FileText,
  Plus,
  CheckCircle2
} from "lucide-react";
import { useJago } from "../context/JagoContext";

export default function Kantong() {
  const { balance } = useJago();

  return (
    <div className="pt-7 px-5 pb-24">
      {/* Search and Action Bar */}
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex-1 flex items-center bg-[#f0f0f0] rounded-xl px-4 py-2.5">
          <Search className="w-[18px] h-[18px] text-gray-500 mr-2" strokeWidth={2.5} />
          <input 
            type="text" 
            placeholder="Cari Kantong" 
            className="bg-transparent border-none outline-none w-full text-[14px] font-medium text-black placeholder-gray-500"
          />
        </div>
        <div className="flex items-center gap-4 text-black">
          <MoreHorizontal className="w-[22px] h-[22px]" strokeWidth={2.5} />
          <FileText className="w-5 h-5" strokeWidth={2} />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-4 overflow-x-auto no-scrollbar mb-6 relative">
        <button className="bg-white px-4 py-1.5 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-gray-100 whitespace-nowrap text-[13px] font-bold text-black flex-shrink-0">
          Semua
        </button>
        <button className="text-gray-500 font-medium text-[13px] whitespace-nowrap flex-shrink-0">
          Kantong saya
        </button>
        <button className="text-gray-500 font-medium text-[13px] whitespace-nowrap flex-shrink-0">
          Investasi
        </button>
        <button className="text-gray-500 font-medium text-[13px] whitespace-nowrap flex-shrink-0">
          Dibagi ke saya
        </button>
        <div className="flex-shrink-0 flex items-center justify-center pl-1">
          <Plus className="w-5 h-5 text-black" strokeWidth={2.5} />
        </div>
      </div>

      {/* Aset Saya & Tab Investasi Banner */}
      <div className="mb-6">
        <div className="bg-white rounded-t-[20px] rounded-b-[4px] p-5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-gray-50 flex justify-between items-center relative z-10">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[15px] text-black">Aset Saya</span>
            <div className="w-5 h-5 bg-[#f6aa1c] rounded-full flex items-center justify-center">
              <Info className="w-3.5 h-3.5 text-white" strokeWidth={3} />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-[17px] text-black">
              {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(balance)}
            </span>
            <EyeOff className="w-[18px] h-[18px] text-black" strokeWidth={2.5} />
          </div>
        </div>
        <div className="bg-white rounded-b-[20px] rounded-t-[4px] py-3.5 px-5 shadow-[0_4px_10px_rgba(0,0,0,0.02)] border-x border-b border-gray-50 -mt-[1px] flex justify-end">
          <a href="#" className="font-bold text-[14px] text-black border-b-2 border-[#f6aa1c] pb-[1px]">
            Lihat Tab Investasi
          </a>
        </div>
      </div>

      {/* Grid Kantong */}
      <div className="grid grid-cols-2 gap-3.5">
        
        {/* Kantong Utama */}
        <div className="bg-[#fcfaf5] rounded-[24px] p-4 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-[#f5f3eb] aspect-square">
          <div className="w-12 h-12 bg-[#cca370] rounded-full flex items-center justify-center text-2xl shadow-inner">
            💰
          </div>
          <div className="flex flex-col mt-4">
            <h3 className="font-bold text-[15px] text-gray-700 leading-tight">Kantong Utama</h3>
            <span className="font-bold text-[15px] text-black mt-1">
              {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(balance)}
            </span>
            <span className="text-[12px] text-black mt-0.5 font-medium">Kantong Utama</span>
          </div>
        </div>

        {/* GoPay */}
        <div className="bg-white rounded-[24px] p-4 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.03)] border border-gray-50 aspect-square">
          <div className="w-14 h-14 bg-[#00aede] rounded-full flex items-center justify-center">
            <div className="w-7 h-5 bg-white rounded-sm relative">
              <div className="absolute top-1 right-1 w-1 h-1 bg-[#00aede] rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <h3 className="font-bold text-[15px] text-gray-700 leading-tight">GoPay</h3>
            <span className="font-bold text-[13px] text-black mt-1">Hubungkan GoPay</span>
          </div>
        </div>

        {/* Deposito */}
        <div className="bg-white rounded-[24px] p-4 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.03)] border border-gray-50 aspect-square">
          <div className="relative w-14 h-14">
            <div className="w-full h-full bg-[#f6aa1c] rounded-full flex items-center justify-center text-3xl shadow-inner border border-[#d98f0e]">
              💰
            </div>
            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-[2px]">
              <div className="bg-[#ba39a7] rounded-full flex items-center justify-center p-0.5">
                <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <h3 className="font-bold text-[15px] text-gray-700 leading-tight">Deposito</h3>
            <span className="font-bold text-[14px] text-black mt-1">Hingga 6.25% p.a.</span>
            <span className="text-[11px] text-black mt-0.5 font-medium">Tap untuk buka deposito</span>
          </div>
        </div>

        {/* Stockbit Sekuritas */}
        <div className="bg-[#fcfaf5] rounded-[24px] p-4 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-[#f5f3eb] aspect-square">
          <div className="w-14 h-14 bg-[#232529] rounded-full flex items-center justify-center">
            <div className="w-6 h-4 border-b-2 border-l-2 border-white relative">
              <div className="absolute bottom-1 left-1 w-1 h-2 bg-[#00b050]"></div>
              <div className="absolute bottom-1 left-2.5 w-1 h-4 bg-white"></div>
              <div className="absolute bottom-1 left-4 w-1 h-3 bg-[#00b050]"></div>
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <h3 className="font-bold text-[15px] text-gray-700 leading-tight truncate">Stockbit Sekurita...</h3>
            <span className="font-bold text-[15px] text-black mt-1">Rp0</span>
            <span className="text-[12px] text-black mt-0.5 font-medium">Kantong RDN</span>
          </div>
        </div>

        {/* Emas */}
        <div className="bg-white rounded-[24px] p-4 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.03)] border border-gray-50 aspect-square">
          <div className="relative w-16 h-12 flex items-center justify-center">
             <div className="absolute bottom-0 w-12 h-6 bg-[#f6aa1c] rounded-sm transform skew-x-12 border-2 border-black rotate-[-10deg]"></div>
             <div className="absolute bottom-2 w-12 h-6 bg-[#ffc34d] rounded-sm transform skew-x-12 border-2 border-black rotate-[-10deg] shadow-lg"></div>
             <div className="absolute -top-1 -left-2 bg-black text-yellow-400 w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
               <span className="text-[10px] font-black">!</span>
             </div>
          </div>
          <div className="flex flex-col mt-4">
            <h3 className="font-bold text-[15px] text-gray-700 leading-tight">Emas</h3>
            <span className="font-bold text-[13px] text-black mt-1">Beli Emas Pertamamu!</span>
            <span className="text-[11px] text-black mt-0.5 font-medium">Tap untuk beli</span>
          </div>
        </div>

        {/* Buat Kantong */}
        <div className="bg-[#fdf3e5] rounded-[24px] p-4 flex flex-col items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-[#f7e6ce] aspect-square text-center">
          <div className="w-10 h-10 bg-[#f6aa1c] rounded-full flex items-center justify-center mb-3">
            <Plus className="w-6 h-6 text-black" strokeWidth={2.5} />
          </div>
          <span className="font-bold text-[15px] text-black">Buat Kantong</span>
        </div>

      </div>
    </div>
  );
}
