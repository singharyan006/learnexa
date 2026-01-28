export default function ParentStatsCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Attendance Card */}
            <div className="bg-surface-card dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-surface-card/30 dark:border-slate-700 flex items-center gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-xl">
                    <span className="material-icons-round text-blue-600 dark:text-blue-400 text-3xl">event_available</span>
                </div>
                <div>
                    <p className="text-sm font-medium text-text-muted dark:text-text-muted">Attendance</p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold">94.2%</span>
                        <span className="text-xs font-medium text-green-500">+2% this month</span>
                    </div>
                </div>
            </div>

            {/* Test Result Card */}
            <div className="bg-surface-card dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-surface-card/30 dark:border-slate-700 flex items-center gap-4">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-xl">
                    <span className="material-icons-round text-success dark:text-emerald-400 text-3xl">auto_graph</span>
                </div>
                <div>
                    <p className="text-sm font-medium text-text-muted dark:text-text-muted">Recent Test Result</p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold">A+</span>
                        <span className="text-xs font-medium text-text-muted">Mathematics Quiz</span>
                    </div>
                </div>
            </div>

            {/* Pending Fees Card */}
            <div className="bg-surface-card dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-surface-card/30 dark:border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-xl">
                        <span className="material-icons-round text-orange-600 dark:text-orange-400 text-3xl">payments</span>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-text-muted dark:text-text-muted">Pending Fees</p>
                        <p className="text-3xl font-bold">₹1,250</p>
                    </div>
                </div>
                <button className="bg-primary hover:bg-hover-glow text-text-heading px-5 py-2.5 rounded-xl font-semibold transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
                    Pay Now
                    <span className="material-icons-round text-lg">arrow_forward</span>
                </button>
            </div>
        </div>
    );
}
