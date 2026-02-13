import React, { useEffect, useRef, useState } from "react";
import { useInView } from "../hooks/useInView.js";
import musicSrc from "../assets/music.mp3";

function MinimalCatAnimation() {
  return (
    <div className="catAnim" aria-hidden="true">
      <div className="catHead">
        <div className="ear earL" />
        <div className="ear earR" />
        <div className="face">
          <div className="eye eyeL" />
          <div className="eye eyeR" />
          <div className="nose" />
          <div className="whisk whiskL" />
          <div className="whisk whiskR" />
        </div>
      </div>
      <div className="catPawBounce">🐾</div>
    </div>
  );
}

export default function Surprise({ finalMessage }) {
  const { ref, inView } = useInView();
  const [revealed, setRevealed] = useState(false);

  // Optional music (must be user-initiated)
  const audioRef = useRef(null);
  const [canPlay, setCanPlay] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(musicSrc);
    audioRef.current.loop = true;
    audioRef.current.preload = "none";
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const onSurprise = async () => {
    setRevealed(true);
    setCanPlay(true);
    setPlaying(true);
    await audioRef.current.play();

  };

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (!playing) {
        await audioRef.current.play();
        setPlaying(true);
      } else {
        audioRef.current.pause();
        setPlaying(false);
      }
    } catch {
      // autoplay/user gesture issues: keep it silent if blocked
      setPlaying(false);
    }
  };

  return (
    <div className="block" ref={ref}>
      <div className="sectionHeader">
        <h2 className="h2">Final surprise</h2>
        <p className="muted">One last thing tap when you’re ready.</p>
      </div>

      <div className={`surpriseWrap ${inView ? "revealIn" : "reveal"}`}>
        <div className="surpriseCard">
          {!revealed ? (
            <>
              <button className="primaryBtn wide" onClick={onSurprise}>
                Tap for a surprise
                <span className="btnArrow" aria-hidden="true">→</span>
              </button>
              <div className="tinyHint" aria-hidden="true">
                (cat-approved)
              </div>
            </>
          ) : (
            <>
              <MinimalCatAnimation />
              <div className="finalMsg" role="status" aria-live="polite">
                {finalMessage}
              </div>

              <div className="musicRow">
                <button
                  className={`secondaryBtn ${!canPlay ? "disabled" : ""}`}
                  onClick={toggleMusic}
                  disabled={!canPlay}
                  aria-label={playing ? "Pause background music" : "Play background music"}
                >
                  {playing ? "Pause music" : "Play music"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
