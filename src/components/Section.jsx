export default function Section({ id, title, children, className = "" }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        {title ? <h2 className="h2">{title}</h2> : null}
        {children}
      </div>
    </section>
  );
}

