"use client";

import React, { useState } from "react";

export default function AdminAttendancePage() {
    const stats = [
        { label: "Overall Attendance", value: "94.2%", trend: "+1.2%", color: "text-indigo-400" },
        { label: "Absent Today", value: "58", trend: "-4", color: "text-rose-400" },
        { label: "Faculty Present", value: "100%", trend: "Stable", color: "text-emerald-400" },
        { label: "Pending Logs", value: "3", trend: "Grade 5", color: "text-amber-400" },
    ];

    const attendanceData = [
        { id: 1, class: "Grade 10-A", teachers: "Dr. Sarah Connor", status: "Completed", count: "24/24", time: "09:15 AM", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
        { id: 2, class: "Grade 12-B", teachers: "Robert Miller", status: "Completed", count: "30/32", time: "08:45 AM", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
        { id: 3, class: "Grade 9-C", teachers: "Emma Watson", status: "In Progress", count: "18/22", time: "Live", color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" },
        { id: 4, class: "Grade 5", teachers: "John Wick", status: "Pending", count: "0/28", time: "Scheduled", color: "bg-slate-500/10 text-slate-400 border-slate-500/20" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h2 className="text-3xl font-display font-bold tracking-tight text-white uppercase">Attendance Command Center</h2>
                    <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest mt-1">Real-time daily reporting & absenteeism monitoring</p>
                </div>
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-[#151B2C] border border-[#1E293B] rounded-2xl text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:bg-[#1E293B] hover:text-white transition-all shadow-lg">
                        <span className="material-symbols-outlined text-lg">description</span>
                        Monthly Report
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-[#151B2C] border border-[#1E293B] rounded-2xl text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:bg-[#1E293B] hover:text-white transition-all shadow-lg">
                        <span className="material-symbols-outlined text-lg">send</span>
                        Notify Parents
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-[#151B2C] p-6 rounded-3xl border border-[#1E293B] shadow-sm hover:border-[#4f46e5]/30 transition-all group">
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">{stat.label}</p>
                        <div className="flex items-end justify-between">
                            <h3 className={`text-2xl font-bold ${stat.color}`}>{stat.value}</h3>
                            <span className={`text-[10px] font-bold px-2 py-1 rounded-lg bg-white/5 ${stat.trend.startsWith('+') || stat.trend === 'Stable' ? 'text-emerald-400' : 'text-rose-400'}`}>
                                {stat.trend}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-[#151B2C] rounded-[2rem] border border-[#1E293B] overflow-hidden shadow-2xl">
                <div className="p-8 border-b border-[#1E293B] bg-[#151B2C] flex items-center justify-between">
                    <div>
                        <h4 className="text-lg font-bold text-white tracking-tight">Daily Roll Call Status</h4>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Live Tracking by Class & Faculty</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">System Online</span>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-[#0B1120]/50 text-slate-500 text-[10px] uppercase tracking-[0.2em] font-bold">
                            <tr>
                                <th className="px-8 py-5">Academic Standard</th>
                                <th className="px-8 py-5">Assigned Faculty</th>
                                <th className="px-8 py-5">Completion Log</th>
                                <th className="px-8 py-5">Report Status</th>
                                <th className="px-8 py-5">Submited At</th>
                                <th className="px-8 py-5 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#1E293B]">
                            {attendanceData.map((data) => (
                                <tr key={data.id} className="hover:bg-[#0B1120]/30 transition-all group">
                                    <td className="px-8 py-6 font-bold text-slate-200">{data.class}</td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold text-[10px]">
                                                {data.teachers.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <span className="text-sm font-medium text-slate-400 group-hover:text-slate-200 transition-colors">{data.teachers}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-sm font-bold text-slate-300 italic">{data.count} Students</td>
                                    <td className="px-8 py-6">
                                        <span className={`px-3 py-1.5 rounded-lg text-[10px] font-bold border ${data.color}`}>
                                            {data.status.toUpperCase()}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-sm font-bold text-slate-500">{data.time}</td>
                                    <td className="px-8 py-6 text-right">
                                        <button className="p-2.5 bg-[#0B1120] border border-[#1E293B] rounded-xl text-slate-500 hover:text-[#4f46e5] hover:border-[#4f46e5]/50 transition-all">
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
    );
}
