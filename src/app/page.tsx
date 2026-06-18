import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import DubaiBusiness from "@/components/DubaiBusiness";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <DubaiBusiness />
        <Team />
        <Testimonials />
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}
