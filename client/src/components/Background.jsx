import React from "react";

export default function Background() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-paper" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-amber/20 blur-3xl animate-pulseSlow" />
      <div className="absolute top-40 -left-20 h-72 w-72 rounded-full bg-teal/15 blur-3xl animate-pulseSlow [animation-delay:1.5s]" />
      <div className="absolute bottom-[-8rem] left-1/3 h-[22rem] w-[22rem] rounded-full bg-amber/10 blur-3xl animate-pulseSlow [animation-delay:2.2s]" />
      <div className="absolute inset-0 gridlines opacity-70" />
      <div className="absolute inset-0 bg-noise" />
    </div>
  );
}