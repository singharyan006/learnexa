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
                <p className="text-slate-500 dark:text-slate-400">
                    Direct communication with parents and school administration.
                </p>
            </header>

            <div className="flex-1 flex bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                {/* Sidebar */}
                <div className="w-80 border-r border-slate-100 dark:border-slate-800 flex flex-col">
                    <div className="p-4 border-b border-slate-50 dark:border-slate-800">
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                                search
                            </span>
                            <input
                                className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-xs focus:ring-1 focus:ring-primary-teacher/30 dark:text-slate-200"
                                placeholder="Search conversations..."
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        {contacts.map((contact) => (
                            <button
                                key={contact.id}
                                className={`w-full p-4 flex gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border-b border-slate-50 dark:border-slate-800/50 text-left ${contact.id === 1 ? "bg-indigo-50/50 dark:bg-indigo-900/10" : ""
                                    }`}
                            >
                                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-500 flex-shrink-0">
                                    {contact.avatar}
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div className="flex justify-between items-start mb-0.5">
                                        <h4 className="font-bold text-sm truncate">{contact.name}</h4>
                                        <span className="text-[10px] text-slate-400">{contact.time}</span>
                                    </div>
                                    <p className="text-xs text-slate-400 font-medium mb-1 line-clamp-1">Student: {contact.student}</p>
                                    <div className="flex justify-between items-center">
                                        <p className="text-xs text-slate-500 truncate pr-2">{contact.lastMsg}</p>
                                        {contact.unread > 0 && (
                                            <span className="w-4 h-4 rounded-full bg-primary-teacher text-white text-[9px] flex items-center justify-center font-bold">
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
                <div className="flex-1 flex flex-col bg-slate-50/30 dark:bg-slate-900/50">
                    <div className="p-4 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-[10px] font-bold text-indigo-600">
                                MT
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Marcus Thorne</h4>
                                <p className="text-[10px] text-emerald-500 font-bold flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                    Online
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="p-2 text-slate-400 hover:text-primary-teacher hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all">
                                <span className="material-symbols-outlined text-lg">call</span>
                            </button>
                            <button className="p-2 text-slate-400 hover:text-primary-teacher hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all">
                                <span className="material-symbols-outlined text-lg">videocam</span>
                            </button>
                            <button className="p-2 text-slate-400 hover:text-primary-teacher hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all">
                                <span className="material-symbols-outlined text-lg">more_vert</span>
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        <div className="flex flex-col items-center">
                            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                Today
                            </span>
                        </div>

                        <div className="flex gap-3 max-w-[80%]">
                            <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex-shrink-0 flex items-center justify-center text-[10px] font-bold">MT</div>
                            <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 dark:border-slate-700">
                                <p className="text-sm text-slate-700 dark:text-slate-300">Hello Mrs. Johnson, I've received the mid-term report for Bella. Thank you for the detailed feedback on her literature project. She's really enjoying the MacBeth analysis.</p>
                                <span className="text-[9px] text-slate-400 mt-2 block font-medium">10:28 AM</span>
                            </div>
                        </div>

                        <div className="flex flex-row-reverse gap-3 max-w-[80%] ml-auto">
                            <div className="w-8 h-8 rounded-full bg-primary-teacher text-white flex-shrink-0 flex items-center justify-center text-[10px] font-bold">SJ</div>
                            <div className="p-4 bg-primary-teacher text-white rounded-2xl rounded-tr-none shadow-lg shadow-indigo-100 dark:shadow-none">
                                <p className="text-sm">You're very welcome, Marcus! Bella is doing exceptional work. Her insights into Lady MacBeth's character development were particularly impressive during class discussions.</p>
                                <span className="text-[9px] text-white/70 mt-2 block font-medium">10:35 AM</span>
                            </div>
                        </div>

                        <div className="flex gap-3 max-w-[80%]">
                            <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex-shrink-0 flex items-center justify-center text-[10px] font-bold">MT</div>
                            <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 dark:border-slate-700">
                                <p className="text-sm text-slate-700 dark:text-slate-300">I'm glad to hear that. Will there be any supplemental reading suggested for the next unit?</p>
                                <span className="text-[9px] text-slate-400 mt-2 block font-medium">10:42 AM</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                        <div className="flex items-center gap-3">
                            <button className="p-2 text-slate-400 hover:text-primary-teacher transition-all">
                                <span className="material-symbols-outlined text-xl">add_circle</span>
                            </button>
                            <div className="flex-1 relative">
                                <input
                                    className="w-full pl-4 pr-10 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-1 focus:ring-primary-teacher/30 dark:text-slate-200"
                                    placeholder="Type your message..."
                                    type="text"
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-primary-teacher text-white rounded-xl shadow-md hover:opacity-90 transition-all">
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
