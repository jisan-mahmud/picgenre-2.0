import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="flex flex-col gap-6 px-10 py-12 text-center border-t border-slate-200 dark:border-white/5 bg-background-light dark:bg-background-dark">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                <Link className="text-slate-500 dark:text-white/40 hover:text-slate-700 dark:hover:text-white/70 text-sm font-normal transition-colors" to="/privacy-policy">Privacy Policy</Link>
                <a className="text-slate-500 dark:text-white/40 hover:text-slate-700 dark:hover:text-white/70 text-sm font-normal transition-colors" href="#">Terms of Service</a>
                <a className="text-slate-500 dark:text-white/40 hover:text-slate-700 dark:hover:text-white/70 text-sm font-normal transition-colors" href="#">Contact Support</a>
            </div>
            <p className="text-slate-400 dark:text-white/30 text-sm font-normal">© 2024 Picgenre. All rights reserved.</p>
        </footer>
    )
}
