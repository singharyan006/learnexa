import TeacherSidebar from "./components/TeacherSidebar";
import TeacherHeader from "./components/TeacherHeader";

export default function TeacherLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen overflow-hidden bg-[#0B1120] text-slate-200">
            <TeacherSidebar />

            <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <div className="flex-1 overflow-y-auto px-4 md:px-8 py-6 custom-scrollbar">
                    <TeacherHeader />
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
