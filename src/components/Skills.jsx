const SKILLS = [
  { key: 'mobile', title: 'Mobile', className: 'mobile', chips: ['Kotlin', 'Android SDK', 'MVP', 'Room', 'Retrofit', 'Coroutines', 'Unity / C#'] },
  { key: 'web', title: 'Web', className: 'web', chips: ['HTML / CSS / JS', 'PHP', 'MySQL', 'Bootstrap', 'Angular', 'Spring Boot'] },
  { key: 'tools', title: 'Outils & pratiques', className: 'tools', chips: ['Git / GitLab', 'Rebase & MR', 'API REST', 'Architecture MVP', "Travail d'équipe"] },
]

export default function Skills() {
  return (
    <section className="skills" id="competences">
      <p className="eyebrow">Compétences</p>
      <h2>Un pied dans le mobile, <br />un pied dans le web.</h2>
      <div className="skills-grid">
        {SKILLS.map((group) => (
          <div className={`skill-card ${group.className}`} key={group.key}>
            <h3>{group.title}</h3>
            <div className="skill-list">
              {group.chips.map((chip) => (
                <span className="chip" key={chip}>{chip}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
