"use client";

import React, { useState } from "react";

export default function AssignmentsPage() {
    const assignments = [
        { id: 1, title: "Macbeth Act I Analysis", class: "Grade 10-A", dueDate: "Oct 20, 2024", submissions: 24, total: 30, status: "Active", type: "Essay" },
        { id: 2, title: "Creative Writing: Fate", class: "Grade 10-A", dueDate: "Oct 22, 2024", submissions: 12, total: 30, status: "Draft", type: "Creative" },
        { id: 3, title: "Grammar Quiz: Punctuation", class: "Grade 9-C", dueDate: "Oct 18, 2024", submissions: 28, total: 28, status: "Closed", type: "Quiz" },
        { id: 4, title: "Poetry Recitation", class: "Grade 12-B", dueDate: "Oct 25, 2024", submissions: 0, total: 25, status: "Active", type: "Performance" },
    ];

    return (
        <div className="space-y-6">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-white">Assignments</h2>
                    <p className="text-slate-400 font-medium">Create and manage assessments for your students.</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-2.5 bg-[#4f46e5] text-white rounded-xl text-sm font-bold hover:opacity-90 transition-all shadow-lg shadow-indigo-500/20">
                    <span className="material-symbols-outlined text-lg">add_task</span>
                    Create Assignment
                </button>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <div className="bg-[#151B2C] p-6 rounded-3xl border border-[#1E293B] shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-sm font-bold text-slate-500">Total Active</p>
                        <h3 className="text-2xl font-bold mt-1 text-white">12</h3>
                    </div>
                    <div className="w-12 h-12 bg-indigo-500/10 text-indigo-400 rounded-2xl flex items-center justify-center">
                        <span className="material-symbols-outlined">assignment</span>
                    </div>
                </div>
                <div className="bg-[#151B2C] p-6 rounded-3xl border border-[#1E293B] shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-sm font-bold text-slate-500">To Grade</p>
                        <h3 className="text-2xl font-bold mt-1 text-white">45</h3>
                    </div>
                    <div className="w-12 h-12 bg-amber-500/10 text-amber-400 rounded-2xl flex items-center justify-center">
                        <span className="material-symbols-outlined">pending_actions</span>
                    </div>
                </div>
                <div className="bg-[#151B2C] p-6 rounded-3xl border border-[#1E293B] shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-sm font-bold text-slate-500">Average Score</p>
                        <h3 className="text-2xl font-bold mt-1 text-white">78%</h3>
                    </div>
                    <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center">
                        <span className="material-symbols-outlined">analytics</span>
                    </div>
                </div>
            </div>

            <div className="bg-[#151B2C] rounded-3xl border border-[#1E293B] overflow-hidden shadow-sm">
                <div className="p-6 border-b border-[#1E293B]">
                    <h3 className="font-bold text-lg text-white">Recent Assignments</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-[#0B1120]/50 text-slate-500 text-[10px] uppercase tracking-wider font-bold">
                            <tr>
                                <th className="px-6 py-4">Title & Type</th>
                                <th className="px-6 py-4">Class</th>
                                <th className="px-6 py-4">Due Date</th>
                                <th className="px-6 py-4">Submissions</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#1E293B]">
                            {assignments.map((assignment) => (
                                <tr key={assignment.id} className="hover:bg-[#0B1120]/30 transition-colors">
                                    <td className="px-6 py-4">
                                        <div>
                                            <p className="text-sm font-bold text-slate-200">{assignment.title}</p>
                                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{assignment.type}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-slate-500">{assignment.class}</td>
                                    <td className="px-6 py-4 text-sm text-slate-500 font-bold uppercase">{assignment.dueDate}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="flex-1 h-1.5 w-16 bg-[#0B1120] rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-[#4f46e5]"
                                                    style={{ width: `${(assignment.submissions / assignment.total) * 100}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-[10px] font-bold text-slate-400">{assignment.submissions}/{assignment.total}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-lg text-[10px] font-bold ${assignment.status === "Active"
                                            ? "bg-emerald-500/10 text-emerald-400"
                                            : assignment.status === "Draft"
                                                ? "bg-slate-500/10 text-slate-400"
                                                : "bg-rose-500/10 text-rose-400"
                                            }`}>
                                            {assignment.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-2 hover:bg-[#0B1120] rounded-lg transition-all text-slate-500 hover:text-white">
                                            <span className="material-symbols-outlined text-lg">more_horiz</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
