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
          eyebrow="Enrollment Interest"
          title="Join Our Waiting List"
          subtitle="Take the first step toward an education built around faith, personal responsibility, and continual progress."
          bgImage="/academy-back-to-school.jpg"
        />

        <section className="py-20 md:py-24 bg-cream">
          <div className="max-w-5xl mx-auto px-6">
            <div className="mb-10 rounded-lg border border-cream-dark bg-warm-white p-6 md:p-8">
              <p className="text-lg leading-relaxed text-text-body">
                Complete the form below to join our waiting list. This lets our school office know of your family&apos;s interest in Liberty Baptist Academy. We will follow up with you as enrollment opportunities become available and provide information about next steps.
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
