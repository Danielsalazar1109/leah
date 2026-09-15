"use client";

import Image from "next/image";
import { useState } from "react";

const photos = [
  "/photos/photo1.jpg",
  "/photos/photo2.jpg",
  "/photos/photo3.jpg",
];

export default function Home() {
  const [step, setStep] = useState(0);
  const [noPosition, setNoPosition] = useState({
    top: "50%",
    left: "65%",
  });

  const moveNoButton = () => {
    const positions = [
      { top: "15%", left: "15%" },
      { top: "75%", left: "20%" },
      { top: "20%", left: "75%" },
      { top: "75%", left: "75%" },
      { top: "45%", left: "5%" },
      { top: "55%", left: "85%" },
      { top: "10%", left: "48%" },
      { top: "80%", left: "50%" },
    ];

    const random =
      positions[Math.floor(Math.random() * positions.length)];

    setNoPosition(random);
  };

  // Final YES screen
  if (step === 3) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 flex items-center justify-center px-5 py-10 overflow-hidden relative">
        <FloatingHearts />

        <div className="relative z-10 max-w-3xl w-full">
          <div className="bg-white/85 backdrop-blur-xl rounded-[2rem] shadow-2xl p-6 sm:p-10 text-center border border-white">
            <div className="text-6xl mb-4 animate-bounce">💖</div>

            <h1 className="text-4xl sm:text-6xl font-bold text-rose-500">
              Yay, Leah! 🥹
            </h1>

            <p className="text-gray-600 text-lg mt-4">
              You just made me the happiest person. ❤️
            </p>

            <div className="grid grid-cols-2 gap-3 mt-8">
              {photos.map((photo, index) => (
                <div
                  key={photo}
                  className={`relative overflow-hidden rounded-2xl shadow-lg ${
                    index === 0 ? "col-span-2 h-64 sm:h-80" : "h-40 sm:h-56"
                  }`}
                >
                  <Image
                    src={photo}
                    alt={`Memory ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>

            <div className="mt-9">
              <p className="text-xl sm:text-2xl font-semibold text-gray-700 leading-relaxed">
                Salamat sa pagpili sa akin. ❤️
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                Pangako, hindi kita bibiguin. Palagi kitang mamahalin,
                aalagaan, at susuportahan.
              </p>

              <div className="text-4xl mt-6">
                🌷 💕 🧸 💗 🌸
              </div>

              <p className="text-gray-400 italic mt-6">
                Thank you for choosing me, Leah. ❤️
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Question screen
  if (step === 2) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 flex items-center justify-center px-5 overflow-hidden relative">
        <FloatingHearts />

        <div className="relative z-10 max-w-xl w-full">
          <div className="bg-white/85 backdrop-blur-xl rounded-[2rem] shadow-2xl p-8 sm:p-12 text-center border border-white">
            <div className="text-6xl mb-5">🥺❤️</div>

            <p className="text-rose-400 text-lg font-medium">
              Leah...
            </p>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mt-3 leading-tight">
              Will you be my girlfriend?
            </h1>

            <p className="text-gray-500 mt-5 text-lg">
              I have one very important question for you...
            </p>

            <div className="relative h-44 mt-8">
              <button
                onClick={() => setStep(3)}
                className="absolute left-[20%] top-1/2 -translate-y-1/2 bg-rose-500 hover:bg-rose-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
              >
                YES ❤️
              </button>

              <button
                onMouseEnter={moveNoButton}
                onTouchStart={moveNoButton}
                style={{
                  top: noPosition.top,
                  left: noPosition.left,
                }}
                className="absolute bg-gray-200 text-gray-500 font-bold text-lg px-8 py-4 rounded-full shadow-md transition-all duration-300"
              >
                NO 💔
              </button>
            </div>

            <p className="text-xs text-gray-400 mt-3">
              There is only one correct answer 👀
            </p>
          </div>
        </div>
      </main>
    );
  }

  // Memories screen
// Memories screen
if (step === 1) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 flex items-center justify-center px-5 py-10 overflow-hidden relative">
      <FloatingHearts />

      <div className="relative z-10 max-w-2xl w-full">
        <div className="bg-white/85 backdrop-blur-xl rounded-[2rem] shadow-2xl p-6 sm:p-10 text-center border border-white">

          <div className="text-5xl mb-3">
            🌷
          </div>

          <p className="text-rose-400 font-medium text-lg">
            A few photos of you...
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">
            Because you deserve to be appreciated. ❤️
          </h1>

          <p className="text-gray-500 mt-4">
            I could look at these pictures all day. 🥺
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {photos.map((photo, index) => (
              <div
                key={photo}
                className={`relative overflow-hidden rounded-2xl shadow-lg ${
                  index === 0
                    ? "col-span-2 h-72 sm:h-96"
                    : "h-52 sm:h-64"
                }`}
              >
                <Image
                  src={photo}
                  alt={`Leah ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700 bg-no-repeat"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />

                {/* subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            ))}
          </div>

          <p className="text-gray-600 mt-7 text-lg leading-relaxed">
            You are beautiful, you are special, and I am really grateful
            that I got to meet you. 💕
          </p>

          <button
            onClick={() => setStep(2)}
            className="mt-7 bg-rose-500 hover:bg-rose-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-all"
          >
            One more thing... 💌
          </button>

        </div>
      </div>
    </main>
  );
}

  // Opening screen
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 flex items-center justify-center px-5 overflow-hidden relative">
      <FloatingHearts />

      <div className="relative z-10 max-w-xl w-full">
        <div className="bg-white/85 backdrop-blur-xl rounded-[2rem] shadow-2xl p-8 sm:p-12 text-center border border-white">
          <div className="text-7xl animate-pulse">💌</div>

          <p className="text-rose-400 font-medium text-lg mt-5">
            Hey Leah...
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mt-2 leading-tight">
            I have something important to ask you.
          </h1>

          <p className="text-gray-500 mt-5 text-lg">
            But first, let me show you something. 🥺
          </p>

          <button
            onClick={() => setStep(1)}
            className="mt-8 bg-rose-500 hover:bg-rose-600 text-white font-bold px-9 py-4 rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all"
          >
            Open it ❤️
          </button>
        </div>
      </div>
    </main>
  );
}

function FloatingHearts() {
  const hearts = ["❤️", "💕", "💗", "💖", "💓", "🌸", "✨", "💞"];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart, index) => (
        <span
          key={index}
          className="absolute text-2xl opacity-40 animate-float"
          style={{
            left: `${5 + index * 12}%`,
            bottom: "-50px",
            animationDelay: `${index * 0.8}s`,
            animationDuration: `${5 + (index % 3)}s`,
          }}
        >
          {heart}
        </span>
      ))}
    </div>
  );
}
