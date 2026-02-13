import React, { useMemo } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Gallery from "./components/Gallery.jsx";
import Timeline from "./components/Timeline.jsx";
import Reasons from "./components/Reasons.jsx";
import LoveNote from "./components/LoveNote.jsx";
import Surprise from "./components/Surprise.jsx";
import LoveQuestion from "./components/LoveQuestion.jsx";

import { content } from "./data/content.js";

function HomePage() {
  const resolvedHeadline = content.heroHeadline.replace(
    "{herName}",
    content.herName
  );

  return (
    <>
      <Navbar herName={content.herName} />

      <main>
        <section id="home" className="section">
          <Hero
            headline={resolvedHeadline}
            subheading={content.heroSubheading}
            nextId="memories"
          />
        </section>

        <section id="memories" className="section">
          <Gallery photos={content.photos} />
        </section>

        <section id="story" className="section">
          <Timeline items={content.timelineMilestones} />
        </section>

        {/* <section id="reasons" className="section">
          <Reasons reasons={content.reasons} />
        </section> */}

        <section id="note" className="section">
          <LoveNote note={content.loveNote} />
        </section>

        <section id="surprise" className="section section-last">
          <Surprise finalMessage={content.surpriseFinalMessage} />
        </section>
      </main>

      <footer className="footer">
        <a href="/love" className="loveBtn">
          Do you love me? 🐾
        </a>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/love" element={<LoveQuestion />} />
    </Routes>
  );
}
