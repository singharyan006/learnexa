"use client";

import Link from "next/link";

export default function AdminSidebar() {
    return (
        <aside className="w-64 bg-primary-admin text-white flex flex-col flex-shrink-0">
            {/* Logo */}
            <div className="p-6 flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                    <span className="material-icons-round text-accent-gold">account_balance</span>
                </div>
                <span className="font-display font-bold text-xl tracking-tight">AdminCentral</span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto custom-scrollbar">
                <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2 px-3">
                    Main Menu
                </div>

                <Link
                    className="flex items-center space-x-3 px-3 py-2.5 rounded-lg bg-white/10 font-medium transition-all group"
                    href="/admin"
                >
                    <span className="material-icons-round text-accent-gold">dashboard</span>
                    <span>Dashboard</span>
                </Link>

                <Link
                    className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-white/70 hover:text-white transition-all group"
                    href="/admin/students"
                >
                    <span className="material-icons-round group-hover:text-accent-gold transition-colors">groups</span>
                    <span>Student Records</span>
                </Link>

                <Link
                    className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-white/70 hover:text-white transition-all group"
                    href="/admin/attendance"
                >
                    <span className="material-icons-round group-hover:text-accent-gold transition-colors">how_to_reg</span>
                    <span>Attendance</span>
                </Link>

                <Link
                    className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-white/70 hover:text-white transition-all group"
                    href="/admin/examinations"
                >
                    <span className="material-icons-round group-hover:text-accent-gold transition-colors">assignment</span>
                    <span>Examinations</span>
                </Link>

                <Link
                    className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-white/70 hover:text-white transition-all group"
                    href="/admin/fees"
                >
                    <span className="material-icons-round group-hover:text-accent-gold transition-colors">payments</span>
                    <span>Fee Management</span>
                </Link>

                <div className="pt-6">
                    <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2 px-3">
                        Engagement
                    </div>

                    <Link
                        className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-white/70 hover:text-white transition-all group"
                        href="/admin/communication"
                    >
                        <span className="material-icons-round group-hover:text-accent-gold transition-colors">chat</span>
                        <span>Communication</span>
                    </Link>

                    <Link
                        className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-white/70 hover:text-white transition-all group"
                        href="/admin/notifications"
                    >
                        <span className="material-icons-round group-hover:text-accent-gold transition-colors">notifications</span>
                        <span>Notifications</span>
                        <span className="ml-auto bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">4</span>
                    </Link>
                </div>
            </nav>

            {/* Sync Info */}
            <div className="p-4 border-t border-white/10">
                <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-xs text-white/50 mb-1">Last Sync</p>
                    <p className="text-xs font-medium">Today at 10:45 AM</p>
                    <button className="mt-3 w-full py-1.5 text-xs bg-white/10 hover:bg-white/20 rounded-md transition-colors">
                        Force Sync
                    </button>
                </div>
            </div>
        </aside>
    );
}
