import StatsCards from "./components/StatsCards";
import FeeCollectionChart from "./components/FeeCollectionChart";
import RecentActivities from "./components/RecentActivities";
import ExaminationsTable from "./components/ExaminationsTable";

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            <div className="mb-8">
                <h1 className="text-3xl font-display font-bold text-white uppercase tracking-tight">
                    Central Command
                </h1>
                <p className="text-slate-400 mt-1 font-medium">
                    Real-time overview of your school&apos;s performance and operations.
                </p>
            </div>

            <StatsCards />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <FeeCollectionChart />
                </div>
                <div>
                    <RecentActivities />
                </div>
            </div>

            <ExaminationsTable />

            <footer className="mt-12 mb-8 text-center">
                <div className="inline-flex items-center space-x-2 text-slate-500 text-xs font-bold uppercase tracking-widest">
                    <span className="material-symbols-outlined text-sm">cloud_done</span>
                    <span>Cloud-based Centralized ERP Platform • Professional Grade School Management</span>
                </div>
            </footer>
        </div>
    );
}
