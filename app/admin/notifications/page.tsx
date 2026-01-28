"use client";

import React from "react";

export default function AdminNotificationsPage() {
    const notifications = [
        { id: 1, type: "Urgent", title: "Security Breach Attempt", description: "Multiple failed login attempts from IP 192.168.1.102 detected on Admin Portal.", time: "10m ago", icon: "security", color: "text-rose-400 bg-rose-500/10 border-rose-500/20" },
        { id: 2, type: "Update", title: "System Maintenance Scheduled", description: "ERP database migration and cloud sync scheduled for Sunday, 02:00 AM.", time: "2h ago", icon: "settings_suggest", color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20" },
        { id: 3, type: "Alert", title: "High Absenteeism - Grade 8B", description: "12 students marked absent today without prior reason. Alert sent to Class Teacher.", time: "4h ago", icon: "report", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
        { id: 4, type: "Info", title: "New Feature Available", description: "Parental fee tracking module now supports global transaction IDs and automated receipts.", time: "Yesterday", icon: "auto_awesome", color: "text-purple-400 bg-purple-500/10 border-purple-500/20" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h2 className="text-3xl font-display font-bold tracking-tight text-white uppercase">Notification Center</h2>
                    <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest mt-1">Real-time system alerts, security audits & updates</p>
                </div>
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-[#151B2C] border border-[#1E293B] rounded-2xl text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:bg-[#1E293B] hover:text-white transition-all">
                        <span className="material-symbols-outlined text-lg">done_all</span>
                        Mark All Read
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-[#151B2C] p-6 rounded-3xl border border-[#1E293B] shadow-sm flex items-center justify-between group cursor-pointer hover:border-[#4f46e5]/30 transition-all">
                    <div className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Unread Alerts</p>
                        <h4 className="text-2xl font-bold text-white">12</h4>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400">
                        <span className="material-symbols-outlined font-bold">campaign</span>
                    </div>
                </div>
                <div className="bg-[#151B2C] p-6 rounded-3xl border border-[#1E293B] shadow-sm flex items-center justify-between group cursor-pointer hover:border-[#4f46e5]/30 transition-all">
                    <div className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Systems Hub</p>
                        <h4 className="text-2xl font-bold text-emerald-400 italic">Operational</h4>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                        <span className="material-symbols-outlined font-bold">cloud_done</span>
                    </div>
                </div>
                <div className="bg-[#151B2C] p-6 rounded-3xl border border-[#1E293B] shadow-sm flex items-center justify-between group cursor-pointer hover:border-[#4f46e5]/30 transition-all">
                    <div className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Logs Sync</p>
                        <h4 className="text-2xl font-bold text-indigo-400 italic">Healthy</h4>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                        <span className="material-symbols-outlined font-bold">sync_saved_locally</span>
                    </div>
                </div>
            </div>

            <div className="bg-[#151B2C] p-8 rounded-[2.5rem] border border-[#1E293B] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8">
                    <div className="px-3 py-1 bg-[#0B1120] border border-[#1E293B] rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest italic flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></span>
                        Monitoring Live Feed
                    </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-10 tracking-tight">Security & Audit Timeline</h3>

                <div className="space-y-6 relative before:absolute before:left-[27px] before:top-4 before:bottom-4 before:w-px before:bg-[#1E293B]">
                    {notifications.map((notif) => (
                        <div key={notif.id} className="flex gap-6 relative group animate-in slide-in-from-right-2 duration-300">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border z-10 transition-all group-hover:scale-110 shadow-xl ${notif.color}`}>
                                <span className="material-symbols-outlined text-2xl">{notif.icon}</span>
                            </div>
                            <div className="flex-1 bg-[#0B1120]/30 p-6 rounded-[2rem] border border-[#1E293B] hover:border-[#4f46e5]/30 transition-all cursor-pointer">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                    <div className="flex items-center gap-3">
                                        <h5 className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">{notif.title}</h5>
                                        <span className={`px-2 py-0.5 rounded-lg text-[9px] font-bold uppercase tracking-widest border ${notif.color}`}>
                                            {notif.type}
                                        </span>
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest italic">{notif.time}</span>
                                </div>
                                <p className="text-sm text-slate-500 leading-relaxed font-medium">{notif.description}</p>
                                <div className="mt-4 flex items-center gap-4 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                                    <button className="hover:text-indigo-400 transition-colors">Audit Detail</button>
                                    <button className="hover:text-rose-400 transition-colors">Dismiss</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600 hover:text-[#4f46e5] hover:tracking-[0.5em] transition-all">Load Archive Records</button>
                </div>
            </div>
        </div>
    );
}
