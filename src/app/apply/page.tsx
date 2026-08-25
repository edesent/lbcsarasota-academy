import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import ApplicationForm from "./ApplicationForm";

export const metadata: Metadata = {
  title: "Join Our Waiting List",
  description:
    "Join the Liberty Baptist Academy waiting list and let our school office know of your family's interest in future enrollment.",
  alternates: { canonical: "/apply" },
};

export default function ApplyPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero
          eyebrow="Enrollment"
          title="School Application"
          subtitle="Start the Liberty Baptist Academy application process online."
          bgImage="/academy-back-to-school.jpg"
        />

        <section className="py-20 md:py-24 bg-cream">
          <div className="max-w-5xl mx-auto px-6">
            <div className="mb-10 rounded-lg border border-cream-dark bg-warm-white p-6 md:p-8">
              <p className="text-lg leading-relaxed text-text-body">
                Complete the form below and the school office will follow up about records,
                registration, tuition, and the family interview. The registration fee and
                required records may be handled directly with the office.
              </p>
            </div>
            <ApplicationForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
