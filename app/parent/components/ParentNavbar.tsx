"use client";

import { useState } from "react";
import Image from "next/image";

export default function ParentNavbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedChild, setSelectedChild] = useState({
        name: "Aryan Sharma",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOku0HIozwoGbSdY099oRSWX6VAUWkOZaO75FATSk9K6k7oa3Wc-8Nksn4WZadF0vXanD5kDC-GqFJpi-k4gPW3t7gHV_LxFq940x7DZkdSFbA3GNxZHw95Ci6EW01ZyaCWEHG5Q5M7jXPYhgZ1NilcjykPa9HzFoSlmW0n4E0H0NpqX8udB3V_j2igP5FnHTHnfvlR1ShT0CfZE0X5qugKxZEAGdd2RAsdthCaHM9Sx0p7zrooe2zPhe5XSkTxIPbW8fhh6L1peg"
    });

    const children = [
        { name: "Aryan Sharma", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-o_2V--tVnj6d9ecd3hjPoROx72DCawGpqUAXXNEfS5UEI1ZpZdiPxpEKLhwMZW1bo39kfPiDUAyozfZyV2ARUWH9yQnVQ6jYwnsFDaj1UM_VnEAe_ylUQiDU3cApIjSLS4qNEJRLgjYQbt7e8qUxMK_gWbALKaAeu_uiTlFvF_E-BSflclE3TglGuR75fHQ5NgfnfQFAOdPRCVpu0PCXJFQW1HtPkAQimO5YGq0-rZmop-I0ZaeIpQAXEfQtSlnPQRnfT9XbfLw" },
        { name: "Ananya Sharma", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmevwQC-gNJP34NatOlHHSedrkHS6G8JE9HowxKOp_ekRZ1cjD30ndt2H3MgFchHG9sNjUHsgD9oQdqoTJ6LAuXji0odXGDn2dW8ehSmLnLDkzifTjqn2z4AZnSwmRILfeu-hNOX7n7Xp6jFuSD_JESBFTTgTugMxHTbRZCZ6C0kOjadFa6Udk8AKwdp5vCj7rUSQEpwOBgeemc6hjZ_bYT7WEw3ZMz68nk6fGfjQL1wiquNuuKapSFPFSJX0Er1MJjGuGX3kxlOk" }
    ];

    return (
        <nav className="sticky top-0 z-50 bg-surface-card/80 dark:bg-surface-sidebar/80 backdrop-blur-md border-b border-surface-card/30 dark:border-surface-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="bg-primary p-1.5 rounded-lg">
                            <span className="material-icons-round text-text-heading text-2xl">school</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-800 dark:text-text-heading">Learnexa</span>
                    </div>

                    <div className="flex items-center gap-4 lg:gap-8">
                        {/* Child Selector */}
                        <div className="relative">
                            <button
                                className="flex items-center gap-2 px-3 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-all"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                <Image
                                    alt="Child profile"
                                    className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-700 object-cover"
                                    src={selectedChild.image}
                                    width={32}
                                    height={32}
                                />
                                <div className="hidden sm:block text-left pr-1">
                                    <p className="text-xs font-semibold text-text-muted dark:text-text-muted leading-none">Viewing Data For</p>
                                    <p className="text-sm font-bold text-slate-800 dark:text-text-heading">{selectedChild.name}</p>
                                </div>
                                <span className="material-icons-round text-text-muted">expand_more</span>
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-56 bg-surface-card dark:bg-slate-800 rounded-xl shadow-xl border border-surface-card/30 dark:border-slate-700 z-50">
                                    <div className="p-2">
                                        {children.map((child, index) => (
                                            <button
                                                key={index}
                                                className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors ${selectedChild.name === child.name
                                                    ? "bg-primary/10 text-primary"
                                                    : "hover:bg-slate-100 dark:hover:bg-slate-700 text-text-placeholder dark:text-slate-300"
                                                    } ${index > 0 ? 'mt-1' : ''}`}
                                                onClick={() => {
                                                    setSelectedChild(child);
                                                    setIsDropdownOpen(false);
                                                }}
                                            >
                                                <Image
                                                    alt={child.name}
                                                    className="w-8 h-8 rounded-full object-cover"
                                                    src={child.image}
                                                    width={32}
                                                    height={32}
                                                />
                                                <span className="font-medium">{child.name}</span>
                                                {selectedChild.name === child.name && (
                                                    <span className="material-icons-round ml-auto text-sm">check_circle</span>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3 border-l border-surface-card/30 dark:border-slate-700 pl-4 lg:pl-8">
                            <button className="text-text-muted hover:text-primary dark:text-text-muted transition-colors relative">
                                <span className="material-icons-round">notifications</span>
                                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
