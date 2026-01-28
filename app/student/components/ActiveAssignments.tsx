import Link from "next/link";

export default function ActiveAssignments() {
    const assignments = [
        {
            title: "Physics Lab Report: Newton's Laws",
            dueDate: "Tomorrow, 11:59 PM",
            subject: "Advanced Physics",
            icon: "science",
            iconBg: "bg-indigo-500",
            status: "URGENT",
            statusColor: "bg-red-500 text-white",
        },
        {
            title: "World History: Industrial Revolution Essay",
            dueDate: "Friday, Oct 24",
            subject: "World History",
            icon: "history_edu",
            iconBg: "bg-amber-500",
            status: "PENDING",
            statusColor: "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300",
        },
        {
            title: "Calculus Problem Set #12",
            dueDate: "Monday, Oct 27",
            subject: "Calculus BC",
            icon: "calculate",
            iconBg: "bg-blue-500",
            status: "NEW",
            statusColor: "bg-emerald-500 text-white",
        },
    ];

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/50 overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-700/50 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/50">
                <h3 className="text-lg font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-teacher">assignment</span>
                    Active Assignments
                    <span className="text-[10px] bg-red-500 text-white px-2 py-0.5 rounded-full font-bold ml-1">3</span>
                </h3>
                <Link href="#" className="text-xs font-bold text-primary-teacher hover:underline">View All</Link>
            </div>

            <div className="p-6 space-y-3">
                {assignments.map((assignment, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 dark:border-slate-700 hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-0.5 transition-all group cursor-pointer"
                    >
                        <div className={`p-3 rounded-xl ${assignment.iconBg} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                            <span className="material-symbols-outlined">
                                {assignment.icon}
                            </span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold truncate group-hover:text-primary-teacher transition-colors">{assignment.title}</p>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-[10px] text-slate-500 font-medium">{assignment.subject}</span>
                                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                <span className="text-[10px] text-slate-400">Due: {assignment.dueDate}</span>
                            </div>
                        </div>
                        <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black ${assignment.statusColor} shadow-sm`}>
                            {assignment.status}
                        </span>
                    </div>
                ))}

                <button className="w-full p-4 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:border-primary-teacher hover:text-primary-teacher transition-all flex items-center justify-center gap-2 group">
                    <span className="material-symbols-outlined text-sm group-hover:rotate-90 transition-transform">add</span>
                    Submit New Work
                </button>
            </div>
        </div>
    );
}
