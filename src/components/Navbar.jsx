export default function Navbar({ profile }) {
  const items = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="nav">
      <div className="container navInner">
        <a className="brand" href="#home" aria-label="Go to top">
          {profile.name.split(" ")[0]}
          <span className="brandDot">.</span>
        </a>

        <nav aria-label="Primary">
          <ul className="navList">
            {items.map((it) => (
              <li key={it.href}>
                <a className="navLink" href={it.href}>
                  {it.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="btn btnSmall" href="#contact">
          Contact
        </a>
      </div>
    </header>
  );
}

