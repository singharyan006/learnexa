"use client";

import React from "react";

export default function FeeCollectionChart() {
    const data = [
        { month: "JAN", amount: "$32K", height: "40%" },
        { month: "FEB", amount: "$45K", height: "60%" },
        { month: "MAR", amount: "$58K", height: "75%" },
        { month: "APR", amount: "$42K", height: "55%" },
        { month: "MAY", amount: "$82K", height: "90%" },
        { month: "JUN", amount: "$71K", height: "80%" },
    ];

    return (
        <div className="bg-[#151B2C] p-8 rounded-3xl shadow-sm border border-[#1E293B]">
            <div className="flex items-center justify-between mb-10">
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <h4 className="text-lg font-bold text-white tracking-tight">Fee Collection Trends</h4>
                    </div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Revenue Streams • FY 2023-24</p>
                </div>
                <div className="relative group">
                    <select className="appearance-none bg-[#0B1120] border border-[#1E293B] rounded-xl text-[10px] font-bold uppercase tracking-widest py-2.5 pl-4 pr-10 text-slate-300 outline-none focus:ring-1 focus:ring-[#4f46e5]/40 transition-all cursor-pointer">
                        <option>Current Year </option>
                        <option>Previous Year</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm pointer-events-none transition-colors group-hover:text-[#4f46e5]">expand_more</span>
                </div>
            </div>

            <div className="relative h-64 w-full px-2">
                {/* Grid lines */}
                <div className="absolute inset-x-0 h-full flex flex-col justify-between pointer-events-none py-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="w-full border-t border-[#1E293B]/50 border-dashed"></div>
                    ))}
                </div>

                <div className="absolute inset-0 flex items-end justify-between px-4 pb-1">
                    {data.map((item, index) => (
                        <div key={index} className="w-12 flex flex-col items-center group relative h-full justify-end">
                            <div
                                className="w-8 bg-[#4f46e5]/10 rounded-t-xl relative group-hover:bg-[#4f46e5]/20 transition-all cursor-crosshair border-x border-t border-white/5"
                                style={{ height: item.height }}
                            >
                                <div className="absolute inset-x-0 bottom-0 bg-[#4f46e5] h-[60%] rounded-t-xl shadow-[0_-4px_12px_rgba(79,70,229,0.3)] group-hover:shadow-[0_-4px_20px_rgba(79,70,229,0.5)] transition-all"></div>

                                {/* Tooltip */}
                                <div className="opacity-0 group-hover:opacity-100 absolute -top-12 left-1/2 -translate-x-1/2 bg-[#0B1120] border border-[#1E293B] text-white text-[10px] font-bold py-2 px-3 rounded-xl whitespace-nowrap z-30 transition-all pointer-events-none shadow-xl scale-90 group-hover:scale-100">
                                    <span className="text-slate-500 mr-1">{item.month}:</span>
                                    <span className="text-[#4f46e5]">{item.amount}</span>
                                </div>
                            </div>
                            <span className="text-[10px] text-slate-500 mt-4 font-bold uppercase tracking-[0.2em]">{item.month}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
