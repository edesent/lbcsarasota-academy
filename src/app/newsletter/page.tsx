import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "September 2026 Newsletter",
  description:
    "September 2026 news, reminders, important dates, and announcements for Liberty Baptist Academy families.",
  alternates: { canonical: "/newsletter" },
  openGraph: {
    title: "September 2026 Newsletter | Liberty Baptist Academy",
    description:
      "News, reminders, and important dates for Liberty Baptist Academy families.",
    url: "/newsletter",
    type: "article",
  },
};

const importantDates = [
  {
    day: "7",
    title: "No School — Labor Day",
    detail: "Liberty Baptist Academy will be closed in observance of Labor Day.",
  },
  {
    day: "8",
    title: "Football Game",
    detail: "Kickoff is at 4:00 PM. There will be no volleyball game.",
    note: "Youth Athletic Complex, 2810 17th Street, Sarasota",
  },
  {
    day: "11",
    title: "Patriot Day",
    detail:
      "Students may wear patriotic clothing as long as it is within LBA standards. We will gather around the flag and pray for our country at 8:20 AM.",
    note: "Parents are welcome to stay.",
  },
  {
    day: "13",
    title: "Anniversary Sunday & Friend Day",
    detail:
      "Liberty Baptist Church invites your family to Anniversary Sunday and Friend Day at 10:00 AM. Pastor Jackson will be honored for his service and retirement, followed by a Der Dutchman catered luncheon.",
    note: "All are invited.",
  },
];

const updates = [
  {
    title: "Junior & Senior Fundraiser",
    body:
      "The Junior and Senior classes are raising money for college trips. Enjoy dinner before Wednesday church each week from 5:30–6:30 PM. A donation of $5 per meal is requested.",
  },
  {
    title: "Lunch Delivery Reminder",
    body:
      "If you order lunch delivery for your student, please make sure it arrives before your student’s lunch period begins.",
  },
  {
    title: "School Website",
    body:
      "Our school website is up and running. Visit regularly for sports schedules and other helpful information.",
    href: "https://www.lbasarasota.com",
  },
];

export default function NewsletterPage() {
  return (
    <>
      <Navbar />
      <main className="bg-warm-white">
        <header className="bg-brown-deep pt-32 pb-16 md:pt-40 md:pb-20 text-white relative overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gold" />
          <div className="max-w-6xl mx-auto px-6 relative">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-gold-light mb-4">
              Liberty Baptist Academy News
            </p>
            <div className="grid lg:grid-cols-[1fr_auto] gap-6 lg:items-end">
              <div>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  September 2026 Newsletter
                </h1>
                <p className="mt-5 text-lg text-white/75 max-w-2xl leading-relaxed">
                  News, reminders, and important dates for LBA students and families.
                </p>
              </div>
              <div className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold tracking-wide text-gold-light">
                Let&apos;s Go Hawks!
              </div>
            </div>
          </div>
        </header>

        <section className="py-14 md:py-20">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                School Updates
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark mb-7">
                Latest News & Reminders
              </h2>
              <div className="space-y-5">
                {updates.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-cream-dark bg-white p-6 md:p-7 shadow-sm"
                  >
                    <h3 className="font-serif text-xl font-bold text-text-dark mb-3">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed text-text-body">{item.body}</p>
                    {item.href && (
                      <a
                        href={item.href}
                        className="inline-flex mt-4 text-sm font-bold text-brown-light underline underline-offset-4 hover:text-brown-deep"
                      >
                        Visit lbasarasota.com
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                Mark Your Calendar
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark mb-7">
                Important Dates
              </h2>
              <div className="space-y-4">
                {importantDates.map((item) => (
                  <article
                    key={item.day}
                    className="grid grid-cols-[72px_1fr] sm:grid-cols-[84px_1fr] gap-5 rounded-2xl border border-cream-dark bg-cream p-5 md:p-6"
                  >
                    <div className="overflow-hidden rounded-xl border border-brown-deep/15 bg-white text-center self-start shadow-sm">
                      <div className="bg-brown-deep py-1.5 text-xs font-bold tracking-wider text-white">
                        SEPT
                      </div>
                      <div className="py-2 font-serif text-3xl font-bold text-brown-deep">
                        {item.day}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-text-dark">
                        {item.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-text-body">{item.detail}</p>
                      {item.note && (
                        <p className="mt-3 text-sm font-bold text-gold-dark">{item.note}</p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gold/15 border-y border-gold/30 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-[1fr_auto_1fr] gap-7 items-center rounded-2xl bg-white border border-gold/30 p-7 md:p-9 shadow-sm">
              <div>
                <p className="text-xs font-bold tracking-[0.18em] uppercase text-gold-dark mb-2">
                  Calendar Change
                </p>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-dark">
                  Friday, October 2
                </h2>
              </div>
              <div className="hidden md:block w-px h-20 bg-cream-dark" />
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-brown-deep px-5 py-4 text-white">
                  <p className="text-sm font-bold uppercase tracking-wide text-gold-light">K–7th Grade</p>
                  <p className="mt-1 text-xl font-bold">No School</p>
                </div>
                <div className="rounded-xl bg-brown-light px-5 py-4 text-white">
                  <p className="text-sm font-bold uppercase tracking-wide text-white/80">8th–12th Grade</p>
                  <p className="mt-1 text-xl font-bold">Half Day</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brown-deep py-14 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="font-serif text-2xl md:text-3xl leading-relaxed">
              “Blessed is the nation whose God is the LORD; and the people whom he hath chosen for his own inheritance.”
            </p>
            <p className="mt-4 text-sm font-bold tracking-[0.18em] uppercase text-gold-light">
              Psalm 33:12 (KJV)
            </p>
            <p className="mt-8 text-white/60 font-bold tracking-wide">
              One Team. One Mission. One Purpose.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
