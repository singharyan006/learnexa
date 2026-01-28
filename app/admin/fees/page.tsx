"use client";

import React from "react";
import FeeCollectionChart from "../components/FeeCollectionChart";

export default function AdminFeesPage() {
    const feeAlerts = [
        { label: "Total Outstanding", value: "$12,450", color: "text-rose-400" },
        { label: "Collected Today", value: "$4,200", color: "text-emerald-400" },
        { label: "Pending Approvals", value: "8", color: "text-amber-400" },
    ];

    const RecentFees = [
        { name: "John Doe", class: "Grade 10", amount: "$450", status: "Paid", method: "Online", time: "2m ago" },
        { name: "Emma Smith", class: "Grade 8", amount: "$320", status: "Paid", method: "Cash", time: "15m ago" },
        { name: "Mark Wilson", class: "Grade 12", amount: "$580", status: "Bank", method: "Transfer", time: "1h ago" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h2 className="text-3xl font-display font-bold tracking-tight text-white uppercase">Finance & Fee Control</h2>
                    <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest mt-1">Institutional revenue management & scholarship oversight</p>
                </div>
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-[#151B2C] border border-[#1E293B] rounded-2xl text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:bg-[#1E293B] hover:text-white transition-all shadow-lg">
                        <span className="material-symbols-outlined text-lg">payments</span>
                        Bulk Collection
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-[#4f46e5] text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:opacity-90 transition-all shadow-xl shadow-indigo-500/20">
                        <span className="material-symbols-outlined text-lg">receipt_long</span>
                        Generate Invoices
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <FeeCollectionChart />
                </div>
                <div className="space-y-6">
                    <div className="bg-[#151B2C] p-8 rounded-3xl border border-[#1E293B] shadow-sm">
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-8 px-2">Financial Snapshot</h4>
                        <div className="space-y-8">
                            {feeAlerts.map((alert, i) => (
                                <div key={i} className="flex items-center justify-between px-2">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{alert.label}</p>
                                        <h3 className={`text-2xl font-bold ${alert.color}`}>{alert.value}</h3>
                                    </div>
                                    <div className="w-1.5 h-12 bg-white/5 rounded-full overflow-hidden">
                                        <div className={`w-full bg-current ${alert.color} opacity-50 h-2/3 rounded-full mt-auto`}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-10 py-3 bg-[#0B1120] border border-[#1E293B] rounded-2xl text-[10px] font-bold uppercase tracking-widest text-[#4f46e5] hover:bg-[#4f46e5] hover:text-white transition-all shadow-lg">
                            Financial Audit 2024
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-[#151B2C] rounded-[2rem] border border-[#1E293B] overflow-hidden shadow-2xl">
                <div className="p-8 border-b border-[#1E293B] flex items-center justify-between bg-[#151B2C]">
                    <div>
                        <h4 className="text-lg font-bold text-white tracking-tight">Recent Transactions</h4>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Live incoming payment streams</p>
                    </div>
                    <button className="text-[10px] font-bold text-[#4f46e5] uppercase tracking-widest hover:underline">View All Ledger</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-[#0B1120]/50 text-slate-500 text-[10px] uppercase tracking-[0.2em] font-bold">
                            <tr>
                                <th className="px-8 py-5">Payer Details</th>
                                <th className="px-8 py-5">Amount</th>
                                <th className="px-8 py-5">Payment Method</th>
                                <th className="px-8 py-5">Verification</th>
                                <th className="px-8 py-5">Applied At</th>
                                <th className="px-8 py-5 text-right">Receipt</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#1E293B]">
                            {RecentFees.map((fee, i) => (
                                <tr key={i} className="hover:bg-[#0B1120]/30 transition-all group">
                                    <td className="px-8 py-6">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-slate-200">{fee.name}</span>
                                            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">{fee.class}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-sm font-bold text-emerald-400">{fee.amount}</td>
                                    <td className="px-8 py-6">
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-white/5 px-2 py-1 rounded-lg border border-white/5">{fee.method}</span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Confirmed</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest">{fee.time}</td>
                                    <td className="px-8 py-6 text-right">
                                        <button className="p-2.5 bg-[#0B1120] border border-[#1E293B] rounded-xl text-slate-500 hover:text-white transition-all">
                                            <span className="material-symbols-outlined text-sm">print</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
