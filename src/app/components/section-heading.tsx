export default function SectionHeading({
  number,
  title,
  note,
}: {
  number: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="section-heading">
      <span className="section-number mono" aria-hidden="true">
        {number}
      </span>
      <h2 id={`${title.toLowerCase()}-heading`}>{title}</h2>
      <span className="section-rule" />
      {note && <span className="section-note mono">{note}</span>}
    </div>
  );
}
