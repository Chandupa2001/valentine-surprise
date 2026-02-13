import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoveQuestion() {
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const [yesSize, setYesSize] = useState(1);

  const questions = [
    "Do you love me? ❤️",
    "Are you really sure? 🥺",
    "Tell me again… do you love me? 💕",
    "Please think carefully 😽",
    "Last chance… do you love me? 💖"
  ];

  function handleNo() {
    setYesSize((prev) => prev + 0.25); // Increase size
    setStep((prev) => Math.min(prev + 1, questions.length - 1));
  }

  function handleYes() {
    setStep("yes");
  }

  return (
    <div className="lovePage">
      <div className="loveCard">

        {step !== "yes" ? (
          <>
            <h2 className="loveQuestion">
              {questions[step]}
            </h2>

            <div className="loveButtons">

              <button
                className="primaryBtn"
                style={{
                  transform: `scale(${yesSize})`
                }}
                onClick={handleYes}
              >
                Yes 😌❤️
              </button>

              <button
                className="secondaryBtn"
                onClick={handleNo}
              >
                No 😢
              </button>

            </div>
          </>
        ) : (
          <>
            <h2>Hehe… I knew it 🥰🐾</h2>

            <p className="muted">
              Thank you for choosing me again and again.
              <br />
              I love you more than words. ❤️
            </p>

            <button
              className="secondaryBtn"
              onClick={() => navigate("/")}
              style={{ marginTop: "16px" }}
            >
              Go Back Home
            </button>
          </>
        )}

      </div>
    </div>
  );
}
