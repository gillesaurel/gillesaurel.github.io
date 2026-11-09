import ProjectVisual from './ProjectVisual.jsx'
import { projects } from '../data/projects.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Projects() {
  const { lang, t } = useLanguage()

  return (
    <section className="projects" id="projets">
      <div className="projects-head">
        <div>
          <p className="eyebrow">{t.projectsSection.eyebrow}</p>
          <h2>{t.projectsSection.titleLine1} <br /> {t.projectsSection.titleLine2}</h2>
        </div>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project" key={project.id}>
            <ProjectVisual variant={project.visual} />
            <div className="project-body">
              <p className="project-kind">{project.kind[lang]}</p>
              <h3>{project.title}</h3>
              <p>{project.description[lang]}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
              {project.links.length > 0 && (
                <div className="project-links" style={{ marginTop: 16 }}>
                  {project.links.map((link) => (
                    <a
                      className="project-link"
                      style={{ marginTop: 0 }}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={link.href}
                    >
                      {link.label[lang]}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
