import { SparklesText } from "@/components/magicui/sparkles-text";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="px-4 md:px-8 lg:px-16 mt-32 mb-24 overflow-hidden">
      {/* <Meteors className="text-blue-200 max-w-full" /> */}
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-2xl  text-gray-900 md:text-4xl lg:text-5xl font-bold leading-tight">
          <SparklesText sparklesCount={15}>
            We <span className="text-blue-600">Build</span> Stunning Websites,
            Apps, and{" "}
            <span className="text-blue-600"> Digital Experiences</span>
          </SparklesText>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600">
          Helping brands launch, grow, and thrive in the digital world.
        </p>
        <Button
          className="mt-8 rounded-full bg-blue-600 hover:bg-blue-500"
          size="lg">
          Get a free Consultation
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
