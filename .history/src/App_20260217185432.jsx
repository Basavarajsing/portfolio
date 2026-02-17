import { useMemo } from "react";
import { profile } from "./data/profile";
import Badge from "./components/Badge";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import Section from "./components/Section";

export default function App() {
  const highlights = useMemo(
    () => [
      { label: "CGPA", value: "9.02" },
      { label: "CodeChef", value: "Diamond badge" },
      { label: "LeetCode", value: "200+ problems solved" },
      { label: "Internship", value: "MERN (2 months)" }
    ],
    []
  );

  return (
    <>
      <Navbar profile={profile} />

      <main>
        <Section id="home" className="hero">
          <div className="heroGrid">
            <div>
              <p className="eyebrow">Aspiring Software Developer.</p>
              <h1 className="h1">
                {profile.name}
                <span className="muted"> — {profile.role}</span>
              </h1>

              <p className="lede">{profile.headline}</p>

              <div className="ctaRow">
                <a className="btn btnPrimary" href="#projects">
                  View projects
                </a>
                <a className="btn btnGhost" href="#contact">
                  Contact
                </a>
                {profile.resume?.enabled ? (
                  <a
                    className="btn btnGhost"
                    href={profile.resume.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resume
                  </a>
                ) : null}
              </div>

              <div className="linkRow" aria-label="Profile links">
                {profile.links.map((l) => (
                  <a
                    key={l.label}
                    className="chip"
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {l.label}
                  </a>
                ))}
              </div>

              <div className="highlightRow" aria-label="Highlights">
                {highlights.map((h) => (
                  <div key={h.label} className="highlight">
                    <div className="highlightValue">{h.value}</div>
                    <div className="highlightLabel">{h.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="heroCard" aria-label="Profile">
              <img
                className="avatar"
                src={profile.photoUrl}
                alt={`${profile.name} portrait`}
                loading="eager"
              />
              <div className="heroCardBody">
                <div className="heroCardTitle">{profile.location.current}</div>
                <div className="heroCardMeta">
                  Native:{" "}
                  <a
                    href={profile.location.nativeWiki}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {profile.location.native}
                  </a>
                </div>

                <div className="heroCardMeta">
                  Phone: <a href={`tel:${profile.phone}`}>{profile.phone}</a>
                </div>
                <div className="heroCardMeta">
                  Email: <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="about" title="About">
          <div className="twoCol">
            <div>
              <p className="p">
                I’m a 3rd-year B.E. (ISE) student at Siddaganga Institute of
                Technology, Tumkur. I like building end-to-end products
                (frontend + backend) and working on ML-assisted features.
              </p>
              <p className="p">
                I care about clean UI, performance, and maintainable code. I’m
                active in competitive programming and enjoy shipping projects
                that show real outcomes.
              </p>
            </div>

            <div className="card">
              <div className="cardTitle">Core stack</div>
              <div className="badgeWrap">
                {profile.skills.core.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>

              <div className="cardTitle mt16">ML / Data</div>
              <div className="badgeWrap">
                {profile.skills.ml.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid3">
            <div className="card">
              <div className="cardTitle">Languages</div>
              <div className="badgeWrap">
                {profile.skills.languages.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </div>

            <div className="card">
              <div className="cardTitle">Web</div>
              <div className="badgeWrap">
                {profile.skills.web.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </div>

            <div className="card">
              <div className="cardTitle">Databases</div>
              <div className="badgeWrap">
                {profile.skills.databases.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="card">
            <div className="rowBetween">
              <div>
                <div className="cardTitle">{profile.experience.title}</div>
                <div className="muted">{profile.experience.company}</div>
              </div>
              <div className="pill">{profile.experience.duration}</div>
            </div>

            <div className="mt16">
              <p className="p">{profile.experience.summary}</p>
              <ul className="list">
                {profile.experience.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="projectsGrid">
            {profile.projects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </Section>

        <Section id="achievements" title="Achievements">
          <div className="grid3">
            {profile.achievements.map((a) => (
              <div key={a.title} className="card">
                <div className="cardTitle">{a.title}</div>
                <div className="muted">{a.detail}</div>
                {a.link ? (
                  <div className="mt12">
                    <a
                      className="textLink"
                      href={a.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View
                    </a>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </Section>

        <Section id="certifications" title="Certifications">
          <div className="grid3">
            {profile.certifications.map((cert) => (
              <div key={cert.title} className="card">
                <div className="cardTitle">{cert.title}</div>
                <div className="muted">{cert.issuer}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="twoCol">
            <div>
              <p className="p">
                For internships, freelance, collaborations, or project
                discussions—send a message.
              </p>
              <div className="contactMeta">
                <div>
                  <div className="muted">Email</div>
                  <a className="textLink" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                </div>
                <div>
                  <div className="muted">Phone</div>
                  <a className="textLink" href={`tel:${profile.phone}`}>
                    {profile.phone}
                  </a>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </Section>
      </main>

      <Footer profile={profile} />
    </>
  );
}
