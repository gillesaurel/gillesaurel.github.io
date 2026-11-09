import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Hero() {
  const { t } = useLanguage()
  const code = t.hero.code

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
        <div className="editor" aria-hidden="true">
          <div className="editor-bar">
            <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
            <span className="editor-tab">{code.tab}</span>
          </div>
          <div className="editor-body">
            <span className="k">data class</span> <span className="t">{code.className}</span>({'\n'}
            {'    '}<span className="k">val</span> {code.fields.nom}: <span className="t">String</span> = <span className="s">"{code.name}"</span>,{'\n'}
            {'    '}<span className="k">val</span> {code.fields.programme}: <span className="t">String</span> = <span className="s">"{code.program}"</span>,{'\n'}
            {'    '}<span className="k">val</span> {code.fields.cegep}: <span className="t">String</span> = <span className="s">"{code.school}"</span>,{'\n'}
            {'    '}<span className="k">val</span> {code.fields.stack}: <span className="t">List</span>&lt;<span className="t">String</span>&gt; = <span className="t">listOf</span>({'\n'}
            {'        '}<span className="s">"Kotlin"</span>, <span className="s">"Unity"</span>, <span className="s">"PHP"</span>,{'\n'}
            {'        '}<span className="s">"Angular"</span>, <span className="s">"Spring Boot"</span>{'\n'}
            {'    '}),{'\n'}
            {'    '}<span className="k">val</span> {code.fields.disponible}: <span className="t">Boolean</span> = <span className="k">true</span> <span className="c">{code.comment}</span>{'\n'}
            ){' '}<span className="cursor"></span>
          </div>
        </div>
      </div>
    </section>
  )
}
