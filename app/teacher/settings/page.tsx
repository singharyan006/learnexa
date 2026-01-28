"use client";

import React from "react";

export default function SettingsPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <header>
                <h2 className="text-2xl font-bold tracking-tight text-white">Settings</h2>
                <p className="text-slate-400 font-medium">Manage your profile, notifications, and preferences.</p>
            </header>

            <div className="grid gap-6">
                {/* Profile Section */}
                <section className="bg-[#151B2C] p-6 md:p-8 rounded-3xl border border-[#1E293B] shadow-sm">
                    <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-white">
                        <span className="material-symbols-outlined text-[#4f46e5]">person</span>
                        Profile Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                            <input
                                className="w-full px-4 py-3 bg-[#0B1120] border border-[#1E293B] rounded-xl text-sm outline-none focus:ring-1 focus:ring-[#4f46e5]/40 transition-all font-bold text-slate-200"
                                defaultValue="Sarah Johnson"
                                type="text"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                            <input
                                className="w-full px-4 py-3 bg-[#0B1120] border border-[#1E293B] rounded-xl text-sm outline-none focus:ring-1 focus:ring-[#4f46e5]/40 transition-all font-bold text-slate-200"
                                defaultValue="sarah.j@learnexa.edu"
                                type="email"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Department</label>
                            <input
                                className="w-full px-4 py-3 bg-[#0B1120] border border-[#1E293B] rounded-xl text-sm outline-none focus:ring-1 focus:ring-[#4f46e5]/40 transition-all font-bold text-slate-200"
                                defaultValue="Science"
                                type="text"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Role</label>
                            <input
                                className="w-full px-4 py-3 bg-[#0B1120] border border-[#1E293B] rounded-xl text-sm outline-none transition-all font-bold text-slate-500 cursor-not-allowed"
                                defaultValue="Department Lead"
                                type="text"
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="mt-8">
                        <button className="px-6 py-2.5 bg-[#4f46e5] text-white rounded-xl text-sm font-bold shadow-lg shadow-indigo-500/20 hover:opacity-90 transition-all">
                            Save Changes
                        </button>
                    </div>
                </section>

                {/* Notifications Section */}
                <section className="bg-[#151B2C] p-6 md:p-8 rounded-3xl border border-[#1E293B] shadow-sm">
                    <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-white">
                        <span className="material-symbols-outlined text-[#4f46e5]">notifications</span>
                        Notification Preferences
                    </h3>
                    <div className="space-y-4">
                        {[
                            { title: "Email Notifications", desc: "Receive daily summary of class activities.", enabled: true },
                            { title: "Student Submissions", desc: "Get notified when students submit assignments.", enabled: true },
                            { title: "Parent Messages", desc: "Direct messages from parents to your email.", enabled: false },
                            { title: "System Alerts", desc: "Important updates regarding the platform.", enabled: true },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between p-4 bg-[#0B1120]/50 border border-[#1E293B] rounded-2xl">
                                <div>
                                    <p className="text-sm font-bold text-slate-200">{item.title}</p>
                                    <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
                                </div>
                                <button className={`w-12 h-6 rounded-full transition-all relative ${item.enabled ? 'bg-[#4f46e5]' : 'bg-[#1E293B]'}`}>
                                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${item.enabled ? 'right-1' : 'left-1'}`}></div>
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Security Section */}
                <section className="bg-[#151B2C] p-6 md:p-8 rounded-3xl border border-[#1E293B] shadow-sm">
                    <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-white">
                        <span className="material-symbols-outlined text-[#4f46e5]">security</span>
                        Security
                    </h3>
                    <div className="space-y-4">
                        <button className="flex items-center gap-3 w-full p-4 bg-[#0B1120]/50 border border-[#1E293B] rounded-2xl hover:bg-[#1E293B]/50 transition-all text-left group">
                            <span className="material-symbols-outlined p-2 bg-[#151B2C] border border-[#1E293B] rounded-lg text-[#4f46e5] group-hover:bg-[#4f46e5] group-hover:text-white transition-all">lock</span>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-slate-200">Change Password</p>
                                <p className="text-xs text-slate-500 font-medium">Update your account password regularly.</p>
                            </div>
                            <span className="material-symbols-outlined text-slate-600">chevron_right</span>
                        </button>
                        <button className="flex items-center gap-3 w-full p-4 bg-[#0B1120]/50 border border-[#1E293B] rounded-2xl hover:bg-[#1E293B]/50 transition-all text-left group">
                            <span className="material-symbols-outlined p-2 bg-[#151B2C] border border-[#1E293B] rounded-lg text-[#4f46e5] group-hover:bg-[#4f46e5] group-hover:text-white transition-all">devices</span>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-slate-200">Active Sessions</p>
                                <p className="text-xs text-slate-500 font-medium">Monitor and manage where you are logged in.</p>
                            </div>
                            <span className="material-symbols-outlined text-slate-600">chevron_right</span>
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}
