export default function RecentActivities() {
    const activities = [
        {
            title: "Exam Schedule Sent",
            description: "WhatsApp broadcast to Grade 10 parents.",
            time: "12 MINS AGO",
            icon: "mail",
            iconBg: "bg-indigo-500/10",
            iconColor: "text-indigo-400",
        },
        {
            title: "Bulk Fee Receipt",
            description: "24 fee transactions processed for Grade 5.",
            time: "2 HOURS AGO",
            icon: "payments",
            iconBg: "bg-emerald-500/10",
            iconColor: "text-emerald-400",
        },
        {
            title: "Attendance Alert",
            description: "Unusual absenteeism in Grade 8B (12 students).",
            time: "5 HOURS AGO",
            icon: "report",
            iconBg: "bg-rose-500/10",
            iconColor: "text-rose-400",
        },
        {
            title: "New Enrollment",
            description: "Aria Stark admitted to Grade 1A.",
            time: "YESTERDAY",
            icon: "person_add",
            iconBg: "bg-purple-500/10",
            iconColor: "text-purple-400",
        },
    ];

    return (
        <div className="bg-[#151B2C] p-6 rounded-3xl shadow-sm border border-[#1E293B]">
            <h4 className="text-lg font-bold text-white mb-8 px-2 tracking-tight">Recent Activities</h4>

            <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-px before:bg-[#1E293B]">
                {activities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-4 relative group">
                        <div className={`${activity.iconBg} w-10 h-10 rounded-xl flex items-center justify-center border border-white/5 z-10 transition-transform group-hover:scale-110 shadow-lg`}>
                            <span className={`material-symbols-outlined ${activity.iconColor} text-lg`}>
                                {activity.icon}
                            </span>
                        </div>
                        <div className="flex-1 space-y-1">
                            <p className="text-sm font-bold text-slate-200 leading-none group-hover:text-white transition-colors">
                                {activity.title}
                            </p>
                            <p className="text-xs text-slate-500 font-medium">{activity.description}</p>
                            <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em]">
                                {activity.time}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <button className="w-full mt-10 py-3 bg-[#0B1120] border border-[#1E293B] rounded-2xl text-[10px] font-bold uppercase tracking-widest text-[#4f46e5] hover:bg-[#4f46e5] hover:text-white transition-all cursor-pointer shadow-lg shadow-indigo-500/5 hover:shadow-indigo-500/20">
                View All Activity Log
            </button>
        </div>
    );
}
