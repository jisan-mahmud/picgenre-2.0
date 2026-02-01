import React from 'react';
import { useTheme } from '../hooks/useTheme';

export default function Home() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div>
            <main>
                {/* Hero Section  */}
                <section className="relative pt-20 pb-16 px-6 overflow-hidden">
                    {/* Decorative Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-primary/10 blur-[120px] rounded-full -z-10"></div>
                    <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            AI ENGINE UPDATED TO V4.2
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6">
                            Generate Perfect Metadata from Any File — <span className="text-primary">Instantly</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed">
                            MetaForge uses advanced AI to analyze Images, SVGs, and Docs, creating SEO-ready and developer-friendly metadata in seconds.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                            <button className="w-full sm:w-auto flex items-center justify-center gap-2 min-w-50 h-14 rounded-xl bg-primary text-white text-lg font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                                <span className="material-symbols-outlined">upload_file</span>
                                Upload Files
                            </button>
                            <button className="w-full sm:w-auto flex items-center justify-center gap-2 min-w-50 h-14 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                                <span className="material-symbols-outlined">bolt</span>
                                Try with Sample
                            </button>
                        </div>
                        {/* Supporting Assets Preview */}
                        <div className="mt-16 w-full max-w-5xl rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 p-4 backdrop-blur-sm shadow-2xl overflow-hidden">
                            <div className="flex items-center gap-2 mb-4 px-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                                </div>
                                <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded py-1 px-4 text-[10px] text-slate-500 font-mono text-center mx-4">
                                    metaforge.ai/v1/generator
                                </div>
                            </div>
                            <div className="aspect-video w-full rounded-lg bg-slate-100 dark:bg-[#0a0b16] flex items-center justify-center relative group">
                                <div
                                    className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay grayscale group-hover:grayscale-0 transition-all duration-700"
                                    data-alt="Abstract glowing network visualization and data flow patterns"
                                    style={{
                                        backgroundImage:
                                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDg2Nrf7qtQQU2L73WrJ0-X2L6qLeZcRC8RA4L6CBS0BTgDy-poo0Sa_Sw0LV4iAcQFntgJnPw2_SlrmLwSbJKEvAC8bX5X76-_o8MOmnvqhStbqfjsrWa2P_jbsiccC0QMFDvjB5TYtulhkuyuL1voupGf4fksrS2TnbVcfw1rUyKwwnVjT9qHj_QU7NozTtRUuwfrQAukUbcASpbNggotnGuCFC0j_hkRniXzQlkNm7XqVcrL-j39yjGzqBOaG9phrDtKK0nutDyJ')",
                                    }}
                                ></div>
                                <div className="flex flex-col items-center gap-4 z-10">
                                    <span className="material-symbols-outlined text-6xl text-primary animate-pulse">cloud_upload</span>
                                    <p className="text-sm font-medium text-slate-400">Drag and drop assets here to analyze</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Supported Formats Section  */}
                <section className="py-12 border-y border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20">
                    <div className="max-w-7xl mx-auto px-6">
                        <p className="text-center text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
                            Supported Formats &amp; Extensions
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                            <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-primary/50 transition-colors group">
                                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">image</span>
                                <span className="text-sm font-semibold">PNG / JPG</span>
                            </div>
                            <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-primary/50 transition-colors group">
                                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">code</span>
                                <span className="text-sm font-semibold">SVG</span>
                            </div>
                            <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-primary/50 transition-colors group">
                                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">picture_as_pdf</span>
                                <span className="text-sm font-semibold">PDF</span>
                            </div>
                            <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-primary/50 transition-colors group">
                                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">description</span>
                                <span className="text-sm font-semibold">DOCX</span>
                            </div>
                            <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-primary/50 transition-colors group">
                                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">movie</span>
                                <span className="text-sm font-semibold">MP4</span>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Feature Section */}
                <section className="py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col gap-4 mb-16 max-w-2xl">
                            <h2 className="text-3xl md:text-5xl font-black tracking-tight">Powerful Metadata Tools</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400">
                                Designed for developers who need speed, flexibility, and production-grade accuracy in their workflow.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Feature 1 */}
                            <div className="flex flex-col gap-6 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all group">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <span className="material-symbols-outlined text-3xl">layers</span>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold">Batch Processing</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        Process hundreds of files simultaneously without breaking a sweat. Perfect for large-scale content migrations.
                                    </p>
                                </div>
                                <div className="mt-auto pt-4">
                                    <a className="text-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                                        Learn more
                                        <span className="material-symbols-outlined text-xs">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                            {/* Feature 2 */}
                            <div className="flex flex-col gap-6 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all group">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <span className="material-symbols-outlined text-3xl">key</span>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold">Bring Your Own AI Key</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        Connect your OpenAI or Anthropic API key for full control over costs and custom model fine-tuning.
                                    </p>
                                </div>
                                <div className="mt-auto pt-4">
                                    <a className="text-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                                        Setup guide
                                        <span className="material-symbols-outlined text-xs">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                            {/* Feature 3 */}
                            <div className="flex flex-col gap-6 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all group">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <span className="material-symbols-outlined text-3xl">terminal</span>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold">Export Ready Metadata</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        Get your metadata in JSON, CSV, or XML format, ready for your database or headless CMS integration.
                                    </p>
                                </div>
                                <div className="mt-auto pt-4">
                                    <a className="text-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                                        API Docs
                                        <span className="material-symbols-outlined text-xs">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </main>
        </div>
    );
}