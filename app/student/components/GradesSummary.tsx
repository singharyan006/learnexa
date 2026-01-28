import Link from "next/link";

export default function GradesSummary() {
    const grades = [
        { day: "MON", height: 60, grade: "B+", color: "bg-amber-400" },
        { day: "TUE", height: 75, grade: "A-", color: "bg-primary" },
        { day: "WED", height: 90, grade: "A+", color: "bg-primary" },
        { day: "THU", height: 70, grade: "B+", color: "bg-amber-400" },
        { day: "FRI", height: 85, grade: "A", color: "bg-success" },
    ];

    return (
        <div className="bg-surface-card dark:bg-surface-card rounded-2xl shadow-sm border border-surface-card dark:border-surface-card/50 overflow-hidden">
            <div className="p-6 border-b border-surface-card dark:border-surface-card/50 flex items-center justify-between bg-surface-card/50 dark:bg-surface-card/50">
                <h3 className="text-lg font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">insights</span>
                    Grades Summary
                </h3>
                <Link href="/student/grades" className="text-xs font-bold text-primary hover:underline">View Detailed</Link>
            </div>

            <div className="p-6">
                <div className="flex items-end justify-between h-36 gap-3">
                    {grades.map((item, index) => (
                        <div key={index} className="flex flex-col items-center flex-1 group">
                            <div className="relative w-full flex justify-center mb-2">
                                <span className="absolute -top-7 text-[10px] font-black text-primary opacity-0 group-hover:opacity-100 transition-opacity bg-primary/10 dark:bg-primary/10 px-1.5 py-0.5 rounded">
                                    {item.grade}
                                </span>
                                <div
                                    className={`w-full max-w-[40px] rounded-t-lg ${item.color} transition-all duration-700 group-hover:scale-105 shadow-sm`}
                                    style={{ height: `${item.height}%` }}
                                ></div>
                            </div>
                            <span className="text-[10px] text-text-placeholder font-bold">{item.day}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-6 pt-4 border-t border-surface-card dark:border-surface-card flex items-center justify-between">
                    <div>
                        <p className="text-[10px] text-text-muted uppercase font-bold tracking-wider">This Semester Avg.</p>
                        <p className="text-2xl font-black text-primary">A-</p>
                    </div>
                    <div className="text-right">
                        <p className="text-[10px] text-text-muted uppercase font-bold tracking-wider">Current GPA</p>
                        <p className="text-2xl font-black text-success">3.68</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
