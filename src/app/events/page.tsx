import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";

export const metadata: Metadata = {
  title: "School Calendar | Liberty Baptist Academy",
  description: "Important dates for the 2026–2027 school year at Liberty Baptist Academy in Sarasota, Florida.",
};

const events = [
  ["November 3, 2026", "Election Day", "Don’t forget to vote!"],
  ["November 5–6, 2026", "Hawks Football State Championship", "Team in Fort Pierce for the State Championship · Congratulations to our Hawks — FCAA Northwest Division Champions!"],
  ["November 6, 2026", "Half Day", "Half day of school due to the State Championship · Last day to bring donations for Hope Children’s Home"],
  ["November 9–16, 2026", "Senior College Trip", "Pray for Pastor and Mrs. Aiken and our seniors as they travel, seek God’s plan for their next step after graduation, and for safety."],
  ["November 11, 2026", "Veterans Day", "We are thankful for our veterans · Students may wear patriotic shirts"],
  ["November 20, 2026", "Half Day", "Half day of school"],
  ["November 22, 2026 · 10:00 AM", "Liberty Baptist Church Praise Service", "You are invited to worship and thank the Lord for all He gives!"],
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

            <div className="mt-14 max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">School Updates</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-text-dark md:text-4xl">News &amp; Reminders</h2>
            </div>
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <article className="rounded-2xl border border-cream-dark bg-white p-6 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-text-dark">Junior &amp; Senior Fundraiser</h3>
                <p className="mt-3 leading-relaxed text-text-body">The Junior and Senior classes are raising money for college trips. Enjoy dinner before Wednesday church each week from 5:30–6:30 PM. A donation of $5 per meal is requested.</p>
              </article>
              <article className="rounded-2xl border border-cream-dark bg-white p-6 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-text-dark">Lunch Delivery Reminder</h3>
                <p className="mt-3 leading-relaxed text-text-body">If you order lunch delivery for your student, please make sure it arrives before your student’s lunch period begins.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
