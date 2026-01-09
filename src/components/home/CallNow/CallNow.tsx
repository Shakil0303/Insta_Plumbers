import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function CallNow () {
  return (
    <section className="section-padding">
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-8">

        <div className="relative w-full h-[240px] md:h-[320px] order-1">
          <Image
            src="/images/map1.png"
            alt="Map showing nearby InstaPlumbers"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="order-2 bg-[var(--color-primary)] p-6 md:p-8 rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Call an InstaPlumber Now
          </h3>

          <p className="text-white/90 mt-3 max-w-md">
            We have local plumbers near you —- ready to assist 24/7, day or night.
          </p>

          <div className="mt-6">
            <Button
              variant="outline"
              className="bg-white text-[var(--color-dark)] hover:bg-dark/90"
            >
              Call Plumber Now
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
