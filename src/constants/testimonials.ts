export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  location: string;
  image: string;
}

export interface Certification {
  name: string;
  logo: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'Was here in under 15 minutes to fix my leak at midnight!',
    name: 'Sarah, Shoreditch',
    location: 'CLIENT, USA',
    image: '/images/client1.png',
  },
  {
    id: 2,
    quote: 'I booked online and my boiler was repaired in an hour. Impressive response time!',
    name: 'Arnold Wilson',
    location: 'CLIENT, USA',
    image: '/images/client2.png',
  },
  {
    id: 3,
    quote: 'Professional service and fair pricing. Highly recommend!',
    name: 'Michael Brown',
    location: 'CLIENT, USA',
    image: '/images/client1.png',
  },
];

export const certifications: Certification[] = [
  { name: 'CHAS', logo: '/images/chas.png' },
  { name: 'Gas Safe', logo: '/images/cas-safe.png' },
  { name: 'Safe Contractor', logo: '/images/safe.png' },
  { name: 'NICEIC', logo: '/images/nic-eic.png' },
  { name: 'Gas Safe Register', logo: '/images/cas-safe.png' },
];