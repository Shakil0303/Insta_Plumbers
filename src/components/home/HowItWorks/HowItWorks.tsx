import Image from "next/image";
import { STEPS } from "@/constants/states";

export function HowItWorks() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        <div className="hidden md:flex justify-center mb-6">
          <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold tracking-wide rounded-full border border-gray-300 text-gray-600">
            How It Works
          </span>
        </div>

        <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold text-center text-dark mb-4">
          We're like Uber — but for plumbers.
        </h2>
        <h2 className="hidden md:block text-2xl md:text-2xl lg:text-4xl font-bold text-center text-dark mb-4">
        Simple, fast, and reliable.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-2xl p-8 shadow-sm relative"
            >
              <div className="mb-6 flex justify-center">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={64}
                  height={64}
                  className="w-25 h-25"
                />
              </div>

              <h3 className="text-xl font-bold text-dark mb-3 text-center">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
