"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubmitted(true); }
  return <form className={`newsletter-form ${compact ? "newsletter-form--compact" : ""}`} onSubmit={submit}>
    <label className="sr-only" htmlFor={compact ? "compact-email" : "email"}>Email address</label>
    <input id={compact ? "compact-email" : "email"} type="email" required placeholder="Your email address" disabled={submitted} />
    <button type="submit" disabled={submitted}>{submitted ? "You’re on the list" : "Subscribe →"}</button>
    {!compact && <p>One considered email each week. No hustle sermon, no automated nonsense.</p>}
  </form>;
}
