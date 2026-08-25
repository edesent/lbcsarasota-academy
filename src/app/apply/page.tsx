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
                Complete the form below to join our waiting list. Liberty Baptist Academy is building a culture of faith, initiative, responsibility, and academic progress. We will follow up as enrollment opportunities become available so your family can learn more about our expectations, educational approach, and next steps.
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
