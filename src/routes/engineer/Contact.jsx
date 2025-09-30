import PathLayout from "../../components/PathLayout.jsx";

const IconMail = () => (
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
    <path d="M4 4h16v16H4z" />
    <path d="M22 6l-10 7L2 6" />
  </svg>
);

const IconLinkedIn = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.2 2.3-2.47 4.74-2.47 5.07 0 6 3.33 6 7.66V24h-5v-6.9c0-1.64-.03-3.75-2.29-3.75-2.29 0-2.64 1.79-2.64 3.64V24h-5V8z" />
  </svg>
);

export default function EngineerContact() {
  return (
    <PathLayout
      variant="engineer"
      eyebrow="Contact"
      title="Hire Me — Software Engineer"
      links={[
        { to: "/engineer", label: "Overview" },
        { to: "/engineer/projects", label: "Projects" },
        { to: "/engineer/skills", label: "Skills" },
        { to: "/engineer/testimonials", label: "Testimonials" },
        { to: "/engineer/contact", label: "Hire Me" },
      ]}
    >
      <div className="feature-list" style={{ marginTop: 8 }}>
        <div className="feature">
          <IconMail />
          <div>
            <h3 style={{ margin: "4px 0" }}>Email</h3>
            <p style={{ margin: 0 }}>
              <a href="mailto:campbelljordan64@gmail.com">
                campbelljordan64@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="feature">
          <IconLinkedIn />
          <div>
            <h3 style={{ margin: "4px 0" }}>LinkedIn</h3>
            <p style={{ margin: 0 }}>
              <a
                href="https://www.linkedin.com/in/campbell-jordan-c"
                target="_blank"
                rel="noreferrer"
              >
                campbell-jordan-c
              </a>
            </p>
          </div>
        </div>
      </div>
      <p style={{ marginTop: 16, opacity: 0.9 }}>
        Prefer voice? I’m happy to schedule a brief intro call to align on
        goals, scope, and timelines.
      </p>
    </PathLayout>
  );
}
