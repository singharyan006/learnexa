"use client";

import React from "react";

export default function TeacherSchedule() {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const timeSlots = ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM"];

    const classes = [
        { day: "Monday", start: "09:00 AM", duration: "1.5h", name: "Grade 10-A English", room: "302", type: "Lecture", color: "indigo" },
        { day: "Monday", start: "11:00 AM", duration: "1h", name: "Grade 9-C Lit", room: "105", type: "Seminar", color: "emerald" },
        { day: "Tuesday", start: "08:30 AM", duration: "1h", name: "Grade 11-B Composition", room: "204", type: "Workshop", color: "amber" },
        { day: "Wednesday", start: "10:00 AM", duration: "2h", name: "Grade 12-A Advanced Lit", room: "Library Lab", type: "Exam Prep", color: "rose" },
        { day: "Thursday", start: "01:30 PM", duration: "1h", name: "Department Meeting", room: "Staff Lounge", type: "Admin", color: "slate" },
        { day: "Friday", start: "09:00 AM", duration: "1.5h", name: "Grade 10-A English", room: "302", type: "Lecture", color: "indigo" },
    ];

    return (
        <div className="space-y-8">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-white">My Academic Schedule</h2>
                    <p className="text-slate-400">
                        Weekly routine and class assignments.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 bg-[#151B2C] border border-[#1E293B] hover:bg-[#1E293B] rounded-xl text-sm font-bold text-slate-300 transition-all flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">print</span>
                        Print Schedule
                    </button>
                    <button className="px-4 py-2 bg-[#4f46e5] text-white rounded-xl text-sm font-bold hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/20">
                        <span className="material-symbols-outlined text-lg">add_circle</span>
                        Add Event
                    </button>
                </div>
            </header>

            <div className="bg-[#151B2C] rounded-3xl border border-[#1E293B] overflow-hidden shadow-sm">
                <div className="grid grid-cols-6 border-b border-[#1E293B]">
                    <div className="p-4 bg-[#0B1120]/50 border-r border-[#1E293B]"></div>
                    {days.map((day) => (
                        <div key={day} className="p-4 text-center font-bold text-sm text-slate-300 border-r border-[#1E293B] last:border-r-0">
                            {day}
                        </div>
                    ))}
                </div>

                <div className="relative">
                    {timeSlots.map((time) => (
                        <div key={time} className="grid grid-cols-6 h-28 border-b border-[#1E293B]/50 last:border-b-0">
                            <div className="p-4 text-right text-[10px] font-bold text-slate-500 border-r border-[#1E293B] bg-[#0B1120]/10">
                                {time}
                            </div>
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="border-r border-[#1E293B]/30 last:border-r-0 relative">
                                </div>
                            ))}
                        </div>
                    ))}

                    {/* Absolute positioned class cards */}
                    <div className="absolute inset-0 pointer-events-none p-1">
                        {/* Monday 9:00 AM */}
                        <div className="absolute top-[112px] left-[16.6%] w-[16.6%] p-1 pointer-events-auto">
                            <div className="bg-[#4f46e5]/10 border border-[#4f46e5]/30 rounded-xl p-3 h-[140px] hover:bg-[#4f46e5]/20 hover:border-[#4f46e5]/50 transition-all cursor-pointer group">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="w-2 h-2 rounded-full bg-[#4f46e5] animate-pulse"></span>
                                    <span className="text-[10px] font-bold text-[#4f46e5]">RM 302</span>
                                </div>
                                <h5 className="font-bold text-xs text-white line-clamp-2">Grade 10-A English</h5>
                                <p className="text-[10px] text-slate-400 mt-1 font-medium text-indigo-400">09:00 AM - 10:30 AM</p>
                            </div>
                        </div>

                        {/* Wednesday 10:00 AM */}
                        <div className="absolute top-[224px] left-[50%] w-[16.6%] p-1 pointer-events-auto">
                            <div className="bg-rose-500/10 border border-rose-500/30 rounded-xl p-3 h-[180px] hover:bg-rose-500/20 hover:border-rose-500/50 transition-all cursor-pointer group">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                                    <span className="text-[10px] font-bold text-rose-400">LIB LAB</span>
                                </div>
                                <h5 className="font-bold text-xs text-white line-clamp-2">Grade 12-A Advanced Lit</h5>
                                <p className="text-[10px] font-medium text-rose-400 mt-1">10:00 AM - 12:00 PM</p>
                            </div>
                        </div>

                        {/* Tuesday 8:30 AM */}
                        <div className="absolute top-[56px] left-[33.3%] w-[16.6%] p-1 pointer-events-auto">
                            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 h-[112px] hover:bg-amber-500/20 hover:border-amber-500/50 transition-all cursor-pointer group">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                                    <span className="text-[10px] font-bold text-amber-400">RM 204</span>
                                </div>
                                <h5 className="font-bold text-xs text-white line-clamp-2">Grade 11-B Composition</h5>
                                <p className="text-[10px] font-medium text-amber-400 mt-1">08:30 AM - 09:30 AM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#151B2C] p-6 rounded-3xl border border-[#1E293B] shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                            <span className="material-symbols-outlined">analytics</span>
                        </div>
                        <h4 className="font-bold text-white">Weekly Load</h4>
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between items-end">
                            <span className="text-sm font-medium text-slate-400">Total Hours</span>
                            <span className="text-2xl font-bold text-white">24h</span>
                        </div>
                        <div className="w-full bg-[#0B1120] h-2 rounded-full overflow-hidden">
                            <div className="bg-[#4f46e5] h-full w-[80%] rounded-full shadow-[0_0_8px_rgba(79,70,229,0.5)]"></div>
                        </div>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider text-indigo-400/80">80% of monthly average</p>
                    </div>
                </div>

                <div className="bg-[#151B2C] p-6 rounded-3xl border border-[#1E293B] shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                            <span className="material-symbols-outlined">meeting_room</span>
                        </div>
                        <h4 className="font-bold text-white">Next Class</h4>
                    </div>
                    <div className="space-y-1">
                        <h5 className="text-sm font-bold text-slate-200 truncate">Grade 9-C Composition</h5>
                        <p className="text-xs text-slate-500 font-medium">Starts in 45 minutes • Room 105</p>
                    </div>
                    <button className="w-full mt-4 py-2.5 text-xs font-bold text-emerald-400 bg-emerald-500/10 rounded-xl border border-emerald-500/20 hover:bg-emerald-500/20 transition-all">
                        Prepare Materials
                    </button>
                </div>

                <div className="bg-gradient-to-br from-[#4f46e5] to-[#3730a3] p-6 rounded-3xl shadow-lg relative overflow-hidden flex flex-col justify-center">
                    <div className="relative z-10 text-white">
                        <h4 className="font-bold text-lg mb-1">Administrative Duty</h4>
                        <p className="text-white/80 text-xs mb-4 font-medium">You have a staff meeting scheduled for Thursday afternoon.</p>
                        <button className="bg-white text-[#4f46e5] px-4 py-2 rounded-xl text-xs font-bold shadow-lg shadow-black/10 hover:bg-slate-50 transition-all">
                            View Agenda
                        </button>
                    </div>
                    <span className="material-symbols-outlined absolute -right-6 -bottom-6 text-9xl text-white/10 rotate-12">
                        event_note
                    </span>
                </div>
            </div>
        </div>
    );
}
