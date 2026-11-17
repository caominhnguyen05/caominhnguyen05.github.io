export default function SectionHeading({
  title,
  id,
  note,
}: {
  title: string;
  id: string;
  note?: string;
}) {
  return (
    <div className="section-heading">
      <h2 id={id}>{title}</h2>
      <span className="section-rule" />
      {note && <span className="section-note mono">{note}</span>}
    </div>
  );
}
