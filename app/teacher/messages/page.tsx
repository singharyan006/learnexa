"use client";

import React from "react";
import NextImage from "next/image";

export default function TeacherMessages() {
    const contacts = [
        { id: 1, name: "Marcus Thorne (Parent)", student: "Bella Thorne", lastMsg: "Thank you for the update on Bella's...", time: "10:30 AM", unread: 2, avatar: "MT" },
        { id: 2, name: "Linda Green (Parent)", student: "Sophia Green", lastMsg: "Will there be a makeup class for...", time: "Yesterday", unread: 0, avatar: "LG" },
        { id: 3, name: "James Miller (Parent)", student: "David Miller", lastMsg: "David seems to be struggling with...", time: "Oct 12", unread: 0, avatar: "JM" },
        { id: 4, name: "Principal's Office", student: "Staff", lastMsg: "The upcoming faculty meeting has...", time: "Oct 12", unread: 0, avatar: "PO" },
    ];

    return (
        <div className="h-[calc(100vh-160px)] flex flex-col">
            <header className="mb-6">
                <h2 className="text-2xl font-bold tracking-tight">Messages</h2>
                <p className="text-text-placeholder dark:text-text-muted">
                    Direct communication with parents and school administration.
                </p>
            </header>

            <div className="flex-1 flex bg-surface-card dark:bg-background-main rounded-3xl border border-surface-card/30 dark:border-surface-card overflow-hidden shadow-sm">
                {/* Sidebar */}
                <div className="w-80 border-r border-surface-card/50/50 dark:border-surface-card flex flex-col">
                    <div className="p-4 border-b border-slate-50 dark:border-surface-card">
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-sm">
                                search
                            </span>
                            <input
                                className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-surface-card border-none rounded-xl text-xs focus:ring-1 focus:ring-primary/30 dark:text-text-heading"
                                placeholder="Search conversations..."
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        {contacts.map((contact) => (
                            <button
                                key={contact.id}
                                className={`w-full p-4 flex gap-3 hover:bg-surface-card/20 dark:hover:bg-surface-card/50 transition-colors border-b border-slate-50 dark:border-surface-card/50 text-left ${contact.id === 1 ? "bg-primary/10/50 dark:bg-indigo-900/10" : ""
                                    }`}
                            >
                                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-surface-card flex items-center justify-center text-xs font-bold text-text-placeholder flex-shrink-0">
                                    {contact.avatar}
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div className="flex justify-between items-start mb-0.5">
                                        <h4 className="font-bold text-sm truncate">{contact.name}</h4>
                                        <span className="text-[10px] text-text-muted">{contact.time}</span>
                                    </div>
                                    <p className="text-xs text-text-muted font-medium mb-1 line-clamp-1">Student: {contact.student}</p>
                                    <div className="flex justify-between items-center">
                                        <p className="text-xs text-text-placeholder truncate pr-2">{contact.lastMsg}</p>
                                        {contact.unread > 0 && (
                                            <span className="w-4 h-4 rounded-full bg-primary text-text-heading text-[9px] flex items-center justify-center font-bold">
                                                {contact.unread}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 flex flex-col bg-slate-50/30 dark:bg-background-main/50">
                    <div className="p-4 bg-surface-card dark:bg-background-main border-b border-surface-card dark:border-surface-card flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-[10px] font-bold text-primary">
                                MT
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Marcus Thorne</h4>
                                <p className="text-[10px] text-success font-bold flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-success"></span>
                                    Online
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="p-2 text-text-muted hover:text-primary hover:bg-slate-100 dark:hover:bg-surface-card rounded-lg transition-all">
                                <span className="material-symbols-outlined text-lg">call</span>
                            </button>
                            <button className="p-2 text-text-muted hover:text-primary hover:bg-slate-100 dark:hover:bg-surface-card rounded-lg transition-all">
                                <span className="material-symbols-outlined text-lg">videocam</span>
                            </button>
                            <button className="p-2 text-text-muted hover:text-primary hover:bg-slate-100 dark:hover:bg-surface-card rounded-lg transition-all">
                                <span className="material-symbols-outlined text-lg">more_vert</span>
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        <div className="flex flex-col items-center">
                            <span className="px-3 py-1 bg-slate-100 dark:bg-surface-card rounded-full text-[10px] font-bold text-text-muted uppercase tracking-widest">
                                Today
                            </span>
                        </div>

                        <div className="flex gap-3 max-w-[80%]">
                            <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex-shrink-0 flex items-center justify-center text-[10px] font-bold">MT</div>
                            <div className="p-4 bg-surface-card dark:bg-surface-card rounded-2xl rounded-tl-none shadow-sm border border-surface-card dark:border-surface-card">
                                <p className="text-sm text-slate-700 dark:text-text-muted">Hello Mrs. Johnson, I've received the mid-term report for Bella. Thank you for the detailed feedback on her literature project. She's really enjoying the MacBeth analysis.</p>
                                <span className="text-[9px] text-text-muted mt-2 block font-medium">10:28 AM</span>
                            </div>
                        </div>

                        <div className="flex flex-row-reverse gap-3 max-w-[80%] ml-auto">
                            <div className="w-8 h-8 rounded-full bg-primary text-text-heading flex-shrink-0 flex items-center justify-center text-[10px] font-bold">SJ</div>
                            <div className="p-4 bg-primary text-text-heading rounded-2xl rounded-tr-none shadow-lg shadow-indigo-100 dark:shadow-none">
                                <p className="text-sm">You're very welcome, Marcus! Bella is doing exceptional work. Her insights into Lady MacBeth's character development were particularly impressive during class discussions.</p>
                                <span className="text-[9px] text-text-heading/70 mt-2 block font-medium">10:35 AM</span>
                            </div>
                        </div>

                        <div className="flex gap-3 max-w-[80%]">
                            <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex-shrink-0 flex items-center justify-center text-[10px] font-bold">MT</div>
                            <div className="p-4 bg-surface-card dark:bg-surface-card rounded-2xl rounded-tl-none shadow-sm border border-surface-card dark:border-surface-card">
                                <p className="text-sm text-slate-700 dark:text-text-muted">I'm glad to hear that. Will there be any supplemental reading suggested for the next unit?</p>
                                <span className="text-[9px] text-text-muted mt-2 block font-medium">10:42 AM</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-surface-card dark:bg-background-main border-t border-surface-card dark:border-surface-card">
                        <div className="flex items-center gap-3">
                            <button className="p-2 text-text-muted hover:text-primary transition-all">
                                <span className="material-symbols-outlined text-xl">add_circle</span>
                            </button>
                            <div className="flex-1 relative">
                                <input
                                    className="w-full pl-4 pr-10 py-3 bg-slate-50 dark:bg-surface-card border-none rounded-2xl text-sm focus:ring-1 focus:ring-primary/30 dark:text-text-heading"
                                    placeholder="Type your message..."
                                    type="text"
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-primary text-text-heading rounded-xl shadow-md hover:opacity-90 transition-all">
                                    <span className="material-symbols-outlined text-sm">send</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
