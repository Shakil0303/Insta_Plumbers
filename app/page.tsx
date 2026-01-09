import {
  HeroSection,
  WhyChooseUs,
  HowItWorks,
  OurCoreServices,
  CallNow,
  LocationsCoverage,
  OurExperience,
  Testimonials,
  Faq,
  Blog,
} from '@/components/home';


export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <HowItWorks />
      <OurCoreServices />
      <CallNow />
      <LocationsCoverage />
      <OurExperience />
      <Testimonials />
      <Faq />
      <Blog />
    </>
  );
}