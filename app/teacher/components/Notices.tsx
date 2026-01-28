export default function Notices() {
    const notices = [
        {
            type: "Urgent",
            message: "Faculty meeting rescheduled to 3:30 PM today.",
            borderColor: "border-red-500",
            bgColor: "bg-red-50 dark:bg-red-900/10",
            typeColor: "text-red-600",
        },
        {
            type: "General",
            message: "New library resources now available for English Lit classes.",
            borderColor: "border-primary-teacher",
            bgColor: "bg-indigo-50 dark:bg-indigo-900/10",
            typeColor: "text-primary-teacher",
        },
    ];

    return (
        <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/50 p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-teacher">campaign</span>
                Notices
            </h3>

            <div className="space-y-4">
                {notices.map((notice, index) => (
                    <div
                        key={index}
                        className={`p-3 ${notice.bgColor} border-l-4 ${notice.borderColor} rounded-r-lg`}
                    >
                        <p className={`text-xs font-bold ${notice.typeColor} uppercase mb-1`}>
                            {notice.type}
                        </p>
                        <p className="text-sm font-medium">{notice.message}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
