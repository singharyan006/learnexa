"use client";

import Link from "next/link";
import Image from "next/image";

export default function TeacherSidebar() {
    return (
        <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex-shrink-0 hidden lg:flex lg:flex-col overflow-y-auto">
            {/* Logo */}
            <div className="p-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-teacher rounded-lg flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">school</span>
                </div>
                <h1 className="text-xl font-bold tracking-tight text-primary-teacher">EduStream</h1>
            </div>

            {/* Navigation */}
            <nav className="mt-6 px-4 space-y-1">
                <Link
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-primary-teacher"
                    href="/teacher"
                >
                    <span className="material-symbols-outlined">dashboard</span>
                    Dashboard
                </Link>

                <Link
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                    href="/teacher/schedule"
                >
                    <span className="material-symbols-outlined">calendar_today</span>
                    My Schedule
                </Link>

                <Link
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                    href="/teacher/attendance"
                >
                    <span className="material-symbols-outlined">how_to_reg</span>
                    Attendance
                </Link>

                <Link
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                    href="/teacher/gradebook"
                >
                    <span className="material-symbols-outlined">grading</span>
                    Gradebook
                </Link>

                <Link
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                    href="/teacher/messages"
                >
                    <span className="material-symbols-outlined">chat</span>
                    Messages
                </Link>
            </nav>

            {/* Profile */}
            <div className="mt-auto p-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3 mb-3">
                        <Image
                            alt="Sarah Johnson"
                            className="w-10 h-10 rounded-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKm6SRJX08xyLxkFqUU8f3KkERO5lqGKQGhPcwDgQSXQUoojKzKGBKpTrAvFh2X6D53GXLgRdS5d8gFnIN1kIWyz-eDAauUSamkUXlPYquLBXHO9_kO1oFf8spCIGMg8CTQwd-wgZ2Yrk4NWPV6fXH5YKiJZk4RweMFP72Khdk5dFkpIt0WouxW69C8oAMlXjDZiQ-g3OEs2pNMCJSOscU1CvdB614kHZqBd4k03Y1kov5eqhhzgLXU5vZY2PEaRz5ap0qYftD4qE"
                            width={40}
                            height={40}
                        />
                        <div>
                            <p className="text-sm font-semibold">Sarah Johnson</p>
                            <p className="text-xs text-slate-500">English Dept. Lead</p>
                        </div>
                    </div>

                </div>
            </div>
        </aside>
    );
}
