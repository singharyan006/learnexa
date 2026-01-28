export default function StudentStatsCards() {
    const stats = [
        {
            title: "Overall GPA",
            value: "3.68",
            subtitle: "Top 15% of class",
            subtitleColor: "text-success",
            icon: "school",
            iconBg: "bg-primary/10 dark:bg-primary/10",
            iconColor: "text-primary",
        },
        {
            title: "Pending Assignments",
            value: "5",
            subtitle: "2 due today",
            subtitleColor: "text-warning",
            icon: "assignment",
            iconBg: "bg-warning/10 dark:bg-warning/10",
            iconColor: "text-warning",
        },
        {
            title: "Attendance Rate",
            value: "96%",
            subtitle: "+3% this month",
            subtitleColor: "text-success",
            icon: "check_circle",
            iconBg: "bg-success/10 dark:bg-success/10",
            iconColor: "text-success",
        },
        {
            title: "Upcoming Exams",
            value: "3",
            subtitle: "Next in 2 days",
            subtitleColor: "text-error",
            icon: "quiz",
            iconBg: "bg-error/10 dark:bg-error/10",
            iconColor: "text-error",
        },
    ];

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="bg-surface-card dark:bg-surface-card p-5 rounded-2xl shadow-sm border border-surface-card dark:border-surface-card/50 hover:shadow-lg hover:shadow-primary/5 transition-all group"
                >
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-xs font-medium text-text-placeholder dark:text-text-muted uppercase tracking-wider">
                                {stat.title}
                            </p>
                            <h3 className="text-2xl font-black mt-1 group-hover:text-primary transition-colors">{stat.value}</h3>
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
