import Link from "next/link";

export default function StudentSchedule() {
    const schedule = [
        {
            time: "Now",
            title: "Biology Class",
            location: "Room 302 • Prof. Sarah White",
            isActive: true,
        },
        {
            time: "10:00 AM",
            title: "Calculus BC",
            location: "Room 105 • Dr. Alan Turing",
            isActive: false,
        },
        {
            time: "11:15 AM",
            title: "Lunch Break",
            location: "Cafeteria",
            isBreak: true,
            isActive: false,
        },
        {
            time: "12:15 PM",
            title: "English Literature",
            location: "Library Hall • Mrs. Emily Bronte",
            isActive: false,
        },
    ];

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/50 overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-700/50 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/50">
                <h3 className="text-lg font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-teacher">schedule</span>
                    Today's Schedule
                </h3>
                <Link href="/student/schedule" className="text-xs font-bold text-primary-teacher hover:underline">Full Week</Link>
            </div>

            <div className="p-6">
                <div className="space-y-4 relative before:absolute before:left-[11px] before:top-3 before:bottom-3 before:w-[2px] before:bg-slate-100 dark:before:bg-slate-700">
                    {schedule.map((item, index) => (
                        <div key={index} className="relative pl-8 group">
                            <div
                                className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-4 border-white dark:border-slate-800 z-10 transition-transform group-hover:scale-110 ${item.isActive
                                        ? "bg-primary-teacher shadow-lg shadow-indigo-500/30"
                                        : item.isBreak
                                            ? "bg-orange-400"
                                            : "bg-slate-200 dark:bg-slate-700"
                                    }`}
                            ></div>
                            <div className={`p-3 rounded-xl transition-all ${item.isBreak ? 'bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800/30' : 'hover:bg-slate-50 dark:hover:bg-slate-700/30'}`}>
                                <p className={`text-xs font-black ${item.isActive ? 'text-primary-teacher' : 'text-slate-400'}`}>
                                    {item.time}
                                </p>
                                <p className="text-sm font-bold mt-0.5">{item.title}</p>
                                <p className="text-[10px] text-slate-500">{item.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
