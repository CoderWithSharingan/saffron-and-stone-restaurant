function SectionHeading({ id, eyebrow, title, children, align = 'start' }) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="section-heading__title">
        {title}
      </h2>
      {children && <div className="section-heading__intro">{children}</div>}
    </header>
  );
}

export default SectionHeading;
