import React from 'react'
import { useTheme } from '../../hooks/useTheme'
import { Link } from 'react-router-dom';

export default function Header() {
    const { theme, toggleTheme } = useTheme();
    return (
       <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
                            <span className="material-symbols-outlined text-white text-xl">database</span>
                        </div>
                        <Link to="/" className="text-xl font-bold tracking-tight">Picgenre</Link>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Features</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Documentation</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Pricing</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Changelog</a>
                    </nav>
                    <div className="flex items-center gap-3">
                        <button 
                            onClick={toggleTheme}
                            className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                            aria-label="Toggle theme"
                        >
                            <span className="material-symbols-outlined text-xl">
                                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                            </span>
                        </button>
                        <Link to="/login" className="hidden sm:flex text-sm font-semibold px-4 py-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                            Sign In
                        </Link>
                        <Link to="/workspace" className="bg-primary text-white text-sm font-bold px-5 py-2 rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">rocket_launch</span>
                            Get Started
                        </Link>
                    </div>
                </div>
        </header>
    )
}
