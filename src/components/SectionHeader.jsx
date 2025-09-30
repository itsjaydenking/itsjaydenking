export default function SectionHeader({ eyebrow, title, align = "center" }) {
  return (
    <header style={{ textAlign: align }}>
      {eyebrow && (
        <div
          style={{
            color: "var(--gold)",
            letterSpacing: 2,
            fontSize: 12,
            textTransform: "uppercase",
          }}
        >
          {eyebrow}
        </div>
      )}
      <h1 style={{ margin: "8px 0" }}>{title}</h1>
      <div className="sep" />
    </header>
  );
}
