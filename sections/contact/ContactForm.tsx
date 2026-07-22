"use client";

import { useState } from "react";
import { Loader2, ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { TextField, SelectField, TextAreaField } from "@/components/ui/FormField";
import { projectTypes } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

const initial = { name: "", email: "", phone: "", projectType: "", message: "" };

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const update = (key: keyof typeof values) => (v: string) =>
    setValues((prev) => ({ ...prev, [key]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Une erreur est survenue.");
      }

      setStatus("success");
      setValues(initial);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Une erreur est survenue.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 border border-brass/30 bg-ink-raised p-10">
        <CheckCircle2 className="text-brass" size={28} />
        <p className="font-serif text-2xl text-paper">Message bien reçu.</p>
        <p className="max-w-sm text-sm text-paper-muted">
          Merci pour votre message &mdash; notre équipe vous répondra très prochainement.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="link-draw-in text-sm uppercase tracking-[0.15em] text-brass"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <TextField label="Nom complet" name="name" required value={values.name} onChange={update("name")} />
        <TextField label="Email" name="email" type="email" required value={values.email} onChange={update("email")} />
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
        <TextField label="Téléphone" name="phone" type="tel" value={values.phone} onChange={update("phone")} />
        <SelectField
          label="Type de projet"
          name="projectType"
          value={values.projectType}
          onChange={update("projectType")}
          options={projectTypes}
        />
      </div>
      <TextAreaField label="Votre message" name="message" required value={values.message} onChange={update("message")} />

      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-400">
          <AlertCircle size={16} /> {errorMessage}
        </p>
      )}

      <MagneticButton
        type="submit"
        disabled={status === "loading"}
        className="group flex w-fit items-center gap-3 border border-brass bg-brass px-8 py-4 text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:bg-transparent hover:text-brass disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            Envoi&hellip; <Loader2 size={16} className="animate-spin" />
          </>
        ) : (
          <>
            Envoyer le message
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </>
        )}
      </MagneticButton>
    </form>
  );
}
