"use client"

import { useEffect, useState } from "react"

export type ThemeMode = "light" | "dark"

export const themeStorageKey = "burhandev-theme"
const themeChangeEvent = "burhandev-theme-change"

function getSystemTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return "dark"
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function readTheme(): ThemeMode {
  if (typeof document === "undefined") {
    return "dark"
  }

  return document.documentElement.classList.contains("dark") ? "dark" : "light"
}

function applyTheme(nextTheme: ThemeMode) {
  const root = document.documentElement

  root.classList.toggle("dark", nextTheme === "dark")
  root.style.colorScheme = nextTheme
  localStorage.setItem(themeStorageKey, nextTheme)
  window.dispatchEvent(new CustomEvent<ThemeMode>(themeChangeEvent, { detail: nextTheme }))
}

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>("dark")

  useEffect(() => {
    setTheme(readTheme())

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleSystemChange = () => {
      const storedTheme = localStorage.getItem(themeStorageKey)

      if (!storedTheme) {
        const systemTheme = getSystemTheme()
        document.documentElement.classList.toggle("dark", systemTheme === "dark")
        document.documentElement.style.colorScheme = systemTheme
        setTheme(systemTheme)
      }
    }

    const handleStorage = (event: StorageEvent) => {
      if (event.key === themeStorageKey && (event.newValue === "light" || event.newValue === "dark")) {
        document.documentElement.classList.toggle("dark", event.newValue === "dark")
        document.documentElement.style.colorScheme = event.newValue
        setTheme(event.newValue)
      }
    }

    const handleThemeChange = (event: Event) => {
      const customEvent = event as CustomEvent<ThemeMode>

      if (customEvent.detail === "light" || customEvent.detail === "dark") {
        setTheme(customEvent.detail)
      }
    }

    mediaQuery.addEventListener("change", handleSystemChange)
    window.addEventListener("storage", handleStorage)
    window.addEventListener(themeChangeEvent, handleThemeChange as EventListener)

    return () => {
      mediaQuery.removeEventListener("change", handleSystemChange)
      window.removeEventListener("storage", handleStorage)
      window.removeEventListener(themeChangeEvent, handleThemeChange as EventListener)
    }
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark"
    applyTheme(nextTheme)
    setTheme(nextTheme)
  }

  return {
    theme,
    setTheme: (nextTheme: ThemeMode) => {
      applyTheme(nextTheme)
      setTheme(nextTheme)
    },
    toggleTheme,
  }
}
