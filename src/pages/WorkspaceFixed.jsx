import React from 'react'

export default function Workspace() {
    return (
        <div>
            <div className="layout-container flex h-full grow flex-col">
                <header className="flex items-center justify-between border-b border-solid border-slate-200 dark:border-[#232648] px-6 lg:px-10 py-3 bg-white dark:bg-background-dark sticky top-0 z-50">
                    <div className="flex items-center gap-4">
                        <div className="size-8 text-primary">
                            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight font-display">MetaForge</h2>
                    </div>
                    <div className="flex flex-1 justify-end gap-8 items-center">
                        <nav className="hidden md:flex items-center gap-9">
                            <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white text-sm font-medium transition-colors" href="#">Dashboard</a>
                            <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white text-sm font-medium transition-colors" href="#">Projects</a>
                            <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white text-sm font-medium transition-colors" href="#">Assets</a>
                            <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white text-sm font-medium transition-colors" href="#">Settings</a>
                        </nav>
                        <div className="h-10 w-10 rounded-full border-2 border-primary/20 bg-slate-200 dark:bg-slate-800 bg-cover bg-center" style={{
                            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBpsoo3JUtgyHsqDlicr9pt-O7xcWW7ZbnQaCiU9E-sgatl8oj4nhulvvUgKqk67DRmbHl-4z29mS5JRysWt9nvGH-RfrIfZuUiW6t23H88DYnnNiIaTPqMDwaObRKOG8k_Riwsjbv-XS0SeR_THI6hBB0BXngoedVcU3HwhSqFWqw0rX6LsznoAq5l4yHWxebQmgYEXpGuXjeHrm18YOmoyw1m-s2VofGQcZwsxdpf_ENBb-WUU8eainTy1mkCLz4VU084jt3cmR05")'
                        }}>
                        </div>
                    </div>
                </header>
                <main className="flex-1 max-w-[1280px] mx-auto w-full px-4 lg:px-10 py-8">
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
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}