import TeacherStatsCards from "./components/TeacherStatsCards";
import CurrentClassAttendance from "./components/CurrentClassAttendance";
import RecentSubmissions from "./components/RecentSubmissions";
import TodaySchedule from "./components/TodaySchedule";
import Notices from "./components/Notices";
import Communication from "./components/Communication";

export default function TeacherDashboard() {
    return (
        <>
            <TeacherStatsCards />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <CurrentClassAttendance />
                    <RecentSubmissions />
                    <Communication />
                </div>

                <div className="space-y-8">
                    <TodaySchedule />
                    <Notices />
                </div>
            </div>
        </>
    );
}
