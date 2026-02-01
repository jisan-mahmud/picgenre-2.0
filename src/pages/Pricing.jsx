import React from 'react'

export default function Pricing() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
            <section className="pt-20 pb-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6 text-slate-900 dark:text-white">
                        Simple, Transparent <span className="text-primary">Pricing</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Choose the perfect plan for your creative workflow. Scale as you grow with Picgenre's powerful AI infrastructure.
                    </p>
                </div>
            </section>
            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 relative hover:bg-slate-50 dark:hover:bg-slate-900 transition-all">
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Free</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">Perfect for hobbyists and experimentation.</p>
                        </div>
                        <div className="mb-8">
                            <span className="text-4xl font-black text-slate-900 dark:text-white">$0</span>
                            <span className="text-slate-500 dark:text-slate-400">/mo</span>
                        </div>
                        <ul className="space-y-4 mb-12 flex-1">
                            <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                                <span>5 batch uploads per month</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                                <span>Standard processing speed</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                                <span>Basic metadata generation</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                                <span className="material-symbols-outlined text-lg">cancel</span>
                                <span>No API access</span>
                            </li>
                        </ul>
                        <button className="w-full py-4 rounded-xl border border-slate-200 dark:border-white/10 font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors text-slate-900 dark:text-white">
                            Start for Free
                        </button>
                    </div>
                    <div className="flex flex-col p-8 rounded-2xl border-2 border-primary bg-white dark:bg-slate-900/40 relative shadow-2xl shadow-primary/10">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                            Most Popular
                        </div>
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Pro</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">For professional creators and power users.</p>
                        </div>
                        <div className="mb-8">
                            <span className="text-4xl font-black text-slate-900 dark:text-white">$29</span>
                            <span className="text-slate-500 dark:text-slate-400">/mo</span>
                        </div>
                        <ul className="space-y-4 mb-12 flex-1">
                            <li className="flex items-center gap-3 text-sm">
                                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                                <span className="font-medium text-slate-900 dark:text-white">Unlimited batch uploads</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                                <span className="font-medium text-slate-900 dark:text-white">Priority processing queue</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                                <span className="font-medium text-slate-900 dark:text-white">Advanced AI metadata tags</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                                <span className="font-medium text-slate-900 dark:text-white">Commercial usage rights</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                                <span className="font-medium text-slate-900 dark:text-white">Standard API Support</span>
                            </li>
                        </ul>
                        <button className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-indigo-500 transition-all shadow-lg shadow-primary/20">
                            Get Started with Pro
                        </button>
                    </div>
                    <div className="flex flex-col p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 relative hover:bg-slate-50 dark:hover:bg-slate-900 transition-all">
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Enterprise</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">Scalable infrastructure for large teams.</p>
                        </div>
                        <div className="mb-8">
                            <span className="text-4xl font-black text-slate-900 dark:text-white">Custom</span>
                        </div>
                        <ul className="space-y-4 mb-12 flex-1">
                            <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                                <span>Everything in Pro</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                                <span>Ultra-priority processing</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                                <span>Full API & SDK access</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                                <span>Dedicated account manager</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                                <span>SLA & Security compliance</span>
                            </li>
                        </ul>
                        <button className="w-full py-4 rounded-xl border border-slate-200 dark:border-white/10 font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors text-slate-900 dark:text-white">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </section>
            <section className="py-24 px-6 border-t border-slate-200 dark:border-white/5">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-black mb-12 text-center text-slate-900 dark:text-white">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
                            <h4 className="font-bold mb-2 text-slate-900 dark:text-white">Can I switch plans anytime?</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
                            <h4 className="font-bold mb-2 text-slate-900 dark:text-white">What is "priority processing"?</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Pro and Enterprise users get assigned to dedicated high-performance GPU nodes, ensuring their files are processed before free users during peak times.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
                            <h4 className="font-bold mb-2 text-slate-900 dark:text-white">Do you offer API access?</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">API access is available on our Pro plan for standard usage and on Enterprise for high-volume needs. Check our documentation for more details.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
                            <h4 className="font-bold mb-2 text-slate-900 dark:text-white">Is there a limit on file size?</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Free users can upload up to 50MB per file. Pro and Enterprise users can upload files up to 1GB in size.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
