import React from "react";
import { useInView } from "../hooks/useInView.js";

export default function Reasons({ reasons }) {
  const { ref, inView } = useInView();

  return (
    <div className="block" ref={ref}>
      <div className="sectionHeader">
        <h2 className="h2">Reasons I love you</h2>
        <p className="muted">Small truths. Big meaning.</p>
      </div>

      <div className="cards">
        {reasons.map((r, idx) => (
          <div
            key={idx}
            className={`card ${inView ? "cardIn" : "cardOut"}`}
            style={{ transitionDelay: `${Math.min(idx * 60, 420)}ms` }}
          >
            <div className="cardPaw" aria-hidden="true">🐾</div>
            <div className="cardText">{r}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
