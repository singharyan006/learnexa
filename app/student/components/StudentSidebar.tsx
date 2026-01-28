"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StudentSidebar() {
    const pathname = usePathname();

    const menuItems = [
        { name: "Dashboard", icon: "dashboard", href: "/student" },
        { name: "Courses", icon: "menu_book", href: "/student/courses" },
        { name: "Schedule", icon: "calendar_today", href: "/student/schedule" },
        { name: "Exams", icon: "quiz", href: "/student/exams" },
        { name: "Grades", icon: "grade", href: "/student/grades" },
    ];

    return (
        <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col flex-shrink-0 hidden lg:flex">
            {/* Logo */}
            <div className="p-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-teacher rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                    <span className="material-symbols-outlined">school</span>
                </div>
                <h1 className="text-xl font-bold tracking-tight text-primary-teacher">EDUFLOW</h1>
            </div>

            {/* Navigation */}
            <nav className="mt-6 px-4 space-y-1 flex-1">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all ${isActive
                                ? 'bg-indigo-50 dark:bg-indigo-900/30 text-primary-teacher shadow-sm'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200'
                                }`}
                            href={item.href}
                        >
                            <span className={`material-symbols-outlined ${isActive ? 'fill-1' : ''}`}>{item.icon}</span>
                            {item.name}
                        </Link>
                    );
                })}
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
