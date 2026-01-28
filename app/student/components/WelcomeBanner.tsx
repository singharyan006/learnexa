export default function WelcomeBanner() {
    return (
        <div className="relative bg-gradient-to-r from-primary to-grad-center rounded-3xl p-8 text-text-heading mb-8 overflow-hidden shadow-xl shadow-primary/20">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-surface-card/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-surface-card/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-card/20 rounded-full text-xs font-bold mb-3 backdrop-blur-sm">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                        Currently Online
                    </div>
                    <h2 className="text-3xl font-black mb-2">Welcome back, Alex! 👋</h2>
                    <p className="text-text-heading/80 text-sm max-w-md">
                        You've completed <span className="font-bold text-text-heading">85%</span> of your weekly goals. Keep up the great work!
                    </p>

                    {/* Progress bar */}
                    <div className="mt-4 w-48">
                        <div className="h-1.5 bg-surface-card/20 rounded-full overflow-hidden">
                            <div className="h-full w-[85%] bg-surface-card rounded-full"></div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <button className="px-5 py-2.5 bg-surface-card/10 hover:bg-surface-card/20 backdrop-blur-sm rounded-xl text-sm font-bold flex items-center gap-2 transition-all border border-white/20">
                        <span className="material-symbols-outlined text-sm">calendar_today</span>
                        Full Schedule
                    </button>

                </div>
            </div>
        </div>
    );
}
