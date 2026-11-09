import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Contact() {
  const { t } = useLanguage()
  const c = t.contact

  return (
    <section className="contact" id="contact" style={{ borderBottom: 'none' }}>
      <div className="contact-card">
        <div>
          <h2>{c.titleLine1} <br />{c.titleLine2}</h2>
          <p>
            {c.body1}<strong>{c.bodyStrong1}</strong>{c.body2}<strong>{c.bodyStrong2}</strong>{c.body3}
          </p>
        </div>
        <div className="contact-links">
          <a className="contact-link" href="mailto:gillesaurel17@gmail.com">
            <span className="glyph">@</span>
            <span>gillesaurel17@gmail.com<span className="label-sub">{c.emailLabel}</span></span>
          </a>
          <a className="contact-link" href="https://github.com/gillesaurel" target="_blank" rel="noopener noreferrer">
            <span className="glyph">GH</span>
            <span>github.com/gillesaurel<span className="label-sub">{c.githubLabel}</span></span>
          </a>
        </div>
      </div>
    </section>
  )
}
