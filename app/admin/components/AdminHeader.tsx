"use client";

import Image from "next/image";

export default function AdminHeader() {
    return (
        <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 h-16 flex items-center justify-between px-8 z-10">
            <div className="flex items-center flex-1">
                <div className="relative w-96">
                    <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                        search
                    </span>
                    <input
                        className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary-admin/20 dark:text-white placeholder:text-slate-400"
                        placeholder="Search students, faculty, or IDs..."
                        type="text"
                    />
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 mx-1"></div>

                <div className="flex items-center space-x-3 cursor-pointer group">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">Admin Principal</p>
                        <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                            Super Admin
                        </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden border-2 border-primary-admin/10 group-hover:border-primary-admin/40 transition-all">
                        <Image
                            alt="User Profile"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSUgWZkcIFE-ZrEtZwUMKgTAZjdnYKyP-Rn2zWWUeoJX_vaq5FjAbAdAUCDDOU_NtlN6MPXwa4fwS3_30XAMhJBkYHzXH5UXPoRhFu-9hRpvE0XxoxaxcEuWbKEim9_q0Vv8AMyvnyJhH3L4xHcFesYVtIOov8ymUxfI_GY9R5TwahEUM4dgQdrK_yKdLQDimojsRSkavqiEuTOuodtYGibegRrbDXP6bQnqA67JnFb_s7p47lOGjBg80iyGhjubpblf4259wo4vQ"
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
