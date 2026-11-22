import { useLanguage } from '../i18n/LanguageContext.jsx'
import Terminal from './Terminal.jsx'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero" id="accueil">
      <div className="hero-grid">
        <div>
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>{t.hero.titleLine1}<br /><em>{t.hero.titleEm}</em><br />{t.hero.titleLine3}</h1>
          <p className="hero-lede">{t.hero.lede}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="mailto:gillesaurel17@gmail.com">{t.hero.ctaPrimary}</a>
            <a className="btn btn-ghost" href="https://github.com/gillesaurel" target="_blank" rel="noopener noreferrer">{t.hero.ctaGhost}</a>
          </div>
          <div className="hero-tags">
            <span className="pill">Kotlin</span>
            <span className="pill">Android</span>
            <span className="pill">Unity / C#</span>
            <span className="pill">PHP · MySQL</span>
            <span className="pill">Angular</span>
            <span className="pill">Spring Boot</span>
          </div>
          <p className="mono" style={{ marginTop: 22, fontSize: '0.82rem', color: 'var(--ink-muted)' }}>
            {t.hero.availability}
          </p>
        </div>
        <Terminal />
      </div>
    </section>
  )
}
