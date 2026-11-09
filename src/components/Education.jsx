export default function Education() {
  return (
    <section className="education" id="formation">
      <p className="eyebrow">Formation</p>
      <h2>Cégep de Rosemont — <br />DEC Techniques de l'informatique.</h2>
      <div className="edu-grid">
        <div className="edu-card">
          <h3>Cours techniques</h3>
          <p className="sub">Programmation appliquée</p>
          <ul className="course-list">
            <li>Développement Android <span className="muted">— Kotlin, MVP, API REST</span></li>
            <li>Développement de jeux Unity <span className="muted">— C#, projet d'équipe</span></li>
            <li>Sécurité informatique <span className="muted">— VMs, Kali Linux</span></li>
            <li>Plateforme web d'équipe <span className="muted">— PHP, MySQL, Bootstrap, Spring Boot, Angular</span></li>
          </ul>
        </div>
        <div className="edu-card">
          <h3>Compétences transversales</h3>
          <p className="sub">Communication et méthode</p>
          <ul className="course-list">
            <li>Communication professionnelle <span className="muted">— écrite et orale, en français</span></li>
            <li>Travail en équipe technique <span className="muted">— Git, revues de code, répartition des tâches</span></li>
            <li>Gestion des priorités <span className="muted">— études, deux emplois, projets personnels</span></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
