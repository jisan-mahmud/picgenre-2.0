import React from 'react'

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-xl">database</span>
                    </div>
                    <h2 className="text-xl font-bold tracking-tight">MetaForge</h2>
                </div>
                <nav className="hidden md:flex items-center gap-8">
                    {["Features", "Documentation", "Pricing", "Changelog"].map((item) => (
                        <a
                            key={item}
                            className="text-sm font-medium hover:text-primary transition-colors"
                            href="#"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
                <div className="flex items-center gap-3">
                    <button className="hidden sm:flex text-sm font-semibold px-4 py-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                        Sign In
                    </button>
                    <button className="bg-primary text-white text-sm font-bold px-5 py-2 rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">rocket_launch</span>
                        Get Started
                    </button>
                </div>
            </div>
        </header>
    )
}
