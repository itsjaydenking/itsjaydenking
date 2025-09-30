import { useVisitXP } from "../../hooks/useXP.js";
import PathLayout from "../../components/PathLayout.jsx";

const IconCheck = () => (
  <svg
    className="icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const IconGauge = () => (
  <svg
    className="icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M12 14v-4" />
    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
  </svg>
);

const IconA11y = () => (
  <svg
    className="icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <circle cx="12" cy="4" r="1" />
    <path d="M4 7h16M6 21l4-7m4 7l4-7M9 7l3 5 3-5" />
  </svg>
);

export default function EngineerSkills() {
  useVisitXP("visit_engineer_skills", 6);
  return (
    <PathLayout
      variant="engineer"
      eyebrow="Skills"
      title="Skills & Practices"
      links={[
        { to: "/engineer", label: "Overview" },
        { to: "/engineer/projects", label: "Projects" },
        { to: "/engineer/skills", label: "Skills" },
        { to: "/engineer/testimonials", label: "Testimonials" },
        { to: "/engineer/contact", label: "Hire Me" },
      ]}
    >
      <p>
        Systems thinking, inclusive UX, and performance-first builds. I anchor
        on DX quality and testability so teams can move faster with confidence.
      </p>
      <div className="feature-list" style={{ marginTop: 16 }}>
        <div className="feature">
          <IconCheck />
          <div>
            <h3 style={{ margin: "4px 0" }}>Core Stack</h3>
            <p style={{ margin: 0 }}>
              React 19, Node.js, TypeScript, Vite, Postgres
            </p>
          </div>
        </div>
        <div className="feature">
          <IconA11y />
          <div>
            <h3 style={{ margin: "4px 0" }}>Accessibility</h3>
            <p style={{ margin: 0 }}>
              WCAG, ARIA, keyboard flows, color & contrast audits
            </p>
          </div>
        </div>
        <div className="feature">
          <IconGauge />
          <div>
            <h3 style={{ margin: "4px 0" }}>Performance</h3>
            <p style={{ margin: 0 }}>
              Core Web Vitals, bundle & render budgets, profiling
            </p>
          </div>
        </div>
      </div>
    </PathLayout>
  );
}
