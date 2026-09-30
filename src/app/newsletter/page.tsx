import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "October 2026 Newsletter",
  description: "October 2026 news, reminders, important dates, athletics, and announcements for Liberty Baptist Academy families.",
  alternates: { canonical: "/newsletter" },
  openGraph: {
    title: "October 2026 Newsletter | Liberty Baptist Academy",
    description: "News, reminders, important dates, athletics, and announcements for Liberty Baptist Academy families.",
    url: "/newsletter",
    type: "article",
    images: [{ url: "/0d1fdd72-4cdb-41ea-a718-8fc757e61036.png", width: 1792, height: 896, alt: "Liberty Baptist Academy Hawks — Latest News" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "October 2026 Newsletter | Liberty Baptist Academy",
    description: "News, reminders, important dates, athletics, and announcements for Liberty Baptist Academy families.",
    images: ["/0d1fdd72-4cdb-41ea-a718-8fc757e61036.png"],
  },
};

const importantDates = [
  { day: "2", title: "Half Day — 8th–12th Grade", detail: "No school for K–7th grade." },
  { day: "9", title: "Elementary Field Trip Deadline", detail: "Permission slip and money are due." },
  { day: "14", title: "End of First Quarter", detail: "Please make sure your student is on target. Any late pick-up or demerit fees are due. Report cards will not be received until fees are paid." },
  { day: "15", title: "Pensacola Christian College Chapel", detail: "Pensacola Christian College will be in chapel at 11:30 AM. All are welcome." },
  { day: "16", title: "Half Day", detail: "Half day for all non-athlete K–12th grade students. Athletes travel to Spring Hill at 1:00 PM." },
  { day: "20", title: "Zoo Tampa Field Trip", detail: "Bus leaves at 8:30 AM. Students should be at school by 8:20 AM." },
  { day: "25", title: "Trunk or Treat", detail: "4:30–6:30 PM at Liberty Baptist Church. Come out with the family for some sweet fun fellowship!" },
];

const athletics = [
  { date: "Oct. 6", detail: "Football only · 4:00 PM · Twin Lakes Park" },
  { date: "Oct. 16", detail: "Faith · Away · 4:00 PM · Football/Volleyball" },
  { date: "Oct. 23", detail: "East Bay · Away · 4:00 PM · Football/Volleyball" },
];

const reminders = [
  "Parents, please make sure you are checking your student’s folders. Please help them with homework and studying when needed. We want your child to be successful and reach their fullest potential. Progress reports went home last week.",
  "If your student is absent, you MUST text or call the school or teacher to let them know by 9:00 AM. It should not be the teacher’s responsibility to find out where your student is. Thank you for your attention to this matter.",
];

export default function NewsletterPage() {
  return (
    <>
      <Navbar />
      <main className="bg-warm-white">
        <header className="bg-brown-deep pt-32 pb-16 md:pt-40 md:pb-20 text-white relative overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gold" />
          <div className="max-w-6xl mx-auto px-6 relative">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-gold-light mb-4">Liberty Baptist Academy News</p>
            <div className="grid lg:grid-cols-[1fr_auto] gap-6 lg:items-end">
              <div>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">October 2026 Newsletter</h1>
                <p className="mt-5 text-lg text-white/75 max-w-2xl leading-relaxed">News, reminders, important dates, athletics, and school updates for LBA families.</p>
              </div>
              <div className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold tracking-wide text-gold-light">Let&apos;s Go Hawks!</div>
            </div>
          </div>
        </header>

        <figure className="max-w-6xl mx-auto px-6 pt-10 md:pt-14">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/0d1fdd72-4cdb-41ea-a718-8fc757e61036.png" alt="Liberty Baptist Academy Hawks — Latest News" className="w-full rounded-2xl border border-cream-dark shadow-xl" />
        </figure>

        <section className="py-14 md:py-20">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
            <div className="space-y-10">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">Athletics</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark mb-7">October Games</h2>
                <div className="space-y-4">
                  {athletics.map((game) => (
                    <article key={game.date} className="rounded-2xl border border-cream-dark bg-white p-6 shadow-sm">
                      <p className="font-bold text-gold-dark">{game.date}</p>
                      <p className="mt-2 leading-relaxed text-text-body">{game.detail}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">Parent Reminders</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark mb-7">Stay Connected</h2>
                <div className="space-y-4">
                  {reminders.map((reminder, index) => (
                    <article key={index} className="rounded-2xl border border-cream-dark bg-white p-6 shadow-sm">
                      <p className="leading-relaxed text-text-body">{reminder}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">Mark Your Calendar</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark mb-7">Important Dates</h2>
              <div className="space-y-4">
                {importantDates.map((item) => (
                  <article key={item.day} className="grid grid-cols-[72px_1fr] sm:grid-cols-[84px_1fr] gap-5 rounded-2xl border border-cream-dark bg-cream p-5 md:p-6">
                    <div className="overflow-hidden rounded-xl border border-brown-deep/15 bg-white text-center self-start shadow-sm">
                      <div className="bg-brown-deep py-1.5 text-xs font-bold tracking-wider text-white">OCT</div>
                      <div className="py-2 font-serif text-3xl font-bold text-brown-deep">{item.day}</div>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-text-dark">{item.title}</h3>
                      <p className="mt-2 leading-relaxed text-text-body">{item.detail}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gold/15 border-y border-gold/30 py-12">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
            <article className="rounded-2xl bg-white border border-gold/30 p-7 md:p-9 shadow-sm">
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-gold-dark mb-2">Zoo Tampa Trip · October 20</p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-dark">Field Trip Details</h2>
              <p className="mt-4 leading-relaxed text-text-body">Bus leaves at 8:30 AM. Be at school by 8:20 AM. We have a scheduled check-in time with the zoo and must be on time. Pack lunches in a large ziplock and make sure everything can be thrown away. Chaperones need to drive themselves. Parking is $7 through Tampa’s ParkMobile system.</p>
            </article>
            <article className="rounded-2xl bg-white border border-gold/30 p-7 md:p-9 shadow-sm">
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-gold-dark mb-2">Junior &amp; Senior Fundraiser</p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-dark">Wednesday Night Dinner</h2>
              <p className="mt-4 leading-relaxed text-text-body">Juniors and Seniors are serving dinner every Wednesday night from 5:30–6:30 PM. They ask for a $5 donation per meal. If you would like to donate toward the fundraiser, that is welcome too. Thank you in advance!</p>
            </article>
          </div>
        </section>

        <section className="bg-brown-deep py-14 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="font-serif text-2xl md:text-3xl leading-relaxed">One Team. One Mission. One Purpose.</p>
            <p className="mt-4 text-sm font-bold tracking-[0.18em] uppercase text-gold-light">Liberty Baptist Academy</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
