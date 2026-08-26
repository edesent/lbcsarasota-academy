import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";

export const metadata: Metadata = {
  title: "Liberty Baptist Academy",
  description:
    "Learn more about Liberty Baptist Academy in Sarasota, Florida - a distinctly Christian school ministry of Liberty Baptist Church with A.C.E. academics, Biblical instruction, Hawks athletics, and Step Up For Students scholarship participation.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Liberty Baptist Academy | Christian School in Sarasota",
    description:
      "A distinctly Christian school ministry of Liberty Baptist Church with A.C.E. academics, Biblical instruction, Hawks athletics, and Step Up For Students scholarship participation.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/img-1357.jpeg",
        width: 1536,
        height: 1152,
        alt: "Liberty Baptist Academy students gathered for the pledges",
      },
    ],
  },
};

const highlights = [
  {
    title: "Biblical Foundation",
    body: "The Bible is more than just a class in the schedule. Biblical truth and Christian character are woven throughout the school day as students are encouraged to know Christ, learn the Scriptures, grow in wisdom, and live out their faith.",
  },
  {
    title: "Individual Academic Progress",
    body: "Using the Accelerated Christian Education program, motivated students are empowered to progress while receiving guidance and accountability from caring faculty.",
  },
  {
    title: "A Close-Knit School Community",
    body: "Liberty Baptist Academy is intentionally personal. Students are known by name, encouraged by teachers, and given opportunities to build friendships, serve, compete, and grow together.",
  },
  {
    title: "Hawks Athletics",
    body: "Athletics give students opportunities outside of the classroom to develop discipline, teamwork, school spirit, and healthy competition.",
  },
  {
    title: "Step Up For Students",
    body: "Liberty Baptist Academy accepts Step Up For Students scholarship funding, helping make Christian education more accessible to qualifying Florida families.",
  },
  {
    title: "A Ministry of Liberty Baptist Church",
    body: "The academy is part of the ministry of Liberty Baptist Church and shares the church's commitment to faithful Bible teaching, Christian character, and investing in the next generation.",
    href: "https://lbcsarasota.com",
  },
];

const photoMoments = [
  {
    src: "/academy-student-assembly.jpg",
    alt: "Liberty Baptist Academy students gathered for a school assembly",
    label: "School Community",
  },
  {
    src: "/academy-hawks-champions.jpg",
    alt: "Liberty Baptist Academy Hawks players with trophies",
    label: "Hawks Athletics",
  },
  {
    src: "/academy-back-to-school.jpg",
    alt: "Welcome back to school display at Liberty Baptist Academy",
    label: "Back to School",
  },
];

const programStages = [
  {
    grades: "K-2",
    title: "Early Elementary",
    body: "A gentle start with phonics, numbers, Bible memory, classroom routines, and daily encouragement.",
  },
  {
    grades: "3-6",
    title: "Elementary",
    body: "Students strengthen reading, writing, arithmetic, study habits, and personal responsibility.",
  },
  {
    grades: "7-8",
    title: "Junior High",
    body: "A bridge toward independence with steady academics, character formation, and guided accountability.",
  },
  {
    grades: "9-12",
    title: "High School",
    body: "Older students prepare for graduation, service, work, and whatever next step God has for them.",
  },
];

const resourceCards = [
  {
    title: "A Strong School-Home Partnership",
    body: "Students make their greatest progress when school and home reinforce the same habits of responsibility, diligence, respect, and follow-through. We value parents who take an active interest in their child’s education and encourage steady progress at home.",
  },
  {
    title: "Tuition & Scholarships",
    body: "Liberty Baptist Academy participates in Step Up For Students, helping qualifying Florida families make a distinctly Christian education more accessible.",
  },
  {
    title: "Clear Expectations",
    body: "A purposeful learning environment depends on students, parents, and educators understanding what is expected. Our school policies and communication are designed to support accountability, consistency, and academic progress.",
  },
];

const facultyPlaceholders = [
  ["Administrator Name", "Administrator"],
  ["Teacher Name", "Elementary Faculty"],
  ["Teacher Name", "Secondary Faculty"],
  ["Coach Name", "Athletics"],
];

const testimonials = [
  {
    quote:
      "Our daughter has responded so well to the curriculum. Every day, she sets her own goals and works diligently to complete them. She finishes the day with a great sense of personal accomplishment. We believe that she is learning to be a self-starter, which we believe will take her far in life!",
    name: "LBA Parent",
  },
  {
    quote:
      "This space can hold a student or graduate quote about academics, friendships, and spiritual growth.",
    name: "Student Testimonial",
  },
  {
    quote:
      "This space can hold a church-family quote about the value of Christian education in Sarasota.",
    name: "Church Family Testimonial",
  },
];

export default function AcademyPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="Christian Education"
          title="Liberty Baptist Academy"
          subtitle="Where Faith and Learning Grow Together"
          bgImage="/img-1357.jpeg"
          actionLabel="Join Our Waiting List"
          actionHref="/apply"
        />

        <section id="academics" className="py-20 md:py-24 bg-warm-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-10 lg:gap-14 items-center">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                  Purposeful Academics
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark mb-5">
                  An Individualized Approach to Achievement
                </h2>
                <p className="text-text-body leading-relaxed mb-5">
                  At Liberty Baptist Academy, our individualized approach to education will give your student the opportunity and responsibility to keep moving forward!
                </p>
                <p className="text-text-body leading-relaxed">
                  Using Accelerated Christian Education (A.C.E.) for most grades, students develop habits that extend far beyond academics including initiative, self-discipline, goal-setting, personal responsibility, and the satisfaction of genuine achievement. We believe that these are foundational skills which are necessary for success in life!
                </p>
              </div>

              <figure className="rounded-3xl overflow-hidden shadow-xl aspect-[16/10] bg-cream">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/2026-05-22-09-15-00.jpeg"
                  alt="Students at Liberty Baptist Academy"
                  className="w-full h-full object-cover"
                />
              </figure>
            </div>
          </div>
        </section>

        <section className="bg-gold py-14 md:py-16">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[.9fr_1fr] gap-10 items-center">
            <figure className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3] bg-cream">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img-0969.jpeg"
                alt="A Beka Kindergarten at Liberty Baptist Academy"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="text-center lg:text-left">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-brown-deep/70 mb-3">Coming 2027–2028</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brown-deep mb-5">
                Introducing A Beka Kindergarten 2027-2028
              </h2>
              <p className="text-lg text-brown-deep/85 leading-relaxed mb-4">
                This Kindergarten program will prepare your student for elementary success and a lifelong love of learning!
              </p>
              <p className="text-brown-deep/85 leading-relaxed mb-8">
                Your student will develop hand-eye coordination by learning to write letters, words, and sentences; will learn phonics and math; and will develop a biblical worldview through daily Bible lessons about Genesis and the Life of Christ.
              </p>
              <Link
                href="/apply"
                className="inline-block bg-brown-deep text-white font-bold text-sm tracking-wide uppercase px-9 py-4 rounded-full hover:-translate-y-0.5 transition-all shadow-lg"
              >
                Join Our Waiting List
              </Link>
            </div>
          </div>
        </section>

        <section id="electives" className="py-20 md:py-24 bg-brown-deep text-white">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.05fr_.95fr] gap-12 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-light mb-3">Beyond the Core</p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-5">Developing Well-Rounded Students</h2>
              <p className="text-white/80 leading-relaxed mb-5">
                Elective classes like art, music, Bible, and PE are taught by committed members of <a href="https://lbcsarasota.com" className="font-semibold underline underline-offset-4 hover:text-gold-light transition-colors">Liberty Baptist Church</a> who bring their experience, enthusiasm, and Christian testimony into the classroom.
              </p>
              <p className="text-white/80 leading-relaxed">
                Academic achievement matters, but excellence reaches beyond a report card. These opportunities help students discover abilities, strengthen creativity, develop confidence, and learn to use their talents with discipline and purpose.
              </p>
            </div>
            <figure className="rounded-3xl overflow-hidden shadow-xl aspect-[16/11] bg-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/2026-08-15-07-07-00.jpeg" alt="Liberty Baptist Academy students participating in elective classes" className="w-full h-full object-cover" />
            </figure>
          </div>
        </section>

        <section id="chapel" className="py-20 md:py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-12 items-center">
              <figure className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-[4/3] bg-brown-deep">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/2026-08-15-07-07-11.jpeg" alt="Liberty Baptist Academy students in weekly chapel" className="w-full h-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brown-deep/90 to-transparent px-6 pb-6 pt-20">
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-light">Weekly Chapel</p>
                </div>
              </figure>
              <div className="lg:pl-4">
                <div className="w-14 h-1 bg-gold mb-5 rounded-full" />
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-dark leading-tight mb-5">Excellence With an Eternal Purpose</h2>
                <p className="text-text-body leading-relaxed mb-5">
                  Weekly chapel services seek to strengthen students&apos; faith and devotion to Jesus Christ through Biblical preaching, worship, and a regular call to apply God&apos;s Word to everyday life.
                </p>
                <p className="text-text-body leading-relaxed">
                  Our goal is not merely to produce accomplished students, but young people whose achievement is anchored in character, conviction, humility, and a desire to honor Christ with the abilities God has given them.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="athletics" className="py-16 md:py-24 bg-warm-white border-y border-cream-dark overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
            <figure className="lg:order-2 rounded-2xl overflow-hidden shadow-xl aspect-[16/11] bg-brown-deep">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/academy-hawks-champions.jpg"
                alt="Liberty Baptist Academy Hawks athletes with trophies"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="lg:order-1">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                Athletics
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-dark leading-tight mb-5">
                Competition That Builds Character
              </h2>
              <p className="text-lg text-text-body leading-relaxed mb-5">
                Hawks athletics give students another arena in which to pursue excellence. Through competition, students learn teamwork, discipline, preparation, perseverance, and how to respond well to both victory and adversity.
              </p>
              <p className="text-text-body leading-relaxed mb-6">
                We want students who are willing to work hard, accept coaching, contribute to a team, and continually improve. Athletic achievement is valuable, but the habits developed through committed competition can serve students for a lifetime.
              </p>
              <div className="grid sm:grid-cols-3 gap-3 mb-8">
                {["Teamwork", "Discipline", "School Spirit"].map((item) => (
                  <div key={item} className="border-l-4 border-gold bg-warm-white px-4 py-3 text-sm font-bold text-text-dark">
                    {item}
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-cream-dark bg-warm-white p-6 md:p-7 shadow-sm">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-2">2026 Season</p>
                <h3 className="font-serif text-2xl font-bold text-text-dark mb-5">Hawks Schedule</h3>
                <div className="overflow-x-auto max-w-full">
                  <table className="w-full table-fixed md:table-auto text-left text-xs sm:text-sm text-text-body">
                    <thead>
                      <tr className="border-b-2 border-gold/50 text-text-dark">
                        <th className="py-2 pr-4">Date</th>
                        <th className="py-2 pr-4">Opponent</th>
                        <th className="py-2 pr-4">Time</th>
                        <th className="py-2">Location</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-cream-dark">
                      <tr><td className="py-2 pr-4">Aug. 28 (Fri.)</td><td className="py-2 pr-4">East Bay</td><td className="py-2 pr-4">2:00 PM</td><td className="py-2">Away</td></tr>
                      <tr><td className="py-2 pr-4">Sept. 8 (Tues.)</td><td className="py-2 pr-4">Sarasota Heat</td><td className="py-2 pr-4">4:00 PM — Football only</td><td className="py-2">Home</td></tr>
                      <tr><td className="py-2 pr-4">Sept. 18 (Fri.)</td><td className="py-2 pr-4">Faith</td><td className="py-2 pr-4">4:00 PM</td><td className="py-2">Home</td></tr>
                      <tr><td className="py-2 pr-4">Sept. 25 (Fri.)</td><td className="py-2 pr-4">East Bay</td><td className="py-2 pr-4">4:00 PM</td><td className="py-2">Home</td></tr>
                      <tr><td className="py-2 pr-4">Oct. 6 (Tues.)</td><td className="py-2 pr-4">Sarasota Heat</td><td className="py-2 pr-4">4:00 PM — Football only</td><td className="py-2">Away</td></tr>
                      <tr><td className="py-2 pr-4">Oct. 16 (Fri.)</td><td className="py-2 pr-4">Faith</td><td className="py-2 pr-4">4:00 PM</td><td className="py-2">Away</td></tr>
                      <tr><td className="py-2 pr-4">Oct. 23 (Fri.)</td><td className="py-2 pr-4">East Bay</td><td className="py-2 pr-4">4:00 PM</td><td className="py-2">Away</td></tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-5 border-t border-cream-dark pt-4 text-sm text-text-body leading-relaxed">
                  <p><strong className="text-text-dark">Home games:</strong> YAC, 2810 17th St., Sarasota</p>
                  <p><strong className="text-text-dark">East Bay:</strong> 12830 US 301 S., Riverview</p>
                  <p><strong className="text-text-dark">Sarasota Heat:</strong> Twin Lakes Park</p>
                  <p><strong className="text-text-dark">Faith:</strong> Location TBD</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="expectations" className="py-20 md:py-24 bg-brown-deep text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-light mb-3">
                What Families Can Expect
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white">
                A School Built Around Growth
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((item) => (
                <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[.07] p-7 md:p-8 shadow-sm">
                  <h3 className="font-serif text-xl font-semibold text-white mb-3">
                    {"href" in item ? (
                      <a href={item.href} className="hover:text-gold-light transition-colors underline-offset-4 hover:underline">{item.title}</a>
                    ) : item.title}
                  </h3>
                  <p className="text-white/72 leading-relaxed">{item.body}</p>
                  {"href" in item && (
                    <a href={item.href} className="inline-block mt-4 text-sm font-bold text-gold-light hover:underline underline-offset-4">Visit Liberty Baptist Church →</a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="parents" className="py-20 md:py-24 bg-warm-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                Parents as Partners
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-dark leading-tight mb-5">
                Great education is a partnership.
              </h2>
              <p className="text-lg text-text-body leading-relaxed">
                We believe students thrive when parents, teachers, and students are working toward the same goal. Liberty seeks families who value communication, accountability, and active participation in their child&apos;s growth.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {resourceCards.map((card) => (
                <article key={card.title} className="rounded-2xl border border-cream-dark bg-cream p-7 shadow-sm">
                  <h3 className="font-serif text-xl font-bold text-text-dark mb-3">
                    {card.title}
                  </h3>
                  <p className="text-text-body leading-relaxed">{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faculty" className="py-20 md:py-24 bg-gold/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                  Our People
                </p>
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-dark leading-tight mb-5">
                  Teachers who know your child by name.
                </h2>
                <p className="text-text-body leading-relaxed">
                  Replace these sample profiles with real staff photos, names, roles,
                  and brief bios when you are ready.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {facultyPlaceholders.map(([name, role], index) => (
                  <article key={`${role}-${index}`} className="rounded-2xl border border-cream-dark bg-warm-white p-6 shadow-sm">
                    <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-brown-deep text-gold-light">
                      <span className="font-serif text-3xl font-bold">{index + 1}</span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-text-dark">{name}</h3>
                    <p className="mt-1 text-sm font-bold uppercase tracking-[0.16em] text-gold-dark">
                      {role}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="stories" className="py-20 md:py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                Family Stories
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-dark">
                What Parents Are Saying
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((item) => (
                <figure key={item.name} className="rounded-2xl border border-cream-dark bg-cream p-7 shadow-sm">
                  <blockquote className="font-serif text-xl italic leading-relaxed text-text-dark">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-gold-dark">
                    {item.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="life" className="py-20 md:py-24 bg-warm-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                Life at LBA
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-dark leading-tight">
                Real school days, real students, real community.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {photoMoments.map((photo) => (
                <figure
                  key={photo.src}
                  className="group relative min-h-72 md:min-h-96 overflow-hidden rounded-2xl bg-brown-deep shadow-sm"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brown-deep/90 to-transparent px-5 pb-5 pt-16">
                    <p className="text-sm font-bold tracking-[0.16em] uppercase text-white">
                      {photo.label}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="admissions" className="py-20 bg-brown-deep">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-gold-light mb-3">
              Learn More
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-5">
              Ready to challenge your student to go further?
            </h2>
            <p className="text-white/75 leading-relaxed max-w-2xl mx-auto mb-8">
              Join our waiting list to learn more about Liberty Baptist Academy, our individualized academic approach, Christian environment, scholarships, and future enrollment opportunities.
            </p>
            <Link
              href="/apply"
              className="inline-block bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full hover:bg-gold-light hover:-translate-y-0.5 transition-all"
            >
              Join Our Waiting List
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
