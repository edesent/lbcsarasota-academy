"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-md border border-cream-dark bg-white px-4 py-3 text-text-dark outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/25";
const labelClass = "block text-sm font-bold text-text-dark mb-2";

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className={labelClass}>{label}</span>
      <input className={inputClass} name={name} type={type} required={required} />
    </label>
  );
}

export default function ApplicationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      setStatus("error");
      setError(result.error || "The waiting-list request did not send. Please call the school office.");
      return;
    }

    form.reset();
    setStatus("success");
  }

  return (
    <form onSubmit={submit} className="space-y-8">
      <input type="text" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <section className="rounded-lg border border-cream-dark bg-warm-white p-6 shadow-sm md:p-8">
        <h2 className="mb-6 font-serif text-2xl font-bold text-text-dark">Family Information</h2>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Parent or Guardian Name" name="parent_name" required />
          <Field label="Email Address" name="parent_email" type="email" required />
          <Field label="Phone Number" name="phone" type="tel" required />
          <Field label="Student’s First Name" name="student_name" required />

          <label className="block">
            <span className={labelClass}>Grade Requested</span>
            <select className={inputClass} name="grade_requested" required defaultValue="">
              <option value="" disabled>Select a grade</option>
              <option>K5</option>
              <option>1st Grade</option>
              <option>2nd Grade</option>
              <option>3rd Grade</option>
              <option>4th Grade</option>
              <option>5th Grade</option>
              <option>6th Grade</option>
              <option>7th Grade</option>
              <option>8th Grade</option>
              <option>9th Grade</option>
              <option>10th Grade</option>
              <option>11th Grade</option>
              <option>12th Grade</option>
            </select>
          </label>

          <label className="block">
            <span className={labelClass}>School Year Requested</span>
            <select className={inputClass} name="school_year" required defaultValue="">
              <option value="" disabled>Select a school year</option>
              <option>2026–2027</option>
              <option>2027–2028</option>
              <option>Later or Not Sure</option>
            </select>
          </label>

          <div className="md:col-span-2">
            <Field
              label="Additional Students Needing Placement (optional)"
              name="additional_students"
            />
          </div>

          <label className="block">
            <span className={labelClass}>How Did You Hear About LBA? (optional)</span>
            <select className={inputClass} name="referral_source" defaultValue="">
              <option value="">Select one</option>
              <option>Friend or Family</option>
              <option>Church</option>
              <option>Online Search</option>
              <option>Social Media</option>
              <option>Step Up For Students</option>
              <option>Other</option>
            </select>
          </label>

          <label className="block md:col-span-2">
            <span className={labelClass}>Questions or Comments (optional)</span>
            <textarea className={`${inputClass} min-h-28 resize-y`} name="notes" />
          </label>
        </div>
      </section>

      <label className="flex gap-3 rounded-lg border border-cream-dark bg-warm-white p-5 text-sm leading-relaxed text-text-body">
        <input
          type="checkbox"
          name="enrollment_updates_consent"
          value="Yes"
          required
          className="mt-1 h-4 w-4 shrink-0 accent-brown-light"
        />
        <span>
          I agree to receive enrollment and waiting-list updates from Liberty Baptist Academy.
        </span>
      </label>

      <div className="flex flex-col items-start gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full bg-brown-light px-9 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brown disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Submit Form"}
        </button>
        {status === "success" && (
          <p className="rounded-md bg-[#e8f7ef] px-4 py-3 text-sm font-semibold text-[#116238]">
            Thank you! Your family has been added to our waiting list. The school office will follow up with you.
          </p>
        )}
        {status === "error" && (
          <p className="rounded-md bg-[#fff0f0] px-4 py-3 text-sm font-semibold text-[#9b1c1c]">
            {error}
          </p>
        )}
      </div>
    </form>
  );
}
