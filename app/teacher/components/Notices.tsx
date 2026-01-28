export default function Notices() {
    const notices = [
        {
            type: "Urgent",
            message: "Faculty meeting rescheduled to 3:30 PM today.",
            borderColor: "border-rose-500",
            bgColor: "bg-error/10",
            typeColor: "text-rose-400",
        },
        {
            type: "General",
            message: "New library resources now available for English Lit classes.",
            borderColor: "border-primary",
            bgColor: "bg-primary/10",
            typeColor: "text-primary",
        },
    ];

    return (
        <section className="bg-surface-card rounded-2xl shadow-sm border border-surface-card p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">campaign</span>
                Notices
            </h3>

            <div className="space-y-4">
                {notices.map((notice, index) => (
                    <div
                        key={index}
                        className={`p-3 ${notice.bgColor} border-l-4 ${notice.borderColor} rounded-r-lg`}
                    >
                        <p className={`text-[10px] font-bold ${notice.typeColor} uppercase mb-1`}>
                            {notice.type}
                        </p>
                        <p className="text-sm font-semibold text-text-heading">{notice.message}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
