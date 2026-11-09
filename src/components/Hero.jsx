export default function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-grid">
        <div>
          <p className="eyebrow">DEC Techniques de l'informatique — Cégep de Rosemont</p>
          <h1>Gilles Aurel<br /><em>en recherche de stage</em><br />dev. web &amp; mobile.</h1>
          <p className="hero-lede">Étudiant en programmation qui construit des applications Android en Kotlin, des jeux en Unity et des sites web full-stack — et qui cherche un stage pour mettre tout ça au service d'une vraie équipe.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="mailto:gillesaurel17@gmail.com">Me contacter</a>
            <a className="btn btn-ghost" href="https://github.com/gillesaurel" target="_blank" rel="noopener noreferrer">Voir mon GitHub</a>
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
            Disponible à partir du 2 mars 2027 · stage de 2 mois
          </p>
        </div>
        <div className="editor" aria-hidden="true">
          <div className="editor-bar">
            <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
            <span className="editor-tab">Stagiaire.kt</span>
          </div>
          <div className="editor-body">
            <span className="k">data class</span> <span className="t">Stagiaire</span>({'\n'}
            {'    '}<span className="k">val</span> nom: <span className="t">String</span> = <span className="s">"Gilles Aurel Nguemkam Fom"</span>,{'\n'}
            {'    '}<span className="k">val</span> programme: <span className="t">String</span> = <span className="s">"Techniques de l'informatique"</span>,{'\n'}
            {'    '}<span className="k">val</span> cegep: <span className="t">String</span> = <span className="s">"Cégep de Rosemont"</span>,{'\n'}
            {'    '}<span className="k">val</span> stack: <span className="t">List</span>&lt;<span className="t">String</span>&gt; = <span className="t">listOf</span>({'\n'}
            {'        '}<span className="s">"Kotlin"</span>, <span className="s">"Unity"</span>, <span className="s">"PHP"</span>,{'\n'}
            {'        '}<span className="s">"Angular"</span>, <span className="s">"Spring Boot"</span>{'\n'}
            {'    '}),{'\n'}
            {'    '}<span className="k">val</span> disponible: <span className="t">Boolean</span> = <span className="k">true</span> <span className="c">// pour un stage</span>{'\n'}
            ){' '}<span className="cursor"></span>
          </div>
        </div>
      </div>
    </section>
  )
}
