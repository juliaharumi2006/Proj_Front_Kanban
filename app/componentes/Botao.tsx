"use client";

export default function Botao({ text, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`font-bold w-40 h-8 cursor-pointer rounded-md shadow-lg ${className}`}
    >
      {text}
    </button>
  );
}
