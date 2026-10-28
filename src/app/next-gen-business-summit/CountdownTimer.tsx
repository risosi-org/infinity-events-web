"use client";

import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

      setTimeLeft({
        days: `${Math.floor(diff / 864e5)}`,
        hours: pad(Math.floor(diff / 36e5) % 24),
        minutes: pad(Math.floor(diff / 6e4) % 60),
        seconds: pad(Math.floor(diff / 1e3) % 60),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div
      className="countdown grid grid-cols-4 gap-2.5 my-7"
      aria-label="Countdown to the summit"
    >
      <div className="border border-[rgba(212,175,92,0.18)] rounded-[14px] py-4 px-2 text-center bg-black/35">
        <b className="block font-display text-[clamp(32px,5vw,52px)] leading-none font-normal text-[#f4efe6]">
          {timeLeft.days}
        </b>
        <span className="text-[10px] tracking-[0.22em] uppercase text-[#a59f94]">
          Days
        </span>
      </div>
      <div className="border border-[rgba(212,175,92,0.18)] rounded-[14px] py-4 px-2 text-center bg-black/35">
        <b className="block font-display text-[clamp(32px,5vw,52px)] leading-none font-normal text-[#f4efe6]">
          {timeLeft.hours}
        </b>
        <span className="text-[10px] tracking-[0.22em] uppercase text-[#a59f94]">
          Hours
        </span>
      </div>
      <div className="border border-[rgba(212,175,92,0.18)] rounded-[14px] py-4 px-2 text-center bg-black/35">
        <b className="block font-display text-[clamp(32px,5vw,52px)] leading-none font-normal text-[#f4efe6]">
          {timeLeft.minutes}
        </b>
        <span className="text-[10px] tracking-[0.22em] uppercase text-[#a59f94]">
          Mins
        </span>
      </div>
      <div className="border border-[rgba(212,175,92,0.18)] rounded-[14px] py-4 px-2 text-center bg-black/35">
        <b className="block font-display text-[clamp(32px,5vw,52px)] leading-none font-normal text-[#f4efe6]">
          {timeLeft.seconds}
        </b>
        <span className="text-[10px] tracking-[0.22em] uppercase text-[#a59f94]">
          Secs
        </span>
      </div>
    </div>
  );
}
