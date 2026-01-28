"use client";

import React, { useState } from 'react';

export default function StudentSchedule() {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    const dates = [19, 20, 21, 22, 23];
    const [activeDay, setActiveDay] = useState(0);

    const scheduleData: Record<number, any[]> = {
        0: [
            { id: 1, time: "08:30 AM", endTime: "09:45 AM", title: "Biology Class", location: "Room 302", professor: "Prof. Sarah White", icon: "biotech", color: "bg-indigo-500", type: "Lecture" },
            { id: 2, time: "10:00 AM", endTime: "11:15 AM", title: "Calculus BC", location: "Room 105", professor: "Dr. Alan Turing", icon: "calculate", color: "bg-blue-500", type: "Lecture" },
            { id: 10, time: "11:15 AM", endTime: "12:00 PM", title: "Lunch Break", location: "Cafeteria", icon: "restaurant", color: "bg-orange-400", isBreak: true },
            { id: 3, time: "12:15 PM", endTime: "01:30 PM", title: "English Literature", location: "Library Hall", professor: "Mrs. Emily Bronte", icon: "menu_book", color: "bg-emerald-500", type: "Seminar" }
        ],
        1: [
            { id: 4, time: "09:00 AM", endTime: "10:30 AM", title: "Organic Chemistry", location: "Lab 04", professor: "Dr. Michael Chen", icon: "science", color: "bg-orange-500", type: "Lab" },
            { id: 5, time: "11:00 AM", endTime: "12:30 PM", title: "World History", location: "Room 201", professor: "Mr. Jack Thorne", icon: "history_edu", color: "bg-purple-500", type: "Lecture" }
        ],
        2: [
            { id: 6, time: "08:30 AM", endTime: "09:45 AM", title: "Biology Class", location: "Room 302", professor: "Prof. Sarah White", icon: "biotech", color: "bg-indigo-500", type: "Lecture" },
            { id: 7, time: "10:00 AM", endTime: "11:15 AM", title: "Calculus BC", location: "Room 105", professor: "Dr. Alan Turing", icon: "calculate", color: "bg-blue-500", type: "Lecture" }
        ],
        3: [
            { id: 8, time: "09:00 AM", endTime: "10:30 AM", title: "Organic Chemistry", location: "Lab 04", professor: "Dr. Michael Chen", icon: "science", color: "bg-orange-500", type: "Lab" }
        ],
        4: [
            { id: 9, time: "10:00 AM", endTime: "11:15 AM", title: "Physical Education", location: "Main Gym", professor: "Coach Carter", icon: "fitness_center", color: "bg-rose-500", type: "Practical" }
        ]
    };

    const totalClasses = Object.values(scheduleData).flat().filter(s => !s.isBreak).length;

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Premium Header */}
            <div className="relative bg-gradient-to-r from-primary-teacher via-indigo-500 to-purple-600 rounded-3xl p-8 text-white overflow-hidden shadow-xl shadow-indigo-500/20">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>

                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-xs font-black mb-3 backdrop-blur-sm">
                            <span className="material-symbols-outlined text-sm">calendar_month</span>
                            WEEK 8 • OCT 2023
                        </div>
                        <h1 className="text-3xl font-black mb-2">Weekly Schedule</h1>
                        <p className="text-white/70 text-sm max-w-md">
                            You have <span className="font-black text-white">{totalClasses} classes</span> this week across all subjects
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <button className="px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl text-sm font-bold flex items-center gap-2 transition-all border border-white/20">
                            <span className="material-symbols-outlined text-sm">chevron_left</span>
                            Previous
                        </button>
                        <button className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-900 rounded-xl text-sm font-black flex items-center gap-2 transition-all shadow-lg hover:scale-105">
                            <span className="material-symbols-outlined text-sm">chevron_right</span>
                            Next Week
                        </button>
                    </div>
                </div>
            </div>

            {/* Week Navigator */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700/50 overflow-hidden shadow-lg">
                <div className="grid grid-cols-5">
                    {days.map((day, idx) => (
                        <button
                            key={day}
                            onClick={() => setActiveDay(idx)}
                            className={`py-6 flex flex-col items-center gap-2 transition-all relative ${activeDay === idx
                                ? 'bg-primary-teacher text-white'
                                : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/30'
                                }`}
                        >
                            <span className="text-xs font-black uppercase tracking-wider">{day}</span>
                            <span className={`w-10 h-10 flex items-center justify-center rounded-full text-lg font-black ${activeDay === idx ? 'bg-white/20' : ''
                                }`}>
                                {dates[idx]}
                            </span>
                            <div className="flex items-center gap-1">
                                {(scheduleData[idx] || []).filter(s => !s.isBreak).slice(0, 3).map((_, i) => (
                                    <span key={i} className={`w-1.5 h-1.5 rounded-full ${activeDay === idx ? 'bg-white/60' : 'bg-slate-300 dark:bg-slate-600'}`}></span>
                                ))}
                            </div>
                        </button>
                    ))}
                </div>

                {/* Day Content */}
                <div className="p-6 md:p-8 border-t border-slate-100 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-black text-lg flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary-teacher">event</span>
                            {days[activeDay]}, October {dates[activeDay]}
                        </h3>
                        <span className="text-xs font-bold px-3 py-1 bg-primary-teacher/10 text-primary-teacher rounded-full">
                            {(scheduleData[activeDay] || []).filter(s => !s.isBreak).length} Classes
                        </span>
                    </div>

                    <div className="space-y-4">
                        {(scheduleData[activeDay] || []).length > 0 ? (
                            (scheduleData[activeDay] || []).map((item) => (
                                <div
                                    key={item.id}
                                    className={`relative flex flex-col md:flex-row md:items-center gap-4 p-5 rounded-2xl ${item.isBreak
                                        ? 'bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800/30'
                                        : 'bg-slate-50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700/50'
                                        } hover:shadow-lg hover:-translate-y-0.5 transition-all group cursor-pointer`}
                                >
                                    {/* Time */}
                                    <div className="md:w-28 flex items-center gap-3">
                                        <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                                            <span className="material-symbols-outlined">{item.icon}</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="font-black text-slate-900 dark:text-white">{item.title}</h4>
                                            {item.type && (
                                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white dark:bg-slate-800 text-slate-500 font-black border border-slate-200 dark:border-slate-600">
                                                    {item.type}
                                                </span>
                                            )}
                                        </div>
                                        {!item.isBreak && (
                                            <p className="text-xs text-slate-500 dark:text-slate-400">{item.professor}</p>
                                        )}
                                    </div>

                                    {/* Time & Location */}
                                    <div className="flex flex-col items-end gap-1 text-right">
                                        <p className="text-sm font-black text-slate-900 dark:text-white">{item.time} - {item.endTime}</p>
                                        <p className="text-xs text-slate-500 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-xs">location_on</span>
                                            {item.location}
                                        </p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="py-16 flex flex-col items-center justify-center text-slate-400">
                                <div className="w-20 h-20 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mb-4">
                                    <span className="material-symbols-outlined text-4xl">event_busy</span>
                                </div>
                                <p className="font-black text-lg text-slate-500 mb-1">No Classes Today!</p>
                                <p className="text-sm">Enjoy your free time</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { label: "Total Classes", value: totalClasses, icon: "school", color: "from-indigo-500 to-purple-600" },
                    { label: "Lab Sessions", value: "3", icon: "science", color: "from-orange-500 to-red-500" },
                    { label: "Attendance", value: "94.5%", icon: "check_circle", color: "from-emerald-500 to-teal-500" },
                    { label: "Next Exam", value: "2 days", icon: "quiz", color: "from-rose-500 to-pink-600" },
                ].map((stat, idx) => (
                    <div key={idx} className={`bg-gradient-to-br ${stat.color} rounded-2xl p-5 text-white shadow-lg relative overflow-hidden group hover:scale-105 transition-transform cursor-pointer`}>
                        <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3"></div>
                        <span className="material-symbols-outlined text-2xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</span>
                        <p className="text-2xl font-black">{stat.value}</p>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-white/70">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
