import React from 'react'
import { useTheme } from '../hooks/useTheme'

export default function Workspace() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div>
            <div className="layout-container flex h-full grow flex-col">
                <main className="flex-1 max-w-7xl mx-auto w-full px-4 lg:px-10 py-8">
                    <div className="flex flex-wrap justify-between gap-3 mb-8">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] font-display">Workspace</h1>
                            <p className="text-slate-500 dark:text-[#9296c9] text-base font-normal">Upload new assets and manage your generation queue.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-7 flex flex-col gap-8">
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="material-symbols-outlined text-primary">cloud_upload</span>
                                    <h3 className="text-slate-900 dark:text-white text-lg font-bold font-display">Upload Assets</h3>
                                </div>
                                <div className="border-2 border-dashed border-slate-300 dark:border-[#323767] rounded-xl p-10 flex flex-col items-center justify-center gap-4 bg-white/50 dark:bg-[#191b33]/50 hover:border-primary/50 transition-all cursor-pointer group">
                                    <div className="size-16 rounded-full bg-primary/5 dark:bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-4xl">upload_file</span>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-slate-900 dark:text-white font-bold">Drag and drop files here</p>
                                        <p className="text-slate-500 dark:text-[#9296c9] text-sm mt-1">or <span className="text-primary hover:underline">browse files</span> from your computer</p>
                                    </div>
                                    <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase font-bold tracking-widest mt-2">Support: JPG, PNG, MP4, MOV (Max 50MB)</p>
                                </div>
                            </div>
                            <div class="bg-white dark:bg-[#191b33] rounded-xl shadow-sm border border-slate-200 dark:border-[#323767] overflow-hidden">
                                <div class="px-6 py-4 border-b border-slate-200 dark:border-[#323767] flex justify-between items-center">
                                    <div class="flex items-center gap-2">
                                        <span class="material-symbols-outlined text-slate-400">pending_actions</span>
                                        <h3 class="text-slate-900 dark:text-white text-lg font-bold font-display">Remaining Queue (1)</h3>
                                    </div>
                                    <span class="text-xs font-bold text-slate-400">Processing...</span>
                                </div>
                                <div class="overflow-x-auto">
                                    <table class="w-full text-left border-collapse">
                                        <thead>
                                            <tr class="bg-slate-50 dark:bg-[#111222]">
                                                <th class="px-6 py-3 text-slate-500 dark:text-[#9296c9] text-xs font-bold uppercase tracking-wider">Filename</th>
                                                <th class="px-6 py-3 text-slate-500 dark:text-[#9296c9] text-xs font-bold uppercase tracking-wider">Type</th>
                                                <th class="px-6 py-3 text-slate-500 dark:text-[#9296c9] text-xs font-bold uppercase tracking-wider text-right">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-slate-100 dark:divide-[#323767]">
                                            <tr>
                                                <td class="px-6 py-4 text-slate-900 dark:text-white text-sm font-medium max-w-50 truncate">lifestyle_video_v2.mp4</td>
                                                <td class="px-6 py-4">
                                                    <span class="inline-flex items-center px-2 py-1 rounded text-[10px] font-bold bg-slate-100 dark:bg-[#232648] text-slate-600 dark:text-slate-300 uppercase tracking-tighter">Video</span>
                                                </td>
                                                <td class="px-6 py-4 text-right">
                                                    <button class="text-slate-400 hover:text-red-500 transition-colors">
                                                        <span class="material-symbols-outlined text-lg">delete</span>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="flex flex-col gap-4">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-2">
                                        <span class="material-symbols-outlined text-green-500">check_circle</span>
                                        <h3 class="text-slate-900 dark:text-white text-lg font-bold font-display">Processed Results (2)</h3>
                                    </div>
                                    <button class="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-[#232648] hover:bg-slate-200 dark:hover:bg-[#323767] rounded-lg text-sm font-bold text-slate-700 dark:text-white transition-all">
                                        <span class="material-symbols-outlined text-sm">download_for_offline</span> Export All
                                    </button>
                                </div>
                                <div class="grid grid-cols-1 gap-4">
                                    <div class="bg-white dark:bg-[#191b33] rounded-xl shadow-sm border border-slate-200 dark:border-[#323767] p-5 flex flex-col md:flex-row md:items-start justify-between gap-6">
                                        <div class="flex items-start gap-4 grow">
                                            <div class="w-20 h-20 shrink-0 rounded-lg bg-slate-100 dark:bg-[#111222] flex items-center justify-center text-slate-400 overflow-hidden border border-slate-200 dark:border-[#323767]">
                                                <span class="material-symbols-outlined text-4xl">image</span>
                                            </div>
                                            <div class="flex flex-col gap-2">
                                                <div class="flex items-center gap-2">
                                                    <p class="text-slate-400 dark:text-slate-500 text-[11px] font-bold uppercase tracking-wider">product_hero_01.jpg</p>
                                                    <span class="px-1.5 py-0.5 rounded text-[8px] bg-primary/10 text-primary font-bold uppercase">Adobe Stock</span>
                                                </div>
                                                <h4 class="text-slate-900 dark:text-white text-base font-bold leading-tight">Modern workspace with minimalist laptop setup and natural lighting</h4>
                                                <div class="flex flex-wrap gap-1.5 mt-1">
                                                    <span class="px-2 py-0.5 rounded-full text-[10px] bg-slate-100 dark:bg-[#232648] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#323767]">technology</span>
                                                    <span class="px-2 py-0.5 rounded-full text-[10px] bg-slate-100 dark:bg-[#232648] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#323767]">workspace</span>
                                                    <span class="px-2 py-0.5 rounded-full text-[10px] bg-slate-100 dark:bg-[#232648] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#323767]">office</span>
                                                    <span class="px-2 py-0.5 rounded-full text-[10px] bg-slate-100 dark:bg-[#232648] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#323767]">minimalist</span>
                                                    <span class="px-2 py-0.5 rounded-full text-[10px] bg-slate-100 dark:bg-[#232648] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#323767]">+12 more</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-row md:flex-row items-center gap-2 shrink-0 self-start md:self-center">
                                            <button class="p-2.5 rounded-lg border border-slate-200 dark:border-[#323767] text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#232648] hover:text-primary dark:hover:text-white transition-all group flex items-center justify-center" title="Copy Title">
                                                <span class="material-symbols-outlined text-[20px]">content_copy</span>
                                                <span class="ml-2 text-xs font-bold md:hidden">Copy Title</span>
                                            </button>
                                            <button class="p-2.5 rounded-lg border border-slate-200 dark:border-[#323767] text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#232648] hover:text-primary dark:hover:text-white transition-all group flex items-center justify-center" title="Copy Tags">
                                                <span class="material-symbols-outlined text-[20px]">sell</span>
                                                <span class="ml-2 text-xs font-bold md:hidden">Copy Tags</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="bg-white dark:bg-[#191b33] rounded-xl shadow-sm border border-slate-200 dark:border-[#323767] p-5 flex flex-col md:flex-row md:items-start justify-between gap-6">
                                        <div class="flex items-start gap-4 grow">
                                            <div class="w-20 h-20 shrink-0 rounded-lg bg-slate-100 dark:bg-[#111222] flex items-center justify-center text-slate-400 overflow-hidden border border-slate-200 dark:border-[#323767]">
                                                <span class="material-symbols-outlined text-4xl">image</span>
                                            </div>
                                            <div class="flex flex-col gap-2">
                                                <div class="flex items-center gap-2">
                                                    <p class="text-slate-400 dark:text-slate-500 text-[11px] font-bold uppercase tracking-wider">thumbnail_square.png</p>
                                                    <span class="px-1.5 py-0.5 rounded text-[8px] bg-primary/10 text-primary font-bold uppercase">Adobe Stock</span>
                                                </div>
                                                <h4 class="text-slate-900 dark:text-white text-base font-bold leading-tight">Close-up of vibrant autumn leaves on wooden background</h4>
                                                <div class="flex flex-wrap gap-1.5 mt-1">
                                                    <span class="px-2 py-0.5 rounded-full text-[10px] bg-slate-100 dark:bg-[#232648] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#323767]">nature</span>
                                                    <span class="px-2 py-0.5 rounded-full text-[10px] bg-slate-100 dark:bg-[#232648] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#323767]">autumn</span>
                                                    <span class="px-2 py-0.5 rounded-full text-[10px] bg-slate-100 dark:bg-[#232648] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#323767]">texture</span>
                                                    <span class="px-2 py-0.5 rounded-full text-[10px] bg-slate-100 dark:bg-[#232648] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#323767]">vibrant</span>
                                                    <span class="px-2 py-0.5 rounded-full text-[10px] bg-slate-100 dark:bg-[#232648] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#323767]">+8 more</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-row md:flex-row items-center gap-2 shrink-0 self-start md:self-center">
                                            <button class="p-2.5 rounded-lg border border-slate-200 dark:border-[#323767] text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#232648] hover:text-primary dark:hover:text-white transition-all group flex items-center justify-center" title="Copy Title">
                                                <span class="material-symbols-outlined text-[20px]">content_copy</span>
                                                <span class="ml-2 text-xs font-bold md:hidden">Copy Title</span>
                                            </button>
                                            <button class="p-2.5 rounded-lg border border-slate-200 dark:border-[#323767] text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#232648] hover:text-primary dark:hover:text-white transition-all group flex items-center justify-center" title="Copy Tags">
                                                <span class="material-symbols-outlined text-[20px]">sell</span>
                                                <span class="ml-2 text-xs font-bold md:hidden">Copy Tags</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="lg:col-span-5">
                            <div class="bg-white dark:bg-[#191b33] rounded-xl shadow-sm border border-slate-200 dark:border-[#323767] p-6 flex flex-col gap-6 sticky top-24">
                                <div class="flex flex-col gap-3">
                                    <div class="flex justify-between items-end">
                                        <h4 class="text-slate-900 dark:text-white text-sm font-bold uppercase tracking-widest">Queue Progress</h4>
                                        <span class="text-primary text-xs font-black">66% Processed</span>
                                    </div>
                                    <div class="w-full bg-slate-100 dark:bg-[#111222] rounded-full h-2.5 overflow-hidden">
                                        <div class="bg-primary h-full rounded-full w-[66%] shadow-[0_0_12px_rgba(19,37,236,0.4)] transition-all duration-1000"></div>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <p class="text-xs text-slate-500 dark:text-[#9296c9]">2 of 3 tasks finished</p>
                                        <span class="flex items-center gap-1 text-[10px] font-bold text-green-500 uppercase">
                                            <span class="size-1.5 rounded-full bg-green-500 animate-pulse"></span> Processing
                                        </span>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-6">
                                    <div class="flex flex-col gap-3">
                                        <label class="text-slate-700 dark:text-slate-300 text-sm font-bold uppercase tracking-wider">Target Platform</label>
                                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                            <button class="flex flex-col items-center gap-2 p-4 rounded-xl border transition-all bg-white dark:bg-[#232648] border-primary text-primary dark:text-white ring-2 ring-primary/20 shadow-md">
                                                <span class="material-symbols-outlined text-2xl">diamond</span>
                                                <span class="text-[11px] font-bold uppercase tracking-tight text-center">Adobe Stock</span>
                                            </button>
                                            <button class="flex flex-col items-center gap-2 p-4 rounded-xl border border-slate-200 dark:border-[#323767] bg-white/50 dark:bg-[#111222] text-slate-500 hover:border-primary/50 hover:text-primary dark:hover:text-white transition-all">
                                                <span class="material-symbols-outlined text-2xl">diversity_2</span>
                                                <span class="text-[11px] font-bold uppercase tracking-tight text-center">Freepik</span>
                                            </button>
                                            <button class="flex flex-col items-center gap-2 p-4 rounded-xl border border-slate-200 dark:border-[#323767] bg-white/50 dark:bg-[#111222] text-slate-500 hover:border-primary/50 hover:text-primary dark:hover:text-white transition-all">
                                                <span class="material-symbols-outlined text-2xl">photo_camera</span>
                                                <span class="text-[11px] font-bold uppercase tracking-tight text-center">Shutterstock</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="flex flex-col gap-3">
                                        <div class="flex items-center justify-between">
                                            <label class="text-slate-700 dark:text-slate-300 text-sm font-bold uppercase tracking-wider">Custom Instructions</label>
                                            <span class="material-symbols-outlined text-slate-400 text-sm">help_outline</span>
                                        </div>
                                        <textarea class="w-full bg-white dark:bg-[#111222] border border-slate-200 dark:border-[#323767] rounded-lg p-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent transition-all min-h-25 resize-none" placeholder="Add custom context, keywords, or specific style guides for the AI..."></textarea>
                                    </div>
                                    <div class="flex flex-col gap-3 p-4 bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/10">
                                        <div class="flex gap-3 items-start">
                                            <span class="material-symbols-outlined text-primary text-xl">info</span>
                                            <div class="flex flex-col gap-1">
                                                <p class="text-slate-900 dark:text-white text-xs font-bold leading-tight">AI Analysis Enabled</p>
                                                <p class="text-slate-500 dark:text-[#9296c9] text-[10px] leading-relaxed">System is auto-detecting themes and generating platform-specific metadata for remaining queue items.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-3 pt-4 border-t border-slate-100 dark:border-[#232648]">
                                    <button class="w-full h-14 bg-primary text-white text-base font-black rounded-lg shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 uppercase tracking-widest">
                                        <span class="material-symbols-outlined">auto_awesome</span>
                                        Generate Metadata
                                    </button>
                                    <p class="text-center text-[10px] text-slate-400 dark:text-slate-500 font-medium tracking-wide">1 file pending · Est. 15 seconds remaining</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
