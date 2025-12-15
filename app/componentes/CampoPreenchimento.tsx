// 
"use client";

import { LucideIcon } from "lucide-react";

interface CampoPreenchimentoProps {
  icon?: LucideIcon;
  type?: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CampoPreenchimento({
  icon: Icon,
  type = "text",
  placeholder,
  onChange,
}) {
  return (
    <div className="bg-cinza w-80 h-10 rounded-md shadow-sm flex flex-row items-center mt-5">
      <div className="ml-3">
        {Icon && <Icon size={20} strokeWidth={2.5} />}
      </div>

      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="text-xs text-center focus:outline-none w-full mr-6 bg-transparent"
      />
    </div>
  );
}
