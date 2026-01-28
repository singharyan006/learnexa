export default function QuickLinks() {
    const links = [
        {
            title: "Library",
            icon: "local_library",
            color: "text-primary-teacher",
            bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600",
        },
        {
            title: "IT Support",
            icon: "support_agent",
            color: "text-orange-500",
            bgColor: "bg-gradient-to-br from-orange-500 to-red-500",
        },
        {
            title: "Calendar",
            icon: "calendar_month",
            color: "text-emerald-500",
            bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600",
        },
        {
            title: "Resources",
            icon: "folder_open",
            color: "text-blue-500",
            bgColor: "bg-gradient-to-br from-blue-500 to-cyan-500",
        },
    ];

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/50 overflow-hidden">
            <div className="p-4 border-b border-slate-100 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-800/50">
                <h3 className="text-sm font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-teacher text-lg">apps</span>
                    Quick Links
                </h3>
            </div>
            <div className="p-4 grid grid-cols-2 gap-3">
                {links.map((link, index) => (
                    <button
                        key={index}
                        className={`p-3 rounded-xl ${link.bgColor} text-white transition-all flex flex-col items-center gap-2 hover:scale-105 hover:shadow-lg group`}
                    >
                        <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">
                            {link.icon}
                        </span>
                        <span className="text-xs font-bold">{link.title}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
