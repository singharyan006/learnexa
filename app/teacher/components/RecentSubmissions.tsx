export default function RecentSubmissions() {
    const submissions = [
        {
            student: "David Miller",
            initials: "DM",
            initialsColor: "bg-indigo-500",
            assignment: "Macbeth Act I Analysis",
            time: "24m ago",
        },
        {
            student: "Sophia Green",
            initials: "SG",
            initialsColor: "bg-emerald-500",
            assignment: "Macbeth Act I Analysis",
            time: "1h ago",
        },
        {
            student: "James White",
            initials: "JW",
            initialsColor: "bg-amber-500",
            assignment: "Creative Essay: Fate",
            time: "2h ago",
        },
    ];

    return (
        <section className="bg-[#151B2C] rounded-2xl shadow-sm border border-[#1E293B] p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-teacher">upload_file</span>
                    Recent Submissions
                </h3>
                <a className="text-sm font-medium text-primary-teacher hover:underline" href="#">
                    View all
                </a>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="text-left border-b border-[#1E293B] text-slate-500 text-sm">
                        <tr>
                            <th className="pb-3 font-semibold">Student</th>
                            <th className="pb-3 font-semibold">Assignment</th>
                            <th className="pb-3 font-semibold">Time</th>
                            <th className="pb-3 font-semibold text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1E293B]">
                        {submissions.map((submission, index) => (
                            <tr key={index}>
                                <td className="py-4">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-7 h-7 rounded-full ${submission.initialsColor} flex items-center justify-center text-[10px] text-white`}>
                                            {submission.initials}
                                        </div>
                                        <span className="text-sm font-medium">{submission.student}</span>
                                    </div>
                                </td>
                                <td className="py-4 text-sm">{submission.assignment}</td>
                                <td className="py-4 text-sm text-slate-500">{submission.time}</td>
                                <td className="py-4 text-right">
                                    <button className="px-3 py-1 bg-primary-teacher/10 text-primary-teacher text-xs font-bold rounded-md hover:bg-primary-teacher/20 transition-all">
                                        Grade
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
