"use client";

import { FormEvent, useState } from "react";

import { createMailtoLink, siteConfig } from "@/content/site";

type SubmissionState = {
  type: "idle" | "success" | "error";
  message: string;
};

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [state, setState] = useState<SubmissionState>({
    type: "idle",
    message: ""
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setState({ type: "idle", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      interest: String(formData.get("interest") ?? ""),
      message: String(formData.get("message") ?? "")
    };

    const body = [
      `Nome: ${payload.name}`,
      `Email: ${payload.email}`,
      payload.phone ? `Telefono: ${payload.phone}` : "",
      `Interesse: ${payload.interest}`,
      "",
      "Messaggio:",
      payload.message
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = createMailtoLink({
      subject: `Richiesta ${payload.interest.toLowerCase()} dal sito AVM`,
      body
    });

    setState({
      type: "success",
      message: `Apro il client email verso ${siteConfig.email}.`
    });

    window.location.href = mailto;
    setIsSubmitting(false);
  };

  return (
    <form
      action={`mailto:${siteConfig.email}`}
      onSubmit={handleSubmit}
      className="space-y-5 rounded-[30px] border border-line bg-white/[0.03] p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm text-sand">Nome</span>
          <input
            name="name"
            required
            className="w-full rounded-2xl border border-line bg-black/20 px-4 py-3 text-sand outline-none transition placeholder:text-muted focus:border-accent"
            placeholder="Nome e cognome"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm text-sand">Email</span>
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-2xl border border-line bg-black/20 px-4 py-3 text-sand outline-none transition placeholder:text-muted focus:border-accent"
            placeholder="Email di contatto"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm text-sand">Telefono</span>
          <input
            name="phone"
            className="w-full rounded-2xl border border-line bg-black/20 px-4 py-3 text-sand outline-none transition placeholder:text-muted focus:border-accent"
            placeholder="Facoltativo"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm text-sand">Interesse</span>
          <select
            name="interest"
            className="w-full rounded-2xl border border-line bg-black/20 px-4 py-3 text-sand outline-none transition focus:border-accent"
            defaultValue="Consulenza"
          >
            <option>Consulenza</option>
            <option>Gestione immobiliare</option>
            <option>Valorizzazione estetica</option>
            <option>Collaborazione investitori</option>
          </select>
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-sm text-sand">Messaggio</span>
        <textarea
          name="message"
          rows={6}
          required
          className="w-full rounded-3xl border border-line bg-black/20 px-4 py-3 text-sand outline-none transition placeholder:text-muted focus:border-accent"
          placeholder="Racconta il contesto dell’immobile o il tipo di supporto richiesto."
        />
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="gold-fill-btn disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Invio in corso" : "Invia richiesta"}
        </button>
        <p
          className={`text-sm ${
            state.type === "error" ? "text-red-300" : "text-muted"
          }`}
          aria-live="polite"
        >
          {state.message}
        </p>
      </div>
    </form>
  );
}
