import Image from "next/image";
import Hero from "../../components/hero";
import Showcase from "../../components/showcase";
import About from "../../components/about";
import Legal from "../../components/legal";

export default function Home() {
  return (
    <main className="flex flex-col items-center sm:items-start">
      {/* <Hero /> */}
      <About />
      <Legal />
      <Showcase />
      
    </main>
  );
}
