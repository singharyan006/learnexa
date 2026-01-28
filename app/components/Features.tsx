export default function Features() {
    const features = [
        {
            icon: "schedule",
            title: "Real-time Attendance",
            description: "Automated tracking with bio-metric integration and instant SMS/app notifications for parents to ensure safety.",
        },
        {
            icon: "grade",
            title: "Smart Grading",
            description: "Simplify examinations, track GPA trends, and generate custom digital report cards with a single click.",
        },
        {
            icon: "forum",
            title: "Seamless Communication",
            description: "Secure in-app messaging, digital circulars, and announcements to keep your entire school community connected.",
        },
    ];

    return (
        <section id="features" className="px-4 md:px-20 lg:px-40 py-24 bg-[#0a0e13] border-t border-gray-800">
            <div className="max-w-[1280px] mx-auto">
                <div className="flex flex-col gap-6 mb-16 items-center text-center">
                    <h2 className="text-[#111318] dark:text-white text-3xl md:text-5xl font-black leading-tight tracking-tight max-w-[800px]">
                        Streamline Your School Management
                    </h2>
                    <p className="text-[#616f89] dark:text-gray-400 text-lg font-normal leading-normal max-w-[640px]">
                        Experience the power of a centralized system designed for modern educational institutions, from nursery to higher ed.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group flex flex-col gap-6 rounded-2xl border border-gray-800 bg-gray-800/50 p-8 hover:shadow-2xl hover:border-primary/30 transition-all duration-300"
                        >
                            <div className="size-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3 className="text-[#111318] dark:text-white text-xl font-bold leading-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-[#616f89] dark:text-gray-400 text-base font-normal leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
