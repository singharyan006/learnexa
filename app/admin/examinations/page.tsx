"use client";

import React from "react";
import ExaminationsTable from "../components/ExaminationsTable";

export default function AdminExaminationsPage() {
    const examStats = [
        { label: "Active Exams", value: "4", icon: "pending_actions", color: "text-primary" },
        { label: "Pending Results", value: "12", icon: "grading", color: "text-amber-400" },
        { label: "Faculty Assigned", value: "45", icon: "badge", color: "text-emerald-400" },
        { label: "Schedule Conflicts", value: "0", icon: "event_busy", color: "text-rose-400" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h2 className="text-3xl font-display font-bold tracking-tight text-text-heading uppercase">Exam Management</h2>
                    <p className="text-text-muted font-bold uppercase text-[10px] tracking-widest mt-1">Institutional examination cycles & performance tracking</p>
                </div>
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-surface-card border border-[#1E293B] rounded-2xl text-[10px] font-bold text-text-muted uppercase tracking-widest hover:bg-surface-card hover:text-text-heading transition-all shadow-lg">
                        <span className="material-symbols-outlined text-lg">calendar_month</span>
                        Manage Calendar
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-primary text-text-heading rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:opacity-90 transition-all shadow-xl shadow-primary/20">
                        <span className="material-symbols-outlined text-lg">add_task</span>
                        Create Exam Cycle
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {examStats.map((stat, i) => (
                    <div key={i} className="bg-surface-card p-6 rounded-3xl border border-[#1E293B] shadow-sm hover:border-primary/30 transition-all group relative overflow-hidden">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-2">{stat.label}</p>
                                <h3 className={`text-2xl font-bold ${stat.color}`}>{stat.value}</h3>
                            </div>
                            <div className="w-12 h-12 rounded-2xl bg-background-main border border-[#1E293B] flex items-center justify-center text-text-muted group-hover:text-text-heading transition-all">
                                <span className="material-symbols-outlined text-xl">{stat.icon}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <ExaminationsTable />
                </div>
                <div className="space-y-6">
                    <div className="bg-surface-card p-8 rounded-3xl border border-[#1E293B] shadow-sm">
                        <h4 className="text-sm font-bold text-text-heading uppercase tracking-widest mb-6 px-2">Recently Completed</h4>
                        <div className="space-y-6">
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className="flex flex-col gap-2 p-4 bg-background-main/50 rounded-2xl border border-[#1E293B] hover:border-primary/30 transition-all cursor-pointer">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Chemistry Lab</span>
                                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Graded</span>
                                    </div>
                                    <h5 className="text-sm font-bold text-text-heading">Grade 11 • Section A</h5>
                                    <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Completed 2 days ago</p>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-8 py-3 text-[10px] font-bold uppercase tracking-widest text-primary hover:underline">View History</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
