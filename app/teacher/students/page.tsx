"use client";

import React, { useState } from "react";
import NextImage from "next/image";

export default function StudentsPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const students = [
        { id: 1, name: "Alex Morgan", roll: "10-A-01", grade: "10-A", gpa: "3.8", status: "Active", avatar: "AM", color: "bg-indigo-100 text-indigo-600" },
        { id: 2, name: "Bella Thorne", roll: "10-A-02", grade: "10-A", gpa: "3.9", status: "Active", avatar: "BT", color: "bg-teal-100 text-teal-600" },
        { id: 3, name: "Chris Ray", roll: "10-A-03", grade: "10-A", gpa: "3.5", status: "Active", avatar: "CR", color: "bg-rose-100 text-rose-600" },
        { id: 4, name: "David Miller", roll: "10-A-04", grade: "10-A", gpa: "3.2", status: "Warning", avatar: "DM", color: "bg-amber-100 text-amber-600" },
        { id: 5, name: "Emma Wilson", roll: "10-A-05", grade: "10-A", gpa: "4.0", status: "Active", avatar: "EW", color: "bg-emerald-100 text-emerald-600" },
    ];

    const filteredStudents = students.filter(s =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.roll.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-white">Student Directory</h2>
                    <p className="text-slate-400 font-medium">View and manage students across all your classes.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#151B2C] border border-[#1E293B] rounded-xl text-sm font-bold text-slate-300 hover:bg-[#1E293B] transition-all">
                        <span className="material-symbols-outlined text-lg">download</span>
                        Export List
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#4f46e5] text-white rounded-xl text-sm font-bold hover:opacity-90 transition-all shadow-lg shadow-indigo-500/20">
                        <span className="material-symbols-outlined text-lg">person_add</span>
                        Add Student
                    </button>
                </div>
            </header>

            <div className="bg-[#151B2C] rounded-3xl border border-[#1E293B] overflow-hidden shadow-sm">
                <div className="p-4 border-b border-[#1E293B] flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="relative flex-1 max-w-md">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">
                            search
                        </span>
                        <input
                            className="w-full pl-10 pr-4 py-2 bg-[#0B1120] border border-[#1E293B] rounded-xl text-sm focus:ring-1 focus:ring-primary-teacher/30 text-slate-200 outline-none transition-all placeholder:text-slate-600"
                            placeholder="Search by name or roll number..."
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        <select className="bg-[#0B1120] border border-[#1E293B] rounded-xl text-sm px-4 py-2 text-slate-300 outline-none font-bold">
                            <option>All Classes</option>
                            <option>Grade 10-A</option>
                            <option>Grade 9-C</option>
                            <option>Grade 12-B</option>
                        </select>
                        <select className="bg-[#0B1120] border border-[#1E293B] rounded-xl text-sm px-4 py-2 text-slate-300 outline-none font-bold">
                            <option>All Status</option>
                            <option>Active</option>
                            <option>Warning</option>
                            <option>Inactive</option>
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-[#0B1120]/50 text-slate-500 text-[10px] uppercase tracking-wider font-bold">
                            <tr>
                                <th className="px-6 py-4">Student Name</th>
                                <th className="px-6 py-4">Roll Number</th>
                                <th className="px-6 py-4">Class</th>
                                <th className="px-6 py-4">Current GPA</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#1E293B]">
                            {filteredStudents.length > 0 ? (
                                filteredStudents.map((student) => (
                                    <tr key={student.id} className="hover:bg-[#0B1120]/30 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-9 h-9 rounded-full ${student.color.replace('indigo-100', 'indigo-500/10').replace('teal-100', 'teal-500/10').replace('rose-100', 'rose-500/10').replace('amber-100', 'amber-500/10').replace('emerald-100', 'emerald-500/10').replace('text-indigo-600', 'text-indigo-400').replace('text-teal-600', 'text-teal-400').replace('text-rose-600', 'text-rose-400').replace('text-amber-600', 'text-amber-400').replace('text-emerald-600', 'text-emerald-400')} flex items-center justify-center font-bold text-xs`}>
                                                    {student.avatar}
                                                </div>
                                                <span className="text-sm font-bold text-slate-200">{student.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-500 font-bold">{student.roll}</td>
                                        <td className="px-6 py-4">
                                            <span className="px-2.5 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold rounded-lg uppercase">
                                                {student.grade}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-slate-300">{student.gpa}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${student.status === "Active"
                                                ? "bg-emerald-500/10 text-emerald-400"
                                                : "bg-amber-500/10 text-amber-400"
                                                }`}>
                                                {student.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2 text-slate-500">
                                                <button className="p-2 hover:bg-[#0B1120] rounded-lg transition-all hover:text-indigo-400">
                                                    <span className="material-symbols-outlined text-lg">visibility</span>
                                                </button>
                                                <button className="p-2 hover:bg-[#0B1120] rounded-lg transition-all hover:text-indigo-400">
                                                    <span className="material-symbols-outlined text-lg">edit</span>
                                                </button>
                                                <button className="p-2 hover:bg-rose-500/10 rounded-lg transition-all hover:text-rose-500">
                                                    <span className="material-symbols-outlined text-lg">delete</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="px-6 py-20 text-center text-slate-500">
                                        <div className="flex flex-col items-center gap-3">
                                            <span className="material-symbols-outlined text-5xl opacity-20">person_search</span>
                                            <p className="font-bold">No students found matching your search.</p>
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
