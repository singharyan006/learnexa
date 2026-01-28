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
        <div className="bg-surface-card dark:bg-surface-card rounded-2xl shadow-sm border border-surface-card dark:border-surface-card/50 overflow-hidden">
            <div className="p-6 border-b border-surface-card dark:border-surface-card/50 flex items-center justify-between bg-surface-card/50 dark:bg-surface-card/50">
                <h3 className="text-lg font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">schedule</span>
                    Today's Schedule
                </h3>
                <Link href="/student/schedule" className="text-xs font-bold text-primary hover:underline">Full Week</Link>
            </div>

            <div className="p-6">
                <div className="space-y-4 relative before:absolute before:left-[11px] before:top-3 before:bottom-3 before:w-[2px] before:bg-surface-card dark:before:bg-surface-sidebar">
                    {schedule.map((item, index) => (
                        <div key={index} className="relative pl-8 group">
                            <div
                                className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-4 border-white dark:border-surface-card z-10 transition-transform group-hover:scale-110 ${item.isActive
                                        ? "bg-primary shadow-lg shadow-primary/30"
                                        : item.isBreak
                                            ? "bg-orange-400"
                                            : "bg-slate-200 dark:bg-surface-sidebar"
                                    }`}
                            ></div>
                            <div className={`p-3 rounded-xl transition-all ${item.isBreak ? 'bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800/30' : 'hover:bg-surface-card/20 dark:hover:bg-surface-sidebar/30'}`}>
                                <p className={`text-xs font-black ${item.isActive ? 'text-primary' : 'text-text-muted'}`}>
                                    {item.time}
                                </p>
                                <p className="text-sm font-bold mt-0.5">{item.title}</p>
                                <p className="text-[10px] text-text-placeholder">{item.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
