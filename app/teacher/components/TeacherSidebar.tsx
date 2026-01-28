"use client";

import Link from "next/link";
import NextImage from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function TeacherSidebar() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const menuItems = [
        { name: "Dashboard", href: "/teacher", icon: "dashboard" },
        { name: "My Schedule", href: "/teacher/schedule", icon: "calendar_today" },
        { name: "Students", href: "/teacher/students", icon: "school" },
        { name: "Attendance", href: "/teacher/attendance", icon: "how_to_reg" },
        { name: "Gradebook", href: "/teacher/gradebook", icon: "grading" },
        { name: "Assignments", href: "/teacher/assignments", icon: "assignment" },
        { name: "Settings", href: "/teacher/settings", icon: "settings" },
    ];

    if (!mounted) return null;

    return (
        <aside className="w-64 bg-[#0B1120] border-r border-[#1E293B] flex-shrink-0 hidden lg:flex lg:flex-col overflow-y-auto">
            {/* Logo */}
            <div className="p-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#4f46e5] rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                    <span className="material-symbols-outlined text-white">auto_stories</span>
                </div>
                <h1 className="text-xl font-bold tracking-tight text-[#4f46e5]">Learnexa</h1>
            </div>

            {/* Navigation */}
            <nav className="mt-6 px-4 space-y-1.5 flex-1">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            className={`flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-xl transition-all duration-200 ${isActive
                                ? "bg-[#4f46e5] text-white shadow-lg shadow-indigo-500/20 scale-[1.02]"
                                : "text-slate-500 hover:text-white hover:bg-white/5"
                                }`}
                            href={item.href}
                        >
                            <span className={`material-symbols-outlined text-xl ${isActive ? "fill-1" : "text-slate-500"}`}>
                                {item.icon}
                            </span>
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            {/* Profile & Theme */}
            <div className="p-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <div className="p-3 bg-slate-800/50 rounded-2xl border border-slate-800">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <NextImage
                                alt="Sarah Johnson"
                                className="w-10 h-10 rounded-full object-cover border-2 border-slate-700 shadow-sm"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKm6SRJX08xyLxkFqUU8f3KkERO5lqGKQGhPcwDgQSXQUoojKzKGBKpTrAvFh2X6D53GXLgRdS5d8gFnIN1kIWyz-eDAauUSamkUXlPYquLBXHO9_kO1oFf8spCIGMg8CTQwd-wgZ2Yrk4NWPV6fXH5YKiJZk4RweMFP72Khdk5dFkpIt0WouxW69C8oAMlXjDZiQ-g3OEs2pNMCJSOscU1CvdB614kHZqBd4k03Y1kov5eqhhzgLXU5vZY2PEaRz5ap0qYftD4qE"
                                width={40}
                                height={40}
                            />
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-slate-800 rounded-full"></span>
                        </div>
                        <div className="min-w-0">
                            <p className="text-sm font-bold truncate">Sarah Johnson</p>
                            <p className="text-[10px] text-slate-500 font-medium">Science Teacher</p>
                        </div>
                    </div>
                </div>

                <Link
                    href="/logout"
                    className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-xl transition-all"
                >
                    <span className="material-symbols-outlined">logout</span>
                    Logout
                </Link>
            </div>
        </aside>
    );
}
