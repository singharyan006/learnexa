export default function GradesSummary() {
    const grades = [
        { day: "MON", height: "60%", grade: null },
        { day: "TUE", height: "75%", grade: null },
        { day: "WED", height: "90%", grade: "A+" },
        { day: "THU", height: "70%", grade: null },
        { day: "FRI", height: "80%", grade: null },
    ];

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700/50">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold">Grades Summary</h3>
                <select className="text-sm bg-slate-50 dark:bg-slate-700 border-none rounded-lg py-1.5 px-3">
                    <option>Last Semester</option>
                    <option>This Semester</option>
                </select>
            </div>

            <div className="flex items-end justify-between h-32 gap-2">
                {grades.map((item, index) => (
                    <div key={index} className="flex flex-col items-center flex-1">
                        <div className="relative w-full flex justify-center mb-2">
                            {item.grade && (
                                <span className="absolute -top-6 text-xs font-bold text-primary-teacher">
                                    {item.grade}
                                </span>
                            )}
                            <div
                                className={`w-8 rounded-t-lg ${item.grade ? 'bg-primary-teacher' : 'bg-amber-400'
                                    } transition-all`}
                                style={{ height: item.height }}
                            ></div>
                        </div>
                        <span className="text-[10px] text-slate-500 font-medium">{item.day}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
