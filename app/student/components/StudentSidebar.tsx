"use client";

import Link from "next/link";
import Image from "next/image";

export default function StudentSidebar() {
    return (
        <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col flex-shrink-0 hidden lg:flex">
            {/* Logo */}
            <div className="p-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-teacher rounded-lg flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">school</span>
                </div>
                <h1 className="text-xl font-bold tracking-tight text-primary-teacher">EDUFLOW</h1>
            </div>

            {/* Navigation */}
            <nav className="mt-6 px-4 space-y-1 flex-1">
                <Link
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-primary-teacher"
                    href="/student"
                >
                    <span className="material-symbols-outlined">dashboard</span>
                    Dashboard
                </Link>

                <Link
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                    href="/student/courses"
                >
                    <span className="material-symbols-outlined">menu_book</span>
                    Courses
                </Link>

                <Link
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                    href="/student/schedule"
                >
                    <span className="material-symbols-outlined">calendar_today</span>
                    Schedule
                </Link>

                <Link
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                    href="/student/exams"
                >
                    <span className="material-symbols-outlined">quiz</span>
                    Exams
                </Link>

                <Link
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                    href="/student/grades"
                >
                    <span className="material-symbols-outlined">grade</span>
                    Grades
                </Link>

                <Link
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                    href="/student/messages"
                >
                    <span className="material-symbols-outlined">chat</span>
                    Messages
                    <span className="ml-auto bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">3</span>
                </Link>
            </nav>

            {/* Bottom section */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800">


                <div className="mt-4 px-4">
                    <p className="text-xs text-slate-500">Academic Support</p>
                    <a href="#" className="text-sm font-medium text-primary-teacher hover:underline">
                        Contact Counselor
                    </a>
                </div>
            </div>
        </aside>
    );
}
