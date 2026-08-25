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
    body: "The Bible is more than one class in the schedule. Biblical truth and Christian character are woven throughout the school day as students are encouraged to know Christ, grow in wisdom, and live out their faith.",
  },
  {
    title: "Individual Academic Progress",
    body: "Using the Accelerated Christian Education program, students are able to work at an appropriate pace while receiving guidance and accountability from caring faculty.",
  },
  {
    title: "A Close-Knit School Community",
    body: "Liberty Baptist Academy is intentionally personal. Students are known by name, encouraged by teachers, and given opportunities to build friendships, serve, compete, and grow together.",
  },
  {
    title: "Hawks Athletics",
    body: "Athletics give students opportunities to develop discipline, teamwork, school spirit, and healthy competition as part of the LBA Hawks program.",
  },
  {
    title: "Step Up For Students",
    body: "Liberty Baptist Academy accepts Step Up For Students scholarship funding, helping make Christian education more accessible to qualifying Florida families.",
  },
  {
    title: "A Ministry of Liberty Baptist Church",
    body: "The academy is part of the ministry of Liberty Baptist Church and shares the church's commitment to faithful Bible teaching, Christian character, and investing in the next generation.",
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
    title: "School Calendar",
    body: "Add the current school-year calendar, half days, holidays, testing dates, programs, and special events.",
  },
  {
    title: "Tuition & Scholarships",
    body: "Add registration fees, tuition schedule, Step Up For Students notes, and payment agreement details.",
  },
  {
    title: "Handbook & Forms",
    body: "Add the parent-student handbook, medical consent forms, pickup authorization, and records checklist.",
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
      "This space can hold a short parent quote about why their family chose Liberty Baptist Academy.",
    name: "Parent Testimonial",
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
          subtitle="A distinctly Christian education where students are known, challenged, and encouraged to grow academically and spiritually."
          bgImage="/img-1357.jpeg"
          actionLabel="Join Our Waiting List"
          actionHref="/apply"
        />

        <section id="academics" className="py-20 md:py-24 bg-warm-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-10 lg:gap-14 items-center">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                  Education With Purpose
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark mb-5">
                  More Than a School Day
                </h2>
                <p className="text-lg text-text-body leading-relaxed mb-5">
                  Liberty Baptist Academy serves families who want strong academics in an environment where Biblical truth, Christian character, and personal responsibility matter.
                </p>
                <p className="text-text-body leading-relaxed">
                  Our goal is to help students make meaningful academic progress while learning to think Biblically, work diligently, develop strong character, and become prepared for the opportunities God places before them.
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

        <section id="programs" className="py-20 md:py-24 bg-brown-deep text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-light mb-3">
                  Grade Levels
                </p>
                <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-5">
                  One school, every stage of growth.
                </h2>
                <p className="text-white/72 leading-relaxed">
                  Use these starter blocks to describe how Liberty supports students
                  from their first school years through graduation.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {programStages.map((stage) => (
                  <article key={stage.title} className="border border-white/10 bg-white/[.07] p-6">
                    <p className="text-xs font-bold tracking-[0.18em] uppercase text-gold-light mb-3">
                      {stage.grades}
                    </p>
                    <h3 className="font-serif text-2xl font-bold mb-3">{stage.title}</h3>
                    <p className="text-white/72 leading-relaxed">{stage.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="expectations" className="py-20 md:py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                What Families Can Expect
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-dark">
                A School Built Around Growth
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-cream-dark bg-warm-white p-7 md:p-8 shadow-sm"
                >
                  <h3 className="font-serif text-xl font-semibold text-text-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-body leading-relaxed">{item.body}</p>
                </article>
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

        <section id="athletics" className="py-20 md:py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
            <figure className="rounded-2xl overflow-hidden shadow-xl aspect-[16/11] bg-brown-deep">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/academy-hawks-champions.jpg"
                alt="Liberty Baptist Academy Hawks athletes with trophies"
                className="w-full h-full object-cover"
              />
            </figure>
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                Athletics
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-dark leading-tight mb-5">
                Hawks athletics build more than a scoreboard.
              </h2>
              <p className="text-lg text-text-body leading-relaxed mb-6">
                Add season details, coach names, eligibility notes, photos, and recent
                accomplishments here. This section is ready for basketball, volleyball,
                flag football, and any other LBA Hawks opportunities.
              </p>
              <div className="grid sm:grid-cols-3 gap-3">
                {["Teamwork", "Discipline", "School Spirit"].map((item) => (
                  <div key={item} className="border-l-4 border-gold bg-warm-white px-4 py-3 text-sm font-bold text-text-dark">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="parents" className="py-20 md:py-24 bg-warm-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                Parents
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-dark leading-tight">
                A place for practical family resources.
              </h2>
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

        <section id="faculty" className="py-20 md:py-24 bg-cream">
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

        <section id="stories" className="py-20 md:py-24 bg-warm-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                Family Stories
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-dark">
                What families can say here.
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

        <section id="visit" className="py-20 md:py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                Visit
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-dark leading-tight mb-5">
                Come see Liberty Baptist Academy for yourself.
              </h2>
              <p className="text-lg text-text-body leading-relaxed mb-8">
                Use this section for tour scheduling, office hours, shadow-day details,
                open house announcements, and what parents should bring to a visit.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+19413718239"
                  className="inline-block text-center bg-brown-light text-white font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:bg-brown transition-all"
                >
                  Call to Schedule
                </a>
                <Link
                  href="/apply"
                  className="inline-block text-center border-2 border-brown-light/40 text-brown-light font-semibold text-sm tracking-wide uppercase px-8 py-3.5 rounded-full hover:border-brown-light transition-all"
                >
                  Join Our Waiting List
                </Link>
              </div>
            </div>
            <figure className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-brown-deep">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/academy-back-to-school.jpg"
                alt="Welcome back to school display at Liberty Baptist Academy"
                className="w-full h-full object-cover"
              />
            </figure>
          </div>
        </section>

        <section id="admissions" className="py-20 bg-brown-deep">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-gold-light mb-3">
              Learn More
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-5">
              Interested in Liberty Baptist Academy?
            </h2>
            <p className="text-white/75 leading-relaxed max-w-2xl mx-auto mb-8">
              We would be glad to answer your questions about the academy, scholarships, academics, and school life.
            </p>
            <Link
              href="/apply"
              className="inline-block bg-gold text-brown-deep font-semibold text-sm tracking-wide uppercase px-9 py-3.5 rounded-full hover:bg-gold-light hover:-translate-y-0.5 transition-all"
            >
              Apply Online
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
