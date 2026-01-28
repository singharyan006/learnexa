"use client";

import React from "react";

export default function AdminSettingsPage() {
    const settingsCategories = [
        { id: "gen", label: "General", icon: "settings_accessibility", desc: "Basic school information & branding." },
        { id: "acad", label: "Academic", icon: "history_edu", desc: "Grade scales, terms, & subject codes." },
        { id: "usr", label: "Users & RBAC", icon: "manage_accounts", desc: "Admin, Faculty & Staff permissions." },
        { id: "sys", label: "System", icon: "dns", desc: "Cloud storage, API keys & backups." },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h2 className="text-3xl font-display font-bold tracking-tight text-white uppercase">System Configuration</h2>
                    <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest mt-1">Global ERP settings, security protocols & institutional data</p>
                </div>
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-[#4f46e5] text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:opacity-90 transition-all shadow-xl shadow-indigo-500/20">
                        <span className="material-symbols-outlined text-lg">save</span>
                        Commit Changes
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-1 space-y-3">
                    {settingsCategories.map((cat) => (
                        <div key={cat.id} className={`p-4 rounded-2xl border transition-all cursor-pointer group ${cat.id === 'gen' ? 'bg-indigo-500/10 border-indigo-500/20 text-white' : 'bg-[#151B2C] border-[#1E293B] text-slate-500 hover:border-slate-500'}`}>
                            <div className="flex items-center gap-4">
                                <span className={`material-symbols-outlined text-xl ${cat.id === 'gen' ? 'text-indigo-400' : 'group-hover:text-white'}`}>{cat.icon}</span>
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold uppercase tracking-wide">{cat.label}</span>
                                    <span className="text-[10px] font-medium opacity-60 mt-0.5">{cat.desc}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="lg:col-span-3 space-y-8">
                    <div className="bg-[#151B2C] p-8 rounded-[2rem] border border-[#1E293B] shadow-2xl">
                        <h4 className="text-lg font-bold text-white mb-8 tracking-tight">Institutional Profile</h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] px-2">School Identity Name</label>
                                <input className="w-full bg-[#0B1120] border border-[#1E293B] rounded-2xl py-3 px-4 text-sm font-bold text-slate-200 outline-none focus:ring-1 focus:ring-indigo-500/50" defaultValue="Learnexa Global Academy" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] px-2">Primary Contact Email</label>
                                <input className="w-full bg-[#0B1120] border border-[#1E293B] rounded-2xl py-3 px-4 text-sm font-bold text-slate-200 outline-none focus:ring-1 focus:ring-indigo-500/50" defaultValue="admin@learnexa.edu" />
                            </div>
                            <div className="space-y-2 lg:col-span-2">
                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] px-2">Campus Physical Address</label>
                                <textarea rows={3} className="w-full bg-[#0B1120] border border-[#1E293B] rounded-2xl py-3 px-4 text-sm font-bold text-slate-200 outline-none focus:ring-1 focus:ring-indigo-500/50" defaultValue="128/A, Innovation Tech Park, Silicon Valley, CA." />
                            </div>
                        </div>

                        <div className="mt-12 pt-12 border-t border-[#1E293B]">
                            <h4 className="text-lg font-bold text-white mb-8 tracking-tight">Security & Governance</h4>
                            <div className="space-y-6">
                                {[
                                    { label: "Two-Factor Authentication (Faculty)", state: true },
                                    { label: "Automatic Cloud Snapshot (Daily)", state: true },
                                    { label: "Public Directory Access", state: false },
                                ].map((s, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-[#0B1120]/50 rounded-2xl border border-[#1E293B]">
                                        <span className="text-sm font-bold text-slate-300">{s.label}</span>
                                        <div className={`w-12 h-6 rounded-full p-1 transition-all ${s.state ? 'bg-indigo-500' : 'bg-slate-700'}`}>
                                            <div className={`w-4 h-4 bg-white rounded-full transition-all ${s.state ? 'translate-x-6' : 'translate-x-0'}`}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
