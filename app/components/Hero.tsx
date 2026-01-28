export default function Hero() {
    return (
        <section className="px-4 md:px-20 lg:px-40 py-16 md:py-28 bg-transparent">
            <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                <div className="flex flex-col gap-8 w-full md:w-1/2">
                    <div className="flex flex-col gap-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit">
                            Modern School Management
                        </span>
                        <h1 className="text-text-heading text-4xl lg:text-6xl font-black leading-[1.1] tracking-[-0.04em]">
                            Empowering Schools, Inspiring Futures
                        </h1>
                        <p className="text-text-muted text-lg lg:text-xl font-normal leading-relaxed max-w-[540px]">
                            The all-in-one cloud platform to centralize administration, enhance student performance, and bridge the gap between parents and teachers.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <button className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-text-heading text-base font-bold hover:bg-hover-glow hover:scale-[1.02] transition-all shadow-lg shadow-primary/30">
                            <span>Request a Demo</span>
                        </button>
                        <button className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-surface-card text-text-heading text-base font-bold hover:bg-surface-sidebar transition-all border border-surface-sidebar">
                            <span>Learn More</span>
                        </button>
                    </div>
                </div>

                <div className="w-full md:w-1/2 relative">
                    <div className="aspect-square w-full rounded-2xl bg-gradient-to-tr from-primary/10 to-surface-sidebar overflow-hidden shadow-2xl border border-surface-card p-4">
                        <div
                            className="w-full h-full bg-cover bg-center rounded-xl shadow-inner"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZ5vfAcNcPJEJnCrRayI2cUXB_wLhx6VVegxrC3Q9lY31w1rlTkIjcVxm4TcIN3WmOnV2J2k6sxjkK4svowNAMuMqGK4k7gr_plHBvcGy5jv3Q2LrlWlaB3yJCKb4N5K9gv8JMynDg1JRzQIPZ-N5qlIhMfqCSzj2zND9shvoQtCbsFDCzI95ilRk3JnCyx91EW0dELRRNd0ZYLVno-dydmT74QorIy-4TQHcfcXPQQ6FXYc1V_I2ItbTXt83VWErxMfjeRS1xMAA")' }}
                        />
                    </div>
                    <div className="absolute -bottom-6 -left-6 bg-surface-card p-4 rounded-xl shadow-xl border border-surface-sidebar hidden lg:block">
                        <div className="flex items-center gap-3">
                            <div className="size-10 rounded-full bg-success/30 flex items-center justify-center text-success">
                                <span className="material-symbols-outlined">check_circle</span>
                            </div>
                            <div>
                                <p className="text-xs text-text-muted">Implementation Rate</p>
                                <p className="text-lg font-bold text-text-heading">99.8% Success</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
