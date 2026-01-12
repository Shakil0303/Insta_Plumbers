<<<<<<< HEAD
import Link from "next/link";
import { NAV_LINKS, LEGAL_LINKS, ADDRESS } from "@/constants/navigation";

export const FooterLinks = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">

      <div>
        <h3 className="text-white font-semibold text-base mb-4">Useful Links</h3>
        <ul className="space-y-3">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors block"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-white font-semibold text-base mb-4">Legal Links</h3>
        <ul className="space-y-3">
          {LEGAL_LINKS.map((link) => (
            <li key={link.href + link.label}>
              <Link
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors block"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-white font-semibold text-base mb-4">Contact</h3>
        <address className="text-sm text-gray-400 not-italic leading-relaxed">
          {ADDRESS}
        </address>
      </div>
    </div>
  );
};
=======
import Link from "next/link";
import { NAV_LINKS, LEGAL_LINKS, ADDRESS } from "@/constants/navigation";

export const FooterLinks = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">

      <div>
        <h3 className="text-white font-semibold text-base mb-4">Useful Links</h3>
        <ul className="space-y-3">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors block"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-white font-semibold text-base mb-4">Legal Links</h3>
        <ul className="space-y-3">
          {LEGAL_LINKS.map((link) => (
            <li key={link.href + link.label}>
              <Link
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors block"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-white font-semibold text-base mb-4">Contact</h3>
        <address className="text-sm text-gray-400 not-italic leading-relaxed">
          {ADDRESS}
        </address>
      </div>
    </div>
  );
};
>>>>>>> 753d7d142a63a3ef70832a6cd701b32e8a7607ce
