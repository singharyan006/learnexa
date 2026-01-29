export default function ExaminationsTable() {
    const examinations = [
        {
            subject: "Mathematics Midterm",
            grade: "Grade 10",
            datetime: "Oct 24, 09:00 AM",
            coordinator: "Dr. Sarah Connor",
            status: "SCHEDULED",
            statusColor: "bg-primary/10 text-primary border-primary/20",
        },
        {
            subject: "Physics Lab Practical",
            grade: "Grade 12",
            datetime: "Oct 25, 11:30 AM",
            coordinator: "Robert Miller",
            status: "SCHEDULED",
            statusColor: "bg-primary/10 text-primary border-primary/20",
        },
        {
            subject: "English Literature",
            grade: "Grade 9",
            datetime: "Oct 26, 08:00 AM",
            coordinator: "Emma Watson",
            status: "PENDING",
            statusColor: "bg-warning/10 text-amber-400 border-amber-500/20",
        },
    ];

    return (
        <div className="mt-10 bg-surface-card rounded-3xl shadow-sm border border-surface-card overflow-hidden">
            <div className="p-8 border-b border-surface-card flex items-center justify-between">
                <div>
                    <h4 className="text-lg font-bold text-text-heading tracking-tight">Upcoming Examinations</h4>
                    <p className="text-[10px] text-text-placeholder font-bold uppercase tracking-widest mt-1">Institutional Exam Calendar</p>
                </div>
                <button className="px-4 py-2 bg-background-main border border-surface-card rounded-xl text-[10px] font-bold uppercase tracking-widest text-primary hover:bg-primary hover:text-text-heading transition-all cursor-pointer shadow-lg shadow-primary/5 hover:shadow-primary/20">
                    Full Schedule
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-background-main/50">
                        <tr>
                            <th className="px-8 py-5 text-[10px] font-bold text-text-placeholder uppercase tracking-[0.2em]">Subject</th>
                            <th className="px-8 py-5 text-[10px] font-bold text-text-placeholder uppercase tracking-[0.2em]">Grade</th>
                            <th className="px-8 py-5 text-[10px] font-bold text-text-placeholder uppercase tracking-[0.2em]">Date & Time</th>
                            <th className="px-8 py-5 text-[10px] font-bold text-text-placeholder uppercase tracking-[0.2em]">Coordinator</th>
                            <th className="px-8 py-5 text-[10px] font-bold text-text-placeholder uppercase tracking-[0.2em]">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1E293B]">
                        {examinations.map((exam, index) => (
                            <tr key={index} className="hover:bg-background-main/30 transition-all group">
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-text-heading transition-all">
                                            <span className="material-symbols-outlined text-sm">assignment</span>
                                        </div>
                                        <span className="text-sm font-bold text-text-heading group-hover:text-text-heading transition-colors">{exam.subject}</span>
                                    </div>
                                </td>
                                <td className="px-8 py-6 text-sm font-bold text-text-placeholder">{exam.grade}</td>
                                <td className="px-8 py-6 text-sm font-medium text-text-muted">{exam.datetime}</td>
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-surface-card border border-surface-card"></div>
                                        <span className="text-sm font-medium text-text-muted">{exam.coordinator}</span>
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <span className={`inline-flex items-center justify-center w-28 px-3 py-1.5 rounded-lg text-[10px] font-bold border whitespace-nowrap ${exam.statusColor}`}>
                                        {exam.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
