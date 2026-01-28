import Link from "next/link";

export default function OngoingCourses() {
    const courses = [
        { name: "Advanced Physics", instructor: "Prof. Sarah White", progress: 78, color: "bg-indigo-500", icon: "bolt", modules: "9/12" },
        { name: "Organic Chemistry", instructor: "Dr. Michael Chen", progress: 42, color: "bg-orange-500", icon: "science", modules: "4/10" },
        { name: "World Literature", instructor: "Ms. Elena Rodriguez", progress: 92, color: "bg-emerald-500", icon: "menu_book", modules: "11/12" },
    ];

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700/50 overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-700/50 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/50">
                <h3 className="text-lg font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-teacher">auto_stories</span>
                    Ongoing Courses
                </h3>
                <Link href="/student/courses" className="text-xs font-bold text-primary-teacher hover:underline">View All</Link>
            </div>

            <div className="p-6 space-y-4">
                {courses.map((course, index) => (
                    <div key={index} className="p-4 rounded-xl border border-slate-100 dark:border-slate-700 hover:shadow-md hover:shadow-indigo-500/5 transition-all group cursor-pointer">
                        <div className="flex items-center gap-4 mb-3">
                            <div className={`w-10 h-10 ${course.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg`}>
                                <span className="material-symbols-outlined text-lg">{course.icon}</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-bold group-hover:text-primary-teacher transition-colors">{course.name}</p>
                                <p className="text-[10px] text-slate-500">{course.instructor}</p>
                            </div>
                            <span className={`text-sm font-black ${course.progress >= 80 ? 'text-emerald-500' :
                                course.progress >= 50 ? 'text-primary-teacher' : 'text-orange-500'
                                }`}>
                                {course.progress}%
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex-1 h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                <div
                                    className={`h-full ${course.color} rounded-full transition-all duration-1000`}
                                    style={{ width: `${course.progress}%` }}
                                ></div>
                            </div>
                            <span className="text-[10px] text-slate-400 font-medium">{course.modules} Modules</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
