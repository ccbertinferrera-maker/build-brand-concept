"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

type BaseProps = {
  label: string;
  name: string;
  required?: boolean;
  className?: string;
};

export function TextField({
  label,
  name,
  type = "text",
  required,
  value,
  onChange,
  className,
}: BaseProps & {
  type?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const id = useId();
  const [focused, setFocused] = useState(false);
  const floated = focused || value.length > 0;

  return (
    <div className={cn("relative border-b border-line/20 pb-2 transition-colors focus-within:border-brass", className)}>
      <label
        htmlFor={id}
        className={cn(
          "pointer-events-none absolute left-0 origin-left transition-all duration-300 ease-out",
          floated ? "top-[-0.65rem] text-xs tracking-wide text-brass" : "top-2 text-base text-paper-muted"
        )}
      >
        {label}
        {required && <span className="text-brass"> *</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full bg-transparent pt-4 text-base text-paper outline-none"
      />
    </div>
  );
}

export function SelectField({
  label,
  name,
  required,
  value,
  onChange,
  options,
  className,
}: BaseProps & {
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  const id = useId();
  return (
    <div className={cn("relative border-b border-line/20 pb-2 transition-colors focus-within:border-brass", className)}>
      <label htmlFor={id} className="mb-1 block text-xs uppercase tracking-[0.14em] text-paper-dim">
        {label}
        {required && <span className="text-brass"> *</span>}
      </label>
      <select
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none bg-transparent bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 viewBox=%220 0 12 8%22><path d=%22M1 1l5 5 5-5%22 stroke=%22%23C9A66B%22 stroke-width=%221.4%22 fill=%22none%22/></svg>')] bg-[right_0.2rem_center] bg-no-repeat pb-1 pt-1 text-base text-paper outline-none"
      >
        <option value="" disabled className="bg-ink">
          Sélectionner&hellip;
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-ink text-paper">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export function TextAreaField({
  label,
  name,
  required,
  value,
  onChange,
  className,
}: BaseProps & {
  value: string;
  onChange: (v: string) => void;
}) {
  const id = useId();
  const [focused, setFocused] = useState(false);
  const floated = focused || value.length > 0;

  return (
    <div className={cn("relative border-b border-line/20 pb-2 transition-colors focus-within:border-brass", className)}>
      <label
        htmlFor={id}
        className={cn(
          "pointer-events-none absolute left-0 origin-left transition-all duration-300 ease-out",
          floated ? "top-[-0.65rem] text-xs tracking-wide text-brass" : "top-2 text-base text-paper-muted"
        )}
      >
        {label}
        {required && <span className="text-brass"> *</span>}
      </label>
      <textarea
        id={id}
        name={name}
        required={required}
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full resize-none bg-transparent pt-4 text-base text-paper outline-none"
      />
    </div>
  );
}
