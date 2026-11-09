import ProjectVisual from './ProjectVisual.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section className="projects" id="projets">
      <div className="projects-head">
        <div>
          <p className="eyebrow">Projets</p>
          <h2>Six projets, <br />six façons de coder.</h2>
        </div>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project" key={project.id}>
            <ProjectVisual variant={project.visual} />
            <div className="project-body">
              <p className="project-kind">{project.kind}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
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
                      {link.label}
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
