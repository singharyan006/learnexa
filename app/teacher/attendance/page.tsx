"use client";

import React from "react";

export default function TeacherAttendance() {
    const classes = [
        { id: "10A", name: "Grade 10-A English Literature", time: "09:00 AM - 10:15 AM", status: "Completed" },
        { id: "9C", name: "Grade 9-C Composition", time: "11:00 AM - 12:15 PM", status: "In Progress" },
        { id: "12B", name: "Grade 12-B Advanced Lit", time: "01:30 PM - 02:45 PM", status: "Upcoming" },
    ];

    const students = [
        { id: 1, name: "Alex Morgan", avatar: "AM", status: "Present" },
        { id: 2, name: "Bella Thorne", avatar: "BT", status: "Absent" },
        { id: 3, name: "Chris Ray", avatar: "CR", status: "Present" },
        { id: 4, name: "David Miller", avatar: "DM", status: "Present" },
        { id: 5, name: "Sophia Green", avatar: "SG", status: "Present" },
    ];

    return (
        <div className="space-y-8">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-white">Attendance Management</h2>
                    <p className="text-slate-400 font-medium">
                        Track and manage student presence across your classes.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 bg-[#151B2C] border border-[#1E293B] hover:bg-[#1E293B] rounded-xl text-sm font-bold text-slate-300 transition-all flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">calendar_month</span>
                        October 14, 2024
                    </button>
                    <button className="px-4 py-2 bg-[#4f46e5] text-white rounded-xl text-sm font-bold hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/20">
                        <span className="material-symbols-outlined text-lg">file_download</span>
                        Export Report
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Class List */}
                <div className="lg:col-span-1 space-y-4">
                    <h3 className="font-bold text-white px-2">Today&apos;s Classes</h3>
                    <div className="space-y-2">
                        {classes.map((cls) => (
                            <button
                                key={cls.id}
                                className={`w-full text-left p-4 rounded-2xl border transition-all ${cls.status === "In Progress"
                                    ? "bg-indigo-500/10 border-indigo-500/30 ring-2 ring-indigo-500/20"
                                    : "bg-[#151B2C] border-[#1E293B] hover:border-slate-700"
                                    }`}
                            >
                                <div className="flex justify-between items-start mb-1">
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${cls.status === "Completed" ? "bg-emerald-500/10 text-emerald-400" :
                                        cls.status === "In Progress" ? "bg-indigo-500/20 text-indigo-300" :
                                            "bg-[#0B1120] text-slate-400"
                                        }`}>
                                        {cls.status}
                                    </span>
                                    <span className="text-xs text-slate-500 font-bold">{cls.id}</span>
                                </div>
                                <h4 className="font-bold text-slate-200 text-sm">{cls.name}</h4>
                                <p className="text-xs text-slate-500 mt-1 flex items-center gap-1 font-medium">
                                    <span className="material-symbols-outlined text-xs">schedule</span>
                                    {cls.time}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Attendance Marker */}
                <div className="lg:col-span-3 bg-[#151B2C] rounded-3xl border border-[#1E293B] overflow-hidden shadow-sm">
                    <div className="p-6 border-b border-[#1E293B] flex items-center justify-between">
                        <div>
                            <h3 className="font-bold text-lg text-white">Mark Attendance</h3>
                            <p className="text-sm text-slate-400 font-medium font-bold uppercase tracking-wider">Grade 9-C Composition • 11:00 AM - 12:15 PM</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="px-4 py-2 text-xs font-bold bg-[#0B1120] text-slate-300 rounded-xl hover:bg-slate-800 transition-all border border-[#1E293B]">
                                Mark All Present
                            </button>
                            <button className="px-4 py-2 text-xs font-bold bg-[#4f46e5] text-white rounded-xl hover:opacity-90 transition-all shadow-lg shadow-indigo-500/20">
                                Save Changes
                            </button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#0B1120]/50 border-b border-[#1E293B]">
                                    <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Student</th>
                                    <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider text-center">Status</th>
                                    <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Notes</th>
                                    <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#1E293B]">
                                {students.map((student) => (
                                    <tr key={student.id} className="hover:bg-[#0B1120]/30 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-[10px] font-bold text-indigo-400">
                                                    {student.avatar}
                                                </div>
                                                <span className="font-bold text-sm text-slate-200">{student.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex justify-center gap-2">
                                                {["P", "A"].map((type) => (
                                                    <button
                                                        key={type}
                                                        className={`w-8 h-8 rounded-lg text-[10px] font-bold transition-all border ${(type === "P" && student.status === "Present") ? "bg-emerald-600 border-emerald-500 text-white" :
                                                            (type === "A" && student.status === "Absent") ? "bg-red-600 border-red-500 text-white" :
                                                                "bg-[#0B1120] border-[#1E293B] text-slate-500 hover:border-slate-600 hover:text-slate-400"
                                                            }`}
                                                    >
                                                        {type}
                                                    </button>
                                                ))}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <input
                                                type="text"
                                                placeholder="Add a note..."
                                                className="w-full bg-transparent text-sm text-slate-500 focus:outline-none placeholder:text-slate-700"
                                            />
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-slate-600 hover:text-[#4f46e5] transition-colors">
                                                <span className="material-symbols-outlined text-lg">history</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
