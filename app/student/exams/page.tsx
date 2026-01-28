"use client";

import React from 'react';

export default function StudentExams() {
    const upcomingExams = [
        {
            id: 1,
            subject: "Organic Chemistry",
            date: "Oct 25, 2023",
            time: "09:00 AM",
            duration: "2h 30m",
            type: "Midterm",
            location: "Main Hall A",
            professor: "Dr. Michael Chen",
            daysLeft: 2,
            icon: "science",
            color: "from-orange-500 to-red-500",
            chapters: ["Hydrocarbons", "Alcohols", "Aldehydes"]
        },
        {
            id: 2,
            subject: "World Literature",
            date: "Oct 28, 2023",
            time: "11:30 AM",
            duration: "2h 00m",
            type: "Unit Test",
            location: "Room 102",
            professor: "Mrs. Emily Bronte",
            daysLeft: 5,
            icon: "menu_book",
            color: "from-emerald-500 to-teal-600",
            chapters: ["Romantic Era", "Victorian Poetry"]
        },
        {
            id: 3,
            subject: "Calculus BC",
            date: "Nov 02, 2023",
            time: "08:30 AM",
            duration: "3h 00m",
            type: "Final Exam",
            location: "Auditorium",
            professor: "Dr. Alan Turing",
            daysLeft: 10,
            icon: "calculate",
            color: "from-blue-500 to-primary",
            chapters: ["Integration", "Series", "Differential Equations"]
        }
    ];

    const pastResults = [
        { id: 4, subject: "Advanced Physics", date: "Oct 10, 2023", score: 92, maxScore: 100, grade: "A", icon: "bolt" },
        { id: 5, subject: "English Literature", date: "Oct 05, 2023", score: 88, maxScore: 100, grade: "A-", icon: "history_edu" },
        { id: 6, subject: "Modern History", date: "Sep 22, 2023", score: 74, maxScore: 100, grade: "B", icon: "public" },
        { id: 7, subject: "Computer Science", date: "Sep 15, 2023", score: 95, maxScore: 100, grade: "A+", icon: "code" },
    ];

    const avgScore = Math.round(pastResults.reduce((a, b) => a + b.score, 0) / pastResults.length);

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Premium Header */}
            <div className="relative bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 rounded-3xl p-8 text-text-heading overflow-hidden shadow-xl shadow-orange-500/20">
                <div className="absolute top-0 right-0 w-80 h-80 bg-surface-card/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-surface-card/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>

                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-card/20 rounded-full text-xs font-black mb-3 backdrop-blur-sm">
                            <span className="w-2 h-2 bg-surface-card rounded-full animate-pulse"></span>
                            {upcomingExams.length} UPCOMING
                        </div>
                        <h1 className="text-3xl font-black mb-2">Examination Portal</h1>
                        <p className="text-text-heading/70 text-sm max-w-md">
                            Next exam: <span className="font-black text-text-heading">{upcomingExams[0].subject}</span> in {upcomingExams[0].daysLeft} days
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">

                        <button className="px-5 py-2.5 bg-surface-card hover:bg-surface-card/20 text-text-heading rounded-xl text-sm font-black flex items-center gap-2 transition-all shadow-lg hover:scale-105">
                            <span className="material-symbols-outlined text-sm">school</span>
                            Study Resources
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { label: "Upcoming", value: upcomingExams.length, icon: "event_upcoming", color: "from-rose-500 to-pink-600" },
                    { label: "Completed", value: pastResults.length, icon: "task_alt", color: "from-emerald-500 to-teal-500" },
                    { label: "Avg Score", value: `${avgScore}%`, icon: "trending_up", color: "from-blue-500 to-primary" },
                    { label: "Best Grade", value: "A+", icon: "emoji_events", color: "from-amber-500 to-orange-500" },
                ].map((stat, idx) => (
                    <div key={idx} className={`bg-gradient-to-br ${stat.color} rounded-2xl p-5 text-text-heading shadow-lg relative overflow-hidden group hover:scale-105 transition-transform cursor-pointer`}>
                        <div className="absolute top-0 right-0 w-16 h-16 bg-surface-card/10 rounded-full -translate-y-1/2 translate-x-1/3"></div>
                        <span className="material-symbols-outlined text-2xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</span>
                        <p className="text-2xl font-black">{stat.value}</p>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-text-heading/70">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Upcoming Exams */}
            <div>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-black text-text-heading text-text-heading flex items-center gap-2">
                        <span className="material-symbols-outlined text-error">schedule</span>
                        Upcoming Exams
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {upcomingExams.map((exam) => (
                        <div key={exam.id} className="bg-surface-card dark:bg-surface-card rounded-2xl border border-surface-card dark:border-surface-card/50 overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group">
                            {/* Gradient Header */}
                            <div className={`bg-gradient-to-r ${exam.color} p-5 text-text-heading relative overflow-hidden`}>
                                <div className="absolute top-0 right-0 w-20 h-20 bg-surface-card/10 rounded-full -translate-y-1/2 translate-x-1/3"></div>
                                <div className="flex items-center justify-between relative z-10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-surface-card/20 rounded-xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined text-2xl">{exam.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="font-black">{exam.subject}</h3>
                                            <span className="text-xs font-bold bg-surface-card/20 px-2 py-0.5 rounded-full">{exam.type}</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-3xl font-black">{exam.daysLeft}</p>
                                        <p className="text-[10px] font-bold uppercase">days left</p>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center gap-2 text-sm text-text-placeholder">
                                        <span className="material-symbols-outlined text-sm text-primary">calendar_month</span>
                                        {exam.date}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-text-placeholder">
                                        <span className="material-symbols-outlined text-sm text-primary">schedule</span>
                                        {exam.time}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-text-placeholder">
                                        <span className="material-symbols-outlined text-sm text-primary">timer</span>
                                        {exam.duration}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-text-placeholder">
                                        <span className="material-symbols-outlined text-sm text-primary">location_on</span>
                                        {exam.location}
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-surface-card dark:border-surface-card">
                                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-2">Topics to Cover</p>
                                    <div className="flex flex-wrap gap-2">
                                        {exam.chapters.map((chapter, i) => (
                                            <span key={i} className="px-2 py-1 bg-slate-100 dark:bg-surface-sidebar rounded-lg text-[10px] font-bold text-text-placeholder dark:text-text-muted">
                                                {chapter}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <button className="w-full py-3 bg-background-main dark:bg-surface-sidebar text-text-heading font-black rounded-xl hover:bg-surface-card transition-all flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined text-sm">menu_book</span>
                                    Start Preparing
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Past Results */}
            <div>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-black text-text-heading text-text-heading flex items-center gap-2">
                        <span className="material-symbols-outlined text-success">fact_check</span>
                        Recent Results
                    </h2>
                    <button className="text-sm font-bold text-primary hover:underline">View All Results</button>
                </div>

                <div className="bg-surface-card dark:bg-surface-card rounded-2xl border border-surface-card dark:border-surface-card/50 overflow-hidden shadow-lg">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-slate-50 dark:bg-background-main/50 text-text-placeholder uppercase text-[10px] font-black tracking-widest border-b border-surface-card dark:border-surface-card">
                                    <th className="px-6 py-4 text-left">Subject</th>
                                    <th className="px-6 py-4 text-left">Date</th>
                                    <th className="px-6 py-4 text-center">Score</th>
                                    <th className="px-6 py-4 text-center">Grade</th>
                                    <th className="px-6 py-4 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                {pastResults.map((result) => (
                                    <tr key={result.id} className="hover:bg-surface-card/50 dark:hover:bg-surface-sidebar/30 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-primary">{result.icon}</span>
                                                </div>
                                                <span className="font-black text-text-heading text-text-heading">{result.subject}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-text-placeholder">{result.date}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-center gap-3">
                                                <div className="w-20 h-2 bg-slate-100 dark:bg-surface-sidebar rounded-full overflow-hidden">
                                                    <div className={`h-full rounded-full ${result.score >= 90 ? 'bg-success' : result.score >= 75 ? 'bg-primary' : 'bg-warning'}`} style={{ width: `${result.score}%` }}></div>
                                                </div>
                                                <span className="font-black text-sm">{result.score}/{result.maxScore}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className={`inline-flex items-center justify-center w-10 h-10 rounded-xl font-black text-sm ${result.grade.includes('A') ? 'bg-emerald-100 dark:bg-emerald-900/30 text-success' : 'bg-amber-100 dark:bg-amber-900/30 text-warning'}`}>
                                                {result.grade}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-xs font-bold hover:bg-primary hover:text-text-heading">
                                                View Report
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
