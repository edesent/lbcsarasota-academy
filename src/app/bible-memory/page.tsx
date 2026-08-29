import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";

export const metadata: Metadata = {
  title: "High School Bible Memory | Liberty Baptist Academy",
  description:
    "High School Bible Memory assignments for Liberty Baptist Academy students, organized by semester and week.",
  alternates: { canonical: "/bible-memory" },
};

const firstSemester = [
  { weeks: "Weeks 1–3", verses: ["Romans 10:9–13", "2 Timothy 3:16–17", "Psalm 119:89", "Isaiah 40:8"] },
  { weeks: "Weeks 4–6", verses: ["2 Peter 1:20–21", "Books of the Bible", "Psalm 100"] },
  { weeks: "Weeks 7–9", verses: ["1 Chronicles 29:11–13", "Psalm 90:1–2", "Review All"] },
  { weeks: "Weeks 10–12", verses: ["Psalm 139:1–2, 6–7", "Isaiah 40:28–31", "Philippians 2:5–8"] },
  { weeks: "Weeks 13–15", verses: ["Colossians 1:16–17; 2:9–10", "Isaiah 53:1–3", "Isaiah 53:4–6"] },
  { weeks: "Weeks 16–18", verses: ["Ephesians 5:17–19", "Review All"] },
];

const secondSemester = [
  { weeks: "Weeks 19–21", verses: ["1 Corinthians 2:2, 5, 14", "Romans 6:6, 11, 13", "2 Peter 1:8–11"] },
  { weeks: "Weeks 22–24", verses: ["Proverbs 9:8–10", "Proverbs 27:1; 28:13, 23", "Proverbs 15:5–10"] },
  { weeks: "Weeks 25–27", verses: ["Proverbs 4:23; 6:23", "Ephesians 5:25–27", "Review All"] },
  { weeks: "Weeks 28–30", verses: ["Proverbs 10:4–6, 19", "1 John 4:1–3", "1 John 4:4–6"] },
  { weeks: "Weeks 31–33", verses: ["1 Thessalonians 4:13–15", "1 Thessalonians 4:16–18", "Proverbs 3:11–13"] },
  { weeks: "Weeks 34–35", verses: ["Proverbs 8:10–11", "Review All"] },
];

function SemesterSection({
  title,
  assignments,
}: {
  title: string;
  assignments: { weeks: string; verses: string[] }[];
}) {
  return (
    <section className="py-16 md:py-20 odd:bg-warm-white even:bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-9">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">High School Bible</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark">{title}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {assignments.map((assignment) => (
            <article key={assignment.weeks} className="rounded-2xl border border-cream-dark bg-white p-6 md:p-7 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-text-dark mb-4">{assignment.weeks}</h3>
              <ul className="space-y-3">
                {assignment.verses.map((verse) => (
                  <li key={verse} className="flex gap-3 text-text-body leading-relaxed">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    <span>{verse}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BibleMemoryPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="Student Resources"
          title="High School Bible Memory"
          subtitle="Scripture memory assignments for the school year"
          bgImage="/img-1357.jpeg"
        />

        <section className="py-12 md:py-14 bg-brown-deep text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-white/80 leading-relaxed md:text-lg">
              Use this page to keep up with the assigned Scripture memory passages throughout the year. Review weeks are included so students can plan ahead and stay current.
            </p>
          </div>
        </section>

        <SemesterSection title="First Semester" assignments={firstSemester} />
        <SemesterSection title="Second Semester" assignments={secondSemester} />
      </main>
      <Footer />
    </>
  );
}
