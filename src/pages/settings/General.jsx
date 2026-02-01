import React from 'react'
import { Outlet } from 'react-router-dom'

export default function General() {
    return (
        <div>
            <div className="flex flex-col gap-2 mb-6 lg:mb-8">
                <p className="text-slate-900 dark:text-white text-2xl lg:text-4xl font-black leading-tight tracking-[-0.033em]">Profile & Notification Settings</p>
                <p className="text-slate-500 dark:text-[#9296c9] text-sm lg:text-base font-normal leading-normal max-w-lg">Manage your personal profile and notification preferences.</p>
            </div>
            <div className="max-w-4xl flex flex-col gap-6 lg:gap-8">
                <div className="p-4 lg:p-8 rounded-xl border border-slate-200 dark:border-[#232648] bg-white dark:bg-background-dark/50 shadow-sm">
                    <h2 className="text-slate-900 dark:text-white text-lg lg:text-xl font-bold mb-4 lg:mb-6">User Profile</h2>
                    <div className="flex flex-col md:flex-row gap-6 lg:gap-8 items-start md:items-center">
                        <div className="flex flex-col items-center gap-4 w-full md:w-auto">
                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-20 lg:size-24 border-4 border-primary/20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBI9cdFcQw8rGh-q-Vt4oxI6jBaGJqfp3wfMdqx3ASky64gQUQ0FcgMAMO2boUl6QXLkPgDa4fTV6eoyDgFhZ8y5qPWiPm9ox_FtCZai8lYnvzySinC_0r_udrB185J4mlwjmVLSsuZBc-7JuEBoYBEJS4lxpkacU0gVsBRrsrF64Hn0clmDpUe15MjjpO_atbcGEW5yW1CthIIqcc66iz-t04CN_rDNUFaaYIR_3L0RNLyTqGP0xs2dVo5Qtqb_hYd9OplJOwYqWT4")' }}></div>
                            <button className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-[#232648] text-slate-700 dark:text-white text-xs font-bold transition-all hover:bg-slate-300 dark:hover:bg-slate-700">
                                Upload Photo
                            </button>
                        </div>
                        <div className="flex-1 w-full flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-[#9296c9] uppercase tracking-wider">Full Name</label>
                                <input className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-[#232648] bg-slate-50 dark:bg-[#1c1f3d] text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Enter your full name" type="text" defaultValue="Alex Mitchell" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 lg:p-8 rounded-xl border border-slate-200 dark:border-[#232648] bg-white dark:bg-background-dark/50 shadow-sm">
                    <h2 className="text-slate-900 dark:text-white text-lg lg:text-xl font-bold mb-4 lg:mb-6">Notifications</h2>
                    <div className="flex flex-col gap-4">
                        <label className="text-sm font-bold text-slate-700 dark:text-[#9296c9] uppercase tracking-wider mb-2">Email Alerts</label>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-slate-50 dark:bg-[#1c1f3d] rounded-lg border border-slate-100 dark:border-[#232648]">
                            <div className="flex flex-col gap-1">
                                <p className="text-slate-900 dark:text-white font-bold">Request Limit Alert</p>
                                <p className="text-slate-500 dark:text-[#9296c9] text-xs">Notify me when usage reaches 90% of monthly capacity</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer shrink-0">
                                <input defaultChecked className="sr-only peer" type="checkbox" />
                                <div className="w-11 h-6 bg-slate-300 dark:bg-[#232648] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-slate-50 dark:bg-[#1c1f3d] rounded-lg border border-slate-100 dark:border-[#232648]">
                            <div className="flex flex-col gap-1">
                                <p className="text-slate-900 dark:text-white font-bold">Plan Expiry Reminder</p>
                                <p className="text-slate-500 dark:text-[#9296c9] text-xs">Notify several days before your current plan is due to expire</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer shrink-0">
                                <input defaultChecked className="sr-only peer" type="checkbox" />
                                <div className="w-11 h-6 bg-slate-300 dark:bg-[#232648] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center sm:justify-end pt-4 mb-8 lg:mb-12">
                    <button className="w-full sm:w-auto flex items-center justify-center rounded-lg h-11 px-8 bg-primary text-white text-sm font-bold transition-all hover:brightness-110 shadow-lg shadow-primary/20">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    )
}
