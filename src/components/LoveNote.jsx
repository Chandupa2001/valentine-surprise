import React, { useMemo, useState } from "react";
import { useInView } from "../hooks/useInView.js";

/**
 * Optional typewriter effect (OFF by default).
 * Toggle in UI, or set default below.
 */
function useTypewriter(text, enabled, speed = 18) {
  const [out, setOut] = useState(enabled ? "" : text);

  React.useEffect(() => {
    if (!enabled) {
      setOut(text);
      return;
    }
    let i = 0;
    setOut("");
    const id = setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, enabled, speed]);

  return out;
}

export default function LoveNote({ note }) {
  const { ref, inView } = useInView();
  const [typewriterOn, setTypewriterOn] = useState(false); // default OFF
  const displayed = useTypewriter(note, typewriterOn);

  const lines = useMemo(() => displayed.split("\n"), [displayed]);

  return (
    <div className="block" ref={ref}>
      <div className="sectionHeader">
        <h2 className="h2">A love note</h2>
        <p className="muted">Just something honest.</p>
      </div>

      <div className={`noteWrap ${inView ? "revealIn" : "reveal"}`}>
        <div className="noteTop">
          <div className="noteTag">
            <span className="noteTagDot" aria-hidden="true" />
            <span>From me → to you</span>
          </div>

          <label className="toggle">
            <input
              type="checkbox"
              checked={typewriterOn}
              onChange={(e) => setTypewriterOn(e.target.checked)}
              aria-label="Toggle typewriter effect"
            />
            <span className="toggleUi" aria-hidden="true" />
            <span className="toggleText">Typewriter</span>
          </label>
        </div>

        <div className="notePaper" role="article" aria-label="Love note">
          {lines.map((ln, idx) => (
            <p key={idx} className="noteLine">
              {ln || "\u00A0"}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
