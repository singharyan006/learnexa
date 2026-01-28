export default function StatsCards() {
    const stats = [
        {
            title: "Total Students",
            value: "1,240",
            icon: "groups",
            iconBg: "bg-primary/10",
            iconColor: "text-primary",
            badge: "+3%",
            badgeColor: "text-emerald-400 bg-success/10",
            badgeIcon: "trending_up",
            progress: 85,
            progressLabel: "85% Capacity reached",
        },
        {
            title: "Teacher Count",
            value: "85",
            icon: "school",
            iconBg: "bg-primary/10",
            iconColor: "text-primary",
            badge: "Stable",
            badgeColor: "text-text-muted bg-slate-500/10",
            subtitle: "1:15 Teacher-student ratio",
        },
        {
            title: "Fee Collection",
            value: "$425,000",
            icon: "payments",
            iconBg: "bg-success/10",
            iconColor: "text-emerald-400",
            badge: "92%",
            badgeColor: "text-emerald-400 bg-success/10",
            badgeIcon: "check_circle",
            subtitle: "Fiscal Year 2023-24",
        },
        {
            title: "Daily Attendance",
            value: "96.8%",
            icon: "how_to_reg",
            iconBg: "bg-warning/10",
            iconColor: "text-amber-400",
            badge: "Today",
            badgeColor: "text-amber-400 bg-warning/10",
            badgeIcon: "schedule",
            subtitle: "1,201 Students present",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="bg-surface-card p-6 rounded-3xl shadow-sm border border-surface-card relative overflow-hidden group hover:border-primary/50 transition-all duration-300"
                >
                    <div className="flex justify-between items-start mb-4">
                        <div className={`${stat.iconBg} p-3 rounded-2xl border border-white/5`}>
                            <span className={`material-symbols-outlined ${stat.iconColor}`}>{stat.icon}</span>
                        </div>
                        <span className={`text-[10px] font-bold flex items-center px-2 py-1 rounded-lg uppercase tracking-wider ${stat.badgeColor}`}>
                            {stat.badgeIcon && <span className="material-symbols-outlined text-[12px] mr-1">{stat.badgeIcon}</span>}
                            {stat.badge}
                        </span>
                    </div>
                    <p className="text-text-placeholder text-[10px] font-bold uppercase tracking-widest">{stat.title}</p>
                    <h3 className="text-2xl font-bold mt-1 text-text-heading">{stat.value}</h3>

                    {stat.progress !== undefined && (
                        <>
                            <div className="mt-4 h-1.5 w-full bg-background-main rounded-full overflow-hidden">
                                <div className="bg-primary h-full rounded-full shadow-[0_0_10px_rgba(0,174,239,0.5)]" style={{ width: `${stat.progress}%` }}></div>
                            </div>
                            <p className="text-[10px] text-text-placeholder mt-2 font-bold uppercase tracking-wider">{stat.progressLabel}</p>
                        </>
                    )}

                    {stat.subtitle && !stat.progress && (
                        <p className="text-[10px] text-text-placeholder mt-4 font-bold uppercase tracking-wider italic">{stat.subtitle}</p>
                    )}
                </div>
            ))}
        </div>
    );
}
