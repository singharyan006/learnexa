import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-[#0f1419]/95 backdrop-blur-md border-b border-gray-800 px-4 md:px-20 lg:px-40 py-3">
            <div className="flex items-center justify-between max-w-[1280px] mx-auto">
                <Link href="/" className="flex items-center gap-3">
                    <div className="size-8 text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-3xl">school</span>
                    </div>
                    <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">
                        Learnexa
                    </h2>
                </Link>

                <nav className="hidden md:flex flex-1 justify-end gap-10 items-center">
                    <div className="flex items-center gap-8">
                        <Link
                            className="text-gray-300 text-sm font-medium hover:text-primary transition-colors"
                            href="#features"
                        >
                            Features
                        </Link>
                        <Link
                            className="text-[#111318] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors"
                            href="#pricing"
                        >
                            Pricing
                        </Link>
                        <Link
                            className="text-[#111318] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors"
                            href="#testimonials"
                        >
                            Testimonials
                        </Link>
                        <Link
                            className="text-[#111318] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors"
                            href="#faq"
                        >
                            FAQ
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <SignedOut>
                            <SignInButton mode="modal">
                                <button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-md shadow-primary/20">
                                    <span>Login</span>
                                </button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton afterSignOutUrl="/" />
                        </SignedIn>
                    </div>
                </nav>
            </div>
        </header>
    );
}
