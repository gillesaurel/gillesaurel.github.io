import { useLanguage } from '../i18n/LanguageContext.jsx'

const GROUP_ORDER = [
  { key: 'mobile', className: 'mobile' },
  { key: 'web', className: 'web' },
  { key: 'tools', className: 'tools' },
]

export default function Skills() {
  const { t } = useLanguage()
  const s = t.skills

  return (
    <section className="skills" id="competences">
      <p className="eyebrow">{s.eyebrow}</p>
      <h2>{s.titleLine1} <br />{s.titleLine2}</h2>
      <div className="skills-grid">
        {GROUP_ORDER.map(({ key, className }) => {
          const group = s.groups[key]
          return (
            <div className={`skill-card ${className}`} key={key}>
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.chips.map((chip) => (
                  <span className="chip" key={chip}>{chip}</span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
