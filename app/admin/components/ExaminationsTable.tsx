export default function ExaminationsTable() {
    const examinations = [
        {
            subject: "Mathematics Midterm",
            grade: "Grade 10",
            datetime: "Oct 24, 09:00 AM",
            coordinator: "Dr. Sarah Connor",
            status: "SCHEDULED",
            statusColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
        },
        {
            subject: "Physics Lab Practical",
            grade: "Grade 12",
            datetime: "Oct 25, 11:30 AM",
            coordinator: "Robert Miller",
            status: "SCHEDULED",
            statusColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
        },
        {
            subject: "English Literature",
            grade: "Grade 9",
            datetime: "Oct 26, 08:00 AM",
            coordinator: "Emma Watson",
            status: "PENDING APPROVAL",
            statusColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
        },
    ];

    return (
        <div className="mt-10 bg-[#151B2C] rounded-3xl shadow-sm border border-[#1E293B] overflow-hidden">
            <div className="p-8 border-b border-[#1E293B] flex items-center justify-between">
                <div>
                    <h4 className="text-lg font-bold text-white tracking-tight">Upcoming Examinations</h4>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Institutional Exam Calendar</p>
                </div>
                <button className="px-4 py-2 bg-[#0B1120] border border-[#1E293B] rounded-xl text-[10px] font-bold uppercase tracking-widest text-[#4f46e5] hover:bg-[#4f46e5] hover:text-white transition-all cursor-pointer shadow-lg shadow-indigo-500/5 hover:shadow-indigo-500/20">
                    Full Schedule
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-[#0B1120]/50">
                        <tr>
                            <th className="px-8 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Subject</th>
                            <th className="px-8 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Grade</th>
                            <th className="px-8 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Date & Time</th>
                            <th className="px-8 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Coordinator</th>
                            <th className="px-8 py-5 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1E293B]">
                        {examinations.map((exam, index) => (
                            <tr key={index} className="hover:bg-[#0B1120]/30 transition-all group">
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-[#4f46e5]/10 flex items-center justify-center text-[#4f46e5] group-hover:bg-[#4f46e5] group-hover:text-white transition-all">
                                            <span className="material-symbols-outlined text-sm">assignment</span>
                                        </div>
                                        <span className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">{exam.subject}</span>
                                    </div>
                                </td>
                                <td className="px-8 py-6 text-sm font-bold text-slate-500">{exam.grade}</td>
                                <td className="px-8 py-6 text-sm font-medium text-slate-400">{exam.datetime}</td>
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-slate-800 border border-[#1E293B]"></div>
                                        <span className="text-sm font-medium text-slate-400">{exam.coordinator}</span>
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <span className={`px-3 py-1.5 rounded-lg text-[10px] font-bold border ${exam.statusColor}`}>
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
