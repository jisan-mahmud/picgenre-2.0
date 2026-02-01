import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (

                <footer className="mt-24 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0a0b16] py-16 px-6">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
                        <div className="space-y-6 max-w-xs">
                            <div className="flex items-center gap-2">
                                <div className="bg-primary p-1 rounded-lg">
                                    <span className="material-symbols-outlined text-white text-lg">database</span>
                                </div>
                                <h2 className="text-lg font-bold">MetaForge</h2>
                            </div>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                The ultimate AI-powered companion for digital asset management and SEO automation.
                            </p>
                            <div className="flex gap-4">
                                <a className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:text-primary transition-colors" href="#">
                                    <span className="material-symbols-outlined text-xl">share</span>
                                </a>
                                <a className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:text-primary transition-colors" href="#">
                                    <span className="material-symbols-outlined text-xl">rss_feed</span>
                                </a>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-20">
                            <div className="space-y-4">
                                <h4 className="text-sm font-bold uppercase tracking-wider">Product</h4>
                                <ul className="space-y-2">
                                    <li><a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Features</a></li>
                                    <li><a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Integrations</a></li>
                                    <li><a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Pricing</a></li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-sm font-bold uppercase tracking-wider">Resources</h4>
                                <ul className="space-y-2">
                                    <li><a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Documentation</a></li>
                                    <li><a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">API Reference</a></li>
                                    <li><a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Status</a></li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-sm font-bold uppercase tracking-wider">Company</h4>
                                <ul className="space-y-2">
                                    <li><a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">About</a></li>
                                    <li><a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Blog</a></li>
                                    <li><Link className="text-sm text-slate-500 hover:text-primary transition-colors" to="/privacy-policy">Privacy</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-100 dark:border-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-slate-500">© 2024 MetaForge AI Inc. All rights reserved.</p>
                        <div className="flex items-center gap-4">
                            <span className="material-symbols-outlined text-xs text-emerald-500">check_circle</span>
                            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">All systems operational</p>
                        </div>
                    </div>
                </footer>
  )
}
