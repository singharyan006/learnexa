"use client";

import { useState } from "react";

interface Student {
    id: number;
    name: string;
    initials: string;
    initialsColor: string;
    status: "P" | "A" | "L" | null;
}

export default function CurrentClassAttendance() {
    const [students, setStudents] = useState<Student[]>([
        { id: 1, name: "Alex Morgan", initials: "AM", initialsColor: "bg-indigo-100 dark:bg-indigo-900/40 text-primary-teacher", status: null },
        { id: 2, name: "Bella Thorne", initials: "BT", initialsColor: "bg-teal-100 dark:bg-teal-900/40 text-teal-600", status: "P" },
        { id: 3, name: "Chris Ray", initials: "CR", initialsColor: "bg-rose-100 dark:bg-rose-900/40 text-rose-600", status: null },
    ]);

    const markAttendance = (studentId: number, status: "P" | "A" | "L") => {
        setStudents(students.map(s => s.id === studentId ? { ...s, status } : s));
    };

    return (
        <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/50 overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-700/50 flex items-center justify-between bg-primary-teacher/5">
                <div>
                    <span className="text-xs font-bold text-primary-teacher uppercase tracking-wider">
                        Current Class
                    </span>
                    <h3 className="text-lg font-bold">Grade 10-A English Literature</h3>
                </div>
                <div className="text-right">
                    <p className="text-xs text-slate-500 dark:text-slate-400">09:00 AM - 10:15 AM</p>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                        In Progress
                    </span>
                </div>
            </div>

            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold flex items-center gap-2">
                        <span className="material-symbols-outlined text-slate-400">checklist</span>
                        Mark Attendance
                    </h4>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 rounded-md hover:bg-slate-200 dark:hover:bg-slate-600">
                            Mark All Present
                        </button>
                    </div>
                </div>

                <div className="space-y-3">
                    {students.map((student) => (
                        <div
                            key={student.id}
                            className={`flex items-center justify-between p-3 rounded-xl border border-slate-100 dark:border-slate-700 ${student.id % 2 === 1 ? 'bg-slate-50/50 dark:bg-slate-800/50' : ''
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-full ${student.initialsColor} flex items-center justify-center font-bold text-xs`}>
                                    {student.initials}
                                </div>
                                <p className="text-sm font-medium">{student.name}</p>
                            </div>

                            <div className="flex gap-2">
                                <button
                                    onClick={() => markAttendance(student.id, "P")}
                                    className={`w-8 h-8 rounded-lg flex items-center justify-center hover:scale-110 transition-transform ${student.status === "P"
                                            ? "bg-emerald-600 text-white"
                                            : "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600"
                                        }`}
                                >
                                    P
                                </button>
                                <button
                                    onClick={() => markAttendance(student.id, "A")}
                                    className={`w-8 h-8 rounded-lg flex items-center justify-center hover:scale-110 transition-transform ${student.status === "A"
                                            ? "bg-red-600 text-white"
                                            : "bg-red-100 dark:bg-red-900/40 text-red-600"
                                        }`}
                                >
                                    A
                                </button>
                                <button
                                    onClick={() => markAttendance(student.id, "L")}
                                    className={`w-8 h-8 rounded-lg flex items-center justify-center hover:scale-110 transition-transform ${student.status === "L"
                                            ? "bg-amber-600 text-white"
                                            : "bg-amber-100 dark:bg-amber-900/40 text-amber-600"
                                        }`}
                                >
                                    L
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="w-full mt-6 py-2.5 bg-primary-teacher text-white font-semibold rounded-xl hover:bg-primary-teacher/90 transition-all shadow-md shadow-primary-teacher/20">
                    Submit Final Attendance
                </button>
            </div>
        </section>
    );
}
