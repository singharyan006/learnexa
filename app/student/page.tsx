import WelcomeBanner from "./components/WelcomeBanner";
import StudentStatsCards from "./components/StudentStatsCards";
import OngoingCourses from "./components/OngoingCourses";
import GradesSummary from "./components/GradesSummary";
import ExamCountdown from "./components/ExamCountdown";
import ActiveAssignments from "./components/ActiveAssignments";
import StudentSchedule from "./components/StudentSchedule";
import QuickLinks from "./components/QuickLinks";

export default function StudentDashboard() {
    return (
        <>
            <WelcomeBanner />

            <StudentStatsCards />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - 2 cols */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <OngoingCourses />
                        <GradesSummary />
                    </div>

                    <ActiveAssignments />
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    <ExamCountdown />
                    <StudentSchedule />
                    <QuickLinks />
                </div>
            </div>
        </>
    );
}
