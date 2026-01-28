"use client";

import React from "react";

export default function SettingsPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <header>
                <h2 className="text-2xl font-bold tracking-tight text-text-heading">Settings</h2>
                <p className="text-text-muted font-medium">Manage your profile, notifications, and preferences.</p>
            </header>

            <div className="grid gap-6">
                {/* Profile Section */}
                <section className="bg-surface-card p-6 md:p-8 rounded-3xl border border-surface-card shadow-sm">
                    <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-text-heading">
                        <span className="material-symbols-outlined text-primary">person</span>
                        Profile Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-text-placeholder uppercase tracking-wider">Full Name</label>
                            <input
                                className="w-full px-4 py-3 bg-background-main border border-surface-card rounded-xl text-sm outline-none focus:ring-1 focus:ring-primary/40 transition-all font-bold text-text-heading"
                                defaultValue="Sarah Johnson"
                                type="text"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-text-placeholder uppercase tracking-wider">Email Address</label>
                            <input
                                className="w-full px-4 py-3 bg-background-main border border-surface-card rounded-xl text-sm outline-none focus:ring-1 focus:ring-primary/40 transition-all font-bold text-text-heading"
                                defaultValue="sarah.j@learnexa.edu"
                                type="email"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-text-placeholder uppercase tracking-wider">Department</label>
                            <input
                                className="w-full px-4 py-3 bg-background-main border border-surface-card rounded-xl text-sm outline-none focus:ring-1 focus:ring-primary/40 transition-all font-bold text-text-heading"
                                defaultValue="Science"
                                type="text"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-text-placeholder uppercase tracking-wider">Role</label>
                            <input
                                className="w-full px-4 py-3 bg-background-main border border-surface-card rounded-xl text-sm outline-none transition-all font-bold text-text-placeholder cursor-not-allowed"
                                defaultValue="Department Lead"
                                type="text"
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="mt-8">
                        <button className="px-6 py-2.5 bg-primary text-text-heading rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-all">
                            Save Changes
                        </button>
                    </div>
                </section>

                {/* Notifications Section */}
                <section className="bg-surface-card p-6 md:p-8 rounded-3xl border border-surface-card shadow-sm">
                    <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-text-heading">
                        <span className="material-symbols-outlined text-primary">notifications</span>
                        Notification Preferences
                    </h3>
                    <div className="space-y-4">
                        {[
                            { title: "Email Notifications", desc: "Receive daily summary of class activities.", enabled: true },
                            { title: "Student Submissions", desc: "Get notified when students submit assignments.", enabled: true },
                            { title: "Parent Messages", desc: "Direct messages from parents to your email.", enabled: false },
                            { title: "System Alerts", desc: "Important updates regarding the platform.", enabled: true },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between p-4 bg-background-main/50 border border-surface-card rounded-2xl">
                                <div>
                                    <p className="text-sm font-bold text-text-heading">{item.title}</p>
                                    <p className="text-xs text-text-placeholder font-medium">{item.desc}</p>
                                </div>
                                <button className={`w-12 h-6 rounded-full transition-all relative ${item.enabled ? 'bg-primary' : 'bg-surface-sidebar'}`}>
                                    <div className={`absolute top-1 w-4 h-4 bg-surface-card rounded-full transition-all ${item.enabled ? 'right-1' : 'left-1'}`}></div>
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Security Section */}
                <section className="bg-surface-card p-6 md:p-8 rounded-3xl border border-surface-card shadow-sm">
                    <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-text-heading">
                        <span className="material-symbols-outlined text-primary">security</span>
                        Security
                    </h3>
                    <div className="space-y-4">
                        <button className="flex items-center gap-3 w-full p-4 bg-background-main/50 border border-surface-card rounded-2xl hover:bg-surface-sidebar/50 transition-all text-left group">
                            <span className="material-symbols-outlined p-2 bg-surface-card border border-surface-card rounded-lg text-primary group-hover:bg-primary group-hover:text-text-heading transition-all">lock</span>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-text-heading">Change Password</p>
                                <p className="text-xs text-text-placeholder font-medium">Update your account password regularly.</p>
                            </div>
                            <span className="material-symbols-outlined text-text-placeholder">chevron_right</span>
                        </button>
                        <button className="flex items-center gap-3 w-full p-4 bg-background-main/50 border border-surface-card rounded-2xl hover:bg-surface-sidebar/50 transition-all text-left group">
                            <span className="material-symbols-outlined p-2 bg-surface-card border border-surface-card rounded-lg text-primary group-hover:bg-primary group-hover:text-text-heading transition-all">devices</span>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-text-heading">Active Sessions</p>
                                <p className="text-xs text-text-placeholder font-medium">Monitor and manage where you are logged in.</p>
                            </div>
                            <span className="material-symbols-outlined text-text-placeholder">chevron_right</span>
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}
