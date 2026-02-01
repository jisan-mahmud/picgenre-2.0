import React from 'react'

export default function BillingPlan() {
    return (
        <div>
            <div className="flex flex-col gap-2 mb-8">
                <p className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Billing & Plan</p>
                <p className="text-slate-500 dark:text-[#9296c9] text-base font-normal leading-normal max-w-lg">Manage your subscription, billing information, and view your payment history.</p>
            </div>
            <div className="max-w-4xl flex flex-col gap-8">
                <div className="p-8 rounded-xl border border-slate-200 dark:border-[#232648] bg-white dark:bg-background-dark/50 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-slate-900 dark:text-white text-xl font-bold">Current Plan</h2>
                            <p className="text-slate-500 dark:text-[#9296c9] text-sm">You are currently on the Pro Plan</p>
                        </div>
                        <button className="flex items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold transition-all hover:brightness-110 shadow-lg shadow-primary/20">
                            Manage Subscription
                        </button>
                    </div>
                    <div className="mt-6 flex gap-8 p-4 bg-slate-50 dark:bg-[#1c1f3d] rounded-lg border border-slate-100 dark:border-[#232648]">
                        <div className="flex flex-col">
                            <span className="text-xs text-slate-500 dark:text-[#9296c9] uppercase font-bold tracking-wider">Price</span>
                            <span className="text-lg font-bold text-slate-900 dark:text-white">$49.00 / mo</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-slate-500 dark:text-[#9296c9] uppercase font-bold tracking-wider">Renewal Date</span>
                            <span className="text-lg font-bold text-slate-900 dark:text-white">Oct 12, 2024</span>
                        </div>
                    </div>
                </div>
                <div className="p-8 rounded-xl border border-slate-200 dark:border-[#232648] bg-white dark:bg-background-dark/50 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-slate-900 dark:text-white text-xl font-bold">Payment Method</h2>
                        <button className="text-primary text-sm font-bold hover:underline">Edit</button>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-lg border border-slate-200 dark:border-[#232648]">
                        <div className="size-10 flex items-center justify-center bg-slate-200 dark:bg-[#232648] rounded">
                            <span className="material-symbols-outlined text-slate-600 dark:text-white">credit_card</span>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-slate-900 dark:text-white font-bold">Visa ending in 4242</p>
                            <p className="text-slate-500 dark:text-[#9296c9] text-xs">Expires 12/26</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-slate-900 dark:text-white text-xl font-bold">Recent Invoices</h2>
                    <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-[#232648] bg-white dark:bg-background-dark/50">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-slate-200 dark:border-[#232648] bg-slate-50/50 dark:bg-white/5">
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-[#9296c9] uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-[#9296c9] uppercase tracking-wider">Amount</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-[#9296c9] uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-right"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 dark:divide-[#232648]">
                                <tr className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 text-sm text-slate-900 dark:text-white font-medium">Sep 12, 2024</td>
                                    <td className="px-6 py-4 text-sm text-slate-900 dark:text-white">$49.00</td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-bold uppercase tracking-wide">Paid</span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-slate-400 hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined text-[20px]">download</span>
                                        </button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 text-sm text-slate-900 dark:text-white font-medium">Aug 12, 2024</td>
                                    <td className="px-6 py-4 text-sm text-slate-900 dark:text-white">$49.00</td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-bold uppercase tracking-wide">Paid</span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-slate-400 hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined text-[20px]">download</span>
                                        </button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 text-sm text-slate-900 dark:text-white font-medium">Jul 12, 2024</td>
                                    <td className="px-6 py-4 text-sm text-slate-900 dark:text-white">$49.00</td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-bold uppercase tracking-wide">Paid</span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-slate-400 hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined text-[20px]">download</span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
