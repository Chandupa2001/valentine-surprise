import React, { useMemo, useState } from "react";
import Modal from "./Modal.jsx";
import { useInView } from "../hooks/useInView.js";

import photo1 from "../assets/photo1.jpeg";
import photo2 from "../assets/photo2.jpeg";
import photo3 from "../assets/photo3.jpeg";
import photo4 from "../assets/photo4.jpeg";
import photo5 from "../assets/photo5.jpeg";
import photo6 from "../assets/photo6.jpeg";
import photo7 from "../assets/photo7.jpeg";
import photo8 from "../assets/photo8.jpeg";
import photo9 from "../assets/photo9.jpeg";

const photoMap = {
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9
};

export default function Gallery({ photos }) {
  const [active, setActive] = useState(null);
  const { ref, inView } = useInView();

  const resolved = useMemo(() => {
    return photos.map((p) => ({
      ...p,
      src: photoMap[p.srcKey] || photo1
    }));
  }, [photos]);

  return (
    <div className="block" ref={ref}>
      <div className="sectionHeader">
        <h2 className="h2">Photo memories</h2>
        <p className="muted">
          Tap a photo to open it. On mobile, swipe horizontally.
        </p>
      </div>

      {/* Mobile: horizontal snap carousel (no heavy deps) */}
      <div className={`galleryMobile ${inView ? "revealIn" : "reveal"}`}>
        {resolved.map((p, idx) => (
          <button
            key={idx}
            className="photoCard"
            onClick={() => setActive(p)}
            aria-label={`Open photo: ${p.caption}`}
          >
            <img className="photoImg" src={p.src} alt={p.alt} loading="lazy" />
            <div className="photoMeta">
              <span className="photoCap">{p.caption}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Desktop-ish grid (still responsive) */}
      <div className={`galleryGrid ${inView ? "revealIn" : "reveal"}`}>
        {resolved.map((p, idx) => (
          <button
            key={idx}
            className="gridItem"
            onClick={() => setActive(p)}
            aria-label={`Open photo: ${p.caption}`}
          >
            <img className="gridImg" src={p.src} alt={p.alt} loading="lazy" />
            <div className="gridOverlay">
              <span className="gridCaption">{p.caption}</span>
            </div>
          </button>
        ))}
      </div>

      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        title={active?.caption || "Memory"}
      >
        {active && (
          <figure className="lightboxFigure">
            <img
              src={active.src}
              alt={active.alt}
              className="lightboxImg"
              loading="eager"
            />
            <figcaption className="lightboxCap">{active.caption}</figcaption>
          </figure>
        )}
      </Modal>

      <div className="hintRow" aria-hidden="true">
        <span className="hintPaw">🐾</span>
        <span className="hintLine" />
        <span className="hintPaw">🐾</span>
      </div>
    </div>
  );
}
