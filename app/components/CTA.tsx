export default function CTA() {
    return (
        <section className="px-4 py-24 bg-primary relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>
            <div className="max-w-[960px] mx-auto relative z-10 text-center">
                <div className="flex flex-col gap-8 items-center">
                    <h2 className="text-white text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                        Ready to transform your school?
                    </h2>
                    <p className="text-blue-100 text-lg lg:text-xl font-normal max-w-[700px]">
                        Join hundreds of institutions already scaling their impact. Get a personalized tour of our cloud platform today.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 w-full">
                        <button className="flex min-w-[220px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary border-2 border-white/30 text-white text-base font-bold hover:bg-white/10 transition-all">
                            <span className="truncate">Get Started Now</span>
                        </button>
                        <button className="flex min-w-[220px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary border-2 border-white/30 text-white text-base font-bold hover:bg-white/10 transition-all">
                            <span className="truncate">Contact Sales</span>
                        </button>
                    </div>
                    <p className="text-blue-200 text-sm">No credit card required • 14-day free trial • 24/7 Support</p>
                </div>
            </div>
        </section>
    );
}
