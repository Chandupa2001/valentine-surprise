import React from "react";
import { useInView } from "../hooks/useInView.js";

function PawDivider() {
  return (
    <div className="pawDivider" aria-hidden="true">
      <span>🐾</span>
    </div>
  );
}

export default function Timeline({ items }) {
  const { ref, inView } = useInView();

  return (
    <div className="block" ref={ref}>
      <div className="sectionHeader">
        <h2 className="h2">Our story</h2>
        <p className="muted">A few moments I keep close.</p>
      </div>

      <div className={`timeline ${inView ? "revealIn" : "reveal"}`}>
        {items.map((it, idx) => (
          <div key={idx} className="timelineItem">
            <div className="timelineDot" aria-hidden="true" />
            <div className="timelineCard">
              <div className="timelineTop">
                <span className="timelineDate">{it.date}</span>
                <span className="timelineTitle">{it.title}</span>
              </div>
              <div className="timelineLine">{it.line}</div>
            </div>

            {idx % 1 === 0 && idx !== items.length - 1 ? <PawDivider /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
