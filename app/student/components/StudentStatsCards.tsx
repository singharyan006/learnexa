export default function StudentStatsCards() {
    const stats = [
        {
            title: "Overall GPA",
            value: "3.68",
            subtitle: "Top 15% of class",
            subtitleColor: "text-emerald-600",
            icon: "school",
            iconBg: "bg-indigo-50 dark:bg-indigo-900/20",
            iconColor: "text-primary-teacher",
        },
        {
            title: "Pending Assignments",
            value: "5",
            subtitle: "2 due today",
            subtitleColor: "text-amber-600",
            icon: "assignment",
            iconBg: "bg-amber-50 dark:bg-amber-900/20",
            iconColor: "text-amber-600",
        },
        {
            title: "Attendance Rate",
            value: "96%",
            subtitle: "+3% this month",
            subtitleColor: "text-emerald-600",
            icon: "check_circle",
            iconBg: "bg-emerald-50 dark:bg-emerald-900/20",
            iconColor: "text-emerald-600",
        },
        {
            title: "Upcoming Exams",
            value: "3",
            subtitle: "Next in 2 days",
            subtitleColor: "text-rose-600",
            icon: "quiz",
            iconBg: "bg-rose-50 dark:bg-rose-900/20",
            iconColor: "text-rose-600",
        },
    ];

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/50 hover:shadow-lg hover:shadow-indigo-500/5 transition-all group"
                >
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                {stat.title}
                            </p>
                            <h3 className="text-2xl font-black mt-1 group-hover:text-primary-teacher transition-colors">{stat.value}</h3>
                            <p className={`text-[10px] mt-1 font-bold ${stat.subtitleColor}`}>
                                {stat.subtitle}
                            </p>
                        </div>
                        <div className={`p-2.5 ${stat.iconBg} ${stat.iconColor} rounded-xl group-hover:scale-110 transition-transform`}>
                            <span className="material-symbols-outlined text-xl">{stat.icon}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
