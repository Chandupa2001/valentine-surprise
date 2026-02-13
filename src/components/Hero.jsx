import React from "react";

function CatIcon() {
  // minimalist inline SVG cat head
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 48 48"
      role="img"
      aria-label="Minimal cat icon"
      className="catIcon"
    >
      <path
        d="M12 18 8 10c-.6-1.2.8-2.4 2-1.6l7 4.6a16 16 0 0 1 14 0l7-4.6c1.2-.8 2.6.4 2 1.6l-4 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 20.5c-3.5 2.6-5.5 6-5.5 10 0 8.3 7.6 15 17 15s17-6.7 17-15c0-4-2-7.4-5.5-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M19 31c1.2 1.2 2.9 1.8 5 1.8S27.8 32.2 29 31"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M18 28h0M30 28h0"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M24 30.2l-1.6 1.1M24 30.2l1.6 1.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Hero({ headline, subheading, nextId }) {
  const scrollNext = () => {
    const el = document.getElementById(nextId);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="hero">
      <div className="heroTop">
        <div className="pill">
          <span className="pillDot" aria-hidden="true" />
          <span>Happy Valentine's Day</span>
          <span className="pillPaw" aria-hidden="true">🐾</span>
        </div>

        <h1 className="heroTitle">{headline}</h1>
        {/* <p className="heroSub">{subheading}</p> */}

        <div className="heroRow">
          <div className="heroCat">
            <CatIcon />
            <span className="heroCatText">a tiny cat-approved page</span>
          </div>

          <button className="primaryBtn" onClick={scrollNext}>
            Start
            <span className="btnArrow" aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div className="heroGlow" aria-hidden="true" />
    </div>
  );
}
