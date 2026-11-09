export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="brand">
          <div className="brand-mark">GA</div>
          <div className="brand-name">Gilles Aurel <span>· Nguemkam Fom</span></div>
        </div>
        <ul className="nav-links">
          <li><a href="#profil">Profil</a></li>
          <li><a href="#competences">Compétences</a></li>
          <li><a href="#projets">Projets</a></li>
          <li><a href="#formation">Formation</a></li>
        </ul>
        <a className="nav-cta" href="#contact">Contact</a>
      </div>
    </nav>
  )
}
