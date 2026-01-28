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
        <aside className="w-64 bg-surface-sidebar dark:bg-surface-sidebar border-r border-surface-card/30 dark:border-surface-card flex flex-col flex-shrink-0 hidden lg:flex">
            {/* Logo */}
            <div className="p-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-text-heading shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined">school</span>
                </div>
                <h1 className="text-xl font-bold tracking-tight text-primary">Learnexa</h1>
            </div>

            {/* Navigation */}
            <nav className="mt-6 px-4 space-y-1 flex-1">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all ${isActive
                                ? 'bg-primary/10 dark:bg-primary/10 text-primary shadow-sm'
                                : 'text-text-placeholder dark:text-text-muted hover:bg-surface-card/20 dark:hover:bg-surface-card/50 hover:text-text-heading dark:hover:text-text-heading'
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
            <div className="p-4 border-t border-surface-card/30 dark:border-surface-card">


                <div className="mt-4 px-4">
                    <p className="text-xs text-text-placeholder">Academic Support</p>
                    <a href="#" className="text-sm font-medium text-primary hover:underline">
                        Contact Counselor
                    </a>
                </div>
            </div>
        </aside>
    );
}
