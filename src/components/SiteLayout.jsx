import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function SiteLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => setMenuOpen((o) => !o);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <div className="app-shell">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className={`nav${scrolled ? " scrolled" : ""}`} role="banner">
        <div className="brand">
          <Link className="pill" to="/" onClick={closeMenu}>
            A Tale of Two Selves
          </Link>
        </div>
        <button
          className="menu-button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={toggleMenu}
        >
          ☰ Menu
        </button>
        <nav
          id="primary-nav"
          className={`nav-links ${menuOpen ? "open" : ""}`}
          role="navigation"
          aria-label="Primary"
        >
          <NavLink
            className={({ isActive }) => `pill${isActive ? " active" : ""}`}
            to="/engineer"
            onClick={closeMenu}
          >
            Engineer
          </NavLink>
          <NavLink
            className={({ isActive }) => `pill${isActive ? " active" : ""}`}
            to="/storyteller"
            onClick={closeMenu}
          >
            Storyteller
          </NavLink>
          <NavLink
            className={({ isActive }) => `pill${isActive ? " active" : ""}`}
            to="/fusion"
            onClick={closeMenu}
          >
            Open the Bridge
          </NavLink>
          <NavLink
            className={({ isActive }) => `pill${isActive ? " active" : ""}`}
            to="/map"
            onClick={closeMenu}
          >
            Map
          </NavLink>
          <NavLink
            className={({ isActive }) => `pill${isActive ? " active" : ""}`}
            to="/journal"
            onClick={closeMenu}
          >
            Journal
          </NavLink>
          <NavLink
            className={({ isActive }) => `pill${isActive ? " active" : ""}`}
            to="/inventory"
            onClick={closeMenu}
          >
            Inventory
          </NavLink>
          <NavLink
            className={({ isActive }) => `pill${isActive ? " active" : ""}`}
            to="/codex"
            onClick={closeMenu}
          >
            Identity Codex
          </NavLink>
        </nav>
      </header>
      {menuOpen && (
        <button
          className="scrim"
          aria-label="Close menu overlay"
          onClick={closeMenu}
        />
      )}
      <main id="main" role="main" onClick={closeMenu}>
        {children}
      </main>
      <footer className="footer">
        <div>
          © {new Date().getFullYear()} Jordan “Jayden” Campbell — Ebonmane Ink
          Creative Studios
        </div>
      </footer>
    </div>
  );
}
