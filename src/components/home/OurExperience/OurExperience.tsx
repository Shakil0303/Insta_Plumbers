import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FEATURES } from "@/constants/features";

export function OurExperience(){
  return (
    <section className="section-padding">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center text-center lg:text-left">

        <div className="relative h-[300px] md:h-[420px] rounded-3xl overflow-hidden hidden lg:block">
          <Image
            src="/images/Our-experience.png"
            alt="Professional plumber at work"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div>
          <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold tracking-wide rounded-full border border-gray-300 text-gray-600 mx-auto">
            OUR EXPERIENCE
          </span>

          <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)]">
            Why Customers Love InstaPlumbers
          </h3>

          <p className="text-gray-600 mt-4 max-w-lg mx-auto lg:mx-0">
            We’re built around speed, transparency, and trust—here’s why
            thousands of Londoners choose us:
          </p>

          <div className="mt-8 space-y-6">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col sm:flex-row gap-4 items-center"
              >
                <div className="flex items-center justify-center w-15 h-15 rounded-xl bg-blue-100">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={58}
                    height={58}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-dark)] text-center sm:text-left">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1 text-center sm:text-left">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button className="px-8 bg-dark mx-auto">
              Book Your Plumber Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
