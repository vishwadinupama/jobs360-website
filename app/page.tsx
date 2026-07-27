import Hero from "@/components/Home/hero";
import About from "@/components/Home/About";
import Portfolio from "@/components/Home/Portfolio";
import Stats from "@/components/Home/Stats";
import Founder from "@/components/Home/FounderMessage";
import LatestNews from "@/components/Home/LatestNews";
import CTA from "@/components/Home/CTA";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Stats />
      <Founder />
      <LatestNews />
      <CTA />
      
    </>
  );
}