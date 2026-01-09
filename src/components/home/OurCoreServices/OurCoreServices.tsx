import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/constants/services"; // Import from services.ts

export function OurCoreServices() {
  return (
    <section className="section-padding bg-[#EAF6FF]">
      <div className="container">

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-dark mb-12">
          Our Core Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                <div className="absolute bottom-0 left-0">
                  <div className="bg-primary w-20 h-20 rounded-tr-3xl flex items-center justify-center">
                    <Image
                      src={service.badge}
                      alt={`${service.title} icon`}
                      width={40}
                      height={40}
                      className="w-15 h-15"
                    />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-dark mb-3 flex items-center gap-2">
                  <span>{service.icon}</span>
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                <Link
                  href={service.link}
                  className="inline-block text-primary font-semibold hover:text-primary-600 transition-colors duration-200 uppercase text-sm tracking-wide"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}