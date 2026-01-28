export default function ParentCommunicationCTA() {
    return (
        <section className="bg-slate-900 dark:bg-primary/20 text-text-heading rounded-2xl p-6 shadow-xl relative overflow-hidden">
            <div className="relative z-10">
                <h3 className="text-lg font-bold mb-2">Connect with Parents</h3>
                <p className="text-sm text-slate-300 dark:text-text-heading mb-4">
                    Need to discuss student progress? Start a chat instantly.
                </p>
                <button className="w-full py-2 bg-surface-card text-text-heading font-bold rounded-lg hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-sm">send</span>
                    Quick Message
                </button>
            </div>

            <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-primary/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-10px] left-[-10px] w-20 h-20 bg-primary/20 rounded-full blur-2xl"></div>
        </section>
    );
}
