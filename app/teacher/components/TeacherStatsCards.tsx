export default function TeacherStatsCards() {
    const stats = [
        {
            title: "Daily Attendance",
            value: "94%",
            subtitle: "+2% from yesterday",
            subtitleColor: "text-green-600",
            icon: "groups",
            iconBg: "bg-blue-50 dark:bg-blue-900/20",
            iconColor: "text-blue-600",
        },
        {
            title: "Pending Grades",
            value: "12",
            subtitle: "4 due by EOD",
            subtitleColor: "text-warning",
            icon: "assignment_late",
            iconBg: "bg-warning/10 dark:bg-warning/10",
            iconColor: "text-warning",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="bg-surface-card p-6 rounded-2xl shadow-sm border border-surface-card flex items-center justify-between"
                >
                    <div>
                        <p className="text-sm font-medium text-text-placeholder dark:text-text-muted">
                            {stat.title}
                        </p>
                        <h3 className="text-3xl font-bold mt-1">{stat.value}</h3>
                        <p className={`text-xs mt-1 font-medium ${stat.subtitleColor}`}>
                            {stat.subtitle}
                        </p>
                    </div>
                    <div className={`p-3 ${stat.iconBg} ${stat.iconColor} rounded-xl`}>
                        <span className="material-symbols-outlined text-3xl">{stat.icon}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
