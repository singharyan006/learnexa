import Link from "next/link";

export default function OngoingCourses() {
    const courses = [
        { name: "Advanced Physics", instructor: "Prof. Sarah White", progress: 78, color: "bg-primary", icon: "bolt", modules: "9/12" },
        { name: "Organic Chemistry", instructor: "Dr. Michael Chen", progress: 42, color: "bg-warning", icon: "science", modules: "4/10" },
        { name: "World Literature", instructor: "Ms. Elena Rodriguez", progress: 92, color: "bg-success", icon: "menu_book", modules: "11/12" },
    ];

    return (
        <div className="bg-surface-card dark:bg-surface-card rounded-2xl shadow-sm border border-surface-card dark:border-surface-card/50 overflow-hidden">
            <div className="p-6 border-b border-surface-card dark:border-surface-card/50 flex items-center justify-between bg-surface-card/50 dark:bg-surface-card/50">
                <h3 className="text-lg font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">auto_stories</span>
                    Ongoing Courses
                </h3>
                <Link href="/student/courses" className="text-xs font-bold text-primary hover:underline">View All</Link>
            </div>

            <div className="p-6 space-y-4">
                {courses.map((course, index) => (
                    <div key={index} className="p-4 rounded-xl border border-surface-card dark:border-surface-card hover:shadow-md hover:shadow-primary/5 transition-all group cursor-pointer">
                        <div className="flex items-center gap-4 mb-3">
                            <div className={`w-10 h-10 ${course.color} rounded-xl flex items-center justify-center text-text-heading group-hover:scale-110 transition-transform shadow-lg`}>
                                <span className="material-symbols-outlined text-lg">{course.icon}</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-bold group-hover:text-primary transition-colors">{course.name}</p>
                                <p className="text-[10px] text-text-placeholder">{course.instructor}</p>
                            </div>
                            <span className={`text-sm font-black ${course.progress >= 80 ? 'text-success' :
                                course.progress >= 50 ? 'text-primary' : 'text-warning'
                                }`}>
                                {course.progress}%
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex-1 h-1.5 bg-surface-card dark:bg-surface-sidebar rounded-full overflow-hidden">
                                <div
                                    className={`h-full ${course.color} rounded-full transition-all duration-1000`}
                                    style={{ width: `${course.progress}%` }}
                                ></div>
                            </div>
                            <span className="text-[10px] text-text-muted font-medium">{course.modules} Modules</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
