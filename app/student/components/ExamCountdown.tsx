"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ExamCountdown() {
    const [timeLeft, setTimeLeft] = useState({ days: 5, hours: 14, mins: 32, secs: 45 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { days, hours, mins, secs } = prev;
                secs--;
                if (secs < 0) { secs = 59; mins--; }
                if (mins < 0) { mins = 59; hours--; }
                if (hours < 0) { hours = 23; days--; }
                if (days < 0) { days = 0; hours = 0; mins = 0; secs = 0; }
                return { days, hours, mins, secs };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-gradient-to-br from-rose-500 to-orange-500 rounded-2xl p-6 text-white shadow-lg shadow-rose-500/20 relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3"></div>

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest bg-white/20 px-2 py-1 rounded-md backdrop-blur-sm">
                        ⚠️ Upcoming Exam
                    </span>
                    <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                </div>

                <h3 className="text-lg font-black mb-1">Mathematics Mid-Term</h3>
                <p className="text-white/70 text-xs mb-6">Room 301 • Dr. Alan Turing</p>

                <div className="grid grid-cols-4 gap-2 mb-6">
                    {[
                        { value: timeLeft.days, label: "Days" },
                        { value: timeLeft.hours, label: "Hours" },
                        { value: timeLeft.mins, label: "Mins" },
                        { value: timeLeft.secs, label: "Secs" },
                    ].map((item, i) => (
                        <div key={i} className="text-center bg-white/10 backdrop-blur-sm rounded-xl py-3">
                            <div className="text-2xl font-black tabular-nums">
                                {String(item.value).padStart(2, '0')}
                            </div>
                            <p className="text-[8px] text-white/70 uppercase font-bold tracking-wider">{item.label}</p>
                        </div>
                    ))}
                </div>

                <Link href="/student/exams" className="w-full py-3 bg-white text-rose-600 font-black rounded-xl hover:bg-white/90 transition-all flex items-center justify-center gap-2 shadow-lg">
                    <span className="material-symbols-outlined text-sm">menu_book</span>
                    View All Exams
                </Link>
            </div>
        </div>
    );
}
