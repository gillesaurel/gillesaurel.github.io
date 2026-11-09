export default function About() {
  return (
    <section className="about" id="profil">
      <div className="about-grid">
        <div>
          <p className="eyebrow">Profil</p>
          <h2>Rigoureux au clavier, <br />fiable sur le terrain.</h2>
        </div>
        <div className="about-body">
          <p>Je termine un DEC en Techniques de l'informatique au Cégep de Rosemont, avec un intérêt marqué pour le développement d'applications mobiles et web. J'aime partir d'un problème concret — suivre ses dépenses, retrouver un produit en épicerie — et le transformer en application qui fonctionne vraiment, du modèle de données à l'interface.</p>
          <p>En parallèle des études, je travaille comme superviseur/caissier chez Maxi et comme marchandiseur chez Coca-Cola : deux emplois qui m'ont appris à gérer les priorités, livrer sous délai et travailler en équipe — des réflexes que j'apporte aussi à mes projets de code.</p>
        </div>
      </div>
      <dl className="about-facts" style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        <div className="fact"><dt>LOCALISATION</dt><dd>Montréal, Québec</dd></div>
        <div className="fact"><dt>FORMATION</dt><dd>DEC Techniques de l'informatique</dd></div>
        <div className="fact"><dt>RECHERCHE</dt><dd>Stage dès mars 2027 (2 mois)</dd></div>
      </dl>
    </section>
  )
}
