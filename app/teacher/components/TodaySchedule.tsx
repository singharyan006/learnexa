export default function TodaySchedule() {
    const schedule = [
        {
            time: "Now",
            title: "Grade 10-A English",
            location: "Room 302",
            isActive: true,
            timeColor: "text-primary-teacher",
        },
        {
            time: "11:00 AM",
            title: "Grade 9-C Composition",
            location: "Room 105",
            isActive: false,
            timeColor: "text-slate-400",
        },
        {
            time: "01:30 PM",
            title: "Department Meeting",
            location: "Staff Lounge",
            isActive: false,
            timeColor: "text-slate-400",
        },
        {
            time: "02:45 PM",
            title: "Grade 12 Advanced Lit",
            location: "Library Lab",
            isActive: false,
            timeColor: "text-slate-400",
        },
    ];

    return (
        <section className="bg-[#151B2C] rounded-2xl shadow-sm border border-[#1E293B] p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-teacher">schedule</span>
                    Today's Schedule
                </h3>
            </div>

            <div className="space-y-4 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-800">
                {schedule.map((item, index) => (
                    <div key={index} className="relative pl-8">
                        <div
                            className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-4 border-white dark:border-slate-800 z-10 ${item.isActive
                                ? "bg-primary-teacher"
                                : "bg-slate-200 dark:bg-slate-700"
                                }`}
                        ></div>
                        <div>
                            <p className={`text-xs font-${item.isActive ? 'bold' : 'medium'} ${item.timeColor}`}>
                                {item.time}
                            </p>
                            <p className="text-sm font-bold">{item.title}</p>
                            <p className="text-xs text-slate-500">{item.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
