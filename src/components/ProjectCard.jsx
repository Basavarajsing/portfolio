import Badge from "./Badge";

function getProjectLinkClass(label = "") {
  const normalized = label.toLowerCase();

  if (normalized.includes("github")) {
    return "linkGithub";
  }

  if (
    normalized.includes("live") ||
    normalized.includes("demo") ||
    normalized.includes("vercel")
  ) {
    return "linkLiveDemo";
  }

  return "linkOther";
}

export default function ProjectCard({ project }) {
  return (
    <article className="card projectCard">
      <div className="rowBetween">
        <div>
          <h3 className="h3">{project.name}</h3>
          <p className="muted">{project.tagline}</p>
        </div>
        {project.featured ? <Badge>Featured</Badge> : null}
      </div>

      {project.impact?.length ? (
        <ul className="list mt16">
          {project.impact.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      ) : null}

      <div className="badgeWrap mt16">
        {project.tech.map((t) => (
          <span className="badge" key={t}>
            {t}
          </span>
        ))}
      </div>

      <div className="actionsRow mt16">
        {project.links
          .filter((l) => l.url && l.url !== "#")
          .map((l) => (
            <a
              key={l.label}
              className={`textLink ${getProjectLinkClass(l.label)}`}
              href={l.url}
              target="_blank"
              rel="noreferrer"
            >
              {l.label}
            </a>
          ))}
      </div>
    </article>
  );
}

