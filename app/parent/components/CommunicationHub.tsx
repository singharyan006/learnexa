"use client";

import { useState } from "react";
import Image from "next/image";

export default function CommunicationHub() {
    const [message, setMessage] = useState("");

    const messages = [
        {
            isTeacher: true,
            text: "Hello, I noticed Aryan has been very active in the Science club lately. He's doing great!",
            time: "10:24 AM"
        },
        {
            isTeacher: false,
            text: "Thank you, Ms. Thompson! He really enjoys the experiments. Will there be a field trip soon?",
            time: "10:45 AM"
        },
        {
            isTeacher: true,
            text: "Yes, we are planning a visit to the Planetarium next Thursday. I'll send the consent form soon.",
            time: "11:02 AM"
        }
    ];

    const otherTeachers = [
        {
            name: "Mr. David Chen",
            subject: "Mathematics",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFAum8USydRLKkP3BiW3o94Y0dJWTihaS4cdC-yOcTjE4CqeKj1dNPZOWDhpGuM4-9dEcbvHx3yciwAIgkA_rJlt7gFFwPuRFRyG6u9KxGgcdIWhVxurGpMTLMEHAObsDTRlqCdzha4Elbe0ThUMohoxkIz5aar4dtnML7mHbCp64PoN9duTYWEbDgJJIHOd4hpN2iWa8qwpw3AA3LVmiNZqvdE0fkZSzRQu5iuj8iCZgcaKg6WxlRJfoWSOzm_SNEdhKW91z7nyk",
            isOnline: false
        },
        {
            name: "Mrs. Elena Gilbert",
            subject: "History",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPPWgCi37uwjX_eUMj7WSKIYXesRhjFCFJcvxLL8FeT157G61ezDTZ2s34yZ5_6NrDVglwmK5Ta2h24TtOlRMpqB2xaOb7O8L5inDiMuMuV0Kj1lbCRfbyyOLHtEL_zb4_EiDL0lsDmOqT4b53LvDbi4MDsypkqEFZGmKfirVthCSJaVwdwtfeDV_KFvgdOdtCo1NSxP_FBAgtXVwfhSD401m8fANdDj-r9iOU_fQ9ouYApVf0BtTZNJvpDY3khpPE_ARaRJNFy1c",
            isOnline: true
        }
    ];

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
                <span className="material-icons-round text-primary">forum</span>
                Communication Hub
            </h2>

            {/* Chat Window */}
            <div className="bg-surface-card dark:bg-slate-800 rounded-2xl shadow-sm border border-surface-card/30 dark:border-slate-700 overflow-hidden flex flex-col h-[600px]">
                {/* Teacher Header */}
                <div className="p-4 border-b border-surface-card/30 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <Image
                                alt="Teacher profile"
                                className="w-10 h-10 rounded-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIcK5gxkCtR324b5UOT402oxu91zqeqC4M6jQGcQ_ZN_eBASdXnkG0QFY29rnRDVT9uW4cTsdoqMtcbweBQKhS0yKR-gygI79XKqbUG0Lp93cWYe7nfowz0yKs3ziP1qDaMViw19hRL-J6WHdkJMTsHTty1BGmNvFLWWci_W1tJuc4klDUvTJErj1EiOhlqomKpaqBQBxmECLpoZNFU2bPBRG76ZIuFoyyzgIU5OjMwe9ggS03-sK0MP7QVrAyAep72hKBIReZyCs"
                                width={40}
                                height={40}
                            />
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-surface-card rounded-full"></span>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold">Ms. Sarah Thompson</h4>
                            <p className="text-[11px] font-medium text-text-muted dark:text-text-muted uppercase">Class Teacher (Section B)</p>
                        </div>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex ${msg.isTeacher ? '' : 'flex-row-reverse'} gap-3 max-w-[85%] ${!msg.isTeacher ? 'ml-auto' : ''}`}
                        >
                            <div
                                className={`p-3 rounded-2xl ${msg.isTeacher
                                        ? 'bg-slate-100 dark:bg-slate-700 rounded-tl-none'
                                        : 'bg-primary text-text-heading rounded-tr-none'
                                    }`}
                            >
                                <p className="text-sm">{msg.text}</p>
                                <span className={`text-[10px] mt-1 block ${msg.isTeacher ? 'text-text-muted' : 'text-indigo-200 text-right'
                                    }`}>
                                    {msg.time}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-surface-card/30 dark:border-slate-700">
                    <form className="flex items-center gap-2" onSubmit={(e) => e.preventDefault()}>
                        <button className="text-text-muted hover:text-primary" type="button">
                            <span className="material-icons-round">add_circle_outline</span>
                        </button>
                        <input
                            className="flex-1 bg-slate-100 dark:bg-surface-sidebar border-none rounded-full py-2 px-4 text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-text-muted"
                            placeholder="Type a message..."
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button
                            className="bg-primary text-text-heading p-2 rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center"
                            type="submit"
                        >
                            <span className="material-icons-round text-xl">send</span>
                        </button>
                    </form>
                </div>
            </div>

            {/* Other Teachers */}
            <div className="bg-surface-card dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-surface-card/30 dark:border-slate-700">
                <h4 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4">Other Teachers</h4>
                <div className="space-y-4">
                    {otherTeachers.map((teacher, index) => (
                        <div key={index} className="flex items-center justify-between group cursor-pointer">
                            <div className="flex items-center gap-3">
                                <Image
                                    alt={teacher.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                    src={teacher.image}
                                    width={40}
                                    height={40}
                                />
                                <div>
                                    <h5 className="text-sm font-semibold group-hover:text-primary transition-colors">{teacher.name}</h5>
                                    <p className="text-xs text-text-muted">{teacher.subject}</p>
                                </div>
                            </div>
                            <span className={`w-2 h-2 rounded-full ${teacher.isOnline ? 'bg-green-500' : 'bg-slate-300 dark:bg-slate-600'}`}></span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
