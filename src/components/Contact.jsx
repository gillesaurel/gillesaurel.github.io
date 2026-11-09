export default function Contact() {
  return (
    <section className="contact" id="contact" style={{ borderBottom: 'none' }}>
      <div className="contact-card">
        <div>
          <h2>Envie de m'ajouter <br />à votre équipe ?</h2>
          <p>Je suis disponible pour un stage en développement d'applications web et mobile à partir du <strong>2 mars 2027</strong>, pour une durée de <strong>deux mois</strong>. Écrivez-moi ou jetez un œil à mes projets sur GitHub — je réponds vite.</p>
        </div>
        <div className="contact-links">
          <a className="contact-link" href="mailto:gillesaurel17@gmail.com">
            <span className="glyph">@</span>
            <span>gillesaurel17@gmail.com<span className="label-sub">Courriel</span></span>
          </a>
          <a className="contact-link" href="https://github.com/gillesaurel" target="_blank" rel="noopener noreferrer">
            <span className="glyph">GH</span>
            <span>github.com/gillesaurel<span className="label-sub">Code &amp; projets</span></span>
          </a>
        </div>
      </div>
    </section>
  )
}
