import Image from "next/image";

export default function SchoolFeed() {
    return (
        <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    <span className="material-icons-round text-primary">feed</span>
                    School Feed
                </h2>
                <button className="text-sm font-semibold text-primary hover:underline">View All</button>
            </div>

            {/* Event Highlight Post */}
            <div className="bg-surface-card dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-surface-card/30 dark:border-slate-700 transition-transform hover:scale-[1.01]">
                <Image
                    alt="Annual Sports Day"
                    className="w-full h-64 object-cover"
                    src="/images/sports_day_banner.png"
                    width={800}
                    height={256}
                />
                <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
                            Event Highlight
                        </span>
                        <span className="text-text-muted text-xs font-medium">• 2 hours ago</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Annual Sports Meet 2024</h3>
                    <p className="text-text-placeholder dark:text-text-muted leading-relaxed">
                        A fantastic day of athleticism and sportsmanship! Aryan secured 2nd place in the 400m relay. Check out the full gallery of images from today's events.
                    </p>
                    <div className="mt-6 flex items-center justify-between">
                        <div className="flex -space-x-2">
                            <Image
                                alt="Teacher"
                                className="w-8 h-8 rounded-full border-2 border-white dark:border-surface-card"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4BXgcnfRN31DGnJR55Q7hZ-zb1017sdyQD-RjEw6kdd1ktM-WLT_-V2da1C-MEnVcxBTYGvoH64CR8ydtzBrSwNzUygtLs4NKf5D0uygcbEsSzhpJH8nRs4Fuof3w7AVBrqc4_cZGy7BBCFUNV29V6stULbQRU6GGLLhjIZwWk1sOjZVMzaV7RIVYSVltt68FQPV-w9dr4yvJ5-hKItsGWYlGHNLtWvmhpNO3O3Zwi7FttO7GnooQb1RejnkY-r4i5xTpHi19rC8"
                                width={32}
                                height={32}
                            />
                            <Image
                                alt="Staff"
                                className="w-8 h-8 rounded-full border-2 border-white dark:border-surface-card"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT9t23j95Ts0Wh6hsqe1m7ohn_JOKf9vDjgBRAjigYVk0v_To6a7vEdXPLSvW0O3WxIEFW6yGqkzczWb4u0mrlwOFaU4wepU0PXzSXWYVGopq_nEi3fee7gtzGlCOVz9Qy2iT_EuebHOpnAoIOxnzr7c_N6vYFyfcAYsKXT3cuRyHD0-V44bF0sRNn66MQZ2VysiOEZ0rr4w4waKD-QvxzhHnTeOtG5CHTpMm_UIlem3Dsk29qzm4qfqsURp3Aq5lHckdEwXOzIO4"
                                width={32}
                                height={32}
                            />
                            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 border-2 border-white dark:border-surface-card flex items-center justify-center text-[10px] font-bold">
                                +12
                            </div>
                        </div>
                        <button className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors">
                            <span className="material-icons-round text-xl">favorite_border</span>
                            <span className="text-sm font-medium">42 Likes</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Announcement */}
            <div className="bg-surface-card dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-surface-card/30 dark:border-slate-700">
                <div className="flex items-start gap-4">
                    <div className="bg-indigo-100 dark:bg-primary/10 p-3 rounded-xl shrink-0">
                        <span className="material-icons-round text-primary dark:text-primary">campaign</span>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold text-text-muted uppercase tracking-widest">Announcement</span>
                            <span className="text-text-muted text-xs font-medium">• Yesterday</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2">Parent-Teacher Meeting - Semester 1</h3>
                        <p className="text-text-placeholder dark:text-text-muted text-sm leading-relaxed mb-4">
                            Schedule for the upcoming PTM is now available. Please book your slot through the portal by Friday.
                        </p>
                        <button className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                            Download Schedule <span className="material-icons-round text-base">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
