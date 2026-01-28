export default function QuickLinks() {
    const links = [
        {
            title: "Library",
            icon: "local_library",
            color: "text-primary",
            bgColor: "bg-gradient-to-br from-primary to-primary",
        },
        {
            title: "IT Support",
            icon: "support_agent",
            color: "text-warning",
            bgColor: "bg-gradient-to-br from-orange-500 to-red-500",
        },
        {
            title: "Calendar",
            icon: "calendar_month",
            color: "text-success",
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
        <div className="bg-surface-card dark:bg-surface-card rounded-2xl shadow-sm border border-surface-card dark:border-surface-card/50 overflow-hidden">
            <div className="p-4 border-b border-surface-card dark:border-surface-card/50 bg-surface-card/50 dark:bg-surface-card/50">
                <h3 className="text-sm font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">apps</span>
                    Quick Links
                </h3>
            </div>
            <div className="p-4 grid grid-cols-2 gap-3">
                {links.map((link, index) => (
                    <button
                        key={index}
                        className={`p-3 rounded-xl ${link.bgColor} text-text-heading transition-all flex flex-col items-center gap-2 hover:scale-105 hover:shadow-lg group`}
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
