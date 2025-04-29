import Hero from "./components/Hero";
import Industries from "./components/Industries";
import Partnership from "./components/partnership";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="max-w-[1140px] mx-auto px-4">
      <Hero />
      <Services />
      <Industries />
      <Partnership />
    </div>
  );
}
