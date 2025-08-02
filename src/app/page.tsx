import { Hero } from './components/hero';
import { OurServicesSection } from "./components/service";
import Components from "./components/companies";
import FAQ from "./components/faq";
import  ThankYouSection  from "./components/thankYouSection";
import TestimonialsCard from './components/testimonialsCard';


export default function Home() {
  return (
    <>
      
      <Hero />
      <OurServicesSection />
      <Components />
      <TestimonialsCard />
      <FAQ />
      <ThankYouSection />
    
    </>
  );
}
