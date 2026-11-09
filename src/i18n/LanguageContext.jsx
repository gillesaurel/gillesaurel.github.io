import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from './translations.js'

const LanguageContext = createContext(null)

function readStoredLang() {
  try {
    const stored = localStorage.getItem('lang')
    if (stored === 'fr' || stored === 'en') return stored
  } catch {
    // localStorage indisponible (navigation privée, etc.) — on ignore.
  }
  return 'fr'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readStoredLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem('lang', lang)
    } catch {
      // ignore
    }
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      t: translations[lang],
      toggleLang: () => setLang((current) => (current === 'fr' ? 'en' : 'fr')),
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage doit être utilisé dans un LanguageProvider')
  return ctx
}
