"use client";

import React from "react";

export default function TeacherGradebook() {
    const assessments = [
        { id: 1, title: "Mid-Term Exam", weight: "30%", date: "Oct 05, 2024", avg: "78%" },
        { id: 2, title: "Creative Essay", weight: "15%", date: "Oct 12, 2024", avg: "82%" },
        { id: 3, title: "Poetry Analysis", weight: "10%", date: "Oct 18, 2024", avg: "-" },
        { id: 4, title: "Grammar Quiz", weight: "5%", date: "Oct 22, 2024", avg: "-" },
    ];

    const students = [
        { id: 1, name: "Alex Morgan", grades: ["85", "92", "78", "Pending"], total: "84.5%" },
        { id: 2, name: "Bella Thorne", grades: ["72", "88", "Pending", "Pending"], total: "80.0%" },
        { id: 3, name: "Chris Ray", grades: ["94", "95", "91", "Pending"], total: "93.3%" },
        { id: 4, name: "David Miller", grades: ["68", "74", "Pending", "Pending"], total: "71.0%" },
        { id: 5, name: "Sophia Green", grades: ["88", "90", "85", "Pending"], total: "87.7%" },
    ];

    return (
        <div className="space-y-8">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-white">Gradebook</h2>
                    <p className="text-slate-400 font-medium">
                        Manage results and track performance for Grade 10-A English.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <select className="px-4 py-2 bg-[#151B2C] border border-[#1E293B] rounded-xl text-sm font-bold text-slate-300 focus:outline-none transition-all">
                        <option>Grade 10-A English</option>
                        <option>Grade 9-C Composition</option>
                        <option>Grade 12-B Advanced Lit</option>
                    </select>
                    <button className="px-4 py-2 bg-[#4f46e5] text-white rounded-xl text-sm font-bold hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/20">
                        <span className="material-symbols-outlined text-lg">add</span>
                        New Assessment
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {assessments.map((item) => (
                    <div key={item.id} className="bg-[#151B2C] p-5 rounded-3xl border border-[#1E293B] shadow-sm relative overflow-hidden group hover:border-[#4f46e5]/50 transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 rounded-2xl bg-[#0B1120] flex items-center justify-center text-slate-500">
                                <span className="material-symbols-outlined text-xl">assignment</span>
                            </div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{item.weight} weight</span>
                        </div>
                        <h4 className="font-bold text-white mb-1 group-hover:text-[#4f46e5] transition-colors">{item.title}</h4>
                        <div className="flex justify-between items-center text-xs">
                            <p className="text-slate-500 font-bold uppercase">{item.date}</p>
                            <span className={`font-bold ${item.avg === "-" ? "text-slate-600" : "text-emerald-400"}`}>
                                {item.avg === "-" ? "Grading..." : `Avg: ${item.avg}`}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-[#151B2C] rounded-3xl border border-[#1E293B] overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#0B1120]/50 border-b border-[#1E293B]">
                                <th className="px-6 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Student Name</th>
                                {assessments.map(a => (
                                    <th key={a.id} className="px-4 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-wider text-center">
                                        {a.title.split(' ')[0]}
                                    </th>
                                ))}
                                <th className="px-6 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-wider text-right">Overall</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#1E293B]">
                            {students.map((student) => (
                                <tr key={student.id} className="hover:bg-[#0B1120]/30 transition-colors group">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-[#0B1120] border border-[#1E293B] flex items-center justify-center text-[10px] font-bold text-slate-400">
                                                {student.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <span className="font-bold text-sm text-slate-200">{student.name}</span>
                                        </div>
                                    </td>
                                    {student.grades.map((grade, idx) => (
                                        <td key={idx} className="px-4 py-4 text-center">
                                            {grade === "Pending" ? (
                                                <button className="px-3 py-1 text-[10px] font-bold text-[#4f46e5] bg-[#4f46e5]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                    Enter Grade
                                                </button>
                                            ) : (
                                                <span className="text-sm font-bold text-slate-300">{grade}</span>
                                            )}
                                        </td>
                                    ))}
                                    <td className="px-6 py-4 text-right">
                                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold bg-[#4f46e5]/10 text-[#4f46e5]">
                                            {student.total}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="flex justify-end gap-3 items-center">
                <button className="px-4 py-2 text-sm font-bold text-slate-500 hover:text-white transition-colors">
                    Discard Changes
                </button>
                <button className="px-8 py-2.5 bg-[#4f46e5] text-white rounded-xl text-sm font-bold hover:opacity-90 transition-all shadow-lg shadow-indigo-500/20">
                    Publish Grades
                </button>
            </div>
        </div>
    );
}
