import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="max-w-[1140px] mx-auto px-4">
      <Hero />
      <Services />
    </div>
  );
}
