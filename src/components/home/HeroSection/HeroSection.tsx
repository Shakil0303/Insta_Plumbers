import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function HeroSection() {
  return (
   <section className="relative overflow-hidden">
  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px] md:min-h-[calc(100vh-5rem)]">

    <div className="bg-white flex items-center">
      <Container className="py-8 md:py-24 text-center lg:text-left">

        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-dark">
          🚿 Plumbing Emergency?
          <br />
          <span className="text-primary">Get Help in Minutes.</span>
        </h1>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto lg:mx-0">
          Book a trusted, local plumber near you—available 24/7 with instant
          response and up-front pricing. No delays. No surprises.
        </p>

        <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
          <Button variant="outline">Get Instant Help</Button>
          <Button>Book a Plumber Now</Button>
        </div>

      </Container>
    </div>

    <div className="relative hidden lg:block">
      <Image
        src="/images/hero.png"
        alt="Professional plumber"
        fill
        priority
        className="object-cover"
      />
    </div>

  </div>
</section>

  );
}
