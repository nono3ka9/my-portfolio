import Hero from "../components/sections/Hero";
import Portfolio from "../components/sections/Portfolio";
import Skills from "../components/sections/Skills";
import Certification from "../components/sections/Certification";
import About from "../components/sections/About";
import ContactButton from "../components/sections/ContactButton";

export default function Home() {
  return (
    <main className="max-w-[1100px] mx-auto">
      <Hero />
      <Portfolio />
      <Skills />
      <Certification />
      <About />
      <ContactButton />
    </main>
  );
}
