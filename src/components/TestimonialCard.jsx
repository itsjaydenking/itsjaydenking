export default function TestimonialCard({ quote, author, role }) {
  return (
    <figure className="card" aria-label={`Testimonial by ${author}`}>
      <blockquote
        style={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "1.25rem",
          margin: 0,
        }}
      >
        “{quote}”
      </blockquote>
      <figcaption style={{ marginTop: 12, opacity: 0.85 }}>
        — {author}
        {role ? `, ${role}` : ""}
      </figcaption>
    </figure>
  );
}
