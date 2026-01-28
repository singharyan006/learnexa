export default function RecentSubmissions() {
    const submissions = [
        {
            student: "David Miller",
            initials: "DM",
            initialsColor: "bg-primary",
            assignment: "Macbeth Act I Analysis",
            time: "24m ago",
        },
        {
            student: "Sophia Green",
            initials: "SG",
            initialsColor: "bg-success",
            assignment: "Macbeth Act I Analysis",
            time: "1h ago",
        },
        {
            student: "James White",
            initials: "JW",
            initialsColor: "bg-warning",
            assignment: "Creative Essay: Fate",
            time: "2h ago",
        },
    ];

    return (
        <section className="bg-surface-card rounded-2xl shadow-sm border border-surface-card p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">upload_file</span>
                    Recent Submissions
                </h3>
                <a className="text-sm font-medium text-primary hover:underline" href="#">
                    View all
                </a>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="text-left border-b border-surface-card text-text-placeholder text-sm">
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
                                        <div className={`w-7 h-7 rounded-full ${submission.initialsColor} flex items-center justify-center text-[10px] text-text-heading`}>
                                            {submission.initials}
                                        </div>
                                        <span className="text-sm font-medium">{submission.student}</span>
                                    </div>
                                </td>
                                <td className="py-4 text-sm">{submission.assignment}</td>
                                <td className="py-4 text-sm text-text-placeholder">{submission.time}</td>
                                <td className="py-4 text-right">
                                    <button className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-md hover:bg-primary/20 transition-all">
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
