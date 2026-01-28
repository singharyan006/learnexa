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
                    <h2 className="text-2xl font-bold tracking-tight text-text-heading">Assignments</h2>
                    <p className="text-text-muted font-medium">Create and manage assessments for your students.</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-text-heading rounded-xl text-sm font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-lg">add_task</span>
                    Create Assignment
                </button>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <div className="bg-surface-card p-6 rounded-3xl border border-surface-card shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-sm font-bold text-text-placeholder">Total Active</p>
                        <h3 className="text-2xl font-bold mt-1 text-text-heading">12</h3>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                        <span className="material-symbols-outlined">assignment</span>
                    </div>
                </div>
                <div className="bg-surface-card p-6 rounded-3xl border border-surface-card shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-sm font-bold text-text-placeholder">To Grade</p>
                        <h3 className="text-2xl font-bold mt-1 text-text-heading">45</h3>
                    </div>
                    <div className="w-12 h-12 bg-warning/10 text-amber-400 rounded-2xl flex items-center justify-center">
                        <span className="material-symbols-outlined">pending_actions</span>
                    </div>
                </div>
                <div className="bg-surface-card p-6 rounded-3xl border border-surface-card shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-sm font-bold text-text-placeholder">Average Score</p>
                        <h3 className="text-2xl font-bold mt-1 text-text-heading">78%</h3>
                    </div>
                    <div className="w-12 h-12 bg-success/10 text-emerald-400 rounded-2xl flex items-center justify-center">
                        <span className="material-symbols-outlined">analytics</span>
                    </div>
                </div>
            </div>

            <div className="bg-surface-card rounded-3xl border border-surface-card overflow-hidden shadow-sm">
                <div className="p-6 border-b border-surface-card">
                    <h3 className="font-bold text-lg text-text-heading">Recent Assignments</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-background-main/50 text-text-placeholder text-[10px] uppercase tracking-wider font-bold">
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
                                <tr key={assignment.id} className="hover:bg-background-main/30 transition-colors">
                                    <td className="px-6 py-4">
                                        <div>
                                            <p className="text-sm font-bold text-text-heading">{assignment.title}</p>
                                            <p className="text-[10px] text-text-placeholder font-bold uppercase tracking-wider">{assignment.type}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-text-placeholder">{assignment.class}</td>
                                    <td className="px-6 py-4 text-sm text-text-placeholder font-bold uppercase">{assignment.dueDate}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="flex-1 h-1.5 w-16 bg-background-main rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-primary"
                                                    style={{ width: `${(assignment.submissions / assignment.total) * 100}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-[10px] font-bold text-text-muted">{assignment.submissions}/{assignment.total}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-lg text-[10px] font-bold ${assignment.status === "Active"
                                            ? "bg-success/10 text-emerald-400"
                                            : assignment.status === "Draft"
                                                ? "bg-slate-500/10 text-text-muted"
                                                : "bg-error/10 text-rose-400"
                                            }`}>
                                            {assignment.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-2 hover:bg-background-main rounded-lg transition-all text-text-placeholder hover:text-text-heading">
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
