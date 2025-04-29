import { Meteors } from "@/components/magicui/meteors";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

export default function Hero() {
  return (
    <section className="px-4 md:px-8 lg:px-16 mt-32 mb-24 overflow-hidden">
      <Meteors className="text-blue-200" />
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-3xl text-gray-900 sm:text-4xl lg:text-5xl font-bold leading-tight">
          We Build Stunning Websites, Apps, and Digital Experiences
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
