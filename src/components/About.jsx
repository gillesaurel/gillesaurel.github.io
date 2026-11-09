import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function About() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <section className="about" id="profil">
      <div className="about-grid">
        <div>
          <p className="eyebrow">{a.eyebrow}</p>
          <h2>{a.titleLine1} <br />{a.titleLine2}</h2>
        </div>
        <div className="about-body">
          <p>{a.p1}</p>
          <p>{a.p2}</p>
        </div>
      </div>
      <dl className="about-facts" style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        <div className="fact"><dt>{a.facts.location.label}</dt><dd>{a.facts.location.value}</dd></div>
        <div className="fact"><dt>{a.facts.education.label}</dt><dd>{a.facts.education.value}</dd></div>
        <div className="fact"><dt>{a.facts.looking.label}</dt><dd>{a.facts.looking.value}</dd></div>
      </dl>
    </section>
  )
}
