export default function Footer({ profile }) {
  const linkedIn = profile.links.find((x) => x.label === "LinkedIn")?.url;
  const github = profile.links.find((x) => x.label === "GitHub")?.url;

  return (
    <footer className="footer">
      <div className="container footerInner">
        <div className="muted">
          © {new Date().getFullYear()} {profile.name}
        </div>
        <div className="footerLinks">
          {linkedIn ? (
            <a className="textLink" href={linkedIn} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          ) : null}
          {github ? (
            <a className="textLink" href={github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          ) : null}
          <a className="textLink" href="#home">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

