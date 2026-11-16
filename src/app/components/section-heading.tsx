export default function SectionHeading({
  title,
  note,
}: {
  title: string;
  note?: string;
}) {
  return (
    <div className="section-heading">
      <h2 id={`${title.toLowerCase()}-heading`}>{title}</h2>
      <span className="section-rule" />
      {note && <span className="section-note mono">{note}</span>}
    </div>
  );
}
