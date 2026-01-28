"use client";

import React from 'react';

export default function StudentGrades() {
    const grades = [
        { subject: "Advanced Physics", code: "PHY401", grade: "A", points: "4.0", percentage: 92, icon: "bolt", trend: "+3%" },
        { subject: "Calculus BC", code: "MAT302", grade: "A-", points: "3.7", percentage: 89, icon: "calculate", trend: "+1%" },
        { subject: "Organic Chemistry", code: "CHM205", grade: "B+", points: "3.3", percentage: 86, icon: "science", trend: "-2%" },
        { subject: "World Literature", code: "LIT102", grade: "A", points: "4.0", percentage: 94, icon: "menu_book", trend: "+5%" },
        { subject: "Modern History", code: "HIS201", grade: "B", points: "3.0", percentage: 78, icon: "public", trend: "+2%" },
        { subject: "Computer Science", code: "CSC301", grade: "A+", points: "4.0", percentage: 98, icon: "code", trend: "+4%" },
    ];

    const currentGPA = 3.68;
    const targetGPA = 4.0;
    const gpaProgress = (currentGPA / targetGPA) * 100;

    const semesterData = [
        { semester: "Sem 1", gpa: 3.4 },
        { semester: "Sem 2", gpa: 3.5 },
        { semester: "Sem 3", gpa: 3.6 },
        { semester: "Sem 4", gpa: 3.68 },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Premium Header */}
            <div className="relative bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl p-8 text-white overflow-hidden shadow-xl shadow-emerald-500/20">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>

                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-xs font-black mb-3 backdrop-blur-sm">
                            <span className="material-symbols-outlined text-sm">school</span>
                            ACADEMIC YEAR 2023-24
                        </div>
                        <h1 className="text-3xl font-black mb-2">Academic Performance</h1>
                        <p className="text-white/70 text-sm max-w-md">
                            Your current GPA is <span className="font-black text-white">{currentGPA}</span> — keep up the great work!
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">

                        <button className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-900 rounded-xl text-sm font-black flex items-center gap-2 transition-all shadow-lg hover:scale-105">
                            <span className="material-symbols-outlined text-sm">share</span>
                            Share Results
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { label: "Current GPA", value: currentGPA, icon: "stars", color: "from-emerald-500 to-teal-500" },
                    { label: "Credits Earned", value: "48", icon: "school", color: "from-blue-500 to-indigo-600" },
                    { label: "Class Rank", value: "#15", icon: "leaderboard", color: "from-amber-500 to-orange-500" },
                    { label: "Top Subject", value: "A+", icon: "emoji_events", color: "from-rose-500 to-pink-600" },
                ].map((stat, idx) => (
                    <div key={idx} className={`bg-gradient-to-br ${stat.color} rounded-2xl p-5 text-white shadow-lg relative overflow-hidden group hover:scale-105 transition-transform cursor-pointer`}>
                        <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3"></div>
                        <span className="material-symbols-outlined text-2xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</span>
                        <p className="text-2xl font-black">{stat.value}</p>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-white/70">{stat.label}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* GPA Progress & Trend */}
                <div className="lg:col-span-1 space-y-6">
                    {/* GPA Gauge */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700/50 shadow-lg">
                        <h3 className="font-black text-lg mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-emerald-500">speed</span>
                            GPA Progress
                        </h3>
                        <div className="relative w-40 h-40 mx-auto mb-6">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="12" fill="none" className="text-slate-100 dark:text-slate-700" />
                                <circle cx="80" cy="80" r="70" stroke="url(#gradient)" strokeWidth="12" fill="none" strokeLinecap="round" strokeDasharray={`${gpaProgress * 4.4} 440`} className="transition-all duration-1000" />
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#10b981" />
                                        <stop offset="100%" stopColor="#06b6d4" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <p className="text-4xl font-black text-slate-900 dark:text-white">{currentGPA}</p>
                                <p className="text-xs font-bold text-slate-400">of {targetGPA}</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-slate-500">You're in the <span className="font-black text-emerald-500">Top 15%</span> of your class</p>
                        </div>
                    </div>

                    {/* Semester Trend */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700/50 shadow-lg">
                        <h3 className="font-black text-lg mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-blue-500">trending_up</span>
                            GPA Trend
                        </h3>
                        <div className="flex items-end justify-between gap-2 h-32">
                            {semesterData.map((sem, idx) => (
                                <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                                    <div className="relative w-full flex justify-center">
                                        <div
                                            className="w-8 bg-gradient-to-t from-primary-teacher to-indigo-400 rounded-t-lg shadow-lg transition-all duration-1000 hover:scale-110 cursor-pointer"
                                            style={{ height: `${(sem.gpa / 4) * 100}px` }}
                                        ></div>
                                    </div>
                                    <span className="text-[10px] font-black text-slate-400">{sem.semester}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Subject Grades */}
                <div className="lg:col-span-2">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700/50 overflow-hidden shadow-lg">
                        <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
                            <h2 className="font-black text-lg flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary-teacher">format_list_numbered</span>
                                Subject Performance
                            </h2>
                            <span className="text-xs font-bold px-3 py-1 bg-primary-teacher/10 text-primary-teacher rounded-full">
                                {grades.length} Subjects
                            </span>
                        </div>

                        <div className="divide-y divide-slate-100 dark:divide-slate-700">
                            {grades.map((grade, idx) => (
                                <div key={idx} className="p-5 hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-all group cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        {/* Icon */}
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${grade.grade.startsWith('A') ? 'bg-gradient-to-br from-emerald-500 to-teal-600' : 'bg-gradient-to-br from-blue-500 to-indigo-600'} text-white group-hover:scale-110 transition-transform`}>
                                            <span className="material-symbols-outlined">{grade.icon}</span>
                                        </div>

                                        {/* Info */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <h4 className="font-black text-slate-900 dark:text-white">{grade.subject}</h4>
                                                <span className="text-[10px] px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded-full text-slate-500 font-bold">{grade.code}</span>
                                            </div>
                                            <div className="flex items-center gap-3 mt-2">
                                                <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full rounded-full transition-all duration-1000 ${grade.percentage >= 90 ? 'bg-gradient-to-r from-emerald-500 to-teal-500' : grade.percentage >= 80 ? 'bg-gradient-to-r from-blue-500 to-indigo-500' : 'bg-gradient-to-r from-amber-500 to-orange-500'}`}
                                                        style={{ width: `${grade.percentage}%` }}
                                                    ></div>
                                                </div>
                                                <span className="text-sm font-black text-slate-500">{grade.percentage}%</span>
                                            </div>
                                        </div>

                                        {/* Grade Badge */}
                                        <div className="text-center">
                                            <span className={`inline-flex items-center justify-center w-12 h-12 rounded-xl font-black text-lg ${grade.grade.includes('A') ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600' : 'bg-amber-100 dark:bg-amber-900/30 text-amber-600'}`}>
                                                {grade.grade}
                                            </span>
                                        </div>

                                        {/* Trend */}
                                        <div className={`text-right ${grade.trend.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                                            <span className="material-symbols-outlined text-sm">{grade.trend.startsWith('+') ? 'trending_up' : 'trending_down'}</span>
                                            <p className="text-xs font-black">{grade.trend}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
