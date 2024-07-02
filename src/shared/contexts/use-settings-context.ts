'use client'

import { useContext } from "react"

export function useSettingsContext() {

    const context = useContext();

    if (!context) throw new Error('useSettingsContext must be use inside SettingsProvider');

    return context
}