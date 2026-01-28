"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StudentHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const menuItems = [
        { name: "Dashboard", icon: "dashboard", href: "/student" },
        { name: "Courses", icon: "menu_book", href: "/student/courses" },
        { name: "Schedule", icon: "calendar_today", href: "/student/schedule" },
        { name: "Exams", icon: "quiz", href: "/student/exams" },
        { name: "Grades", icon: "grade", href: "/student/grades" },
    ];

    return (
        <header className="flex items-center justify-between gap-4 mb-6 relative">
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-surface-card dark:bg-surface-card border border-surface-card/30 dark:border-surface-card text-text-placeholder dark:text-text-muted"
            >
                <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>

            <div className="relative flex-1 max-w-md hidden md:block">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
                    search
                </span>
                <input
                    className="w-full pl-10 pr-4 py-2.5 bg-surface-card dark:bg-surface-card border border-surface-card/30 dark:border-surface-card rounded-full text-sm focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="Search courses, exams..."
                    type="text"
                />
            </div>

            {/* Logo for mobile */}
            <div className="md:hidden flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-text-heading shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-sm">school</span>
                </div>
                <h1 className="text-lg font-bold tracking-tight text-primary">EDUFLOW</h1>
            </div>

            <div className="flex items-center gap-4">
                <button className="p-2 rounded-full hover:bg-surface-card dark:hover:bg-surface-card relative transition-colors">
                    <span className="material-symbols-outlined text-text-placeholder dark:text-text-muted">notifications</span>
                    <span className="absolute top-1 right-1 w-2 h-2 bg-warning rounded-full ring-2 ring-background-light dark:ring-background-dark"></span>
                </button>

                <div className="flex items-center gap-3">
                    <div className="text-right hidden lg:block">
                        <p className="text-sm font-semibold">Alex Johnson</p>
                        <p className="text-xs text-text-placeholder">Grade 11 - Science A</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-orange-100 overflow-hidden ring-2 ring-white dark:ring-slate-700">
                        <Image
                            alt="Alex Johnson"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKm6SRJX08xyLxkFqUU8f3KkERO5lqGKQGhPcwDgQSXQUoojKzKGBKpTrAvFh2X6D53GXLgRdS5d8gFnIN1kIWyz-eDAauUSamkUXlPYquLBXHO9_kO1oFf8spCIGMg8CTQwd-wgZ2Yrk4NWPV6fXH5YKiJZk4RweMFP72Khdk5dFkpIt0WouxW69C8oAMlXjDZiQ-g3OEs2pNMCJSOscU1CvdB614kHZqBd4k03Y1kov5eqhhzgLXU5vZY2PEaRz5ap0qYftD4qE"
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 right-0 z-50 p-4 lg:hidden animate-in slide-in-from-top-4 duration-300">
                    <nav className="bg-surface-card dark:bg-surface-card border border-surface-card/30 dark:border-surface-card rounded-2xl shadow-xl p-2 space-y-1">
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all ${isActive
                                            ? 'bg-primary/10 dark:bg-primary/10 text-primary shadow-sm'
                                            : 'text-text-placeholder dark:text-text-muted hover:bg-surface-card/20 dark:hover:bg-surface-sidebar/50'
                                        }`}
                                >
                                    <span className="material-symbols-outlined">{item.icon}</span>
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            )}
        </header>
    );
}
