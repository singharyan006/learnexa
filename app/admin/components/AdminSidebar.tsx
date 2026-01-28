"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
    const pathname = usePathname();

    const menuItems = [
        { name: "Dashboard", href: "/admin", icon: "dashboard" },
        { name: "Student Records", href: "/admin/students", icon: "groups" },
        { name: "Attendance", href: "/admin/attendance", icon: "how_to_reg" },
        { name: "Examinations", href: "/admin/examinations", icon: "assignment" },
        { name: "Fee Management", href: "/admin/fees", icon: "payments" },
    ];

    const engagementItems = [
        { name: "Communication", href: "/admin/communication", icon: "chat" },
        { name: "Notifications", href: "/admin/notifications", icon: "notifications", badge: 4 },
        { name: "Settings", href: "/admin/settings", icon: "settings" },
    ];

    const NavLink = ({ item }: { item: { name: string; href: string; icon: string; badge?: number } }) => {
        const isActive = pathname === item.href;
        return (
            <Link
                className={`flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-xl transition-all duration-200 ${isActive
                    ? "bg-primary text-text-heading shadow-lg shadow-primary/20 scale-[1.02]"
                    : "text-text-placeholder hover:text-text-heading hover:bg-surface-card/5"
                    }`}
                href={item.href}
            >
                <span className={`material-symbols-outlined text-xl ${isActive ? "fill-1" : ""}`}>
                    {item.icon}
                </span>
                <span>{item.name}</span>
                {item.badge && (
                    <span className="ml-auto bg-error text-text-heading text-[10px] px-2 py-0.5 rounded-full font-bold">
                        {item.badge}
                    </span>
                )}
            </Link>
        );
    };

    return (
        <aside className="w-64 bg-surface-sidebar border-r border-surface-card/50 flex flex-col flex-shrink-0 transition-all duration-300">
            {/* Logo */}
            <div className="p-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 shadow-lg shadow-primary/10">
                    <span className="material-symbols-outlined text-primary font-bold">account_balance</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-display font-bold text-lg tracking-tight text-text-heading leading-none">Learnexa</span>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest mt-1">Command Ops</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-4 space-y-1.5 overflow-y-auto custom-scrollbar">
                <div className="text-[10px] font-bold text-text-placeholder uppercase tracking-[0.2em] mb-4 px-4 mt-2">
                    Main Menu
                </div>
                {menuItems.map((item) => (
                    <NavLink key={item.href} item={item} />
                ))}

                <div className="pt-8">
                    <div className="text-[10px] font-bold text-text-placeholder uppercase tracking-[0.2em] mb-4 px-4">
                        Engagement
                    </div>
                    {engagementItems.map((item) => (
                        <NavLink key={item.href} item={item} />
                    ))}
                </div>
            </nav>

            {/* Sync Info - Updated for theme */}
            <div className="p-6 border-t border-surface-card">
                <div className="bg-background-main border border-surface-card rounded-2xl p-4">
                    <p className="text-[10px] font-bold text-text-placeholder uppercase tracking-widest mb-1">Last Sync</p>
                    <p className="text-xs font-bold text-text-muted">Today at 10:45 AM</p>
                    <button className="mt-4 w-full py-2 text-[10px] font-bold uppercase tracking-widest bg-surface-card border border-surface-card text-text-muted hover:text-text-heading hover:border-slate-600 rounded-xl transition-all">
                        Force Sync
                    </button>
                </div>
            </div>
        </aside>
    );
}
