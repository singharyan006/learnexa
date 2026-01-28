"use client";

import React, { useState } from 'react';

export default function StudentCourses() {
    const [filter, setFilter] = useState('All');

    const enrolledCourses = [
        {
            id: 1,
            name: "Advanced Physics",
            instructor: "Prof. Sarah White",
            progress: 78,
            category: "Science",
            image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=200&auto=format&fit=crop",
            color: "bg-indigo-500",
            modules: 12,
            completedModules: 9
        },
        {
            id: 2,
            name: "Organic Chemistry",
            instructor: "Dr. Michael Chen",
            progress: 42,
            category: "Science",
            image: "https://images.unsplash.com/photo-1532187875605-2fe358a71ef7?q=80&w=200&auto=format&fit=crop",
            color: "bg-orange-500",
            modules: 10,
            completedModules: 4
        },
        {
            id: 3,
            name: "World Literature",
            instructor: "Ms. Elena Rodriguez",
            progress: 92,
            category: "Languages",
            image: "https://images.unsplash.com/photo-1491843342355-2e0b50e844b7?q=80&w=200&auto=format&fit=crop",
            color: "bg-emerald-500",
            modules: 8,
            completedModules: 7
        },
        {
            id: 4,
            name: "Calculus BC",
            instructor: "Dr. Alan Turing",
            progress: 65,
            category: "Mathematics",
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=200&auto=format&fit=crop",
            color: "bg-blue-500",
            modules: 15,
            completedModules: 10
        }
    ];

    const recommendedCourses = [
        {
            id: 5,
            name: "Intro to AI",
            instructor: "Prof. Samer",
            category: "Technology",
            rating: 4.8,
            students: "1.2k",
            color: "bg-purple-500"
        },
        {
            id: 6,
            name: "Economics 101",
            instructor: "Dr. Adam Smith",
            category: "Social Science",
            rating: 4.5,
            students: "800",
            color: "bg-rose-500"
        }
    ];

    const categories = ['All', 'Science', 'Mathematics', 'Languages', 'Technology'];

    const filteredCourses = filter === 'All'
        ? enrolledCourses
        : enrolledCourses.filter(c => c.category === filter);

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-bold font-display text-slate-900 dark:text-white">My Courses</h1>
                <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your learning journey and track progress</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-800/50 rounded-xl w-fit">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${filter === cat
                                ? 'bg-white dark:bg-slate-700 text-primary-teacher shadow-sm'
                                : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Enrolled Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                    <div
                        key={course.id}
                        className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700/50 overflow-hidden hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <div className="h-32 bg-slate-200 dark:bg-slate-700 relative">
                            {/* Mock image fallback */}
                            <div className={`absolute inset-0 ${course.color} opacity-20`}></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="material-symbols-outlined text-4xl text-slate-400 group-hover:scale-110 transition-transform">menu_book</span>
                            </div>
                            <div className="absolute top-4 left-4">
                                <span className={`px-2 py-1 rounded-md text-[10px] font-bold text-white uppercase ${course.color}`}>
                                    {course.category}
                                </span>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary-teacher transition-colors">
                                {course.name}
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{course.instructor}</p>

                            <div className="mt-6 space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="font-medium text-slate-600 dark:text-slate-300">Progress</span>
                                    <span className="font-bold text-primary-teacher">{course.progress}%</span>
                                </div>
                                <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full ${course.color} transition-all duration-1000`}
                                        style={{ width: `${course.progress}%` }}
                                    ></div>
                                </div>
                                <div className="flex justify-between items-center text-xs text-slate-400">
                                    <span>{course.completedModules} / {course.modules} Modules</span>
                                    <button className="text-primary-teacher font-bold hover:underline flex items-center gap-1">
                                        Continue <span className="material-symbols-outlined text-xs">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recommended section */}
            <div className="pt-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Recommended for You</h2>
                    <button className="text-sm font-bold text-primary-teacher hover:underline">View All</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {recommendedCourses.map((course) => (
                        <div key={course.id} className="bg-gradient-to-br from-indigo-50 to-white dark:from-slate-800/50 dark:to-slate-800 p-6 rounded-2xl border border-indigo-100 dark:border-slate-700/50 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 ${course.color} rounded-xl flex items-center justify-center text-white`}>
                                    <span className="material-symbols-outlined">auto_stories</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">{course.name}</h4>
                                    <p className="text-sm text-slate-500">{course.instructor} • {course.category}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="flex items-center gap-1 text-sm font-bold text-amber-500">
                                    <span className="material-symbols-outlined text-sm">star</span>
                                    {course.rating}
                                </div>
                                <p className="text-[10px] text-slate-400">{course.students} Students</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
