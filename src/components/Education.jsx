import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Education() {
  const { t } = useLanguage()
  const e = t.education

  return (
    <section className="education" id="formation">
      <p className="eyebrow">{e.eyebrow}</p>
      <h2>{e.titleLine1} <br />{e.titleLine2}</h2>
      <div className="edu-grid">
        <div className="edu-card">
          <h3>{e.card1.title}</h3>
          <p className="sub">{e.card1.sub}</p>
          <ul className="course-list">
            {e.card1.items.map((item) => (
              <li key={item.main}>{item.main} <span className="muted">— {item.muted}</span></li>
            ))}
          </ul>
        </div>
        <div className="edu-card">
          <h3>{e.card2.title}</h3>
          <p className="sub">{e.card2.sub}</p>
          <ul className="course-list">
            {e.card2.items.map((item) => (
              <li key={item.main}>{item.main} <span className="muted">— {item.muted}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
