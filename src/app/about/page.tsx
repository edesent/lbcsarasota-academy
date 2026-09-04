import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";

export const metadata: Metadata = {
  title: "About LBA",
  description:
    "Learn about Liberty Baptist Academy and review our special education, nondiscrimination, and Florida ethics policies.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About LBA | Liberty Baptist Academy",
    description:
      "Learn about Liberty Baptist Academy and review our special education, nondiscrimination, and Florida ethics policies.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="Liberty Baptist Academy"
          title="About LBA"
          subtitle="Biblical Education. Eternal Impact."
        />

        <section className="py-16 md:py-24 bg-warm-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                Our Purpose
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-dark leading-tight mb-5">
                Partnering With Christian Families
              </h2>
              <p className="text-lg text-text-body leading-relaxed">
                Liberty Baptist Academy exists to partner with Christian families in training the next generation to serve the Lord.
              </p>
            </div>

            <div className="space-y-8">
              <section className="rounded-3xl bg-cream border border-cream-dark p-7 md:p-10">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-dark mb-4">
                  Special Education Notice
                </h2>
                <p className="text-text-body leading-relaxed">
                  Liberty Baptist Academy does not provide special educational classes. Parents who enroll their students in a private school like Liberty Baptist Academy are not entitled to any or all of the special education and related services that their child would receive if enrolled in a public school under the Individuals with Disabilities Education Act (IDEA).
                </p>
              </section>

              <section className="rounded-3xl bg-white border border-cream-dark shadow-sm p-7 md:p-10">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-dark mb-4">
                  Non-Discriminatory Policy
                </h2>
                <p className="text-text-body leading-relaxed">
                  Liberty Baptist Academy of Sarasota, Florida admits students of any race, color, national and ethnic origin to all the rights, privileges, programs and activities generally accorded or made available to students at the school. It does not discriminate on the basis of race, color, national and ethnic origin in administration of its educational policies, admissions policies, scholarship and loan programs, and athletic and other school-administered programs.
                </p>
              </section>

              <section className="rounded-3xl bg-brown-deep text-white p-7 md:p-10">
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                  Florida Ethics in Education Act
                </h2>
                <p className="text-white/80 leading-relaxed">
                  In accord with the Florida Ethics in Education Act all employees of Liberty Baptist Academy have a duty to report all suspected or actual cases of child abuse, abandonment, or neglect; have immunity from liability if they report such cases in good faith and have a duty to comply with child protective investigations. There is a legal penalty for not reporting suspected or alleged child abuse or alleged misconduct by instructional personnel or school administrators. The Florida Abuse Hotline is{" "}
                  <a href="tel:18009622873" className="font-bold text-gold-light hover:text-gold underline underline-offset-4">
                    1.800.962.2873
                  </a>
                  . The LBA contact is the Church Office.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
