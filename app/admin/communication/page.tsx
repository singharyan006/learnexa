"use client";

import React from "react";

export default function AdminCommunicationPage() {
    const channels = [
        { name: "WhatsApp Broadcast", icon: "chat", count: "1,240 Parents", status: "Active", color: "bg-emerald-500/10 text-emerald-400" },
        { name: "Global Email", icon: "mail", count: "85 Faculty", status: "Ready", color: "bg-indigo-500/10 text-indigo-400" },
        { name: "SMS Gateway", icon: "sms", count: "12,450 Monthly", status: "Online", color: "bg-amber-500/10 text-amber-400" },
        { name: "App Notifications", icon: "notifications_active", count: "2,400 Users", status: "Active", color: "bg-purple-500/10 text-purple-400" },
    ];

    const recentCampaigns = [
        { title: "Winter Vacation Notice", date: "Jan 12, 2024", channel: "WhatsApp", delivery: "98.2%", status: "Sent" },
        { title: "Fee Reminders (Grade 10)", date: "Jan 10, 2024", channel: "SMS", delivery: "94.5%", status: "Sent" },
        { title: "Monthly Newsletter", date: "Jan 05, 2024", channel: "Email", delivery: "92.0%", status: "Sent" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h2 className="text-3xl font-display font-bold tracking-tight text-white uppercase">Central Communication</h2>
                    <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest mt-1">Multi-channel broadcast & stakeholder engagement hub</p>
                </div>
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-[#4f46e5] text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:opacity-90 transition-all shadow-xl shadow-indigo-500/20">
                        <span className="material-symbols-outlined text-lg">campaign</span>
                        New Broadcast
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {channels.map((channel, i) => (
                    <div key={i} className="bg-[#151B2C] p-6 rounded-3xl border border-[#1E293B] shadow-sm hover:border-[#4f46e5]/30 transition-all group cursor-pointer relative overflow-hidden">
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-2xl ${channel.color} flex items-center justify-center border border-white/5`}>
                                <span className="material-symbols-outlined text-xl">{channel.icon}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-bold text-slate-200 truncate">{channel.name}</h4>
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">{channel.count}</p>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center justify-between border-t border-[#1E293B] pt-4">
                            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">System Status:</span>
                            <span className={`text-[10px] font-bold uppercase tracking-widest ${channel.color.split(' ')[1]}`}>{channel.status}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <div className="bg-[#151B2C] rounded-[2rem] border border-[#1E293B] overflow-hidden shadow-2xl">
                        <div className="p-8 border-b border-[#1E293B] flex items-center justify-between bg-[#151B2C]">
                            <h4 className="text-lg font-bold text-white tracking-tight">Recent Broadcast Logs</h4>
                            <button className="text-[10px] font-bold text-[#4f46e5] uppercase tracking-widest hover:underline">Download Transit Report</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-[#0B1120]/50 text-slate-500 text-[10px] uppercase tracking-[0.2em] font-bold">
                                    <tr>
                                        <th className="px-8 py-5">Campaign Title</th>
                                        <th className="px-8 py-5">Channel</th>
                                        <th className="px-8 py-5">Success Rate</th>
                                        <th className="px-8 py-5">Date Sent</th>
                                        <th className="px-8 py-5 text-right">Preview</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#1E293B]">
                                    {recentCampaigns.map((camp, i) => (
                                        <tr key={i} className="hover:bg-[#0B1120]/30 transition-all group">
                                            <td className="px-8 py-6">
                                                <span className="text-sm font-bold text-slate-200 group-hover:text-indigo-400 transition-colors cursor-pointer">{camp.title}</span>
                                            </td>
                                            <td className="px-8 py-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{camp.channel}</td>
                                            <td className="px-8 py-6">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex-1 h-1.5 w-12 bg-[#0B1120] rounded-full overflow-hidden">
                                                        <div className="bg-emerald-400 h-full rounded-full" style={{ width: camp.delivery }}></div>
                                                    </div>
                                                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">{camp.delivery}</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest">{camp.date}</td>
                                            <td className="px-8 py-6 text-right">
                                                <button className="p-2.5 bg-[#0B1120] border border-[#1E293B] rounded-xl text-slate-500 hover:text-white transition-all">
                                                    <span className="material-symbols-outlined text-sm">visibility</span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="bg-[#151B2C] p-8 rounded-3xl border border-[#1E293B] flex flex-col items-center text-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center text-[#4f46e5] mb-6 border border-white/5">
                        <span className="material-symbols-outlined text-3xl">insights</span>
                    </div>
                    <h5 className="text-white font-bold mb-2 uppercase tracking-tight">Parental Engagement</h5>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed mb-6">Average response rate increased by 15% this academic quarter through WhatsApp automation.</p>
                    <div className="w-full h-2 bg-[#0B1120] rounded-full overflow-hidden mb-2">
                        <div className="bg-[#4f46e5] h-full w-[85%] rounded-full shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Target: 95% Reach</span>
                </div>
            </div>
        </div>
    );
}
