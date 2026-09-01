import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";

export const metadata: Metadata = {
  title: "Hawks Athletics | Liberty Baptist Academy",
  description:
    "Learn about Liberty Baptist Academy Hawks athletics and view the current athletic schedule.",
  alternates: { canonical: "/athletics" },
  openGraph: {
    title: "Hawks Athletics | Liberty Baptist Academy",
    description:
      "Learn about Liberty Baptist Academy Hawks athletics and view the current athletic schedule.",
    url: "/athletics",
    type: "website",
    images: [
      {
        url: "/453f7826-5a0b-4226-91c5-9a7573ae868a.png",
        width: 1792,
        height: 896,
        alt: "Liberty Baptist Academy Hawks Athletics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hawks Athletics | Liberty Baptist Academy",
    description:
      "Learn about Liberty Baptist Academy Hawks athletics and view the current athletic schedule.",
    images: ["/453f7826-5a0b-4226-91c5-9a7573ae868a.png"],
  },
};

const schedule = [
  ["Aug. 28 (Fri.)", "East Bay", "2:00 PM", "Away"],
  ["Sept. 8 (Tues.)", "Sarasota Heat", "4:00 PM — Football only", "Home"],
  ["Sept. 18 (Fri.)", "Faith", "4:00 PM", "Home"],
  ["Sept. 25 (Fri.)", "East Bay", "4:00 PM", "Home"],
  ["Oct. 6 (Tues.)", "Sarasota Heat", "4:00 PM — Football only", "Away"],
  ["Oct. 16 (Fri.)", "Faith", "4:00 PM", "Away"],
  ["Oct. 23 (Fri.)", "East Bay", "4:00 PM", "Away"],
];

export default function AthleticsPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="Liberty Baptist Academy Hawks"
          title="Athletics"
          subtitle="Competition That Builds Character"
          bgImage="/academy-hawks-champions.jpg"
          actionLabel="Join Our Waiting List"
          actionHref="/apply"
        />

        <section className="py-16 md:py-24 bg-warm-white">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[.9fr_1.1fr] gap-12 items-center">
            <figure className="rounded-3xl overflow-hidden shadow-xl aspect-[16/11] bg-brown-deep">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/453f7826-5a0b-4226-91c5-9a7573ae868a.png"
                alt="Liberty Baptist Academy Hawks Athletics"
                className="w-full h-full object-cover"
              />
            </figure>
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">The Hawks</p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-dark leading-tight mb-5">
                Athletics With Purpose
              </h2>
              <p className="text-lg text-text-body leading-relaxed mb-5">
                Hawks athletics give students another arena in which to pursue excellence. Through competition, students learn teamwork, discipline, preparation, perseverance, and how to respond well to both victory and adversity.
              </p>
              <p className="text-text-body leading-relaxed">
                We want students who are willing to work hard, accept coaching, contribute to a team, and continually improve. Athletic achievement matters, but the habits formed through committed competition can serve students for a lifetime.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-cream border-y border-cream-dark">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl mb-9">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">2026 Season</p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-dark leading-tight mb-4">Hawks Athletic Schedule</h2>
              <p className="text-text-body leading-relaxed">
                Check the schedule below for current game dates, opponents, times, and locations.
              </p>
            </div>

            <div className="rounded-3xl bg-warm-white border border-cream-dark shadow-sm overflow-hidden">
              <div className="hidden md:grid grid-cols-[1.1fr_1.2fr_1.4fr_.7fr] gap-4 px-6 py-4 bg-brown-deep text-white text-sm font-bold uppercase tracking-wide">
                <div>Date</div><div>Opponent</div><div>Time</div><div>Location</div>
              </div>
              <div className="divide-y divide-cream-dark">
                {schedule.map(([date, opponent, time, location]) => (
                  <div key={`${date}-${opponent}`} className="grid md:grid-cols-[1.1fr_1.2fr_1.4fr_.7fr] gap-2 md:gap-4 px-6 py-5 text-sm md:text-base text-text-body">
                    <div><span className="md:hidden font-bold text-text-dark">Date: </span>{date}</div>
                    <div><span className="md:hidden font-bold text-text-dark">Opponent: </span>{opponent}</div>
                    <div><span className="md:hidden font-bold text-text-dark">Time: </span>{time}</div>
                    <div><span className="md:hidden font-bold text-text-dark">Location: </span>{location}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-5 text-sm text-text-body">
              <div className="rounded-2xl bg-warm-white border border-cream-dark p-6">
                <h3 className="font-serif text-xl font-bold text-text-dark mb-3">Game Locations</h3>
                <p><strong className="text-text-dark">Home games:</strong> YAC, 2810 17th St., Sarasota</p>
                <p><strong className="text-text-dark">East Bay:</strong> 12830 US 301 S., Riverview</p>
                <p><strong className="text-text-dark">Sarasota Heat:</strong> Twin Lakes Park</p>
                <p><strong className="text-text-dark">Faith:</strong> Location TBD</p>
              </div>
              <div className="rounded-2xl bg-brown-deep text-white p-6">
                <h3 className="font-serif text-xl font-bold mb-3">Interested in Liberty?</h3>
                <p className="text-white/80 leading-relaxed mb-5">
                  Join our waiting list to learn more about academics, athletics, scholarships, and future enrollment opportunities.
                </p>
                <Link href="/apply" className="inline-block bg-gold text-brown-deep font-bold text-sm uppercase tracking-wide px-7 py-3 rounded-full hover:bg-gold-light transition-all">
                  Join Our Waiting List
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
