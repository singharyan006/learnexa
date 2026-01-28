export default function ExaminationsTable() {
    const examinations = [
        {
            subject: "Mathematics Midterm",
            grade: "Grade 10",
            datetime: "Oct 24, 09:00 AM",
            coordinator: "Dr. Sarah Connor",
            status: "SCHEDULED",
            statusColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
        },
        {
            subject: "Physics Lab Practical",
            grade: "Grade 12",
            datetime: "Oct 25, 11:30 AM",
            coordinator: "Robert Miller",
            status: "SCHEDULED",
            statusColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
        },
        {
            subject: "English Literature",
            grade: "Grade 9",
            datetime: "Oct 26, 08:00 AM",
            coordinator: "Emma Watson",
            status: "PENDING APPROVAL",
            statusColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
        },
    ];

    return (
        <div className="mt-8 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <h4 className="text-lg font-bold dark:text-white">Upcoming Examinations</h4>
                <button className="text-primary-admin dark:text-blue-400 text-sm font-semibold hover:underline">
                    View Schedule
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 dark:bg-slate-800/50">
                        <tr>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Subject</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Grade</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date & Time</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Coordinator</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {examinations.map((exam, index) => (
                            <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4 text-sm font-medium dark:text-white">{exam.subject}</td>
                                <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{exam.grade}</td>
                                <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{exam.datetime}</td>
                                <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{exam.coordinator}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${exam.statusColor}`}>
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
