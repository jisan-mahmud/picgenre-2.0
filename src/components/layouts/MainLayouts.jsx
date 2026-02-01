import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function MainLayouts() {
    return (
        <div>
            <Header />
            {/* Main content would go here */}
            <Outlet />
            <Footer/>
        </div>
    )
}
