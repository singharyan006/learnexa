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
        <aside className="w-64 bg-surface-sidebar border-r border-surface-card/50/50 flex-shrink-0 hidden lg:flex lg:flex-col overflow-y-auto">
            {/* Logo */}
            <div className="p-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-text-heading shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-text-heading">auto_stories</span>
                </div>
                <h1 className="text-xl font-bold tracking-tight text-primary">Learnexa</h1>
            </div>

            {/* Navigation */}
            <nav className="mt-6 px-4 space-y-1.5 flex-1">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            className={`flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-xl transition-all duration-200 ${isActive
                                ? "bg-primary text-text-heading shadow-lg shadow-primary/20 scale-[1.02]"
                                : "text-text-placeholder hover:text-text-heading hover:bg-hover-glow/10 hover:border-hover-glow/30"
                                }`}
                            href={item.href}
                        >
                            <span className={`material-symbols-outlined text-xl ${isActive ? "fill-1" : "text-text-placeholder"}`}>
                                {item.icon}
                            </span>
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            {/* Profile & Theme */}
            <div className="p-4 border-t border-surface-card space-y-3">
                <div className="p-3 bg-surface-card/50 rounded-2xl border border-surface-card">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <NextImage
                                alt="Sarah Johnson"
                                className="w-10 h-10 rounded-full object-cover border-2 border-surface-card shadow-sm"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKm6SRJX08xyLxkFqUU8f3KkERO5lqGKQGhPcwDgQSXQUoojKzKGBKpTrAvFh2X6D53GXLgRdS5d8gFnIN1kIWyz-eDAauUSamkUXlPYquLBXHO9_kO1oFf8spCIGMg8CTQwd-wgZ2Yrk4NWPV6fXH5YKiJZk4RweMFP72Khdk5dFkpIt0WouxW69C8oAMlXjDZiQ-g3OEs2pNMCJSOscU1CvdB614kHZqBd4k03Y1kov5eqhhzgLXU5vZY2PEaRz5ap0qYftD4qE"
                                width={40}
                                height={40}
                            />
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-success border-2 border-[#1C3B4A] rounded-full"></span>
                        </div>
                        <div className="min-w-0">
                            <p className="text-sm font-bold truncate">Sarah Johnson</p>
                            <p className="text-[10px] text-text-placeholder font-medium">Science Teacher</p>
                        </div>
                    </div>
                </div>

                <Link
                    href="/logout"
                    className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-error hover:bg-error/10 rounded-xl transition-all"
                >
                    <span className="material-symbols-outlined">logout</span>
                    Logout
                </Link>
            </div>
        </aside>
    );
}
