import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";

export const metadata: Metadata = {
  title: "School Calendar | Liberty Baptist Academy",
  description: "Important dates for the 2026–2027 school year at Liberty Baptist Academy in Sarasota, Florida.",
};

const events = [
  ["October 2, 2026", "Half Day", "8th–12th Grade · No School for K–7th Grade"],
  ["October 9, 2026", "Elementary Field Trip Permission Slip & Money Due"],
  ["October 14, 2026", "End of First Quarter"],
  ["October 15, 2026 · 11:30 AM", "Pensacola Christian College Chapel", "All are welcome"],
  ["October 16, 2026", "Half Day", "All non-athlete K–12th grade students · Athletes travel to Spring Hill at 1:00 PM"],
  ["October 20, 2026", "Zoo Tampa Field Trip", "Bus leaves at 8:30 AM · Students should be at school by 8:20 AM"],
  ["October 25, 2026 · 4:30–6:30 PM", "Trunk or Treat", "Liberty Baptist Church"],
  ["November 23–27, 2026", "Thanksgiving Break", "No School"],
  ["December 21, 2026–January 1, 2027", "Christmas Break", "No School"],
  ["January 7, 2027", "End of Second Quarter"],
  ["January 18, 2027", "Martin Luther King Jr. Day", "No School"],
  ["February 15, 2027", "Presidents’ Day", "No School"],
  ["March 15–19, 2027", "Spring Break", "No School"],
  ["March 22, 2027", "End of Third Quarter"],
  ["March 26, 2027", "Good Friday", "Half Day"],
  ["April 13–16, 2027", "Iowa Testing"],
  ["April — TBD", "Elementary Field Trip"],
  ["May 20, 2027", "Field Day"],
  ["May 21, 2027", "Last Day of School", "Dismissal at Noon"],
  ["May 21, 2027 · 6:00 PM", "Graduation"],
];

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="2026–2027"
          title="School Calendar"
          subtitle="Important dates for Liberty Baptist Academy families"
          bgImage="/img-1357.jpeg"
        />
        <section className="bg-warm-white py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mb-10 max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">Plan Ahead</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-text-dark md:text-4xl">2026–2027 Important Dates</h2>
              <p className="mt-4 leading-relaxed text-text-body">Please note that dates marked TBD will be updated as details are finalized.</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-cream-dark bg-white shadow-sm">
              {events.map(([date, title, note], index) => (
                <article key={`${date}-${title}`} className={`grid gap-2 px-6 py-5 md:grid-cols-[17rem_1fr] md:gap-8 md:px-8 ${index !== events.length - 1 ? "border-b border-cream-dark" : ""}`}>
                  <p className="font-bold text-gold-dark">{date}</p>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-text-dark">{title}</h3>
                    {note && <p className="mt-1 text-sm font-semibold text-text-body">{note}</p>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
