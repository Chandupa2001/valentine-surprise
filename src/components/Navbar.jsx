import React, { useEffect, useMemo, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "memories", label: "Memories" },
  { id: "story", label: "Story" },
//   { id: "reasons", label: "Reasons" },
  { id: "note", label: "Note" },
  { id: "surprise", label: "Surprise" }
];

export default function Navbar({ herName }) {
  const [open, setOpen] = useState(false);

  const title = useMemo(() => {
    return herName && herName !== "HerName" ? `${herName} ✦` : "Valentine ✦";
  }, [herName]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function goTo(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  }

  return (
    <header className="navWrap">
      <nav className="nav" aria-label="Primary">
        <button
          className="brand"
          onClick={() => goTo("home")}
          aria-label="Go to top"
        >
          <span className="brandDot" aria-hidden="true" />
          <span className="brandText">{title}</span>
        </button>

        <button
          className="hamburger"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="navmenu"
        >
          <span className="hamburgerLines" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>

        <div className={`menu ${open ? "open" : ""}`} id="navmenu">
          {links.map((l) => (
            <button
              key={l.id}
              className="navLink"
              onClick={() => goTo(l.id)}
            >
              {l.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
