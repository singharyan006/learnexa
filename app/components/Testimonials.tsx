import Image from "next/image";

export default function Testimonials() {
    const testimonials = [
        {
            rating: 5,
            text: "The ease of use is remarkable. I can track my daughter's progress across all subjects in real-time. It has truly bridged the gap between home and school.",
            name: "Sarah J.",
            role: "Parent of Grade 4 Student",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6tfK58tiaMcPA2rbVIe1rxAfwTRjoaM4Fte9y9BRhDVKlDbj6p7YEFgOaI-OnxDsU3ahzsoLr7CT2OD8NSBVYhzy0DtKxEKnzw35niC82lPqay5KDmoHA8SFzGjubyEGodSkk5L9svjfyECdoA89GGDjq2c_WpD8f9XE9mPqvIaSApbJgTpR-RUKm8f3IICSr5rAJ3o-hZvdFvQ1H2IZL2CDInQmZUS-nRZCH8zeZalZNxrFmI0yy1rSmlMmKHrzhuyPeUTgkF78",
        },
        {
            rating: 5,
            text: "Communication used to be a mess of emails and papers. Now, announcements and digital circulars reach every parent instantly. It saved us hours every week.",
            name: "Mr. Thompson",
            role: "Math Teacher & Head of Dept.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7xVUa7q-k7GNGUa0vCShB1TujRVWIOs-7sDRvqLw3SGVtmJzOotLYpJRP9zU2LwYGtI98IFwnKSPfkPpsr4eVd2mlQSYjAwmNPU6A-0Xycdb7OTPYkDxtPnD2j93DiazB3uAg3vI9uiYTyhKvSleSq8ARe_euC1CicWd6u2wU_OKoCvG0GP8T0Ggdj7bv-VjaQmlrhtfqZba3baP8fR0q4ELVKy7Hi1HGhAKH26oCRXSXRgULPDLHmTN7ehdxWYb3ETUa4EaLOGI",
        },
        {
            rating: 5,
            text: "The student progress tracking analytics are deep and insightful. We can identify students who need extra support much earlier in the term now.",
            name: "Dr. Elena R.",
            role: "School Principal",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsmPBFmnsfcM5wKoX0eICoivIQ9R3lgNUTz_Q0gs29Wwb3c6_GBKTcHp7AOjbvQHyjYzRnYmLvbNw2GHRsBtjzJRRxLO0Zv8v4p5qPe1NX1i0PzAiYIDVRQIm5x8aw6ucdx3hNET35oO3ft8z5gncS59AQaHKc2XeEmUA5BQPjqbWLBoPz2V8YJiPV8sUOOzHINSniGEV-rFgsSA2tSD5XC3k2Dx2Ux-Jadp9oLRCMfE9KQdbHYLBgp4f-nyTRbSDkz42ra1rSlyM",
        },
    ];

    return (
        <section id="testimonials" className="px-4 md:px-20 lg:px-40 py-24 bg-[#0f1419] border-t border-gray-800">
            <div className="max-w-[1280px] mx-auto">
                <div className="flex flex-col gap-6 mb-16 items-center text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit">
                        Community Voice
                    </span>
                    <h2 className="text-[#111318] dark:text-white text-3xl md:text-5xl font-black leading-tight tracking-tight max-w-[800px]">
                        Trusted by Parents and Educators
                    </h2>
                    <p className="text-[#616f89] dark:text-gray-400 text-lg font-normal leading-normal max-w-[640px]">
                        Hear from the people who use Learnexa every day to transform their learning environments.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-6 p-8 rounded-2xl bg-gray-800/40 border border-transparent hover:border-primary/20 transition-all"
                        >
                            <div className="flex text-primary">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <span key={i} className="material-symbols-outlined">star</span>
                                ))}
                            </div>
                            <p className="text-[#111318] dark:text-gray-300 text-lg font-medium italic leading-relaxed">
                                "{testimonial.text}"
                            </p>
                            <div className="flex items-center gap-4 mt-auto">
                                <Image
                                    alt={testimonial.name}
                                    className="size-12 rounded-full object-cover grayscale-[20%]"
                                    src={testimonial.image}
                                    width={48}
                                    height={48}
                                />
                                <div>
                                    <h4 className="text-[#111318] dark:text-white font-bold text-sm">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-[#616f89] dark:text-gray-400 text-xs">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
