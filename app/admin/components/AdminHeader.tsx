"use client";

import Image from "next/image";

export default function AdminHeader() {
    return (
        <header className="flex items-center justify-between mb-8">
            <div className="flex items-center flex-1">
                <div className="relative w-full max-w-md group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-placeholder text-xl group-focus-within:text-primary transition-colors">
                        search
                    </span>
                    <input
                        className="w-full bg-surface-card border border-surface-card rounded-2xl py-3 pl-12 pr-4 text-sm focus:ring-1 focus:ring-primary/40 text-text-heading outline-none transition-all placeholder:text-text-placeholder font-medium"
                        placeholder="Search records, reports, or IDs..."
                        type="text"
                    />
                </div>
            </div>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                    <button className="p-2.5 rounded-xl bg-surface-card border border-surface-card text-text-muted hover:text-text-heading hover:border-slate-600 transition-all relative group">
                        <span className="material-symbols-outlined text-xl">notifications</span>
                        <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-error rounded-full border-2 border-[#151B2C]"></span>
                    </button>
                    <button className="p-2.5 rounded-xl bg-surface-card border border-surface-card text-text-muted hover:text-text-heading hover:border-slate-600 transition-all">
                        <span className="material-symbols-outlined text-xl">settings</span>
                    </button>
                </div>

                <div className="h-8 w-px bg-surface-sidebar"></div>

                <div className="flex items-center gap-3 pl-2">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-bold text-text-heading leading-none">Admin Principal</p>
                        <p className="text-[10px] font-bold text-primary uppercase tracking-widest mt-1">
                            Super Admin
                        </p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-surface-card border border-surface-card p-0.5 group cursor-pointer hover:border-primary/50 transition-all">
                        <Image
                            alt="User Profile"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSUgWZkcIFE-ZrEtZwUMKgTAZjdnYKyP-Rn2zWWUeoJX_vaq5FjAbAdAUCDDOU_NtlN6MPXwa4fwS3_30XAMhJBkYHzXH5UXPoRhFu-9hRpvE0XxoxaxcEuWbKEim9_q0Vv8AMyvnyJhH3L4xHcFesYVtIOov8ymUxfI_GY9R5TwahEUM4dgQdrK_yKdLQDimojsRSkavqiEuTOuodtYGibegRrbDXP6bQnqA67JnFb_s7p47lOGjBg80iyGhjubpblf4259wo4vQ"
                            width={40}
                            height={40}
                            className="w-full h-full object-cover rounded-[10px]"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
