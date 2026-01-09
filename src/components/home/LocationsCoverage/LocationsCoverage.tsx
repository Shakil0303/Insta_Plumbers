import Image from "next/image";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

const AREAS = [
  "Camden",
  "Islington",
  "Westminster",
  "Haringey",
  "Barnet",
  "Enfield",
  "Hackney",
  "Hammersmith",
];

export function LocationsCoverage() {
  return (
    <section className="section-padding bg-[#EAF6FF]">
      <div className="container grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-start">

        <div className="relative w-full h-[280px] md:h-[380px] lg:h-[440px] rounded-2xl overflow-hidden">
          <Image
            src="/images/map2.png" 
            alt="London and Essex service coverage map"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-xl text-center md:text-left mx-auto md:mx-0">
          <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)]">
            Expanding Across London <br /> & Essex
          </h3>

          <p className="text-gray-600 mt-4 max-w-lg">
            We're growing fast—now serving all major boroughs across
            London and Essex with trusted, on-call plumbers ready to help 24/7.
          </p>

          <div className="mt-8 space-y-6">

            <div>
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-[var(--color-dark)]">
                  Central & North London
                </h4>
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                {AREAS.map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <span className="bg-[var(--color-primary)] rounded-md p-1">
                      <Check className="h-4 w-4 text-white" />
                    </span>
                    <span className="text-sm text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {["East London", "South London", "West London"].map((region) => (
              <div
                key={region}
                className="flex items-center justify-between border-t pt-4"
              >
                <h4 className="text-lg font-semibold text-[var(--color-dark)]">
                  {region}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

