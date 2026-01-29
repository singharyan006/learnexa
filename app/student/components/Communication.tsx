import Link from "next/link";

export default function Communication() {
    const messages = [
        {
            id: 1,
            sender: "Prof. Sarah Johnson",
            subject: "Feedback on your Physics Lab Report",
            preview: "Great work on the analysis section! I've left some comments regarding...",
            time: "2 hours ago",
            avatar: "SJ",
            avatarBg: "bg-gradient-to-br from-violet-500 to-purple-600",
            unread: true,
            type: "teacher",
        },
        {
            id: 2,
            sender: "Academic Office",
            subject: "Important: Schedule Change Notification",
            preview: "Please note that your Thursday calculus class has been moved to...",
            time: "5 hours ago",
            avatar: "AO",
            avatarBg: "bg-gradient-to-br from-amber-500 to-orange-600",
            unread: true,
            type: "announcement",
        },
        {
            id: 3,
            sender: "Study Group: Physics 101",
            subject: "Meeting tomorrow at 3 PM",
            preview: "Hey everyone! Just a reminder about our study session tomorrow...",
            time: "Yesterday",
            avatar: "P1",
            avatarBg: "bg-gradient-to-br from-cyan-500 to-teal-600",
            unread: false,
            type: "group",
        },
    ];

    const quickContacts = [
        { name: "Prof. Johnson", status: "online", avatar: "SJ", avatarBg: "bg-violet-500" },
        { name: "Prof. Williams", status: "away", avatar: "WL", avatarBg: "bg-blue-500" },
        { name: "Prof. Chen", status: "offline", avatar: "CH", avatarBg: "bg-emerald-500" },
        { name: "Counselor", status: "online", avatar: "CO", avatarBg: "bg-pink-500" },
    ];

    const statusColors: Record<string, string> = {
        online: "bg-green-500",
        away: "bg-amber-500",
        offline: "bg-slate-400",
    };

    return (
        <div className="bg-surface-card dark:bg-surface-card rounded-2xl shadow-sm border border-surface-card dark:border-surface-card/50 overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b border-surface-card dark:border-surface-card/50 flex items-center justify-between bg-surface-card/50 dark:bg-surface-card/50">
                <h3 className="text-lg font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">forum</span>
                    Communication
                    <span className="text-[10px] bg-primary text-text-heading px-2 py-0.5 rounded-full font-bold ml-1">2 new</span>
                </h3>
                <div className="flex items-center gap-2">
                    <button className="p-2 rounded-lg hover:bg-surface-card/50 dark:hover:bg-surface-sidebar/50 transition-colors text-text-muted hover:text-primary">
                        <span className="material-symbols-outlined text-lg">edit_square</span>
                    </button>
                    <Link href="#" className="text-xs font-bold text-primary hover:underline">View All</Link>
                </div>
            </div>

            {/* Quick Contacts */}
            <div className="px-6 py-4 border-b border-surface-card/50 dark:border-surface-card/30 bg-surface-card/30 dark:bg-surface-sidebar/20">
                <p className="text-[10px] font-bold text-text-placeholder uppercase tracking-wider mb-3">Quick Contact</p>
                <div className="flex items-center gap-3">
                    {quickContacts.map((contact, index) => (
                        <button
                            key={index}
                            className="group flex flex-col items-center gap-1 hover:scale-105 transition-transform"
                            title={contact.name}
                        >
                            <div className="relative">
                                <div className={`w-10 h-10 ${contact.avatarBg} rounded-full flex items-center justify-center text-text-heading text-xs font-bold shadow-lg group-hover:shadow-xl transition-shadow`}>
                                    {contact.avatar}
                                </div>
                                <span className={`absolute bottom-0 right-0 w-3 h-3 ${statusColors[contact.status]} rounded-full border-2 border-surface-card dark:border-surface-card`}></span>
                            </div>
                            <span className="text-[10px] text-text-muted font-medium truncate w-14 text-center">{contact.name.split(' ')[0]}</span>
                        </button>
                    ))}
                    <button className="group flex flex-col items-center gap-1 hover:scale-105 transition-transform">
                        <div className="w-10 h-10 border-2 border-dashed border-surface-card dark:border-surface-card/50 rounded-full flex items-center justify-center text-text-muted group-hover:border-primary group-hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-lg">add</span>
                        </div>
                        <span className="text-[10px] text-text-muted font-medium">More</span>
                    </button>
                </div>
            </div>

            {/* Messages */}
            <div className="p-4 space-y-2">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex items-start gap-3 p-4 rounded-xl border transition-all group cursor-pointer hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 ${message.unread
                                ? 'border-primary/30 bg-primary/5 dark:bg-primary/10'
                                : 'border-surface-card dark:border-surface-card/50 hover:border-primary/30'
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
                <button className="w-full p-4 rounded-xl border-2 border-dashed border-surface-card/30 dark:border-surface-card text-text-muted hover:bg-surface-card/20 dark:hover:bg-surface-sidebar/50 hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2 group mt-2">
                    <span className="material-symbols-outlined text-sm group-hover:rotate-12 transition-transform">send</span>
                    Compose New Message
                </button>
            </div>
        </div>
    );
}
