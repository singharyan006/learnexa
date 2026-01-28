"use client";

import { useState } from "react";

interface Student {
    id: number;
    name: string;
    initials: string;
    initialsColor: string;
    status: "P" | "A" | null;
}

export default function CurrentClassAttendance() {
    const [students, setStudents] = useState<Student[]>([
        { id: 1, name: "Alex Morgan", initials: "AM", initialsColor: "bg-indigo-100 dark:bg-indigo-900/40 text-primary-teacher", status: null },
        { id: 2, name: "Bella Thorne", initials: "BT", initialsColor: "bg-teal-100 dark:bg-teal-900/40 text-teal-600", status: "P" },
        { id: 3, name: "Chris Ray", initials: "CR", initialsColor: "bg-rose-100 dark:bg-rose-900/40 text-rose-600", status: null },
    ]);

    const markAttendance = (studentId: number, status: "P" | "A") => {
        setStudents(students.map(s => s.id === studentId ? { ...s, status } : s));
    };

    return (
        <section className="bg-[#151B2C] rounded-2xl shadow-sm border border-[#1E293B] overflow-hidden">
            <div className="p-6 border-b border-[#1E293B] flex items-center justify-between bg-primary-teacher/10">
                <div>
                    <span className="text-xs font-bold text-primary-teacher uppercase tracking-wider">
                        Current Class
                    </span>
                    <h3 className="text-lg font-bold">Grade 10-A English Literature</h3>
                </div>
                <div className="text-right">
                    <p className="text-xs text-slate-400">09:00 AM - 10:15 AM</p>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        In Progress
                    </span>
                </div>
            </div>

            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold flex items-center gap-2">
                        <span className="material-symbols-outlined text-slate-500 text-sm">checklist</span>
                        Mark Attendance
                    </h4>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 text-[10px] font-bold bg-[#1E293B] text-slate-300 rounded-lg hover:bg-[#2D3748] transition-colors">
                            Mark All Present
                        </button>
                    </div>
                </div>

                <div className="space-y-3">
                    {students.map((student) => (
                        <div
                            key={student.id}
                            className={`flex items-center justify-between p-3 rounded-xl border border-[#1E293B] ${student.id % 2 === 1 ? 'bg-[#1E293B]/30' : ''
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
                                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold hover:scale-110 transition-transform ${student.status === "P"
                                        ? "bg-emerald-600 text-white"
                                        : "bg-emerald-900/20 text-emerald-500 border border-emerald-900/30"
                                        }`}
                                >
                                    P
                                </button>
                                <button
                                    onClick={() => markAttendance(student.id, "A")}
                                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold hover:scale-110 transition-transform ${student.status === "A"
                                        ? "bg-red-600 text-white"
                                        : "bg-red-900/20 text-red-500 border border-red-900/30"
                                        }`}
                                >
                                    A
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
