import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import StatsCards from "./components/StatsCards";
import FeeCollectionChart from "./components/FeeCollectionChart";
import RecentActivities from "./components/RecentActivities";
import ExaminationsTable from "./components/ExaminationsTable";

export default function AdminDashboard() {
    return (
        <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark">
            <AdminSidebar />

            <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <AdminHeader />

                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                    <div className="mb-8">
                        <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-white">
                            Central Command
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 mt-1">
                            Real-time overview of your school's performance and operations.
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
                        <div className="inline-flex items-center space-x-2 text-slate-400 dark:text-slate-500 text-xs">
                            <span className="material-icons-round text-sm">cloud_done</span>
                            <span>Cloud-based Centralized ERP Platform • Professional Grade School Management</span>
                        </div>
                    </footer>
                </div>
            </main>
        </div>
    );
}
