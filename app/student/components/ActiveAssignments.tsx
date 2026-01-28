import Link from "next/link";

export default function ActiveAssignments() {
    const assignments = [
        {
            title: "Physics Lab Report: Newton's Laws",
            dueDate: "Tomorrow, 11:59 PM",
            subject: "Advanced Physics",
            icon: "science",
            iconBg: "bg-primary",
            status: "URGENT",
            statusColor: "bg-red-500 text-text-heading",
        },
        {
            title: "World History: Industrial Revolution Essay",
            dueDate: "Friday, Oct 24",
            subject: "World History",
            icon: "history_edu",
            iconBg: "bg-warning",
            status: "PENDING",
            statusColor: "bg-slate-200 text-slate-700 dark:bg-surface-sidebar dark:text-text-muted",
        },
        {
            title: "Calculus Problem Set #12",
            dueDate: "Monday, Oct 27",
            subject: "Calculus BC",
            icon: "calculate",
            iconBg: "bg-blue-500",
            status: "NEW",
            statusColor: "bg-success text-text-heading",
        },
    ];

    return (
        <div className="bg-surface-card dark:bg-surface-card rounded-2xl shadow-sm border border-surface-card dark:border-surface-card/50 overflow-hidden">
            <div className="p-6 border-b border-surface-card dark:border-surface-card/50 flex items-center justify-between bg-surface-card/50 dark:bg-surface-card/50">
                <h3 className="text-lg font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">assignment</span>
                    Active Assignments
                    <span className="text-[10px] bg-red-500 text-text-heading px-2 py-0.5 rounded-full font-bold ml-1">3</span>
                </h3>
                <Link href="#" className="text-xs font-bold text-primary hover:underline">View All</Link>
            </div>

            <div className="p-6 space-y-3">
                {assignments.map((assignment, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 p-4 rounded-xl border border-surface-card dark:border-surface-card hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 transition-all group cursor-pointer"
                    >
                        <div className={`p-3 rounded-xl ${assignment.iconBg} text-text-heading shadow-lg group-hover:scale-110 transition-transform`}>
                            <span className="material-symbols-outlined">
                                {assignment.icon}
                            </span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold truncate group-hover:text-primary transition-colors">{assignment.title}</p>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-[10px] text-text-placeholder font-medium">{assignment.subject}</span>
                                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                <span className="text-[10px] text-text-muted">Due: {assignment.dueDate}</span>
                            </div>
                        </div>
                        <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black ${assignment.statusColor} shadow-sm`}>
                            {assignment.status}
                        </span>
                    </div>
                ))}

                <button className="w-full p-4 rounded-xl border-2 border-dashed border-surface-card/30 dark:border-surface-card text-text-muted hover:bg-surface-card/20 dark:hover:bg-surface-sidebar/50 hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2 group">
                    <span className="material-symbols-outlined text-sm group-hover:rotate-90 transition-transform">add</span>
                    Submit New Work
                </button>
            </div>
        </div>
    );
}
