"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const records = [
  "HRS Form 3040 physical",
  "HRS 680 immunization",
  "Legal papers",
  "Copy of birth certificate",
  "Medical/consent letter",
  "Official transcript",
  "Payment agreement",
  "Family interview sheet",
  "Pickup authorization",
  "Handbook acceptance",
];

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

function TextArea({ label, name }: { label: string; name: string }) {
  return (
    <label className="block">
      <span className={labelClass}>{label}</span>
      <textarea className={`${inputClass} min-h-28 resize-y`} name={name} />
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

    const formData = new FormData(event.currentTarget);
    const payload: Record<string, FormDataEntryValue | FormDataEntryValue[]> = {};
    formData.forEach((entryValue, key) => {
      if (payload[key]) {
        payload[key] = Array.isArray(payload[key])
          ? [...payload[key], entryValue]
          : [payload[key], entryValue];
      } else {
        payload[key] = entryValue;
      }
    });

    const response = await fetch("/api/application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      setStatus("error");
      setError(result.error || "The application did not send. Please call the school office.");
      return;
    }

    event.currentTarget.reset();
    setStatus("success");
  }

  return (
    <form onSubmit={submit} className="space-y-10">
      <input type="text" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <section className="rounded-lg border border-cream-dark bg-warm-white p-6 md:p-8 shadow-sm">
        <h2 className="font-serif text-2xl font-bold text-text-dark mb-6">Student Information</h2>
        <div className="grid md:grid-cols-2 gap-5">
          <Field label="Child's Name" name="student_name" required />
          <Field label="Preferred Name" name="preferred_name" />
          <Field label="Birthdate" name="birthdate" type="date" />
          <Field label="Birthplace" name="birthplace" />
          <Field label="Sex" name="sex" />
          <Field label="Age" name="age" type="number" />
          <Field label="Grade Applying For" name="grade_applying" />
          <Field label="Last Grade Completed" name="last_grade_completed" />
          <div className="md:col-span-2">
            <Field label="School Attended" name="school_attended" />
          </div>
        </div>
      </section>

      <section className="rounded-lg border border-cream-dark bg-warm-white p-6 md:p-8 shadow-sm">
        <h2 className="font-serif text-2xl font-bold text-text-dark mb-6">Family Contact</h2>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <Field label="Address" name="address" />
          </div>
          <Field label="City" name="city" />
          <Field label="State" name="state" />
          <Field label="ZIP" name="zip" />
          <Field label="Parent Email" name="parent_email" type="email" required />
          <Field label="Home Phone" name="home_phone" type="tel" />
          <Field label="Dad's Cell Phone" name="dad_cell" type="tel" required />
          <Field label="Mom's Cell Phone" name="mom_cell" type="tel" />
        </div>
      </section>

      <section className="rounded-lg border border-cream-dark bg-warm-white p-6 md:p-8 shadow-sm">
        <h2 className="font-serif text-2xl font-bold text-text-dark mb-6">Emergency & Medical</h2>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <TextArea label="Additional Emergency Contact Information" name="emergency_contact" />
          </div>
          <Field label="Physician Name" name="physician_name" />
          <Field label="Physician Phone" name="physician_phone" type="tel" />
          <Field label="Health Insurance" name="health_insurance" />
          <Field label="Policy Number" name="policy_number" />
        </div>
      </section>

      <section className="rounded-lg border border-cream-dark bg-warm-white p-6 md:p-8 shadow-sm">
        <h2 className="font-serif text-2xl font-bold text-text-dark mb-2">Records Checklist</h2>
        <p className="text-sm text-text-body mb-6">
          Check the items you already have ready. The school office will follow up about anything still needed.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {records.map((record) => (
            <label key={record} className="flex gap-3 rounded-md border border-cream-dark bg-white px-4 py-3 text-sm font-semibold text-text-dark">
              <input type="checkbox" name="records_ready" value={record} className="mt-1 h-4 w-4 accent-brown-light" />
              <span>{record}</span>
            </label>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-cream-dark bg-warm-white p-6 md:p-8 shadow-sm">
        <h2 className="font-serif text-2xl font-bold text-text-dark mb-6">Scholastic Information</h2>
        <div className="grid md:grid-cols-2 gap-5">
          <label className="block">
            <span className={labelClass}>Has the student ever failed an academic subject?</span>
            <select className={inputClass} name="failed_subject">
              <option value="">Select one</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </label>
          <label className="block">
            <span className={labelClass}>Previous Academic Level</span>
            <select className={inputClass} name="academic_level">
              <option value="">Select one</option>
              <option>Excellent</option>
              <option>Good</option>
              <option>Average</option>
              <option>Poor</option>
            </select>
          </label>
          <div className="md:col-span-2">
            <TextArea label="If yes, please explain" name="failed_subject_explanation" />
          </div>
          <TextArea label="Academic Strengths" name="academic_strengths" />
          <TextArea label="Academic Weaknesses" name="academic_weaknesses" />
          <label className="block">
            <span className={labelClass}>Has the student had disciplinary difficulty at school?</span>
            <select className={inputClass} name="disciplinary_difficulty">
              <option value="">Select one</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </label>
          <TextArea label="If yes, please explain" name="disciplinary_explanation" />
        </div>
      </section>

      <section className="rounded-lg border border-cream-dark bg-warm-white p-6 md:p-8 shadow-sm">
        <h2 className="font-serif text-2xl font-bold text-text-dark mb-6">Transportation</h2>
        <TextArea
          label="Person(s) permitted to take my child from school in case of illness, accident, or end of day"
          name="pickup_authorized"
        />
      </section>

      <section className="rounded-lg border border-cream-dark bg-warm-white p-6 md:p-8 shadow-sm">
        <TextArea label="Additional Notes" name="notes" />
      </section>

      <div className="flex flex-col items-start gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full bg-brown-light px-9 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-brown disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Submit Application"}
        </button>
        {status === "success" && (
          <p className="rounded-md bg-[#e8f7ef] px-4 py-3 text-sm font-semibold text-[#116238]">
            Application sent. The school office will follow up with you.
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
