import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen overflow-hidden bg-[#0B1120] text-slate-200">
            <AdminSidebar />

            <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <div className="flex-1 overflow-y-auto px-4 md:px-8 py-6 custom-scrollbar">
                    <AdminHeader />
                    <div className="max-w-7xl mx-auto mt-6">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
