import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useTheme } from '../ThemeContext.jsx'

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export default function Nav() {
  const { lang, t, toggleLang } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="brand">
          <div className="brand-mark">GA</div>
          <div className="brand-name">Gilles Aurel <span>· Nguemkam Fom</span></div>
        </div>
        <ul className="nav-links">
          <li><a href="#profil">{t.nav.profil}</a></li>
          <li><a href="#competences">{t.nav.competences}</a></li>
          <li><a href="#projets">{t.nav.projets}</a></li>
          <li><a href="#formation">{t.nav.formation}</a></li>
        </ul>
        <div className="nav-controls">
          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Passer au thème clair' : 'Passer au thème sombre'}
            title={theme === 'dark' ? 'Thème clair' : 'Thème sombre'}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            type="button"
            className="lang-btn"
            onClick={toggleLang}
            aria-label={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
            title={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
          >
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
          <a className="nav-cta" href="#contact">{t.nav.contact}</a>
        </div>
      </div>
    </nav>
  )
}
