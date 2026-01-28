"use client";

import Image from "next/image";

export default function AdminHeader() {
    return (
        <header className="flex items-center justify-between mb-8">
            <div className="flex items-center flex-1">
                <div className="relative w-full max-w-md group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xl group-focus-within:text-[#4f46e5] transition-colors">
                        search
                    </span>
                    <input
                        className="w-full bg-[#151B2C] border border-[#1E293B] rounded-2xl py-3 pl-12 pr-4 text-sm focus:ring-1 focus:ring-[#4f46e5]/40 text-slate-200 outline-none transition-all placeholder:text-slate-600 font-medium"
                        placeholder="Search records, reports, or IDs..."
                        type="text"
                    />
                </div>
            </div>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                    <button className="p-2.5 rounded-xl bg-[#151B2C] border border-[#1E293B] text-slate-400 hover:text-white hover:border-slate-600 transition-all relative group">
                        <span className="material-symbols-outlined text-xl">notifications</span>
                        <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-[#151B2C]"></span>
                    </button>
                    <button className="p-2.5 rounded-xl bg-[#151B2C] border border-[#1E293B] text-slate-400 hover:text-white hover:border-slate-600 transition-all">
                        <span className="material-symbols-outlined text-xl">settings</span>
                    </button>
                </div>

                <div className="h-8 w-px bg-[#1E293B]"></div>

                <div className="flex items-center gap-3 pl-2">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-bold text-slate-200 leading-none">Admin Principal</p>
                        <p className="text-[10px] font-bold text-[#4f46e5] uppercase tracking-widest mt-1">
                            Super Admin
                        </p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-[#151B2C] border border-[#1E293B] p-0.5 group cursor-pointer hover:border-[#4f46e5]/50 transition-all">
                        <Image
                            alt="User Profile"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSUgWZkcIFE-ZrEtZwUMKgTAZjdnYKyP-Rn2zWWUeoJX_vaq5FjAbAdAUCDDOU_NtlN6MPXwa4fwS3_30XAMhJBkYHzXH5UXPoRhFu-9hRpvE0XxoxaxcEuWbKEim9_q0Vv8AMyvnyJhH3L4xHcFesYVtIOov8ymUxfI_GY9R5TwahEUM4dgQdrK_yKdLQDimojsRSkavqiEuTOuodtYGibegRrbDXP6bQnqA67JnFb_s7p47lOGjBg80iyGhjubpblf4259wo4vQ"
                            width={40}
                            height={40}
                            className="w-full h-full object-cover rounded-[10px]"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
