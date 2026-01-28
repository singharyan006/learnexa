import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#0f1419] border-t border-gray-800 px-4 md:px-20 lg:px-40 py-16">
            <div className="max-w-[1280px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-3xl">school</span>
                            <h2 className="text-[#111318] dark:text-white text-xl font-bold">Learnexa</h2>
                        </div>
                        <p className="text-[#616f89] dark:text-gray-400 text-sm leading-relaxed">
                            Leading school management software built to empower modern educational leadership with data-driven insights.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[#111318] dark:text-white font-bold mb-6">Product</h4>
                        <ul className="flex flex-col gap-4 text-[#616f89] dark:text-gray-400 text-sm">
                            <li><Link className="hover:text-primary transition-colors" href="#features">Features</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#pricing">Pricing</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="/dashboard">Dashboard</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#">Mobile App</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[#111318] dark:text-white font-bold mb-6">Support</h4>
                        <ul className="flex flex-col gap-4 text-[#616f89] dark:text-gray-400 text-sm">
                            <li><Link className="hover:text-primary transition-colors" href="#">Help Center</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#">Documentation</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#">Contact Us</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#">API Status</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[#111318] dark:text-white font-bold mb-6">Newsletter</h4>
                        <p className="text-[#616f89] dark:text-gray-400 text-xs mb-4">Stay updated with the latest in EdTech.</p>
                        <div className="flex gap-2">
                            <input
                                className="flex-1 bg-gray-800 border-none rounded-lg text-sm px-4 focus:ring-2 focus:ring-primary text-white"
                                placeholder="Email"
                                type="email"
                            />
                            <button className="p-2 bg-primary text-white rounded-lg hover:bg-primary/90">
                                <span className="material-symbols-outlined">send</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800 gap-6">
                    <p className="text-[#616f89] dark:text-gray-500 text-sm">
                        © 2024 Learnexa. All rights reserved.
                    </p>
                    <div className="flex items-center gap-8">
                        <Link className="text-[#616f89] dark:text-gray-500 text-sm hover:text-[#111318] dark:hover:text-white transition-colors" href="#">
                            Privacy Policy
                        </Link>
                        <Link className="text-[#616f89] dark:text-gray-500 text-sm hover:text-[#111318] dark:hover:text-white transition-colors" href="#">
                            Terms of Service
                        </Link>
                    </div>
                    <div className="flex gap-6">
                        <Link className="text-[#616f89] hover:text-primary transition-colors" href="#">
                            <span className="material-symbols-outlined">public</span>
                        </Link>
                        <Link className="text-[#616f89] hover:text-primary transition-colors" href="#">
                            <span className="material-symbols-outlined">alternate_email</span>
                        </Link>
                        <Link className="text-[#616f89] hover:text-primary transition-colors" href="#">
                            <span className="material-symbols-outlined">group</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
