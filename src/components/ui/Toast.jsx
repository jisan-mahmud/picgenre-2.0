import React, { useEffect, useState } from 'react'

export default function Toast({ message, onClose, type = 'success' }) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
        const timer = setTimeout(() => {
            setIsVisible(false)
            setTimeout(onClose, 300)
        }, 3000)
        return () => clearTimeout(timer)
    }, [onClose])

    const styles = {
        success: 'bg-green-500 text-white',
        error: 'bg-red-500 text-white',
        info: 'bg-primary text-white'
    }

    return (
        <div className={`fixed bottom-4 right-4 z-50 transition-all duration-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}>
            <div className={`${styles[type]} px-4 py-3 rounded-lg shadow-xl flex items-center gap-2`}>
                <span className="material-symbols-outlined">
                    {type === 'success' ? 'check_circle' : type === 'error' ? 'error' : 'info'}
                </span>
                <span className="text-sm font-medium">{message}</span>
            </div>
        </div>
    )
}
