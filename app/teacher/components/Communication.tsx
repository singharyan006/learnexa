import Link from "next/link";

export default function Communication() {
    const messages = [
        {
            id: 1,
            sender: "Emily Rodriguez (Parent)",
            subject: "Question about Semester Grades",
            preview: "Hi, I wanted to discuss my son's progress in your calculus class...",
            time: "1 hour ago",
            avatar: "ER",
            avatarBg: "bg-gradient-to-br from-pink-500 to-rose-600",
            unread: true,
            type: "parent",
        },
        {
            id: 2,
            sender: "Principal Davis",
            subject: "Staff Meeting Agenda - Friday",
            preview: "Please review the attached agenda for our upcoming staff meeting...",
            time: "3 hours ago",
            avatar: "PD",
            avatarBg: "bg-gradient-to-br from-amber-500 to-orange-600",
            unread: true,
            type: "admin",
        },
        {
            id: 3,
            sender: "Alex Thompson (Student)",
            subject: "Request for Extra Help Session",
            preview: "Professor, I'm having trouble with the recent chapter on derivatives...",
            time: "Yesterday",
            avatar: "AT",
            avatarBg: "bg-gradient-to-br from-cyan-500 to-teal-600",
            unread: false,
            type: "student",
        },
        {
            id: 4,
            sender: "Department: Mathematics",
            subject: "Curriculum Update for Next Semester",
            preview: "The new curriculum guidelines have been approved. Please review...",
            time: "2 days ago",
            avatar: "MT",
            avatarBg: "bg-gradient-to-br from-violet-500 to-purple-600",
            unread: false,
            type: "department",
        },
    ];

    const quickActions = [
        { name: "Students", icon: "group", count: 12, color: "from-cyan-500 to-teal-600" },
        { name: "Parents", icon: "family_restroom", count: 5, color: "from-pink-500 to-rose-600" },
        { name: "Staff", icon: "badge", count: 3, color: "from-amber-500 to-orange-600" },
        { name: "Broadcast", icon: "campaign", count: null, color: "from-violet-500 to-purple-600" },
    ];

    return (
        <section className="bg-surface-card rounded-2xl shadow-sm border border-surface-card overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b border-surface-card/50 flex items-center justify-between">
                <h3 className="text-lg font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">forum</span>
                    Communication Hub
                    <span className="text-[10px] bg-primary text-text-heading px-2 py-0.5 rounded-full font-bold ml-1">2 new</span>
                </h3>
                <div className="flex items-center gap-2">
                    <button className="p-2 rounded-lg hover:bg-surface-sidebar/50 transition-colors text-text-muted hover:text-primary">
                        <span className="material-symbols-outlined text-lg">edit_square</span>
                    </button>
                    <Link href="/teacher/messages" className="text-xs font-bold text-primary hover:underline">View All</Link>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="px-6 py-4 border-b border-surface-card/30 bg-surface-sidebar/20">
                <p className="text-[10px] font-bold text-text-placeholder uppercase tracking-wider mb-3">Quick Send To</p>
                <div className="flex items-center gap-3">
                    {quickActions.map((action, index) => (
                        <button
                            key={index}
                            className={`group flex-1 p-3 rounded-xl bg-gradient-to-br ${action.color} text-text-heading transition-all hover:scale-105 hover:shadow-lg`}
                        >
                            <div className="flex items-center justify-between">
                                <span className="material-symbols-outlined text-lg">{action.icon}</span>
                                {action.count && (
                                    <span className="text-[10px] font-bold bg-white/20 px-1.5 py-0.5 rounded">{action.count}</span>
                                )}
                            </div>
                            <p className="text-xs font-bold mt-1 text-left">{action.name}</p>
                        </button>
                    ))}
                </div>
            </div>

            {/* Messages */}
            <div className="p-4 space-y-2">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex items-start gap-3 p-4 rounded-xl border transition-all group cursor-pointer hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 ${message.unread
                                ? 'border-primary/30 bg-primary/5'
                                : 'border-surface-card/50 hover:border-primary/30'
                            }`}
                    >
                        <div className={`w-10 h-10 ${message.avatarBg} rounded-full flex items-center justify-center text-text-heading text-xs font-bold flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                            {message.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                                <p className={`text-sm font-bold truncate group-hover:text-primary transition-colors ${message.unread ? 'text-text-heading' : 'text-text-body'}`}>
                                    {message.sender}
                                </p>
                                <span className="text-[10px] text-text-muted flex-shrink-0">{message.time}</span>
                            </div>
                            <p className={`text-xs truncate mt-0.5 ${message.unread ? 'text-text-body font-medium' : 'text-text-muted'}`}>
                                {message.subject}
                            </p>
                            <p className="text-[11px] text-text-placeholder truncate mt-1">{message.preview}</p>
                        </div>
                        {message.unread && (
                            <span className="w-2.5 h-2.5 bg-primary rounded-full flex-shrink-0 mt-1.5 animate-pulse shadow-lg shadow-primary/50"></span>
                        )}
                    </div>
                ))}

                {/* Compose Button */}
                <button className="w-full p-4 rounded-xl border-2 border-dashed border-surface-card text-text-muted hover:bg-surface-sidebar/50 hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2 group mt-2">
                    <span className="material-symbols-outlined text-sm group-hover:rotate-12 transition-transform">send</span>
                    Compose New Message
                </button>
            </div>
        </section>
    );
}
