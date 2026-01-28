"use client";

import React, { useState } from "react";

export default function AdminStudentsPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const students = [
        { id: 1, name: "Alex Morgan", roll: "10-A-01", grade: "10-A", gpa: "3.8", status: "Active", avatar: "AM", color: "bg-primary/10 text-primary" },
        { id: 2, name: "Bella Thorne", roll: "10-A-02", grade: "10-A", gpa: "3.9", status: "Active", avatar: "BT", color: "bg-teal-500/10 text-teal-400" },
        { id: 3, name: "Chris Ray", roll: "10-A-03", grade: "10-A", gpa: "3.5", status: "Active", avatar: "CR", color: "bg-error/10 text-rose-400" },
        { id: 4, name: "David Miller", roll: "10-A-04", grade: "10-A", gpa: "3.2", status: "Warning", avatar: "DM", color: "bg-warning/10 text-amber-400" },
        { id: 5, name: "Emma Wilson", roll: "10-A-05", grade: "10-A", gpa: "4.0", status: "Active", avatar: "EW", color: "bg-success/10 text-emerald-400" },
        { id: 6, name: "Fannie Lou", roll: "9-C-12", grade: "9-C", gpa: "3.7", status: "Active", avatar: "FL", color: "bg-primary/10 text-primary" },
    ];

    const filteredStudents = students.filter(s =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.roll.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h2 className="text-3xl font-display font-bold tracking-tight text-text-heading uppercase">Student Master Registry</h2>
                    <p className="text-text-placeholder font-bold uppercase text-[10px] tracking-widest mt-1">Centralized Student Management & Record Maintenance</p>
                </div>
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-surface-card border border-surface-card rounded-2xl text-[10px] font-bold text-text-muted uppercase tracking-widest hover:bg-surface-sidebar hover:text-text-heading transition-all shadow-lg">
                        <span className="material-symbols-outlined text-lg">cloud_download</span>
                        Export Records
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-primary text-text-heading rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:opacity-90 transition-all shadow-xl shadow-primary/20 translate-y-0 active:translate-y-1">
                        <span className="material-symbols-outlined text-lg">person_add</span>
                        New Admission
                    </button>
                </div>
            </header>

            <div className="bg-surface-card rounded-[2rem] border border-surface-card overflow-hidden shadow-2xl">
                <div className="p-6 border-b border-surface-card flex flex-col md:flex-row md:items-center justify-between gap-6 bg-surface-card">
                    <div className="relative flex-1 max-w-md group">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-placeholder text-lg group-focus-within:text-primary transition-colors">
                            search
                        </span>
                        <input
                            className="w-full pl-12 pr-4 py-3 bg-background-main border border-surface-card rounded-[1.25rem] text-sm focus:ring-1 focus:ring-primary/40 text-text-heading outline-none transition-all placeholder:text-text-placeholder font-medium"
                            placeholder="Find by name, admission ID, or roll number..."
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold text-text-placeholder uppercase tracking-widest">Filter:</span>
                            <select className="bg-background-main border border-surface-card rounded-xl text-[10px] font-bold px-4 py-2.5 text-text-muted outline-none hover:border-primary/30 transition-all uppercase tracking-widest">
                                <option>All Departments</option>
                                <option>Science</option>
                                <option>Commerce</option>
                                <option>Arts</option>
                            </select>
                        </div>
                        <select className="bg-background-main border border-surface-card rounded-xl text-[10px] font-bold px-4 py-2.5 text-text-muted outline-none hover:border-primary/30 transition-all uppercase tracking-widest">
                            <option>Registration Year</option>
                            <option>2023</option>
                            <option>2024</option>
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-background-main/50 text-text-placeholder text-[10px] uppercase tracking-[0.2em] font-bold">
                            <tr>
                                <th className="px-8 py-5">Full Name & Profile</th>
                                <th className="px-8 py-5">System ID</th>
                                <th className="px-8 py-5">Current Standard</th>
                                <th className="px-8 py-5">Performance Index</th>
                                <th className="px-8 py-5">Lifecycle Status</th>
                                <th className="px-8 py-5 text-right">Operations</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#1E293B]">
                            {filteredStudents.length > 0 ? (
                                filteredStudents.map((student) => (
                                    <tr key={student.id} className="hover:bg-background-main/30 transition-all group cursor-pointer">
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-10 h-10 rounded-xl ${student.color} flex items-center justify-center font-bold text-xs ring-4 ring-transparent group-hover:ring-primary/10 transition-all`}>
                                                    {student.avatar}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-bold text-text-heading group-hover:text-text-heading transition-colors">{student.name}</span>
                                                    <span className="text-[10px] text-text-placeholder font-bold uppercase mt-0.5 tracking-tighter">Student Profile #SR77{student.id}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5 text-sm text-text-placeholder font-bold">{student.roll}</td>
                                        <td className="px-8 py-5">
                                            <span className="px-3 py-1.5 bg-primary/10 text-primary text-[10px] font-bold rounded-lg uppercase tracking-wider border border-primary/20">
                                                {student.grade}
                                            </span>
                                        </td>
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-2">
                                                <div className="flex-1 h-1.5 w-16 bg-background-main rounded-full overflow-hidden">
                                                    <div className="bg-primary h-full rounded-full" style={{ width: `${(parseFloat(student.gpa) / 4) * 100}%` }}></div>
                                                </div>
                                                <span className="text-[10px] font-bold text-text-muted">{student.gpa} GPA</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5">
                                            <span className={`px-3 py-1.5 rounded-lg text-[10px] font-bold border ${student.status === "Active"
                                                ? "bg-success/10 text-emerald-400 border-emerald-500/20"
                                                : "bg-warning/10 text-amber-400 border-amber-500/20"
                                                }`}>
                                                {student.status.toUpperCase()}
                                            </span>
                                        </td>
                                        <td className="px-8 py-5 text-right">
                                            <div className="flex items-center justify-end gap-3 text-text-placeholder">
                                                <button title="View Report" className="p-2.5 bg-background-main border border-surface-card rounded-xl hover:text-text-heading hover:border-slate-500 transition-all shadow-sm">
                                                    <span className="material-symbols-outlined text-sm">analytics</span>
                                                </button>
                                                <button title="Modify Account" className="p-2.5 bg-background-main border border-surface-card rounded-xl hover:text-primary hover:border-primary/50 transition-all shadow-sm">
                                                    <span className="material-symbols-outlined text-sm">edit_note</span>
                                                </button>
                                                <button title="Archive Student" className="p-2.5 bg-background-main border border-surface-card rounded-xl hover:text-rose-400 hover:border-rose-400/50 transition-all shadow-sm">
                                                    <span className="material-symbols-outlined text-sm">archive</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="px-8 py-32 text-center text-text-placeholder">
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="w-20 h-20 rounded-full bg-background-main border border-surface-card flex items-center justify-center mb-2">
                                                <span className="material-symbols-outlined text-4xl opacity-20">person_search</span>
                                            </div>
                                            <p className="font-bold text-text-muted uppercase tracking-widest text-xs">No entries found matching your query</p>
                                            <button onClick={() => setSearchTerm("")} className="text-primary text-[10px] font-bold uppercase tracking-widest hover:underline">Clear Search Filter</button>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
