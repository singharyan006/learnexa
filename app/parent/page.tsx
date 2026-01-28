import ParentNavbar from "./components/ParentNavbar";
import ParentStatsCards from "./components/ParentStatsCards";
import SchoolFeed from "./components/SchoolFeed";
import CommunicationHub from "./components/CommunicationHub";

export default function ParentDashboard() {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark">
            <ParentNavbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <ParentStatsCards />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <SchoolFeed />
                    <CommunicationHub />
                </div>
            </main>

            {/* Mobile Bottom Navigation */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-surface-card dark:bg-surface-sidebar border-t border-surface-card/30 dark:border-surface-card py-3 px-6 flex justify-between items-center z-50">
                <button className="flex flex-col items-center gap-1 text-primary">
                    <span className="material-icons-round">dashboard</span>
                    <span className="text-[10px] font-bold">Home</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-text-muted">
                    <span className="material-icons-round">feed</span>
                    <span className="text-[10px] font-bold">Feed</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-text-muted">
                    <span className="material-icons-round">forum</span>
                    <span className="text-[10px] font-bold">Chat</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-text-muted">
                    <span className="material-icons-round">account_balance_wallet</span>
                    <span className="text-[10px] font-bold">Fees</span>
                </button>
            </div>
        </div>
    );
}
