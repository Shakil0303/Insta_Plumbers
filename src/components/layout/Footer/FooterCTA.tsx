<<<<<<< HEAD
import Image from "next/image";

export const FooterCTA = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
        <div>
          <h3 className="text-white text-xl md:text-2xl font-semibold">
            Need a Plumber Right Now?
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            We’ve got professionals on-call 24/7 across London. Get fast,
            affordable plumbing help today.
          </p>
        </div>

        {/* Location CTA */}
        <div className="flex justify-center md:justify-start">
          <a
            href="/find-plumber"
            className="
              group inline-flex items-center gap-2
              px-6 py-3 rounded-full
              border-2 border-white
              text-white
              transition-all duration-300
              hover:bg-white hover:text-dark-900
              active:bg-white active:text-dark-900
              focus-visible:bg-white focus-visible:text-dark-900
              focus-visible:outline-none
            "
          >
            <Image
              src="/images/location.svg"
              alt=""
              width={18}
              height={18}
              className="
                transition-all duration-300
                group-hover:invert
                group-active:invert
                group-focus-visible:invert
              "
            />
            Find a Plumber Near Me
          </a>
        </div>

        {/* Phone CTA */}
        <div className="flex justify-center md:justify-end">
          <a
            href="tel:08001234567"
            className="
              group inline-flex items-center gap-2
              px-6 py-3 rounded-full
              bg-white text-dark-900 font-semibold
              transition-all duration-300
              hover:bg-gray-100
            "
          >
            <Image
              src="/images/call.svg"
              alt=""
              width={18}
              height={18}
            />
            0800-123-4567
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 mt-8" />
    </div>
  );
};
=======
import Image from "next/image";

export const FooterCTA = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
        
        <div>
          <h3 className="text-white text-xl md:text-2xl font-semibold">
            Need a Plumber Right Now?
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            We’ve got professionals on-call 24/7 across London. Get fast, affordable plumbing help today.
          </p>
        </div>

        <div className="flex justify-center md:justify-start">
          <a
            href="/find-plumber"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-dark-900 transition"
          >
            <Image src="/images/location.svg" alt="" width={18} height={18} />
            Find a Plumber Near Me
          </a>
        </div>

        <div className="flex justify-center md:justify-end">
          <a
            href="tel:08001234567"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-dark-900 font-semibold"
          >
            <Image src="/images/call.svg" alt="" width={18} height={18} />
            0800-123-4567
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 mt-8" />
    </div>
  );
};
>>>>>>> 753d7d142a63a3ef70832a6cd701b32e8a7607ce
